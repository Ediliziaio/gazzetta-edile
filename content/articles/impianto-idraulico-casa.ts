import type { Article } from "@/lib/content";

export const impiantoIdraulico: Article = {
  slug: "impianto-idraulico-casa",
  category: "impianti",
  title: "Impianto idraulico di casa: schema, materiali e costi",
  metaTitle: "Impianto idraulico casa: schema e costi | Gazzetta Edile",
  metaDescription:
    "Come è fatto l'impianto idraulico di casa: schema a collettori, materiali dei tubi (multistrato, PEX, rame), costi al punto acqua e al mq e quando rifarlo.",
  abstract:
    "L'impianto idraulico di casa distribuisce acqua sanitaria fredda e calda e raccoglie gli scarichi. Lo schema più diffuso oggi è quello a collettore, con tubi in multistrato o PEX. Rifare l'impianto idraulico di un appartamento costa in media 3.500-8.000 euro, in base ai punti acqua e alle opere murarie necessarie.",
  keywordPrimary: "impianto idraulico casa",
  keywordsSecondary: [
    "schema impianto idraulico",
    "tubi multistrato o PEX",
    "costo impianto idraulico",
    "impianto a collettore",
  ],
  author: "marco-ferri",
  publishedAt: "2026-07-25",
  updatedAt: "2026-07-25",
  cover: {
    src: "/covers/impianto-idraulico-casa.png",
    alt: "Tubazioni e collettore di un impianto idraulico civile",
  },
  pillar: false,
  schemaType: "Article",
  related: ["impianto-elettrico-casa", "ristrutturare-bagno-costi"],
  faq: [
    {
      q: "Quanto costa rifare l'impianto idraulico di casa?",
      a: "Rifare l'impianto idraulico di un appartamento costa in media 3.500-8.000 euro, in base al numero di punti acqua, alla distanza dagli scarichi e alle opere murarie. Al punto acqua il costo si aggira sui 90-180 euro e comprende tubazioni, raccorderia, manodopera e ripristini.",
    },
    {
      q: "Meglio tubi in multistrato, PEX o rame?",
      a: "Oggi negli impianti civili si usa soprattutto il multistrato, che unisce la stabilità del metallo alla praticità della plastica. Il PEX è economico e flessibile, ideale per lunghe tratte e riscaldamento a pavimento. Il rame resta valido ma costoso e richiede manodopera specializzata per le saldature.",
    },
    {
      q: "Cos'è l'impianto idraulico a collettore?",
      a: "È lo schema in cui da un collettore centrale (una sorta di pettine) parte una linea dedicata per ogni utenza: rubinetto, doccia, wc, lavatrice. Garantisce pressione costante anche con più prelievi contemporanei, riduce i rischi di perdita ai raccordi e permette di chiudere una singola utenza senza fermare tutto l'impianto.",
    },
    {
      q: "Quando è necessario rifare l'impianto idraulico?",
      a: "Va rifatto quando le tubazioni sono vecchie o in ferro zincato ormai incrostato, in presenza di perdite ricorrenti, cali di pressione o acqua rugginosa. È inoltre l'intervento naturale durante una ristrutturazione del bagno o della cucina, perché richiede tracce nelle pareti e nel massetto.",
    },
    {
      q: "Quanto dura un impianto idraulico?",
      a: "Un impianto realizzato a regola d'arte con tubi in multistrato o PEX ha una durata attesa di 40-50 anni. I vecchi impianti in ferro zincato tendono invece a incrostarsi e corrodersi già dopo 25-30 anni, riducendo portata e qualità dell'acqua.",
    },
  ],
  body: [
    {
      type: "p",
      text: "L'**impianto idraulico** è la rete invisibile che rende vivibile una casa: porta l'acqua potabile dove serve, la scalda e allontana in sicurezza gli scarichi. Un impianto ben progettato garantisce pressione costante, nessuna perdita nascosta e bollette contenute. In questa guida vediamo com'è fatto un **impianto idraulico** civile, quale schema conviene, come scegliere tra multistrato, PEX e rame, quanto costa rifarlo e quando è il momento di intervenire.",
    },
    {
      type: "h2",
      id: "come-fatto",
      text: "Com'è fatto un impianto idraulico civile",
    },
    {
      type: "p",
      text: "Un impianto idraulico domestico si compone di tre sottosistemi distinti. La rete di **adduzione** porta l'acqua fredda dal contatore fino alle utenze; la rete dell'**acqua calda sanitaria** parte dal generatore (caldaia, scaldabagno o pompa di calore) e serve gli stessi punti di prelievo; la rete di **scarico** raccoglie le acque reflue e le convoglia, per gravità, verso la colonna condominiale e la fognatura. A queste si aggiungono gli organi di intercettazione e sicurezza: valvole, riduttore di pressione e, dove previsto, il vaso di espansione.",
    },
    {
      type: "ul",
      items: [
        "**Adduzione**: tubazioni in pressione per l'acqua fredda potabile.",
        "**Acqua calda sanitaria (ACS)**: linea dal generatore ai punti di prelievo.",
        "**Scarichi**: tubi in PVC/PP che lavorano per gravità con la giusta pendenza.",
        "**Collettore e valvole**: distribuzione e intercettazione delle singole utenze.",
        "**Riduttore di pressione**: mantiene la pressione di rete nei valori corretti.",
      ],
    },
    {
      type: "h2",
      id: "schema-collettore",
      text: "Schema a collettore o schema a derivazione?",
    },
    {
      type: "p",
      text: "Esistono due modi di distribuire l'acqua in casa. Nello schema tradizionale **a derivazione** (o in serie) una tubazione principale attraversa la casa e da essa si staccano le derivazioni verso le singole utenze: è semplice ed economico, ma la pressione cala quando più rubinetti sono aperti insieme e i raccordi nascosti nel muro sono potenziali punti di perdita.",
    },
    {
      type: "p",
      text: "Lo **schema a collettore**, oggi lo standard nelle nuove realizzazioni, prevede invece un collettore centrale da cui parte una linea indipendente per ogni utenza, come i raggi di una ruota. Il vantaggio è una pressione stabile anche con prelievi contemporanei, l'assenza di giunzioni sotto traccia e la possibilità di intercettare la singola utenza dal collettore. Costa un po' di più in tubazioni, ma è più affidabile e semplice da manutenere.",
    },
    {
      type: "h3",
      id: "quando-collettore",
      text: "Quando conviene il collettore",
    },
    {
      type: "p",
      text: "Il collettore dà il meglio dove ci sono più bagni, prelievi frequenti e contemporanei o un impianto interamente rifatto. Su piccoli interventi puntuali lo schema a derivazione può ancora bastare, ma appena si aprono le pareti conviene passare al collettore: il sovrapprezzo è modesto rispetto al guadagno in affidabilità.",
    },
    {
      type: "callout",
      title: "Un collettore per bagno e cucina",
      text: "Nelle ristrutturazioni conviene prevedere un collettore per zona (uno per il bagno principale, uno per la cucina e la zona lavanderia). Riduce le tratte, semplifica la manutenzione e permette di isolare un ambiente senza chiudere l'acqua a tutta la casa.",
    },
    {
      type: "h2",
      id: "materiali-tubi",
      text: "Quali tubi scegliere: multistrato, PEX o rame",
    },
    {
      type: "p",
      text: "La scelta del materiale delle tubazioni incide su durata, costo e facilità di posa. Il **ferro zincato**, un tempo diffuso, è ormai superato perché tende a incrostarsi e corrodersi. Oggi la scelta è tra tre materiali principali per l'acqua in pressione.",
    },
    {
      type: "table",
      headers: ["Materiale", "Pro", "Contro", "Costo indicativo al ml"],
      rows: [
        [
          "Multistrato (PEX-Al-PEX)",
          "Stabile, mantiene la forma, poche giunzioni",
          "Raccordi a pressare con attrezzo dedicato",
          "3 - 7 €",
        ],
        [
          "PEX (polietilene reticolato)",
          "Economico, flessibile, ideale per lunghe tratte",
          "Tende a tornare dritto, va fissato bene",
          "2 - 5 €",
        ],
        [
          "Rame",
          "Durevole, igienico, resiste alle alte temperature",
          "Costoso, richiede saldature specializzate",
          "6 - 12 €",
        ],
      ],
    },
    {
      type: "p",
      text: "Per la maggior parte delle case il **multistrato** è il miglior compromesso: unisce la rigidità del metallo alla praticità della plastica e con i raccordi a pressare crea giunzioni sicure e durature. Il **PEX** è perfetto per il riscaldamento a pavimento e le tratte lunghe dal collettore, mentre il **rame** resta una scelta di qualità dove serve robustezza, a patto di affidarsi a un installatore esperto.",
    },
    {
      type: "h3",
      id: "tubi-scarico",
      text: "E per gli scarichi?",
    },
    {
      type: "p",
      text: "Gli scarichi non lavorano in pressione ma per gravità, quindi contano la pendenza corretta e un buon isolamento acustico. Si usano il **PVC** per le derivazioni e il **polipropilene (PP)** insonorizzato per le colonne di scarico, soluzione che riduce il rumore dell'acqua nelle pareti degli ambienti abitati.",
    },
    {
      type: "h2",
      id: "costi",
      text: "Quanto costa l'impianto idraulico?",
    },
    {
      type: "p",
      text: "Il costo si calcola di solito **al punto acqua** (ogni utenza servita da acqua fredda e calda: lavabo, doccia, wc, lavatrice) oppure a corpo per l'intero appartamento. Pesano molto la distanza dalle colonne di scarico, il tipo di schema e le opere murarie.",
    },
    {
      type: "table",
      headers: ["Voce", "Costo indicativo"],
      rows: [
        ["Costo al punto acqua", "90 - 180 €"],
        ["Impianto bagno completo", "1.500 - 3.000 €"],
        ["Impianto appartamento (2 bagni + cucina)", "3.500 - 6.000 €"],
        ["Impianto con schema a collettore e finiture alte", "6.000 - 8.000 €+"],
      ],
    },
    {
      type: "p",
      text: "Le fasi tipiche di un rifacimento seguono un ordine preciso, che conviene conoscere per leggere bene il preventivo:",
    },
    {
      type: "ol",
      items: [
        "Sopralluogo, progetto della rete e posizione dei punti acqua.",
        "Demolizioni e tracce nelle pareti e nel massetto.",
        "Posa delle tubazioni di adduzione, ACS e scarichi con le pendenze corrette.",
        "Collaudo in pressione dell'impianto prima di chiudere le tracce.",
        "Ripristini murari, posa dei sanitari e messa in funzione.",
      ],
    },
    {
      type: "callout",
      title: "Il collaudo in pressione non è un optional",
      text: "Prima di richiudere le tracce, l'impianto va messo in pressione e lasciato sotto controllo per alcune ore. È l'unico modo per scoprire una perdita quando è ancora facile intervenire, invece che dopo aver piastrellato.",
    },
    {
      type: "h2",
      id: "quando-rifarlo",
      text: "Quando rifare o adeguare l'impianto",
    },
    {
      type: "p",
      text: "È il momento di intervenire quando le tubazioni sono **vecchie, in ferro zincato o soggette a perdite ricorrenti**. I segnali tipici sono cali di pressione, acqua rugginosa o torbida ai primi prelievi del mattino, macchie di umidità e consumi anomali. Il rifacimento è quasi sempre parte di una [ristrutturazione del bagno](/ristrutturazioni/ristrutturare-bagno-costi) e va coordinato con gli altri lavori, perché richiede tracce nelle pareti e nel massetto. È anche l'occasione giusta per rivedere lo schema, passare al collettore e predisporre nuove utenze.",
    },
    {
      type: "p",
      text: "Come per l'[impianto elettrico](/impianti/impianto-elettrico-casa), anche quello idraulico va realizzato da un installatore abilitato, che al termine dei lavori rilascia la **dichiarazione di conformità**: il documento che attesta l'esecuzione a regola d'arte. È indispensabile per la sicurezza, per l'allaccio della fornitura e per la compravendita dell'immobile. Su un impianto nascosto nei muri, affidarsi a un professionista qualificato e pretendere il collaudo è la migliore assicurazione contro le perdite di domani.",
    },
  ],
};
