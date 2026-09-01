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
        I cookie di statistica e marketing vengono attivati <strong>solo dopo il tuo consenso</strong>:
        fino a quel momento nessuno strumento di misurazione scrive cookie sul tuo dispositivo
        (Google Consent Mode v2, con stato predefinito negato). Puoi modificare la tua scelta in
        qualsiasi momento dal link <em>Preferenze cookie</em> in fondo a ogni pagina, oltre che
        dalle impostazioni del browser.
      </p>
    </PageShell>
  );
}
