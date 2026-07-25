import type { Article } from "@/lib/content";

export const impiantoElettricoCasa: Article = {
  slug: "impianto-elettrico-casa",
  category: "impianti",
  title: "Impianto elettrico di casa: norme, schema e costi 2026",
  metaTitle: "Impianto elettrico casa: norme e costi 2026 | Gazzetta Edile",
  metaDescription:
    "Come è fatto l'impianto elettrico di casa, la norma CEI 64-8, i livelli di dotazione, lo schema, i costi al punto luce e al mq e quando rifarlo.",
  abstract:
    "L'impianto elettrico di casa è regolato dalla norma CEI 64-8, che definisce tre livelli di dotazione (base, standard, domotico). Rifare o adeguare l'impianto di un appartamento costa in media 6.000-12.000 euro, in base al livello, ai punti luce e alla domotica. A fine lavori è obbligatoria la dichiarazione di conformità.",
  keywordPrimary: "impianto elettrico casa",
  keywordsSecondary: [
    "norma CEI 64-8",
    "costo impianto elettrico",
    "rifare impianto elettrico",
    "livelli impianto elettrico",
  ],
  author: "marco-ferri",
  publishedAt: "2026-07-25",
  updatedAt: "2026-07-25",
  cover: {
    src: "/covers/impianto-elettrico-casa.png",
    alt: "Quadro elettrico e cablaggi di un impianto elettrico civile in fase di installazione",
  },
  pillar: true,
  schemaType: "Article",
  related: ["ristrutturare-casa-costi-2026", "pompe-di-calore-guida"],
  faq: [
    {
      q: "Quanto costa rifare l'impianto elettrico di casa?",
      a: "Rifare l'impianto elettrico di un appartamento costa in media 6.000-12.000 euro, in base a superficie, livello di dotazione e domotica. Al punto luce il costo si aggira sui 60-120 euro. La cifra comprende materiali, manodopera, opere murarie e certificazione.",
    },
    {
      q: "Cos'è la norma CEI 64-8?",
      a: "La CEI 64-8 è la norma tecnica che regola gli impianti elettrici in bassa tensione. Per gli edifici residenziali definisce tre livelli di dotazione — base (livello 1), standard (livello 2) e domotico (livello 3) — che stabiliscono il numero minimo di punti presa, punti luce e circuiti.",
    },
    {
      q: "Quando è obbligatorio rifare l'impianto elettrico?",
      a: "Va rifatto o adeguato quando è vecchio, non a norma o sottodimensionato, in caso di ristrutturazione importante o cambio di destinazione d'uso. Un impianto non a norma è pericoloso e può impedire l'allaccio o la vendita dell'immobile.",
    },
    {
      q: "Serve un certificato a fine lavori?",
      a: "Sì. Al termine dei lavori l'installatore abilitato deve rilasciare la dichiarazione di conformità (DiCo), che attesta la corretta esecuzione dell'impianto secondo la regola dell'arte. È un documento indispensabile per la sicurezza e per le pratiche.",
    },
  ],
  body: [
    {
      type: "p",
      text: "L'**impianto elettrico** è il sistema nervoso della casa: distribuisce l'energia in sicurezza a prese, luci ed elettrodomestici. Un impianto ben progettato e a norma è la base per vivere comodi e sicuri, oltre che per integrare domotica, pompe di calore e ricarica dell'auto elettrica. In questa guida vediamo com'è fatto un impianto elettrico civile, cosa prevede la norma **CEI 64-8**, i costi al punto luce e al metro quadro e quando conviene rifarlo.",
    },
    {
      type: "h2",
      id: "come-fatto",
      text: "Com'è fatto un impianto elettrico civile",
    },
    {
      type: "p",
      text: "Un impianto elettrico domestico parte dal **contatore** e dal **quadro elettrico**, dove si trovano l'interruttore generale e gli interruttori magnetotermici e differenziali (il cosiddetto \"salvavita\") che proteggono da sovraccarichi e dispersioni. Dal quadro partono i **circuiti**, che alimentano prese, illuminazione e utenze dedicate (forno, lavatrice, climatizzazione). Elementi fondamentali sono la **messa a terra** e i dispositivi di protezione, che rendono l'impianto sicuro.",
    },
    {
      type: "ul",
      items: [
        "**Quadro elettrico**: cuore dell'impianto, con protezioni e suddivisione in circuiti.",
        "**Circuiti separati**: luci, prese e utenze ad alto assorbimento su linee dedicate.",
        "**Messa a terra**: indispensabile per la sicurezza delle persone.",
        "**Salvavita (differenziale)**: interrompe la corrente in caso di dispersione.",
        "**Punti presa e punti luce**: distribuiti secondo l'uso degli ambienti.",
      ],
    },
    {
      type: "h2",
      id: "cei-64-8",
      text: "La norma CEI 64-8 e i livelli di dotazione",
    },
    {
      type: "p",
      text: "Gli impianti elettrici in bassa tensione sono regolati dalla norma **CEI 64-8**. Per le abitazioni la norma prevede tre **livelli di dotazione** che fissano il numero minimo di punti presa, punti luce e circuiti in base alla superficie:",
    },
    {
      type: "table",
      headers: ["Livello", "Descrizione", "Adatto a"],
      rows: [
        ["Livello 1 — Base", "Dotazione minima di punti e circuiti", "Piccoli alloggi, esigenze essenziali"],
        ["Livello 2 — Standard", "Dotazione superiore, più circuiti e punti", "La maggior parte delle abitazioni"],
        ["Livello 3 — Domotico", "Standard + funzioni di automazione", "Case moderne con domotica"],
      ],
    },
    {
      type: "p",
      text: "Il **livello 3** aggiunge le funzioni di automazione (domotica): controllo di luci, tapparelle, clima, antifurto e gestione dei consumi anche da smartphone. È il livello più adatto a chi costruisce o ristruttura oggi guardando al futuro.",
    },
    {
      type: "h2",
      id: "costi",
      text: "Quanto costa l'impianto elettrico",
    },
    {
      type: "p",
      text: "Il costo si calcola di solito **al punto luce** (ogni presa, punto luce o comando) oppure **al metro quadro**. I valori dipendono dal livello di dotazione, dalla domotica e dalle opere murarie necessarie.",
    },
    {
      type: "table",
      headers: ["Voce", "Costo indicativo"],
      rows: [
        ["Costo al punto luce", "60 - 120 €"],
        ["Impianto livello base (appartamento)", "6.000 - 8.000 €"],
        ["Impianto livello standard", "8.000 - 10.000 €"],
        ["Impianto domotico (livello 3)", "10.000 - 15.000 €+"],
      ],
    },
    {
      type: "callout",
      title: "Occhio alle opere murarie",
      text: "Su un impianto sotto traccia esistente, la voce che pesa di più è spesso quella delle opere murarie (tracce, ripristini, tinteggiatura). Vanno sempre incluse nel preventivo per evitare sorprese.",
    },
    {
      type: "h2",
      id: "quando-rifarlo",
      text: "Quando rifare o adeguare l'impianto",
    },
    {
      type: "p",
      text: "È necessario intervenire quando l'impianto è **vecchio, non a norma o sottodimensionato** rispetto ai consumi attuali. Segnali tipici sono il salvavita che scatta spesso, la mancanza della messa a terra, prese insufficienti e un quadro obsoleto. Rifare l'impianto è quasi sempre parte di una [ristrutturazione](/ristrutturazioni/ristrutturare-casa-costi-2026) e va coordinato con gli altri lavori, perché richiede tracce nelle pareti. È inoltre l'occasione giusta per predisporre pompa di calore, fotovoltaico e punto di ricarica per l'auto elettrica.",
    },
    {
      type: "h2",
      id: "sicurezza",
      text: "Sicurezza e certificazione",
    },
    {
      type: "p",
      text: "L'impianto deve essere realizzato da un **installatore abilitato**, che al termine dei lavori rilascia la **dichiarazione di conformità (DiCo)**: il documento che attesta l'esecuzione a regola d'arte secondo la norma. È indispensabile per la sicurezza, per l'allaccio della fornitura e per la compravendita dell'immobile. Non affidarsi a un professionista qualificato o rinunciare alla certificazione espone a gravi rischi e a possibili responsabilità. La sicurezza elettrica non è un optional: è la base su cui poggia tutta la casa.",
    },
  ],
};
