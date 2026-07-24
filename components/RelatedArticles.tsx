import type { Article } from "@/lib/content";
import { ArticleCard } from "./ArticleCard";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (!articles.length) return null;
  return (
    <section className="mt-14" aria-labelledby="related-title">
      <h2 id="related-title" className="mb-5 border-b-2 border-bordeaux pb-2 font-head text-xl font-bold text-charcoal">
        Articoli correlati
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} variant="feature" />
        ))}
      </div>
    </section>
  );
}
