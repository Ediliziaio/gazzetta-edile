import { baseUrl, SITE } from "@/lib/site";
import { CATEGORIES } from "@/lib/categories";
import { getAllArticles, getPillars } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const pillars = getPillars();
  const articles = getAllArticles();

  const lines: string[] = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.tagline}. ${SITE.description}`,
    "",
    "## Rubriche",
    ...CATEGORIES.map((c) => `- [${c.name}](${baseUrl}/${c.slug}): ${c.description}`),
    "",
  ];

  if (pillars.length) {
    lines.push("## Guide pilastro", "");
    for (const p of pillars) {
      lines.push(`- [${p.title}](${baseUrl}/${p.category}/${p.slug}): ${p.metaDescription}`);
    }
    lines.push("");
  }

  lines.push("## Articoli", "");
  for (const a of articles) {
    lines.push(`- [${a.title}](${baseUrl}/${a.category}/${a.slug}): ${a.abstract}`);
  }
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
