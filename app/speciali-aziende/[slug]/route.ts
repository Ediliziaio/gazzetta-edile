import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

export const dynamic = "force-static";
const directory = join(process.cwd(), "editorial/site/speciali-aziende");

export function generateStaticParams() {
  return readdirSync(directory, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => ({ slug: entry.name }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!generateStaticParams().some(entry => entry.slug === slug)) {
    return new Response("Articolo non trovato", { status: 404 });
  }
  const html = readFileSync(join(directory, slug, "index.html"), "utf8");
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
