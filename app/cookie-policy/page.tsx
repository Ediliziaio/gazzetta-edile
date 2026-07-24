import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Informativa sull'uso dei cookie su Gazzetta Edile.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: false, follow: true },
};

export default function CookiePolicy() {
  return (
    <PageShell title="Cookie Policy" path="/cookie-policy" intro="Come utilizziamo i cookie.">
      <p>
        Gazzetta Edile utilizza cookie tecnici necessari al funzionamento del sito e, previo
        consenso, cookie di statistica e di marketing per misurare l&apos;audience e proporre
        contenuti pubblicitari pertinenti.
      </p>
      <h2 id="tipologie">Tipologie di cookie</h2>
      <ul>
        <li><strong>Tecnici</strong>: indispensabili, non richiedono consenso.</li>
        <li><strong>Statistici</strong>: misurazione anonima del traffico, previo consenso.</li>
        <li><strong>Marketing</strong>: profilazione pubblicitaria, previo consenso.</li>
      </ul>
      <p>
        Puoi gestire le preferenze in qualsiasi momento dalle impostazioni del browser. Il pannello
        di gestione consenso sarà attivato al go-live insieme agli strumenti di misurazione.
      </p>
    </PageShell>
  );
}
