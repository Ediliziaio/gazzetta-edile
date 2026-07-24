import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pubblicità e Media Kit",
  description: "Formati pubblicitari, native advertising e sponsorizzazioni su Gazzetta Edile.",
  alternates: { canonical: "/pubblicita" },
};

export default function Pubblicita() {
  return (
    <PageShell
      title="Pubblicità"
      path="/pubblicita"
      intro="Raggiungi imprese edili, professionisti tecnici e privati che ristrutturano."
    >
      <p>
        Gazzetta Edile è un ambiente editoriale verticale sull&apos;edilizia: un pubblico
        qualificato di imprese, artigiani, geometri, architetti, ingegneri, serramentisti,
        installatori e privati in fase di ristrutturazione.
      </p>
      <h2 id="formati">Formati disponibili</h2>
      <ul>
        <li><strong>Leaderboard</strong> in testata (728×90 / responsive).</li>
        <li><strong>Rettangolo medio</strong> (300×250) in sidebar e nel corpo degli articoli.</li>
        <li><strong>Native / in-feed</strong> tra i blocchi della home e delle rubriche.</li>
        <li><strong>Sponsorizzazioni</strong> e contenuti dedicati (advertorial) a marchio.</li>
      </ul>
      <h2 id="contatti">Come prenotare</h2>
      <p>
        Per il media kit completo, i formati e i listini scrivi a{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    </PageShell>
  );
}
