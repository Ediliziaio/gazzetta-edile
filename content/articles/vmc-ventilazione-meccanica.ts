import type { Article } from "@/lib/content";

export const vmcVentilazione: Article = {
  slug: "vmc-ventilazione-meccanica",
  category: "impianti",
  title: "VMC: ventilazione meccanica controllata, come funziona e costi",
  metaTitle: "VMC: come funziona e costi 2026 | Gazzetta Edile",
  metaDescription:
    "Cos'è la ventilazione meccanica controllata, come funziona la VMC a doppio flusso, i tipi di impianto, i vantaggi e i costi al metro quadro e a stanza.",
  abstract:
    "La ventilazione meccanica controllata (VMC) è un impianto che rinnova di continuo l'aria degli ambienti recuperando il calore di quella espulsa. Riduce umidità, muffe e dispersioni e migliora la qualità dell'aria. Una VMC centralizzata a doppio flusso costa in media 4.000-8.000 euro per un appartamento; le unità decentralizzate partono da poche centinaia di euro a stanza.",
  keywordPrimary: "ventilazione meccanica controllata",
  keywordsSecondary: [
    "VMC costi",
    "recuperatore di calore",
    "VMC centralizzata o decentralizzata",
    "VMC a doppio flusso",
  ],
  author: "marco-ferri",
  publishedAt: "2026-07-25",
  updatedAt: "2026-07-25",
  cover: {
    src: "/covers/vmc-ventilazione-meccanica.png",
    alt: "Unità di ventilazione meccanica controllata VMC",
  },
  pillar: false,
  schemaType: "Article",
  related: ["pompe-di-calore-guida", "classe-energetica-ape"],
  faq: [
    {
      q: "Quanto costa un impianto di ventilazione meccanica controllata?",
      a: "Una VMC centralizzata a doppio flusso per un appartamento costa in media 4.000-8.000 euro, canalizzazioni e posa incluse. Le unità decentralizzate a singolo o doppio flusso partono da 300-1.200 euro a stanza. Il prezzo dipende dal tipo di impianto, dalla superficie e dalle opere necessarie.",
    },
    {
      q: "A cosa serve la VMC?",
      a: "La VMC rinnova di continuo l'aria interna espellendo quella viziata, umida e ricca di CO2 e immettendo aria nuova filtrata. Serve a evitare muffe e condensa, a migliorare la qualità dell'aria e a farlo senza aprire le finestre, quindi senza disperdere il calore come avviene con la ventilazione naturale.",
    },
    {
      q: "Qual è la differenza tra VMC a singolo e a doppio flusso?",
      a: "La VMC a singolo flusso muove l'aria in una sola direzione (di solito estrae quella viziata) senza recuperare calore. La VMC a doppio flusso ha due ventilatori e un recuperatore di calore che pre-riscalda l'aria in ingresso con quella in uscita, recuperando fino all'80-90% dell'energia.",
    },
    {
      q: "La VMC consuma molta corrente?",
      a: "No. I ventilatori di una VMC domestica assorbono in genere poche decine di watt e lavorano a bassa potenza in modo continuo. Il consumo elettrico annuo è modesto ed è ampiamente ripagato dal calore recuperato e dai minori costi di riscaldamento nelle case ben isolate.",
    },
    {
      q: "La VMC va bene anche in una casa già esistente?",
      a: "Sì. In ristrutturazione, quando non è possibile canalizzare, si usano unità decentralizzate a parete che servono una singola stanza senza tubazioni. In caso di rifacimento importante o cappotto interno si può invece installare una VMC centralizzata canalizzata.",
    },
  ],
  body: [
    {
      type: "p",
      text: "La **ventilazione meccanica controllata** (VMC) è l'impianto che rinnova l'aria di casa in modo automatico e continuo, senza dover aprire le finestre. Man mano che gli edifici diventano più isolati ed ermetici, l'aria interna tende a ristagnare: aumentano umidità, condensa, muffe, CO2 e inquinanti. La VMC risolve il problema alla radice, garantendo aria sempre pulita e recuperando gran parte del calore che con la ventilazione naturale si disperderebbe dalla finestra. In questa guida vediamo come funziona, quali tipi esistono, i vantaggi reali e i **costi** aggiornati.",
    },
    {
      type: "h2",
      id: "come-funziona",
      text: "Come funziona la VMC",
    },
    {
      type: "p",
      text: "Un impianto di **ventilazione meccanica controllata** lavora su due flussi d'aria: estrae l'aria viziata dagli ambienti umidi (bagni, cucina, lavanderia) e immette aria nuova, filtrata, negli ambienti di soggiorno e nelle camere. Il cuore del sistema, nelle versioni più evolute, è il **recuperatore di calore**: uno scambiatore in cui l'aria calda in uscita cede la propria energia a quella fredda in ingresso, senza mescolarsi. In questo modo d'inverno l'aria nuova entra già temperata e d'estate, con il by-pass, si può sfruttare il free-cooling notturno.",
    },
    {
      type: "p",
      text: "Rispetto all'apertura delle finestre, la VMC porta tre vantaggi decisivi: **ricambio costante** e misurabile, **filtrazione** dell'aria (polveri, pollini, particolato) e **recupero del calore**, che nelle case a basso consumo può arrivare all'80-90%. È per questo che la ventilazione meccanica è di fatto obbligata negli edifici a energia quasi zero (nZEB) e in tutti i progetti che puntano a una buona [classe energetica](/efficienza-energetica/classe-energetica-ape).",
    },
    {
      type: "h2",
      id: "tipi",
      text: "Quali tipi di VMC esistono",
    },
    {
      type: "p",
      text: "La prima scelta è tra **VMC centralizzata o decentralizzata**; la seconda è tra **singolo e doppio flusso**. Sono decisioni che dipendono dal tipo di edificio, dalla presenza di controsoffitti per le canalizzazioni e dal budget.",
    },
    {
      type: "h3",
      id: "centralizzata-decentralizzata",
      text: "Centralizzata o decentralizzata",
    },
    {
      type: "ul",
      items: [
        "**VMC centralizzata**: un'unica macchina serve tutta la casa tramite una rete di canali. È la soluzione più efficiente e silenziosa, ideale in nuova costruzione o ristrutturazione profonda, dove c'è spazio per i condotti.",
        "**VMC decentralizzata**: piccole unità installate a parete che servono una singola stanza, senza canalizzazioni. Perfetta in ristrutturazione leggera o per risolvere il problema in un ambiente specifico.",
      ],
    },
    {
      type: "h3",
      id: "singolo-doppio-flusso",
      text: "Singolo o doppio flusso",
    },
    {
      type: "p",
      text: "La **VMC a doppio flusso** è quella con recuperatore di calore e due ventilatori distinti (immissione ed estrazione): è la più performante ed è quella che fa risparmiare energia. Il singolo flusso, più economico, si limita a estrarre o immettere aria e non recupera calore, quindi conviene solo in casi specifici.",
    },
    {
      type: "table",
      headers: ["Tipo di VMC", "Recupero calore", "Adatta a"],
      rows: [
        ["Centralizzata doppio flusso", "Sì, 80-90%", "Nuove costruzioni e ristrutturazioni profonde"],
        ["Decentralizzata doppio flusso", "Sì, 60-85%", "Ristrutturazioni senza spazio per i canali"],
        ["Singolo flusso (estrazione)", "No", "Bagni ciechi e integrazioni puntuali"],
      ],
    },
    {
      type: "h2",
      id: "vantaggi",
      text: "Quali vantaggi porta davvero",
    },
    {
      type: "p",
      text: "Oltre alla qualità dell'aria, la VMC ha un impatto diretto sulla salubrità dell'edificio e sulla bolletta. Ecco i benefici principali:",
    },
    {
      type: "ol",
      items: [
        "**Addio muffa e condensa**: estraendo l'umidità in eccesso si eliminano le condizioni che fanno proliferare le muffe sui muri e negli angoli freddi.",
        "**Aria più sana**: i filtri trattengono polveri, pollini e particolato, un vantaggio importante per allergici e per chi vive in città.",
        "**Meno dispersioni**: recuperando il calore dell'aria espulsa si riducono i consumi di riscaldamento, effetto che si somma bene a una [pompa di calore](/efficienza-energetica/pompe-di-calore-guida).",
        "**Comfort costante**: niente sbalzi termici da finestra aperta e meno rumore dall'esterno, perché si ventila a serramenti chiusi.",
      ],
    },
    {
      type: "callout",
      title: "Attenzione alla manutenzione dei filtri",
      text: "Una VMC rende quanto promette solo se i filtri sono puliti. Vanno controllati ogni 3-6 mesi e sostituiti in media una o due volte l'anno: filtri sporchi riducono la portata d'aria, aumentano i consumi dei ventilatori e peggiorano la qualità dell'aria. È una spesa contenuta ma da mettere in conto.",
    },
    {
      type: "h2",
      id: "costi",
      text: "Quanto costa una VMC",
    },
    {
      type: "p",
      text: "I **costi della VMC** variano molto in base alla tipologia. Una decentralizzata si valuta a stanza, una centralizzata al metro quadro o a corpo, comprendendo macchina, canalizzazioni, bocchette e posa. Di seguito valori indicativi di mercato.",
    },
    {
      type: "table",
      headers: ["Soluzione", "Costo indicativo"],
      rows: [
        ["Unità decentralizzata singolo flusso", "300 - 600 € a stanza"],
        ["Unità decentralizzata doppio flusso", "600 - 1.200 € a stanza"],
        ["VMC centralizzata (appartamento)", "4.000 - 8.000 €"],
        ["VMC centralizzata (villa/casa grande)", "8.000 - 15.000 €+"],
      ],
    },
    {
      type: "p",
      text: "A questi importi va aggiunta la **manutenzione ordinaria** (filtri e pulizia canali), nell'ordine di poche decine di euro l'anno per i filtri. Molti interventi di installazione della VMC, se inseriti in una riqualificazione energetica dell'edificio, possono rientrare tra le opere agevolate: conviene verificare gli incentivi vigenti con il progettista prima di avviare i lavori.",
    },
    {
      type: "h2",
      id: "quando-installarla",
      text: "Quando conviene installarla",
    },
    {
      type: "p",
      text: "La VMC dà il massimo negli edifici **ben isolati ed ermetici**, dove la ventilazione naturale non basta più a smaltire umidità e inquinanti. È quasi obbligata in nuova costruzione e nelle ristrutturazioni profonde con cappotto e nuovi serramenti, perché rendendo la casa a tenuta d'aria si crea il bisogno di un ricambio controllato. In una casa esistente, la scelta ricade sulla soluzione decentralizzata quando non è possibile canalizzare. In ogni caso la regola è una sola: la **ventilazione meccanica controllata** va progettata insieme all'involucro e all'impianto termico, non aggiunta all'ultimo momento.",
    },
  ],
};
