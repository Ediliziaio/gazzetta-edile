"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CATEGORIES } from "@/lib/categories";

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [oggi, setOggi] = useState("");

  // Data reale del client (il sito è statico: calcolata dopo il mount per evitare
  // una data "congelata" al momento del build).
  useEffect(() => {
    setOggi(
      new Date().toLocaleDateString("it-IT", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  return (
    <header className="relative z-50">
      {/* Barra di servizio */}
      <div className="bg-charcoal text-white">
        <div className="container-ge flex h-9 items-center justify-between text-[0.72rem]">
          <span className="hidden min-w-[190px] capitalize tracking-wide text-white/55 sm:block">
            {oggi}
          </span>
          <span className="font-serif text-[0.8rem] italic text-white/70">
            La testata verticale dell&apos;edilizia italiana
          </span>
          <div className="flex items-center gap-4">
            <Link href="/cerca" className="flex items-center gap-1.5 text-white/60 transition-colors hover:text-white">
              <SearchIcon className="h-3.5 w-3.5" /> Cerca
            </Link>
            <Link href="/contatti" className="hidden text-white/60 transition-colors hover:text-white sm:block">
              Newsletter
            </Link>
          </div>
        </div>
      </div>

      {/* Masthead — desktop */}
      <div className="hidden bg-paper md:block">
        <div className="container-ge grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-6">
          <div className="flex items-center gap-3 text-[0.72rem] uppercase tracking-widest text-muted">
            <span className="h-px w-8 bg-line-strong" />
            Edizione digitale
          </div>
          <Link href="/" aria-label="Gazzetta Edile — home" className="justify-self-center">
            <Image
              src="/logo.png"
              alt="Gazzetta Edile"
              width={260}
              height={68}
              priority
              className="h-[52px] w-auto lg:h-[62px]"
            />
          </Link>
          <div className="flex items-center justify-end gap-2.5">
            <Link href="/cerca" className="btn btn-ghost" aria-label="Cerca">
              <SearchIcon /> Cerca
            </Link>
            <Link href="/contatti" className="btn btn-primary">
              Contattaci
            </Link>
          </div>
        </div>
      </div>

      {/* Barra rubriche sticky — desktop */}
      <nav
        aria-label="Rubriche"
        className="sticky top-0 z-50 hidden border-y-2 border-charcoal bg-paper/95 backdrop-blur md:block"
      >
        <div className="container-ge flex items-center justify-center gap-7 py-3">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="nav-link text-[0.8rem] uppercase text-charcoal"
            >
              {c.nav}
            </Link>
          ))}
        </div>
      </nav>

      {/* Barra mobile sticky */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-line bg-paper px-4 py-3 md:hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri il menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
        >
          <span className={`h-0.5 w-6 bg-charcoal transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-charcoal transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-charcoal transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
        <Link href="/" aria-label="Gazzetta Edile — home">
          <Image src="/logo.png" alt="Gazzetta Edile" width={170} height={44} priority className="h-9 w-auto" />
        </Link>
        <Link href="/cerca" aria-label="Cerca" className="flex h-9 w-9 items-center justify-center text-charcoal">
          <SearchIcon />
        </Link>
      </div>

      {/* Drawer mobile */}
      {open && (
        <>
          <div
            className="fixed inset-0 top-[105px] z-40 bg-black/30 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <nav
            aria-label="Menu"
            className="fixed inset-x-0 top-[105px] z-50 max-h-[calc(100vh-105px)] overflow-y-auto border-b border-line bg-paper md:hidden"
          >
            <div className="container-ge py-2">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 border-b border-line py-3.5 font-serif text-lg text-charcoal"
                >
                  <span className="h-4 w-1 bg-bordeaux" />
                  {c.nav}
                </Link>
              ))}
              <div className="flex gap-2.5 py-4">
                <Link href="/contatti" onClick={() => setOpen(false)} className="btn btn-primary flex-1 justify-center">
                  Contattaci
                </Link>
                <Link href="/chi-siamo" onClick={() => setOpen(false)} className="btn btn-ghost flex-1 justify-center">
                  Chi siamo
                </Link>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
