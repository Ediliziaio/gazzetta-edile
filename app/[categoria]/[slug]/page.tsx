import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getArticle,
  getArticleSlugs,
  getRelated,
  buildToc,
  readingMinutes,
} from "@/lib/content";
import { getCategory } from "@/lib/categories";
import { getAuthor } from "@/lib/authors";
import { SITE, absoluteUrl } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnswerBox } from "@/components/AnswerBox";
import { Toc } from "@/components/Toc";
import { ArticleBody } from "@/components/ArticleBody";
import { Faq } from "@/components/Faq";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ShareButtons } from "@/components/ShareButtons";
import { AdSlot } from "@/components/AdSlot";
import { JsonLd } from "@/components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticleSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string; slug: string }>;
}): Promise<Metadata> {
  const { categoria, slug } = await params;
  const a = getArticle(categoria, slug);
  if (!a) return {};
  const path = `/${a.category}/${a.slug}`;
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    keywords: [a.keywordPrimary, ...a.keywordsSecondary],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: a.metaTitle,
      description: a.metaDescription,
      url: path,
      images: [{ url: a.cover.src, alt: a.cover.alt }],
      publishedTime: a.publishedAt,
      modifiedTime: a.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: a.metaTitle,
      description: a.metaDescription,
      images: [a.cover.src],
    },
  };
}

function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ categoria: string; slug: string }>;
}) {
  const { categoria, slug } = await params;
  const a = getArticle(categoria, slug);
  if (!a) notFound();

  const cat = getCategory(a.category)!;
  const author = getAuthor(a.author);
  const toc = buildToc(a);
  const related = getRelated(a, 3);
  const path = `/${a.category}/${a.slug}`;
  const minutes = readingMinutes(a);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": a.schemaType,
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
    headline: a.title,
    description: a.metaDescription,
    image: [absoluteUrl(a.cover.src)],
    datePublished: a.publishedAt,
    dateModified: a.updatedAt,
    inLanguage: "it-IT",
    author: {
      "@type": "Person",
      "@id": absoluteUrl(`/autori/${author.id}#person`),
      name: author.name,
      description: author.role,
      url: absoluteUrl(`/autori/${author.id}`),
      ...(author.sameAs.length ? { sameAs: author.sameAs } : {}),
    },
    isAccessibleForFree: true,
    publisher: { "@id": absoluteUrl("/#organization") },
    articleSection: cat.name,
    keywords: [a.keywordPrimary, ...a.keywordsSecondary].join(", "),
  };

  return (
    <article className="container-ge py-8">
      <JsonLd data={articleSchema} />

      <div className="mx-auto grid max-w-[1140px] gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="mx-auto w-full max-w-[720px]">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: cat.name, href: `/${cat.slug}` },
              { name: a.title, href: path },
            ]}
          />

          <header className="mt-4">
            <p className="kicker">{cat.name}</p>
            <h1 className="mt-2 font-head text-3xl font-bold leading-tight text-charcoal sm:text-[2.6rem]">
              {a.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
              <Link
                href={`/autori/${author.id}`}
                className="font-medium text-ink-soft underline-offset-2 hover:text-bordeaux hover:underline"
                rel="author"
              >
                {author.name}
              </Link>
              <span aria-hidden>·</span>
              <span>{author.role}</span>
              <span aria-hidden>·</span>
              <time dateTime={a.publishedAt}>{fmtDate(a.publishedAt)}</time>
              {a.updatedAt !== a.publishedAt && (
                <span className="italic">agg. {fmtDate(a.updatedAt)}</span>
              )}
              <span aria-hidden>·</span>
              <span>{minutes} min di lettura</span>
            </div>
          </header>

          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-sm bg-surface">
            <Image
              src={a.cover.src}
              alt={a.cover.alt}
              fill
              priority
              sizes="(max-width:768px) 100vw, 720px"
              className="object-cover"
            />
          </div>

          <AnswerBox text={a.abstract} />
          <Toc items={toc} />
          <ArticleBody blocks={a.body} />

          <div className="mt-8 border-t border-line pt-5">
            <ShareButtons path={path} title={a.title} />
          </div>

          {/* Box autore — E-E-A-T */}
          <div className="mt-8 flex gap-4 rounded-sm border border-line bg-surface p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bordeaux text-lg font-bold text-white">
              {author.name.charAt(0)}
            </div>
            <div>
              <Link
                href={`/autori/${author.id}`}
                className="font-head text-lg font-bold text-charcoal hover:text-bordeaux"
                rel="author"
              >
                {author.name}
              </Link>
              <p className="text-xs uppercase tracking-wide text-bordeaux">{author.role}</p>
              <p className="mt-1 text-sm text-muted">{author.bio}</p>
              <Link
                href={`/autori/${author.id}`}
                className="mt-2 inline-block text-xs font-semibold uppercase tracking-widest text-bordeaux"
              >
                Tutti gli articoli →
              </Link>
            </div>
          </div>

          <Faq items={a.faq} />
          <RelatedArticles articles={related} />
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-32 space-y-6">
            <AdSlot format="skyscraper" />
            <p className="text-xs text-muted">
              {SITE.name} — contenuti informativi. Verifica sempre normative e incentivi vigenti.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}
