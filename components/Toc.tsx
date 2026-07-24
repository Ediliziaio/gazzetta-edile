import type { TocItem } from "@/lib/content";

export function Toc({ items }: { items: TocItem[] }) {
  if (items.length < 3) return null;
  return (
    <nav
      aria-label="Indice dei contenuti"
      className="my-6 rounded-sm border border-line bg-surface p-4 sm:p-5"
    >
      <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-widest text-muted">
        In questo articolo
      </p>
      <ol className="space-y-1.5 text-sm">
        {items.map((it) => (
          <li key={it.id} className={it.level === 3 ? "pl-4" : ""}>
            <a href={`#${it.id}`} className="text-ink-soft underline-offset-2 hover:text-bordeaux hover:underline">
              {it.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
