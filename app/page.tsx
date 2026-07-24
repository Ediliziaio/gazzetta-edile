import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { AdSlot } from "@/components/AdSlot";
import { CATEGORIES } from "@/lib/categories";
import { getAllArticles, getArticlesByCategory, getFeatured } from "@/lib/content";

export default function HomePage() {
  const all = getAllArticles();
  const featured = getFeatured(5);
  const hero = featured[0];
  const secondary = featured.slice(1, 4);
  const mostRead = all.slice(0, 5);
  const activeSilos = CATEGORIES.map((c) => ({
    category: c,
    articles: getArticlesByCategory(c.slug),
  })).filter((s) => s.articles.length > 0);

  return (
    <>
      {/* Leaderboard */}
      <div className="border-b border-line bg-surface/50 py-3">
        <AdSlot format="leaderboard" />
      </div>

      <div className="container-ge py-8">
        {/* Apertura */}
        {hero && (
          <section className="rise grid gap-8 pb-9 lg:grid-cols-[1.65fr_1fr]">
            <ArticleCard article={hero} variant="hero" priority />
            <div className="flex flex-col lg:border-l lg:border-line lg:pl-8">
              <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-bordeaux">
                In primo piano
              </p>
              <div className="flex flex-col divide-y divide-line">
                {secondary.map((a) => (
                  <ArticleCard key={a.slug} article={a} variant="row" />
                ))}
              </div>
            </div>
          </section>
        )}

        <hr className="rule-double" />

        <div className="mt-9 grid gap-12 lg:grid-cols-[1fr_330px]">
          <div className="min-w-0">
            {activeSilos.map(({ category, articles }, idx) => (
              <section key={category.slug} className={idx > 0 ? "mt-14" : ""}>
                <div className="mb-6 flex items-end justify-between gap-4 border-b-2 border-charcoal pb-3">
                  <Link href={`/${category.slug}`} className="section-flag hover:text-bordeaux">
                    {category.name}
                  </Link>
                  <Link
                    href={`/${category.slug}`}
                    className="whitespace-nowrap text-[0.72rem] font-bold uppercase tracking-[0.14em] text-bordeaux hover:text-bordeaux-dark"
                  >
                    Tutti gli articoli →
                  </Link>
                </div>
                <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
                  {articles.slice(0, 4).map((a) => (
                    <ArticleCard key={a.slug} article={a} variant="feature" />
                  ))}
                </div>
                {idx === 0 && <AdSlot format="in-feed" className="mt-10" />}
              </section>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-9">
            <div className="border border-line bg-paper">
              <h2 className="section-flag border-b border-line px-5 py-4 text-[1.25rem]">Più letti</h2>
              <ol className="px-5 pb-2">
                {mostRead.map((a, i) => (
                  <li key={a.slug} className="flex gap-4 border-b border-line py-4 last:border-0">
                    <span className="font-serif text-[2.2rem] font-semibold leading-none text-bordeaux/25">
                      {i + 1}
                    </span>
                    <Link
                      href={`/${a.category}/${a.slug}`}
                      className="font-serif text-[1rem] font-semibold leading-snug text-charcoal transition-colors hover:text-bordeaux"
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>

            <AdSlot format="rectangle" />

            <div className="grain bg-charcoal p-6 text-white">
              <div className="relative z-10">
                <h2 className="font-serif text-[1.35rem] font-semibold">Le rubriche</h2>
                <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm">
                  {CATEGORIES.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/${c.slug}`} className="flex items-center gap-2.5 text-white/70 hover:text-white">
                        <span className="h-3 w-1 bg-bordeaux" />
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
