import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti",
  description: `Scrivi alla redazione di ${SITE.name}: proposte editoriali, segnalazioni, collaborazioni e informazioni.`,
  alternates: { canonical: "/contatti" },
};

export default function Contatti() {
  return (
    <PageShell title="Contatti" path="/contatti" intro="Scrivici per proposte, segnalazioni o collaborazioni.">
      <p>
        Per la redazione, proposte di articoli, segnalazioni o collaborazioni editoriali puoi
        scriverci all&apos;indirizzo <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>

      {/* Placeholder form — predisposto per l'embed del form lead (Edilizia in Cloud) in una fase successiva. */}
      <div className="not-prose mt-6 rounded-sm border border-line bg-surface p-6">
        <p className="mb-4 font-head text-lg font-bold text-charcoal">Modulo di contatto</p>
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Nome e cognome"
            className="rounded-sm border border-line bg-background px-3 py-2.5 text-sm"
            aria-label="Nome e cognome"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-sm border border-line bg-background px-3 py-2.5 text-sm"
            aria-label="Email"
          />
          <textarea
            placeholder="Messaggio"
            rows={4}
            className="rounded-sm border border-line bg-background px-3 py-2.5 text-sm"
            aria-label="Messaggio"
          />
          <button
            type="button"
            className="justify-self-start rounded-sm bg-charcoal px-5 py-2.5 text-sm font-semibold text-white hover:bg-bordeaux"
          >
            Invia
          </button>
          <p className="text-xs text-muted">
            Modulo dimostrativo. La raccolta contatti sarà attivata con l&apos;integrazione del form
            in fase di go-live.
          </p>
        </form>
      </div>
    </PageShell>
  );
}
