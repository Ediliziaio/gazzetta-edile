import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { CATEGORIES } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mappa del sito",
  description: "Tutte le rubriche e gli articoli di Gazzetta Edile in un colpo d'occhio.",
  alternates: { canonical: "/mappa" },
};

export default function Mappa() {
  return (
    <PageShell title="Mappa del sito" path="/mappa" intro="Tutte le rubriche e gli articoli pubblicati.">
      <div className="not-prose space-y-8">
        {CATEGORIES.map((c) => {
          const articles = getArticlesByCategory(c.slug);
          return (
            <section key={c.slug}>
              <h2 className="mb-2 border-b border-line pb-1 font-head text-lg font-bold text-charcoal">
                <Link href={`/${c.slug}`} className="hover:text-bordeaux">
                  {c.name}
                </Link>
              </h2>
              {articles.length ? (
                <ul className="space-y-1.5">
                  {articles.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/${a.category}/${a.slug}`} className="text-sm text-ink-soft hover:text-bordeaux">
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted">Presto nuovi articoli.</p>
              )}
            </section>
          );
        })}
      </div>
    </PageShell>
  );
}
