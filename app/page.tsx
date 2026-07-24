import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { AdSlot } from "@/components/AdSlot";
import { CATEGORIES } from "@/lib/categories";
import {
  getAllArticles,
  getArticlesByCategory,
  getFeatured,
} from "@/lib/content";

export default function HomePage() {
  const all = getAllArticles();
  const featured = getFeatured(5);
  const hero = featured[0];
  const secondary = featured.slice(1, 5);
  const mostRead = all.slice(0, 5);
  const activeSilos = CATEGORIES.map((c) => ({
    category: c,
    articles: getArticlesByCategory(c.slug),
  })).filter((s) => s.articles.length > 0);

  return (
    <div className="container-ge py-8">
      {/* Apertura */}
      {hero && (
        <section className="grid gap-8 border-b border-line pb-8 lg:grid-cols-[1.6fr_1fr]">
          <ArticleCard article={hero} variant="hero" priority />
          <div className="flex flex-col divide-y divide-line">
            {secondary.map((a) => (
              <ArticleCard key={a.slug} article={a} variant="row" />
            ))}
          </div>
        </section>
      )}

      {/* Native in-feed */}
      <AdSlot format="in-feed" className="my-8" />

      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0">
          {activeSilos.map(({ category, articles }) => (
            <section key={category.slug} className="mb-12">
              <div className="mb-5 flex items-center justify-between border-b-2 border-bordeaux pb-2">
                <h2 className="font-head text-xl font-bold text-charcoal">{category.name}</h2>
                <Link href={`/${category.slug}`} className="text-xs font-semibold uppercase tracking-widest text-bordeaux">
                  Tutti →
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {articles.slice(0, 4).map((a) => (
                  <ArticleCard key={a.slug} article={a} variant="feature" priority={false} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="rounded-sm border border-line bg-surface p-5">
            <h2 className="mb-3 font-head text-lg font-bold text-charcoal">Più letti</h2>
            <ol className="divide-y divide-line">
              {mostRead.map((a, i) => (
                <li key={a.slug} className="flex gap-3 py-3">
                  <span className="font-head text-2xl font-bold leading-none text-bordeaux/40">{i + 1}</span>
                  <Link
                    href={`/${a.category}/${a.slug}`}
                    className="font-head text-[0.98rem] font-semibold leading-snug text-charcoal hover:text-bordeaux"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
          <AdSlot format="rectangle" />
          <div className="rounded-sm border border-line bg-charcoal p-5 text-white">
            <h2 className="font-head text-lg font-bold">Rubriche</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="text-white/80 hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
