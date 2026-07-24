import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORIES, CATEGORY_SLUGS, getCategory } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/content";
import { ArticleCard } from "@/components/ArticleCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AdSlot } from "@/components/AdSlot";

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORY_SLUGS.map((categoria) => ({ categoria }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const cat = getCategory(categoria);
  if (!cat) return {};
  return {
    title: cat.title,
    description: cat.description,
    alternates: { canonical: `/${cat.slug}` },
    openGraph: { title: cat.title, description: cat.description, url: `/${cat.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const cat = getCategory(categoria);
  if (!cat) notFound();

  const articles = getArticlesByCategory(cat.slug);
  const [lead, ...rest] = articles;

  return (
    <div className="container-ge py-8">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: cat.name, href: `/${cat.slug}` }]} />

      <header className="mt-4 border-b border-line pb-6">
        <p className="kicker">Rubrica</p>
        <h1 className="mt-1 font-head text-3xl font-bold text-charcoal sm:text-4xl">{cat.name}</h1>
        <p className="mt-3 max-w-2xl text-muted">{cat.description}</p>
      </header>

      {articles.length === 0 ? (
        <p className="mt-10 text-muted">Presto nuovi articoli in questa rubrica.</p>
      ) : (
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0">
            {lead && (
              <div className="mb-8 border-b border-line pb-8">
                <ArticleCard article={lead} variant="hero" priority />
              </div>
            )}
            <div className="grid gap-6 sm:grid-cols-2">
              {rest.map((a) => (
                <ArticleCard key={a.slug} article={a} variant="feature" />
              ))}
            </div>
          </div>
          <aside className="space-y-8">
            <AdSlot format="rectangle" />
            <div className="rounded-sm border border-line bg-charcoal p-5 text-white">
              <h2 className="font-head text-lg font-bold">Altre rubriche</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {CATEGORIES.filter((c) => c.slug !== cat.slug).map((c) => (
                  <li key={c.slug}>
                    <a href={`/${c.slug}`} className="text-white/80 hover:text-white">
                      {c.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
