import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import { SITE } from "@/lib/site";

const SERVICE_LINKS = [
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/redazione", label: "Redazione" },
  { href: "/contatti", label: "Contatti" },
  { href: "/pubblicita", label: "Pubblicità" },
  { href: "/mappa", label: "Mappa del sito" },
  { href: "/privacy", label: "Privacy" },
  { href: "/cookie-policy", label: "Cookie policy" },
];

export function Footer() {
  const year = "2026";
  return (
    <footer className="mt-16 border-t border-line bg-charcoal text-white/80">
      <div className="container-ge grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="mb-3 flex items-baseline gap-2">
            <span className="font-head text-xl font-bold text-white">Gazzetta</span>
            <span className="font-head text-xl font-bold text-bordeaux">Edile</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/70">{SITE.tagline}. {SITE.description.slice(0, 120)}…</p>
        </div>

        <nav aria-label="Rubriche">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Rubriche</h2>
          <ul className="space-y-2 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="text-white/70 transition-colors hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Testata">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Testata</h2>
          <ul className="space-y-2 text-sm">
            {SERVICE_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="container-ge flex flex-col gap-1 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {SITE.name}. Testata verticale sull'edilizia.</span>
          <span>Contenuti a scopo informativo. Verifica sempre normative e incentivi vigenti.</span>
        </div>
      </div>
    </footer>
  );
}
