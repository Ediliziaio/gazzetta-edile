"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CONSENT_EVENT,
  readConsent,
  writeConsent,
  type ConsentChoice,
} from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const REOPEN_EVENT = "ge:consent-reopen";

/**
 * Banner di consenso cookie. È una barra in basso (non un interstiziale che
 * copre il contenuto: Google penalizza gli interstiziali invasivi su mobile).
 * Compare solo se la misurazione è configurata e non c'è già una scelta salvata.
 */
export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    if (!readConsent()) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  if (!open) return null;

  const choose = (choice: ConsentChoice) => {
    writeConsent(choice);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Preferenze cookie"
      className="fixed inset-x-0 bottom-0 z-[60] border-t-2 border-bordeaux bg-paper shadow-[0_-8px_24px_rgba(0,0,0,0.12)]"
    >
      <div className="container-ge flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-sm leading-relaxed text-ink-soft">
          Usiamo cookie tecnici necessari al funzionamento del sito e, solo con il tuo consenso,
          cookie di statistica e marketing per capire come viene letta la testata. Puoi accettare
          o proseguire con i soli cookie necessari. Dettagli nella{" "}
          <Link href="/cookie-policy" className="text-bordeaux underline underline-offset-2">
            cookie policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2.5">
          <button onClick={() => choose("denied")} className="btn btn-ghost">
            Solo necessari
          </button>
          <button onClick={() => choose("granted")} className="btn btn-primary">
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}

/** Link per riaprire le preferenze (footer). */
export function CookiePreferencesLink({ className = "" }: { className?: string }) {
  if (!GA_ID) return null;
  return (
    <button
      onClick={() => window.dispatchEvent(new Event(REOPEN_EVENT))}
      className={className}
    >
      Preferenze cookie
    </button>
  );
}
