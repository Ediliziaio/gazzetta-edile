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
      <Link href={href} className="card-hover group block py-3">
        <span className="kicker">{cat?.name}</span>
        <span className="card-title mt-1 block font-serif text-[1.08rem] font-semibold leading-snug text-charcoal">
          {article.title}
        </span>
      </Link>
    );
  }

  if (variant === "row") {
    return (
      <Link href={href} className="card-hover group grid grid-cols-[104px_1fr] gap-4 py-4">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-surface">
          <Image src={article.cover.src} alt={article.cover.alt} fill sizes="104px" className="card-img object-cover" />
        </div>
        <div>
          <span className="kicker">{cat?.name}</span>
          <span className="card-title mt-1 block font-serif text-[1.02rem] font-semibold leading-snug text-charcoal">
            {article.title}
          </span>
        </div>
      </Link>
    );
  }

  const isHero = variant === "hero";
  return (
    <Link href={href} className="card-hover group flex flex-col">
      <div className={`relative overflow-hidden rounded-[3px] bg-surface ${isHero ? "aspect-[16/10]" : "aspect-[3/2]"}`}>
        <Image
          src={article.cover.src}
          alt={article.cover.alt}
          fill
          priority={priority}
          sizes={isHero ? "(max-width:768px) 100vw, 820px" : "(max-width:768px) 100vw, 420px"}
          className="card-img object-cover"
        />
        {isHero && (
          <span className="absolute left-0 top-0 bg-bordeaux px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-white">
            {cat?.name}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 pt-4">
        {!isHero && <span className="kicker">{cat?.name}</span>}
        <h3
          className={`card-title font-serif font-semibold leading-[1.08] text-charcoal ${
            isHero ? "text-[2rem] sm:text-[2.6rem]" : "text-[1.28rem]"
          }`}
        >
          {article.title}
        </h3>
        <p className={`text-muted ${isHero ? "mt-1 text-[1.05rem] leading-relaxed" : "text-[0.95rem] leading-snug"}`}>
          {isHero ? article.abstract : article.metaDescription}
        </p>
      </div>
    </Link>
  );
}
