import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/site";
import { CATEGORIES } from "@/lib/categories";
import { getAllArticles } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "",
    "/chi-siamo",
    "/redazione",
    "/contatti",
    "/pubblicita",
    "/mappa",
    "/privacy",
    "/cookie-policy",
  ].map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.5,
  }));

  const categoryPages = CATEGORIES.map((c) => ({
    url: `${baseUrl}/${c.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const articlePages = getAllArticles().map((a) => ({
    url: `${baseUrl}/${a.category}/${a.slug}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: "monthly" as const,
    priority: a.pillar ? 0.9 : 0.7,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
