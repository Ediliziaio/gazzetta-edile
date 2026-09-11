import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ContactForm } from "@/components/ContactForm";
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

      {/* Modulo di contatto: l'invio arriva al CRM di Edilizia in Cloud. */}
      <div className="not-prose mt-6 rounded-sm border border-line bg-surface p-6">
        <p className="mb-4 font-head text-lg font-bold text-charcoal">Modulo di contatto</p>
        <ContactForm />
      </div>
    </PageShell>
  );
}
