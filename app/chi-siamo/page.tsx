import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chi siamo",
  description: `${SITE.name} è la testata verticale sull'edilizia: guide autorevoli, dati e risposte pratiche per imprese, professionisti e privati.`,
  alternates: { canonical: "/chi-siamo" },
};

export default function ChiSiamo() {
  return (
    <PageShell
      title="Chi siamo"
      path="/chi-siamo"
      intro="Gazzetta Edile è la testata giornalistica online dedicata al mondo delle costruzioni."
    >
      <p>
        Raccontiamo l&apos;edilizia italiana con un approccio giornalistico e tecnico insieme:
        ristrutturazioni, serramenti, efficienza energetica, materiali, impianti, incentivi,
        tecnologie e normative. Ogni contenuto nasce per rispondere a una domanda concreta di chi
        costruisce, ristruttura o progetta.
      </p>
      <h2 id="missione">La nostra missione</h2>
      <p>
        Rendere accessibili informazioni spesso disperse tra norme, bandi e schede tecniche.
        Traduciamo la complessità del settore in guide chiare, verificate e aggiornate, utili sia
        alle imprese edili sia ai privati che affrontano un intervento.
      </p>
      <h2 id="metodo">Il nostro metodo</h2>
      <ul>
        <li>Dati e costi verificati, con riferimento a fonti e normativa vigente.</li>
        <li>Testi redatti o revisionati da tecnici del settore (geometri, ingegneri, periti).</li>
        <li>Aggiornamento continuo quando cambiano incentivi, aliquote o regole.</li>
      </ul>
      <p>
        I contenuti hanno finalità informativa: prima di ogni intervento consigliamo sempre di
        verificare la normativa aggiornata e di rivolgersi a un tecnico abilitato.
      </p>
    </PageShell>
  );
}
