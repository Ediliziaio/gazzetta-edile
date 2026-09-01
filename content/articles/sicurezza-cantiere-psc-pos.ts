import type { Article } from "@/lib/content";

export const sicurezzaCantiere: Article = {
  slug: "sicurezza-cantiere-psc-pos",
  category: "normative",
  title: "Sicurezza in cantiere: PSC, POS e PiMUS spiegati",
  metaTitle: "Sicurezza cantiere: PSC, POS, PiMUS | Gazzetta Edile",
  metaDescription:
    "Sicurezza in cantiere: cosa sono PSC, POS, PiMUS e DUVRI, chi li redige e quando servono, con i riferimenti al D.Lgs. 81/2008 e le figure obbligatorie.",
  abstract:
    "La sicurezza in cantiere si regge su documenti distinti: il PSC lo predispone il coordinatore quando operano più imprese, il POS lo redige ogni impresa esecutrice, il PiMUS riguarda i ponteggi. Il quadro di riferimento resta il D.Lgs. 81/2008. Conoscere ruoli e obblighi riduce rischi, sanzioni e sospensioni dei lavori.",
  keywordPrimary: "sicurezza in cantiere",
  keywordsSecondary: [
    "differenza PSC e POS",
    "PiMUS ponteggi",
    "coordinatore per la sicurezza",
    "DPI in cantiere",
  ],
  author: "chiara-bruno",
  publishedAt: "2026-07-25",
  updatedAt: "2026-07-25",
  cover: {
    src: "/covers/sicurezza-cantiere-psc-pos.png",
    alt: "Operai in cantiere con dispositivi di sicurezza e ponteggio",
  },
  pillar: false,
  schemaType: "Article",
  related: ["permessi-edilizi-cila-scia", "ristrutturare-casa-costi-2026"],
  faq: [
    {
      q: "Qual e la differenza tra PSC e POS?",
      a: "Il PSC (Piano di Sicurezza e Coordinamento) e il documento del cantiere nel suo insieme, predisposto dal coordinatore quando operano più imprese. Il POS (Piano Operativo di Sicurezza) e invece il documento della singola impresa esecutrice, che descrive come essa organizza le proprie lavorazioni in sicurezza.",
    },
    {
      q: "Che cos e il PiMUS e quando serve?",
      a: "Il PiMUS (Piano di Montaggio, Uso e Smontaggio) e il documento che riguarda i ponteggi: descrive come vanno montati, usati e smontati in sicurezza. Serve quando in cantiere si impiegano ponteggi ed e redatto dal datore di lavoro dell'impresa che li utilizza, secondo il D.Lgs. 81/2008.",
    },
    {
      q: "Chi nomina il coordinatore per la sicurezza?",
      a: "Nei cantieri in cui e prevista la presenza di più imprese, il committente o il responsabile dei lavori designa il coordinatore per la progettazione e quello per l'esecuzione dei lavori. Sono figure tecniche con requisiti specifici, previste dal Titolo IV del D.Lgs. 81/2008.",
    },
    {
      q: "I DPI in cantiere sono sempre obbligatori?",
      a: "I dispositivi di protezione individuale vanno usati quando i rischi non possono essere eliminati o ridotti a sufficienza con misure collettive. Il datore di lavoro li fornisce e ne cura la manutenzione, e il lavoratore ha l'obbligo di utilizzarli correttamente secondo la formazione ricevuta.",
    },
    {
      q: "Cosa si rischia senza i documenti di sicurezza?",
      a: "La mancanza o l'inadeguatezza dei documenti di sicurezza puo comportare sanzioni per le figure responsabili e, nei casi più gravi, la sospensione dei lavori. Prima ancora delle sanzioni, l'assenza di pianificazione espone i lavoratori a rischi concreti di infortunio.",
    },
  ],
  body: [
    {
      type: "p",
      text: "La **sicurezza in cantiere** non e un adempimento burocratico da sbrigare all'ultimo momento, ma il sistema di regole e documenti che protegge chi lavora e mette al riparo imprese e committenti da sanzioni e blocchi. Il riferimento normativo principale e il **D.Lgs. 81/2008**, il cosiddetto Testo Unico sulla salute e sicurezza sul lavoro, che al Titolo IV disciplina in modo specifico i cantieri temporanei o mobili. In questa guida chiariamo cosa sono **PSC**, **POS** e **PiMUS**, chi li redige e quando servono, senza dimenticare le figure e i dispositivi che rendono il cantiere davvero sicuro.",
    },
    {
      type: "h2",
      id: "documenti-in-breve",
      text: "I documenti della sicurezza in breve",
    },
    {
      type: "p",
      text: "Ogni documento risponde a una domanda diversa: chi coordina il cantiere nel suo complesso, come lavora la singola impresa, come si gestiscono i ponteggi, come si affrontano i rischi da interferenza. Ecco un quadro di sintesi, utile per non confondere sigle che spesso vengono usate come sinonimi ma che hanno funzioni ben distinte.",
    },
    {
      type: "table",
      headers: ["Documento", "A cosa serve", "Chi lo redige", "Quando serve"],
      rows: [
        [
          "PSC",
          "Pianifica la sicurezza dell'intero cantiere",
          "Coordinatore per la progettazione",
          "Quando operano più imprese",
        ],
        [
          "POS",
          "Organizza le lavorazioni della singola impresa",
          "Datore di lavoro dell'impresa esecutrice",
          "Per ogni impresa in cantiere",
        ],
        [
          "PiMUS",
          "Regola montaggio, uso e smontaggio dei ponteggi",
          "Datore di lavoro che usa i ponteggi",
          "Quando si impiegano ponteggi",
        ],
        [
          "DUVRI",
          "Gestisce i rischi da interferenza tra più attività",
          "Datore di lavoro committente",
          "Appalti e servizi con interferenze",
        ],
      ],
    },
    {
      type: "h2",
      id: "psc",
      text: "Che cos e il PSC e quando e obbligatorio?",
    },
    {
      type: "p",
      text: "Il **PSC** (Piano di Sicurezza e Coordinamento) e il documento che guarda al cantiere nel suo insieme. Secondo il **D.Lgs. 81/2008**, va predisposto quando e prevista la presenza, anche non contemporanea, di **più imprese esecutrici**. A redigerlo e il **coordinatore per la progettazione**, designato dal committente o dal responsabile dei lavori. Il piano analizza i rischi legati al contesto e alle lavorazioni, definisce le misure di prevenzione, il cronoprogramma e le regole di coordinamento tra le imprese presenti.",
    },
    {
      type: "p",
      text: "Il PSC non e un modello da copiare: deve essere **specifico per quel cantiere**, tenendo conto della sua conformazione, delle fasi di lavoro e delle possibili sovrapposizioni tra squadre diverse. La scelta del titolo edilizio corretto e a monte di tutto: se hai dubbi su quale pratica serva per il tuo intervento, puoi partire dalla nostra guida su [CILA, SCIA e permesso di costruire](/normative/permessi-edilizi-cila-scia).",
    },
    {
      type: "h2",
      id: "pos",
      text: "POS: il piano della singola impresa",
    },
    {
      type: "p",
      text: "Il **POS** (Piano Operativo di Sicurezza) e il documento della **singola impresa esecutrice**. Mentre il PSC guarda al cantiere nel suo complesso, il POS scende nel dettaglio di come quella specifica impresa organizza le proprie lavorazioni: attrezzature impiegate, sostanze utilizzate, procedure di lavoro, misure di prevenzione adottate. Lo redige il **datore di lavoro** dell'impresa e va considerato, di fatto, come un piano complementare e coerente con il PSC, quando quest ultimo e presente.",
    },
    {
      type: "h3",
      id: "differenza-psc-pos",
      text: "La differenza tra PSC e POS in pratica",
    },
    {
      type: "p",
      text: "Per fissare la **differenza tra PSC e POS**: il primo e uno solo per cantiere e riguarda il coordinamento fra tutte le imprese, il secondo e uno per ciascuna impresa e riguarda le sue lavorazioni. Confonderli e un errore frequente. In sintesi:",
    },
    {
      type: "ul",
      items: [
        "Il PSC e unico e lo predispone il coordinatore quando operano più imprese.",
        "Il POS e redatto da ogni impresa esecutrice per le proprie attività.",
        "Il POS deve essere coerente con le previsioni del PSC, quando questo esiste.",
        "Entrambi vanno tenuti aggiornati rispetto all'andamento reale del cantiere.",
      ],
    },
    {
      type: "h2",
      id: "pimus-dpi",
      text: "PiMUS e DPI: ponteggi e protezione dei lavoratori",
    },
    {
      type: "p",
      text: "Il **PiMUS** (Piano di Montaggio, Uso e Smontaggio) e il documento dedicato ai **ponteggi**, tra le attrezzature più critiche del cantiere. Descrive le fasi di montaggio, le modalita d'uso in sicurezza e lo smontaggio, ed e redatto dal datore di lavoro dell'impresa che utilizza il ponteggio, in coerenza con il **D.Lgs. 81/2008**. Accanto ai ponteggi, un ruolo centrale spetta ai **DPI in cantiere**, i dispositivi di protezione individuale.",
    },
    {
      type: "p",
      text: "I **DPI** entrano in gioco quando i rischi non possono essere eliminati o ridotti a sufficienza con misure di protezione collettiva. Il datore di lavoro li fornisce, ne verifica l'idoneita e cura la manutenzione, mentre il lavoratore ha il dovere di utilizzarli in modo corretto. Tra i più comuni:",
    },
    {
      type: "ul",
      items: [
        "Elmetto di protezione contro la caduta di materiali dall'alto.",
        "Calzature antinfortunistiche con puntale e suola adeguata.",
        "Imbracatura e sistemi anticaduta per i lavori in quota.",
        "Guanti, occhiali e protezioni per vie respiratorie e udito secondo la lavorazione.",
      ],
    },
    {
      type: "h2",
      id: "figure-obblighi",
      text: "Chi fa cosa: figure e obblighi in cantiere",
    },
    {
      type: "p",
      text: "La sicurezza funziona quando ogni figura conosce il proprio ruolo. Il **committente** e il soggetto per conto del quale si realizza l'opera e, insieme al **responsabile dei lavori**, ha compiti di verifica e designazione. Nei cantieri con più imprese nomina il **coordinatore per la progettazione** e il **coordinatore per l'esecuzione**, figure tecniche previste dal Titolo IV del **D.Lgs. 81/2008**. Le **imprese esecutrici** e i **lavoratori autonomi** attuano le misure previste, ciascuno per la propria parte.",
    },
    {
      type: "p",
      text: "In termini generali, l'organizzazione degli obblighi puo essere letta come una sequenza logica di passaggi:",
    },
    {
      type: "ol",
      items: [
        "Il committente valuta l'intervento e, dove serve, designa i coordinatori.",
        "Il coordinatore per la progettazione predispone il PSC.",
        "Ogni impresa esecutrice redige il proprio POS coerente con il PSC.",
        "Chi usa ponteggi predispone il PiMUS prima del montaggio.",
        "Il coordinatore per l'esecuzione vigila sul coordinamento durante i lavori.",
      ],
    },
    {
      type: "callout",
      title: "Attenzione alle sigle",
      text: "PSC, POS e PiMUS non sono intercambiabili e non si sostituiscono a vicenda: rispondono a esigenze diverse e possono coesistere nello stesso cantiere. Affidarsi a un tecnico qualificato per predisporli in modo specifico, e non con modelli generici, e il modo migliore per rispettare il D.Lgs. 81/2008 ed evitare contestazioni.",
    },
    {
      type: "h2",
      id: "rischi-sanzioni",
      text: "Cosa si rischia senza i documenti di sicurezza",
    },
    {
      type: "p",
      text: "La mancanza o l'inadeguatezza dei documenti di sicurezza non e un dettaglio formale. Sul piano normativo puo comportare **sanzioni** a carico delle figure responsabili e, nei casi più gravi, provvedimenti che arrivano fino alla **sospensione dei lavori**. Ma il rischio più serio e un altro: senza pianificazione, i lavoratori sono esposti a pericoli concreti, dagli infortuni sul ponteggio alle cadute dall'alto. La sicurezza, in questo senso, e anche una scelta di buona organizzazione del cantiere.",
    },
    {
      type: "p",
      text: "Come per la scelta del titolo edilizio, la regola d'oro e affidarsi per tempo a professionisti abilitati e non improvvisare. Se stai pianificando un intervento importante e vuoi avere un quadro dei costi e delle fasi, puoi leggere anche la nostra guida su [quanto costa ristrutturare casa](/ristrutturazioni/ristrutturare-casa-costi-2026): budget, tempi e sicurezza vanno pensati insieme, fin dall'inizio del progetto.",
    },
  ],
};
