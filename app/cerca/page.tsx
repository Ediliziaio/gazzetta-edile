import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { getAllArticles } from "@/lib/content";
import { getCategory } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Cerca",
  description: "Cerca guide e articoli su Gazzetta Edile.",
  alternates: { canonical: "/cerca" },
  robots: { index: false, follow: true },
};

export default async function Cerca({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const results = query
    ? getAllArticles().filter((a) => {
        const hay = [a.title, a.abstract, a.keywordPrimary, ...a.keywordsSecondary]
          .join(" ")
          .toLowerCase();
        return hay.includes(query);
      })
    : [];

  return (
    <PageShell title="Cerca" path="/cerca" intro="Trova guide e articoli per parola chiave.">
      <form action="/cerca" method="get" className="not-prose mb-6 flex gap-2">
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="Es. fotovoltaico, superbonus, infissi…"
          className="flex-1 rounded-sm border border-line bg-background px-3 py-2.5 text-sm"
          aria-label="Termine di ricerca"
        />
        <button className="rounded-sm bg-charcoal px-4 py-2.5 text-sm font-semibold text-white hover:bg-bordeaux">
          Cerca
        </button>
      </form>

      {query && (
        <p className="not-prose mb-4 text-sm text-muted">
          {results.length} risultati per “{q}”.
        </p>
      )}

      <ul className="not-prose space-y-4">
        {results.map((a) => {
          const cat = getCategory(a.category);
          return (
            <li key={a.slug} className="border-b border-line pb-4">
              <span className="kicker">{cat?.name}</span>
              <Link
                href={`/${a.category}/${a.slug}`}
                className="mt-1 block font-head text-lg font-semibold text-charcoal hover:text-bordeaux"
              >
                {a.title}
              </Link>
              <p className="mt-1 text-sm text-muted">{a.abstract}</p>
            </li>
          );
        })}
      </ul>
    </PageShell>
  );
}
