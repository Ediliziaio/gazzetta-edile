import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/site";
import { CATEGORIES } from "@/lib/categories";
import { getAllArticles } from "@/lib/content";
import { AUTHORS } from "@/lib/authors";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const newest = (dates: string[]) => {
    const timestamps = dates.map(date => Date.parse(date)).filter(Number.isFinite);
    return timestamps.length ? new Date(Math.max(...timestamps)) : undefined;
  };
  const latestArticle = newest(articles.map(article => article.updatedAt));

  const staticPages = [
    "",
    "/chi-siamo",
    "/redazione",
    "/contatti",
    "/pubblicita",
    "/mappa",
  ].map((p) => ({
    url: `${baseUrl}${p}`,
    // Fixed institutional pages have no declared review date: omit lastmod
    // rather than presenting every deploy as an editorial update.
    lastModified: p === "" || p === "/mappa" ? latestArticle : undefined,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.5,
  }));

  const categoryPages = CATEGORIES.map((c) => ({
    url: `${baseUrl}/${c.slug}`,
    lastModified: newest(articles.filter(article => article.category === c.slug).map(article => article.updatedAt)),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  // Pagine autore: rafforzano l'E-E-A-T e vanno indicizzate.
  const authorPages = Object.keys(AUTHORS).map((id) => ({
    url: `${baseUrl}/autori/${id}`,
    lastModified: newest(articles.filter(article => article.author === id).map(article => article.updatedAt)),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // Articoli con immagine (image sitemap: aiuta Google Images e la scoperta).
  const articlePages = articles.map((a) => ({
    url: `${baseUrl}/${a.category}/${a.slug}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: "monthly" as const,
    priority: a.pillar ? 0.9 : 0.7,
    images: [`${baseUrl}${a.cover.src}`],
  }));

  return [...staticPages, ...categoryPages, ...authorPages, ...articlePages];
}
