import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AUTHORS, getAuthor } from "@/lib/authors";
import { getArticlesByAuthor } from "@/lib/content";
import { absoluteUrl, SITE } from "@/lib/site";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleCard } from "@/components/ArticleCard";
import { JsonLd } from "@/components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(AUTHORS).map((autore) => ({ autore }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ autore: string }>;
}): Promise<Metadata> {
  const { autore } = await params;
  const a = AUTHORS[autore];
  if (!a) return {};
  return {
    title: `${a.name} — ${a.role}`,
    description: `${a.name}, ${a.role}. Articoli e guide firmate per ${SITE.name}.`,
    alternates: { canonical: `/autori/${a.id}` },
    openGraph: {
      type: "profile",
      title: `${a.name} — ${a.role}`,
      description: a.bio,
      url: `/autori/${a.id}`,
    },
  };
}

export default async function AutorePage({
  params,
}: {
  params: Promise<{ autore: string }>;
}) {
  const { autore } = await params;
  if (!AUTHORS[autore]) notFound();
  const author = getAuthor(autore);
  const articles = getArticlesByAuthor(author.id);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl(`/autori/${author.id}#person`),
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    url: absoluteUrl(`/autori/${author.id}`),
    worksFor: { "@id": absoluteUrl("/#organization") },
    ...(author.sameAs.length ? { sameAs: author.sameAs } : {}),
  };

  return (
    <div className="container-ge py-8">
      <JsonLd data={personSchema} />
      <div className="mx-auto max-w-[900px]">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Redazione", href: "/redazione" },
            { name: author.name, href: `/autori/${author.id}` },
          ]}
        />

        <header className="mt-4 flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-center">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-bordeaux text-2xl font-bold text-white">
            {author.name.charAt(0)}
          </div>
          <div>
            <h1 className="font-head text-3xl font-bold text-charcoal">{author.name}</h1>
            <p className="mt-1 text-xs uppercase tracking-wide text-bordeaux">{author.role}</p>
            <p className="mt-2 max-w-2xl text-muted">{author.bio}</p>
          </div>
        </header>

        <section className="mt-8">
          <h2 className="section-flag mb-5 text-[1.3rem]">
            Articoli di {author.name.split(" ")[0]}
          </h2>
          {articles.length ? (
            <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
              {articles.map((a) => (
                <ArticleCard key={a.slug} article={a} variant="feature" />
              ))}
            </div>
          ) : (
            <p className="text-muted">Nessun articolo pubblicato al momento.</p>
          )}
        </section>

        <p className="mt-10 text-sm text-muted">
          Torna alla{" "}
          <Link href="/redazione" className="text-bordeaux underline underline-offset-2">
            redazione di {SITE.name}
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
