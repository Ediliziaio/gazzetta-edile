import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export default function NotFound() {
  return (
    <div className="container-ge py-20 text-center">
      <p className="kicker">Errore 404</p>
      <h1 className="mt-2 font-head text-4xl font-bold text-charcoal">Pagina non trovata</h1>
      <p className="mx-auto mt-3 max-w-md text-muted">
        La pagina che cerchi non esiste o è stata spostata. Prova a ripartire dalle rubriche.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            href={`/${c.slug}`}
            className="rounded-sm border border-line px-3 py-1.5 text-sm text-ink-soft hover:border-bordeaux hover:text-bordeaux"
          >
            {c.name}
          </Link>
        ))}
      </div>
      <Link href="/" className="mt-8 inline-block rounded-sm bg-charcoal px-5 py-2.5 text-sm font-semibold text-white hover:bg-bordeaux">
        Torna alla home
      </Link>
    </div>
  );
}
