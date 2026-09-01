import type { Article } from "@/lib/content";

export const fotovoltaicoAccumulo: Article = {
  slug: "fotovoltaico-con-accumulo",
  category: "efficienza-energetica",
  title: "Fotovoltaico con accumulo: come funziona e quando conviene",
  metaTitle: "Fotovoltaico con accumulo: guida 2026 | Gazzetta Edile",
  metaDescription:
    "Come funziona il fotovoltaico con accumulo, quanto costa una batteria al 2026, come dimensionarla e quando conviene per alzare l'autoconsumo di casa.",
  abstract:
    "Il fotovoltaico con accumulo abbina i pannelli solari a una batteria che immagazzina l'energia prodotta di giorno per usarla di sera. Conviene quando i consumi serali sono alti: alza l'autoconsumo dal 30% al 60-80%, riducendo il prelievo dalla rete e la bolletta, con un rientro medio in 8-12 anni.",
  keywordPrimary: "fotovoltaico con accumulo",
  keywordsSecondary: [
    "batteria di accumulo fotovoltaico",
    "costo accumulo fotovoltaico",
    "autoconsumo fotovoltaico",
    "dimensionamento batteria fotovoltaico",
  ],
  author: "marco-ferri",
  publishedAt: "2026-07-25",
  updatedAt: "2026-07-25",
  cover: {
    src: "/covers/fotovoltaico-con-accumulo.png",
    alt: "Batteria di accumulo per impianto fotovoltaico installata a parete",
  },
  pillar: false,
  schemaType: "Article",
  related: ["pannelli-solari-guida", "impianto-fotovoltaico-costi"],
  faq: [
    {
      q: "Quanto costa una batteria di accumulo per il fotovoltaico?",
      a: "Nel 2026 una batteria di accumulo costa in media 700-1.100 euro per kWh di capacità, installazione e inverter ibrido esclusi. Un accumulo domestico da 8-10 kWh si aggira quindi tra 6.000 e 11.000 euro chiavi in mano, in base a tecnologia e marca.",
    },
    {
      q: "Conviene il fotovoltaico con accumulo?",
      a: "Conviene soprattutto a chi consuma molta energia la sera e di notte, quando i pannelli non producono. L'accumulo alza l'autoconsumo dal 30% tipico fino al 60-80%, riducendo il prelievo dalla rete. Se invece i consumi sono concentrati di giorno, il vantaggio economico è più contenuto.",
    },
    {
      q: "Che capacità di batteria serve per una casa?",
      a: "Per un'abitazione media con consumi di 3.000-4.000 kWh all'anno si usano di norma accumuli da 5 a 10 kWh. La regola pratica è dimensionare la batteria sul consumo serale-notturno, non sull'intero fabbisogno, per evitare capacità inutilizzata.",
    },
    {
      q: "Quanto dura una batteria di accumulo?",
      a: "Le batterie al litio LFP durano in genere 10-15 anni o circa 6.000-10.000 cicli di carica. La garanzia tipica del produttore copre 10 anni o una capacità residua non inferiore al 70-80% al termine del periodo.",
    },
    {
      q: "Posso aggiungere l'accumulo a un impianto fotovoltaico esistente?",
      a: "Sì. Si può installare un accumulo su un impianto già attivo (retrofit), aggiungendo una batteria con proprio inverter o sostituendo l'inverter con uno ibrido. Va verificata la compatibilità con l'impianto e aggiornata la comunicazione con il gestore di rete.",
    },
  ],
  body: [
    {
      type: "p",
      text: "Il **fotovoltaico con accumulo** è la naturale evoluzione dell'impianto solare domestico: ai pannelli si affianca una **batteria** che immagazzina l'energia prodotta durante il giorno per renderla disponibile la sera e la notte, quando il sole non c'è ma i consumi in casa sono più alti. L'obiettivo non è produrre di più, ma **usare meglio** ciò che si produce, alzando la quota di energia autoconsumata e riducendo il prelievo dalla rete. Se stai valutando l'investimento di base, parti dalla [guida ai pannelli solari](/efficienza-energetica/pannelli-solari-guida) e dai [costi di un impianto fotovoltaico](/efficienza-energetica/impianto-fotovoltaico-costi).",
    },
    {
      type: "h2",
      id: "come-funziona",
      text: "Come funziona il fotovoltaico con accumulo",
    },
    {
      type: "p",
      text: "Un impianto tradizionale immette in rete l'energia che produce ma non consuma nell'istante stesso. Il problema è che la produzione solare ha il suo picco a mezzogiorno, mentre i consumi domestici si concentrano al mattino presto e alla sera. Senza batteria, gran parte dell'energia autoprodotta viene ceduta alla rete a un valore basso, per poi essere ricomprata la sera a prezzo pieno. La **batteria di accumulo** rompe questo disallineamento: carica il surplus diurno e lo restituisce quando serve.",
    },
    {
      type: "p",
      text: "Il cuore del sistema è l'**inverter ibrido**, che gestisce contemporaneamente pannelli, batteria, consumi di casa e scambio con la rete secondo una priorità precisa: prima alimenta i carichi domestici, poi carica la batteria, e solo l'eventuale eccedenza va in rete. Di sera il flusso si inverte e la casa attinge dall'accumulo finché è carico.",
    },
    {
      type: "h3",
      id: "autoconsumo",
      text: "Il ruolo dell'autoconsumo",
    },
    {
      type: "p",
      text: "Il parametro chiave è l'**autoconsumo**: la percentuale di energia prodotta che viene effettivamente usata in casa invece di essere ceduta. Un impianto senza accumulo si ferma tipicamente al 25-35%. Con una batteria ben dimensionata si sale al **60-80%**, e in alcuni casi oltre. Più alto è l'autoconsumo, minore è la dipendenza dalla rete e maggiore il risparmio, perché ogni kWh autoconsumato vale quanto il prezzo di acquisto evitato, molto più di quanto renda l'energia immessa.",
    },
    {
      type: "ul",
      items: [
        "**Pannelli fotovoltaici**: producono energia dalla luce solare durante il giorno.",
        "**Inverter ibrido**: converte la corrente e distribuisce i flussi tra casa, batteria e rete.",
        "**Batteria di accumulo**: immagazzina il surplus diurno per l'uso serale e notturno.",
        "**Sistema di monitoraggio**: mostra produzione, consumi e stato di carica in tempo reale.",
      ],
    },
    {
      type: "h2",
      id: "quanto-costa",
      text: "Quanto costa una batteria di accumulo nel 2026",
    },
    {
      type: "p",
      text: "Il **costo dell'accumulo** si misura in euro per kWh di capacità e dipende soprattutto dalla tecnologia della batteria, dalla capacità totale e dal fatto che l'inverter sia già predisposto o vada sostituito. I valori seguenti sono indicativi e comprendono la batteria; l'inverter ibrido e la posa incidono a parte quando non già presenti.",
    },
    {
      type: "table",
      headers: ["Capacità accumulo", "Costo indicativo", "Adatto a"],
      rows: [
        ["5 kWh", "4.000 - 6.000 €", "Coppie e consumi serali contenuti"],
        ["8 kWh", "6.000 - 8.500 €", "Famiglia media, 3.000-4.000 kWh/anno"],
        ["10 kWh", "7.500 - 11.000 €", "Consumi alti o pompa di calore"],
        ["15 kWh", "11.000 - 16.000 €", "Grandi utenze e ricarica auto elettrica"],
      ],
    },
    {
      type: "callout",
      title: "Attenzione al sovradimensionamento",
      text: "Una batteria troppo grande resta parzialmente scarica per gran parte dell'anno: paghi capacità che non userai. Meglio dimensionare sul consumo serale-notturno reale e, se serve, prevedere un accumulo modulare da ampliare in futuro.",
    },
    {
      type: "h2",
      id: "dimensionamento",
      text: "Come dimensionare la batteria",
    },
    {
      type: "p",
      text: "Il **dimensionamento della batteria** non parte dal fabbisogno totale della casa, ma dalla quota di consumi che cadono nelle ore senza sole. La logica è coprire la sera e la notte con l'energia accumulata di giorno, senza eccedere. Ecco un percorso pratico in pochi passi.",
    },
    {
      type: "ol",
      items: [
        "Recupera il consumo annuo in kWh dalle bollette e stima quello giornaliero medio (consumo annuo diviso 365).",
        "Individua la quota serale-notturna: quanta energia usi indicativamente dal tramonto al mattino successivo.",
        "Confronta con la produzione dei pannelli: la batteria ha senso solo se c'è un surplus diurno da immagazzinare.",
        "Scegli una capacità utile vicina al consumo serale, con un piccolo margine, evitando di coprire l'intero fabbisogno.",
        "Verifica la potenza di carica e scarica, non solo i kWh: deve reggere i picchi dei tuoi elettrodomestici.",
      ],
    },
    {
      type: "p",
      text: "Come riferimento, una famiglia con consumi di **3.000-4.000 kWh all'anno** trova di norma il giusto equilibrio con un accumulo tra **5 e 10 kWh**. Chi ha una pompa di calore o ricarica un'auto elettrica a casa può giustificare capacità superiori, ma sempre partendo dai consumi effettivi e non da stime ottimistiche.",
    },
    {
      type: "h2",
      id: "conviene",
      text: "Quando conviene davvero l'accumulo",
    },
    {
      type: "p",
      text: "La convenienza dipende dal **profilo di consumo**. L'accumulo rende al massimo per chi vive la casa la sera e nel fine settimana, quando la produzione solare è scarsa o nulla: in questi casi l'autoconsumo cresce molto e il risparmio è tangibile. Al contrario, chi consuma soprattutto di giorno beneficia già dell'impianto senza batteria, e il vantaggio dell'accumulo si assottiglia. In generale il **rientro dell'investimento** si colloca tra 8 e 12 anni, in funzione del costo dell'energia, degli incentivi vigenti e del grado di autoconsumo raggiunto.",
    },
    {
      type: "p",
      text: "Sul piano fiscale, l'installazione dell'accumulo, anche in aggiunta a un impianto esistente, può rientrare tra gli interventi agevolabili: aliquote, massimali e requisiti cambiano nel tempo, quindi verifica sempre la normativa vigente e i [bonus edilizi aggiornati](/incentivi-e-bonus) prima di firmare un preventivo. Un ulteriore vantaggio, non economico ma pratico, è la **continuità in caso di blackout**: alcuni sistemi con funzione di backup mantengono alimentati i carichi essenziali quando la rete cade.",
    },
    {
      type: "h3",
      id: "vita-utile",
      text: "Durata e manutenzione",
    },
    {
      type: "p",
      text: "Le batterie **al litio ferro fosfato (LFP)** oggi più diffuse offrono buona sicurezza e lunga vita: in genere **10-15 anni** o diverse migliaia di cicli, con garanzie del produttore attorno ai 10 anni e capacità residua garantita non inferiore al 70-80%. La manutenzione è minima: aggiornamenti software, controllo periodico dei parametri e installazione in ambiente asciutto e a temperatura controllata, perché il caldo eccessivo ne accelera il degrado.",
    },
    {
      type: "h2",
      id: "conclusioni",
      text: "In sintesi",
    },
    {
      type: "p",
      text: "Il **fotovoltaico con accumulo** non serve a produrre di più, ma a rendere indipendente la tua casa negli orari in cui prima dovevi comprare energia dalla rete. È un investimento che ha senso quando i consumi serali sono significativi e la batteria è dimensionata con criterio: né troppo piccola per lasciare surplus inutilizzato, né troppo grande per restare mezza vuota. Valutato insieme a un buon [impianto fotovoltaico](/efficienza-energetica/impianto-fotovoltaico-costi) e a interventi di isolamento, è un tassello concreto verso l'autosufficienza energetica dell'abitazione.",
    },
  ],
};
