import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/content";
import { getCategory } from "@/lib/categories";

type Variant = "hero" | "feature" | "row" | "compact";

export function ArticleCard({
  article,
  variant = "feature",
  priority = false,
}: {
  article: Article;
  variant?: Variant;
  priority?: boolean;
}) {
  const cat = getCategory(article.category);
  const href = `/${article.category}/${article.slug}`;

  if (variant === "compact") {
    return (
      <Link href={href} className="group flex flex-col gap-1 py-3">
        <span className="kicker">{cat?.name}</span>
        <span className="font-head text-[1.05rem] font-semibold leading-snug text-charcoal group-hover:text-bordeaux">
          {article.title}
        </span>
      </Link>
    );
  }

  if (variant === "row") {
    return (
      <Link href={href} className="group grid grid-cols-[96px_1fr] gap-3 py-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-surface">
          <Image src={article.cover.src} alt={article.cover.alt} fill sizes="96px" className="object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="kicker">{cat?.name}</span>
          <span className="font-head text-[1rem] font-semibold leading-snug text-charcoal group-hover:text-bordeaux">
            {article.title}
          </span>
        </div>
      </Link>
    );
  }

  const isHero = variant === "hero";
  return (
    <Link href={href} className="group flex flex-col gap-3">
      <div className={`relative overflow-hidden rounded-sm bg-surface ${isHero ? "aspect-[16/9]" : "aspect-[3/2]"}`}>
        <Image
          src={article.cover.src}
          alt={article.cover.alt}
          fill
          priority={priority}
          sizes={isHero ? "(max-width:768px) 100vw, 800px" : "(max-width:768px) 100vw, 400px"}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="kicker">{cat?.name}</span>
        <h3
          className={`font-head font-bold leading-tight text-charcoal group-hover:text-bordeaux ${
            isHero ? "text-2xl sm:text-[2rem]" : "text-lg"
          }`}
        >
          {article.title}
        </h3>
        <p className={`text-muted ${isHero ? "text-base" : "text-sm line-clamp-2"}`}>{article.abstract}</p>
      </div>
    </Link>
  );
}
