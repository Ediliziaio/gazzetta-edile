// Content model + data layer. Articles are typed TS modules (block-based body).
// This layer is the ONLY place templates read content from — swap the source
// (e.g. Supabase) later without touching components.

import { articles as allArticles } from "@/content/articles";
import { CATEGORIES } from "@/lib/categories";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; id: string; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; title?: string; text: string }
  | { type: "quote"; text: string; cite?: string };

export interface Faq {
  q: string;
  a: string;
}

export interface Article {
  slug: string;
  category: string; // category slug
  title: string; // H1
  metaTitle: string; // <= 60
  metaDescription: string; // <= 155
  abstract: string; // answer box, 40-60 words
  keywordPrimary: string;
  keywordsSecondary: string[];
  author: string; // author id
  publishedAt: string; // ISO date
  updatedAt: string; // ISO date
  cover: { src: string; alt: string };
  faq: Faq[];
  related: string[]; // slugs
  pillar: boolean;
  schemaType: "Article" | "NewsArticle" | "HowTo";
  body: Block[];
}

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

// ---- Dev-time integrity checks (fail loud in the build if content is broken) ----
function validate(a: Article): Article {
  const problems: string[] = [];
  if (!a.slug) problems.push("slug mancante");
  if (!CATEGORIES.some((c) => c.slug === a.category))
    problems.push(`categoria sconosciuta: ${a.category}`);
  if (a.metaTitle.length > 65)
    problems.push(`metaTitle troppo lungo (${a.metaTitle.length})`);
  if (a.metaDescription.length > 165)
    problems.push(`metaDescription troppo lunga (${a.metaDescription.length})`);
  if (problems.length) {
    throw new Error(`[content] Articolo "${a.slug}": ${problems.join("; ")}`);
  }
  return a;
}

const ARTICLES: Article[] = allArticles
  .map(validate)
  .sort((x, y) => (x.publishedAt < y.publishedAt ? 1 : -1));

// ---- Data-layer API ----
export function getAllArticles(): Article[] {
  return ARTICLES;
}

export function getArticleSlugs(): { categoria: string; slug: string }[] {
  return ARTICLES.map((a) => ({ categoria: a.category, slug: a.slug }));
}

export function getArticle(category: string, slug: string): Article | undefined {
  return ARTICLES.find((a) => a.category === category && a.slug === slug);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return ARTICLES.filter((a) => a.category === category);
}

export function getPillars(): Article[] {
  return ARTICLES.filter((a) => a.pillar);
}

export function getFeatured(n = 5): Article[] {
  // Pillars first, then most recent.
  const pillars = getPillars();
  const rest = ARTICLES.filter((a) => !a.pillar);
  return [...pillars, ...rest].slice(0, n);
}

export function getRelated(article: Article, n = 3): Article[] {
  const explicit = article.related
    .map((s) => getArticleBySlug(s))
    .filter((a): a is Article => Boolean(a));
  if (explicit.length >= n) return explicit.slice(0, n);
  const sameSilo = getArticlesByCategory(article.category).filter(
    (a) => a.slug !== article.slug && !article.related.includes(a.slug)
  );
  return [...explicit, ...sameSilo].slice(0, n);
}

export function buildToc(article: Article): TocItem[] {
  return article.body
    .filter((b): b is Extract<Block, { type: "h2" | "h3" }> =>
      b.type === "h2" || b.type === "h3"
    )
    .map((b) => ({ id: b.id, text: b.text, level: b.type === "h2" ? 2 : 3 }));
}

export function readingMinutes(article: Article): number {
  const words = article.body
    .map((b) => {
      if ("text" in b) return b.text;
      if ("items" in b) return b.items.join(" ");
      if (b.type === "table") return b.rows.flat().join(" ");
      return "";
    })
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function getArticlesByAuthor(authorId: string): Article[] {
  return ARTICLES.filter((a) => a.author === authorId);
}
