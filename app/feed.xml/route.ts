import { baseUrl, SITE } from "@/lib/site";
import { getAllArticles } from "@/lib/content";
import { getAuthor } from "@/lib/authors";

export const dynamic = "force-static";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Feed RSS: canale di scoperta per aggregatori, lettori e crawler (utile anche per GEO).
export function GET() {
  const articles = getAllArticles();
  const lastBuild = articles.length
    ? new Date(articles[0].updatedAt).toUTCString()
    : new Date(0).toUTCString();

  const items = articles
    .map((a) => {
      const url = `${baseUrl}/${a.category}/${a.slug}`;
      return `    <item>
      <title>${esc(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(a.abstract)}</description>
      <dc:creator>${esc(getAuthor(a.author).name)}</dc:creator>
      <pubDate>${new Date(a.publishedAt).toUTCString()}</pubDate>
      <enclosure url="${baseUrl}${a.cover.src}" type="image/png" />
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE.name)}</title>
    <link>${baseUrl}</link>
    <description>${esc(SITE.description)}</description>
    <language>it-IT</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "content-type": "application/rss+xml; charset=utf-8" },
  });
}
