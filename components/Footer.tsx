import Link from "next/link";
import Image from "next/image";
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
  return (
    <footer className="grain mt-20 bg-charcoal text-white/75">
      <div className="relative z-10">
        <div className="container-ge grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.png"
              alt="Gazzetta Edile"
              width={230}
              height={60}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              {SITE.tagline}. Guide autorevoli, dati e risposte pratiche su ristrutturazioni,
              serramenti, efficienza energetica, materiali, impianti, incentivi e normative.
            </p>
          </div>

          <nav aria-label="Rubriche">
            <h2 className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-bordeaux">Rubriche</h2>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="text-white/60 transition-colors hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Testata">
            <h2 className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-bordeaux">Testata</h2>
            <ul className="space-y-2.5 text-sm">
              {SERVICE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/10">
          <div className="container-ge flex flex-col gap-1 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 {SITE.name}. Testata verticale sull&apos;edilizia.</span>
            <span>Contenuti a scopo informativo. Verifica sempre normative e incentivi vigenti.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
