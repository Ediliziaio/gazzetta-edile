"use client";

import Link from "next/link";
import { useState } from "react";
import { CATEGORIES } from "@/lib/categories";
import { SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur">
      {/* Leaderboard ad slot (riservato, fuori dal percorso LCP) */}
      <div className="hidden justify-center border-b border-line bg-surface py-2 lg:flex">
        <div
          className="flex h-[90px] w-[728px] items-center justify-center text-xs tracking-widest text-muted"
          style={{ background: "repeating-linear-gradient(45deg,#f2efea,#f2efea 10px,#efece7 10px,#efece7 20px)" }}
          aria-hidden
        >
          SPAZIO PUBBLICITARIO · 728×90
        </div>
      </div>

      <div className="container-ge flex items-center justify-between gap-4 py-3">
        <button
          className="flex items-center justify-center rounded p-1.5 lg:hidden"
          aria-label="Apri il menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-charcoal shadow-[0_6px_0_var(--charcoal),0_-6px_0_var(--charcoal)]" />
        </button>

        <Link href="/" className="flex items-baseline gap-2" aria-label={`${SITE.name} — home`}>
          <span className="font-head text-2xl font-bold tracking-tight text-charcoal sm:text-[1.7rem]">
            Gazzetta
          </span>
          <span className="font-head text-2xl font-bold tracking-tight text-bordeaux sm:text-[1.7rem]">
            Edile
          </span>
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/chi-siamo" className="link-hover text-sm text-muted">
            Chi siamo
          </Link>
          <Link
            href="/contatti"
            className="rounded-sm bg-charcoal px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-bordeaux"
          >
            Contatti
          </Link>
        </div>

        <Link
          href="/contatti"
          className="rounded-sm bg-charcoal px-3 py-1.5 text-sm font-semibold text-white lg:hidden"
        >
          Contatti
        </Link>
      </div>

      {/* Barra rubriche — desktop */}
      <nav className="hidden border-t border-line bg-charcoal lg:block" aria-label="Rubriche">
        <div className="container-ge flex flex-wrap items-center gap-x-5 gap-y-1 py-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="text-[0.82rem] font-medium uppercase tracking-wide text-white/85 transition-colors hover:text-white"
            >
              {c.nav}
            </Link>
          ))}
        </div>
      </nav>

      {/* Drawer mobile */}
      {open && (
        <nav className="border-t border-line bg-background lg:hidden" aria-label="Menu">
          <div className="container-ge flex flex-col py-2">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                onClick={() => setOpen(false)}
                className="border-b border-line py-2.5 text-sm font-medium text-foreground"
              >
                {c.nav}
              </Link>
            ))}
            <Link href="/chi-siamo" onClick={() => setOpen(false)} className="py-2.5 text-sm text-muted">
              Chi siamo
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
