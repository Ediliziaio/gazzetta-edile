import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa sul trattamento dei dati personali di Gazzetta Edile.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function Privacy() {
  return (
    <PageShell title="Privacy Policy" path="/privacy" intro="Come trattiamo i dati personali degli utenti.">
      <p>
        La presente informativa descrive le modalità di trattamento dei dati personali degli utenti
        che consultano {SITE.name}. Il testo è un modello preliminare e sarà completato con i
        riferimenti del titolare del trattamento prima del go-live.
      </p>
      <h2 id="dati">Dati raccolti</h2>
      <p>
        Il sito raccoglie i dati eventualmente conferiti tramite il modulo di contatto e i dati
        tecnici di navigazione (cookie tecnici e, previo consenso, cookie di statistica e
        marketing).
      </p>
      <h2 id="diritti">Diritti dell&apos;utente</h2>
      <p>
        L&apos;utente può richiedere accesso, rettifica o cancellazione dei propri dati scrivendo a{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </PageShell>
  );
}
