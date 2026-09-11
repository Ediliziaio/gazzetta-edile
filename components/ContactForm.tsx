"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { inviaLead } from "@/lib/eicLead";
import { EIC_FORM_ID } from "@/lib/site";

const CAMPO = "rounded-sm border border-line bg-background px-3 py-2.5 text-sm";

/**
 * Modulo di contatto della pagina Contatti.
 * L'invio va al CRM di Edilizia in Cloud, che crea il contatto con la campagna
 * di provenienza (UTM, gclid, fbclid). La conferma compare solo quando il CRM
 * ha accettato; se l'invio fallisce il form resta com'è, con i dati già
 * scritti, e si può riprovare.
 */
export function ContactForm() {
  const [inviato, setInviato] = useState(false);
  const [invio, setInvio] = useState(false);
  const [errore, setErrore] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (invio) return;
    const fd = new FormData(e.currentTarget);
    const campo = (k: string) => String(fd.get(k) ?? "").trim();
    setInvio(true);
    setErrore(false);
    try {
      await inviaLead(EIC_FORM_ID, {
        nome: campo("nome"),
        email: campo("email"),
        messaggio: campo("messaggio"),
        tipo: "contatto",
      });
      setInviato(true);
    } catch {
      setErrore(true);
    } finally {
      setInvio(false);
    }
  }

  if (inviato) {
    return (
      <div role="status" className="rounded-sm border-l-4 border-bordeaux bg-bordeaux-tint/60 p-4">
        <p className="font-head text-lg font-bold text-charcoal">Messaggio inviato</p>
        <p className="mt-1 text-sm text-ink-soft">
          Grazie per averci scritto: la redazione ti risponderà all&apos;indirizzo che hai indicato.
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-4" aria-label="Modulo di contatto" aria-busy={invio} onSubmit={onSubmit}>
      <input
        type="text"
        name="nome"
        required
        autoComplete="name"
        placeholder="Nome e cognome"
        className={CAMPO}
        aria-label="Nome e cognome"
      />
      <input
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="Email"
        className={CAMPO}
        aria-label="Email"
      />
      <textarea
        name="messaggio"
        required
        placeholder="Messaggio"
        rows={4}
        className={CAMPO}
        aria-label="Messaggio"
      />
      {errore && (
        <p role="alert" className="text-sm font-semibold text-bordeaux">
          Invio non riuscito. Riprova tra poco.
        </p>
      )}
      <button
        type="submit"
        disabled={invio}
        className="justify-self-start rounded-sm bg-charcoal px-5 py-2.5 text-sm font-semibold text-white hover:bg-bordeaux disabled:cursor-not-allowed disabled:opacity-60"
      >
        {invio ? "Invio in corso…" : "Invia"}
      </button>
      <p className="text-xs text-muted">
        Usiamo i dati solo per rispondere alla tua richiesta. Leggi l&apos;
        <Link href="/privacy" className="underline underline-offset-2 hover:text-bordeaux">
          informativa privacy
        </Link>
        .
      </p>
    </form>
  );
}
