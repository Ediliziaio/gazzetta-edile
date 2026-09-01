import type { Article } from "@/lib/content";

export const casaDomotica: Article = {
  slug: "casa-domotica-guida",
  category: "tecnologie-e-innovazione",
  title: "Casa domotica: cosa si può automatizzare e quanto costa",
  metaTitle: "Casa domotica: costi e cosa automatizzare | Gazzetta Edile",
  metaDescription:
    "Cosa si può automatizzare in una casa domotica, i sistemi KNX e wireless, quanto costa un impianto domotico e da dove conviene partire.",
  abstract:
    "La casa domotica automatizza luci, clima, tapparelle, sicurezza e consumi energetici tramite un impianto centralizzato o dispositivi smart. Un sistema wireless su singole stanze parte da poche centinaia di euro, mentre un impianto cablato KNX per tutta l'abitazione costa in media 5.000-15.000 euro. La spesa dipende dalle funzioni e dalla tecnologia scelta.",
  keywordPrimary: "casa domotica",
  keywordsSecondary: [
    "domotica costi",
    "impianto domotico",
    "smart home",
    "KNX",
  ],
  author: "marco-ferri",
  publishedAt: "2026-07-25",
  updatedAt: "2026-07-25",
  cover: {
    src: "/covers/casa-domotica-guida.png",
    alt: "Sistema domotico che controlla luci e clima di casa",
  },
  pillar: false,
  schemaType: "Article",
  related: ["impianto-elettrico-casa", "migliori-gestionali-edilizia"],
  faq: [
    {
      q: "Quanto costa rendere una casa domotica?",
      a: "Dipende dalla tecnologia. Con dispositivi wireless si parte da 300-800 euro per automatizzare singole funzioni di una stanza. Un impianto domotico wireless completo per un appartamento costa in media 3.000-6.000 euro, mentre un sistema cablato KNX per tutta l'abitazione va dai 5.000 ai 15.000 euro e oltre.",
    },
    {
      q: "Che differenza c'è tra domotica cablata e wireless?",
      a: "La domotica cablata (come KNX) usa un bus dedicato posato durante la ristrutturazione: è affidabile, scalabile e adatta a nuove costruzioni. La domotica wireless comunica via radio (Zigbee, Z-Wave, Wi-Fi) e si installa senza opere murarie, ideale per case già finite ma con qualche limite di robustezza e integrazione.",
    },
    {
      q: "Cos'è lo standard KNX?",
      a: "KNX è lo standard internazionale aperto per la domotica cablata. Fa dialogare su un unico bus prodotti di marche diverse per gestire luci, clima, tapparelle, carichi e scenari. È il riferimento per gli impianti professionali perché garantisce interoperabilità e durata nel tempo, ma richiede progettazione e installazione qualificate.",
    },
    {
      q: "La domotica fa davvero risparmiare energia?",
      a: "Sì, se orientata alla gestione dei consumi. Termoregolazione per zone, spegnimento automatico dei carichi, integrazione con fotovoltaico e monitoraggio in tempo reale riducono gli sprechi. Il risparmio in bolletta si stima tra il 10% e il 30%, in funzione delle abitudini e delle funzioni attivate.",
    },
  ],
  body: [
    {
      type: "p",
      text: "La **casa domotica** non è più un lusso da fiera tecnologica: è una scelta concreta per chi costruisce o ristruttura oggi. Automatizzare luci, clima, tapparelle, sicurezza e consumi significa più comfort, più sicurezza e bollette più leggere. Ma cosa si può davvero automatizzare, quali tecnologie esistono e soprattutto quanto costa un **impianto domotico**? In questa guida mettiamo ordine tra funzioni, sistemi cablati e wireless, costi con forbici realistiche e consigli su da dove partire.",
    },
    {
      type: "h2",
      id: "cosa-e",
      text: "Cos'è la domotica e come funziona",
    },
    {
      type: "p",
      text: "La domotica è l'insieme delle tecnologie che rendono automatica e centralizzata la gestione degli impianti di casa. Il principio è semplice: sensori e comandi raccolgono informazioni (temperatura, presenza, luminosità), un'unità di controllo elabora le regole e gli attuatori eseguono le azioni (accendere, spegnere, aprire, regolare). Il tutto è governabile da interruttori intelligenti, app su smartphone o assistenti vocali. Rispetto a un impianto tradizionale, la **smart home** aggiunge logica e coordinamento: le funzioni non lavorano più isolate, ma dialogano tra loro in **scenari**.",
    },
    {
      type: "p",
      text: "La domotica poggia sull'impianto elettrico: prima di parlare di automazione va garantita una base a norma e ben dimensionata. Chi ristruttura dovrebbe coordinare i due interventi, come spieghiamo nella guida all'[impianto elettrico di casa](/impianti/impianto-elettrico-casa).",
    },
    {
      type: "h2",
      id: "cosa-automatizzare",
      text: "Cosa si può automatizzare in casa?",
    },
    {
      type: "p",
      text: "Le funzioni automatizzabili sono molte e si possono attivare in modo graduale. Ecco le più diffuse e utili nella pratica quotidiana:",
    },
    {
      type: "ul",
      items: [
        "**Illuminazione**: accensione per presenza, regolazione dell'intensità, scenari luce e spegnimento automatico.",
        "**Clima e riscaldamento**: termoregolazione per zone, programmazione oraria e integrazione con pompa di calore.",
        "**Tapparelle e tende**: apertura e chiusura per orario, sole o temperatura, con simulazione di presenza.",
        "**Sicurezza**: antifurto, videosorveglianza, sensori porte e finestre, rilevatori di fumo e allagamento.",
        "**Gestione energia**: monitoraggio dei consumi, distacco carichi e integrazione con fotovoltaico e accumulo.",
        "**Accessi e comfort**: serrature smart, videocitofono, controllo remoto di elettrodomestici e prese comandate.",
      ],
    },
    {
      type: "table",
      headers: ["Funzione", "Cosa fa", "Beneficio principale"],
      rows: [
        ["Illuminazione smart", "Luci per presenza e scenari", "Comfort e risparmio"],
        ["Termoregolazione", "Clima gestito per zone", "Efficienza energetica"],
        ["Tapparelle motorizzate", "Movimento automatico", "Comfort e schermatura solare"],
        ["Antifurto e videosorveglianza", "Allarme e telecamere", "Sicurezza"],
        ["Gestione consumi", "Monitoraggio e distacco carichi", "Bolletta più bassa"],
      ],
    },
    {
      type: "h2",
      id: "cablata-o-wireless",
      text: "Domotica cablata o wireless: quale scegliere?",
    },
    {
      type: "p",
      text: "La prima grande scelta è tra sistema cablato e sistema wireless. Non esiste una risposta valida per tutti: dipende dallo stato dell'immobile, dal budget e dagli obiettivi.",
    },
    {
      type: "h3",
      id: "cablata",
      text: "Domotica cablata (KNX)",
    },
    {
      type: "p",
      text: "La domotica cablata utilizza un **bus** dedicato, un cavo aggiuntivo che collega tutti i dispositivi. Lo standard di riferimento è **KNX**, aperto e interoperabile tra marche diverse. È la soluzione più robusta, scalabile e duratura, ideale per nuove costruzioni e ristrutturazioni importanti, quando è possibile posare i cavi. Richiede progettazione e installazione qualificate, con un costo iniziale più alto ma minore obsolescenza nel tempo.",
    },
    {
      type: "h3",
      id: "wireless",
      text: "Domotica wireless",
    },
    {
      type: "p",
      text: "La domotica wireless comunica via radio con protocolli come **Zigbee**, Z-Wave, Bluetooth o Wi-Fi. Si installa senza opere murarie, quindi è perfetta per case già finite e per interventi graduali. È più economica da avviare e flessibile, ma può soffrire di interferenze, dipendenza dal cloud dei produttori e minore uniformità quando si mescolano troppe marche.",
    },
    {
      type: "callout",
      title: "Regola pratica",
      text: "Se stai ristrutturando e apri le pareti, valuta seriamente il cablato KNX: il costo marginale dei cavi è basso e ti eviti limiti futuri. Se la casa è già finita e vuoi partire da poche funzioni, il wireless è la via più rapida ed economica.",
    },
    {
      type: "h2",
      id: "costi",
      text: "Quanto costa un impianto domotico",
    },
    {
      type: "p",
      text: "I **costi della domotica** variano molto in base a tecnologia, numero di funzioni e superficie. Si può partire da poche centinaia di euro per automatizzare una stanza con dispositivi wireless, fino a decine di migliaia di euro per un impianto KNX completo in una villa. Ecco alcuni valori indicativi di mercato:",
    },
    {
      type: "table",
      headers: ["Soluzione", "Costo indicativo"],
      rows: [
        ["Kit wireless per singola stanza", "300 - 800 €"],
        ["Impianto wireless appartamento", "3.000 - 6.000 €"],
        ["Impianto cablato KNX appartamento", "5.000 - 10.000 €"],
        ["Impianto KNX villa (tutte le funzioni)", "10.000 - 15.000 €+"],
      ],
    },
    {
      type: "p",
      text: "Alle cifre vanno aggiunte progettazione, programmazione e configurazione degli scenari, che su un sistema cablato incidono in modo significativo. Interventi di efficienza energetica e domotica possono inoltre rientrare in agevolazioni fiscali: conviene verificarne la disponibilità aggiornata prima di avviare i lavori.",
    },
    {
      type: "h2",
      id: "da-dove-partire",
      text: "Da dove partire: la roadmap in pratica",
    },
    {
      type: "p",
      text: "Per non sprecare budget conviene procedere con metodo, per priorità e non per moda. Ecco un percorso ragionato:",
    },
    {
      type: "ol",
      items: [
        "**Definisci gli obiettivi**: comfort, risparmio energetico o sicurezza. Le priorità guidano le scelte tecniche.",
        "**Verifica l'impianto elettrico**: assicurati che sia a norma e predisposto, altrimenti aggiornalo prima.",
        "**Scegli la tecnologia**: cablato KNX in ristrutturazione, wireless su case finite o interventi graduali.",
        "**Parti dalle funzioni ad alto impatto**: illuminazione, termoregolazione e sicurezza rendono subito.",
        "**Affidati a un installatore qualificato**: progettazione e programmazione fanno la differenza sul risultato.",
        "**Prevedi la scalabilità**: lascia margine per aggiungere funzioni in futuro senza rifare tutto.",
      ],
    },
    {
      type: "p",
      text: "La domotica non è un acquisto una tantum ma un sistema che cresce con la casa e le abitudini di chi la vive. Anche per le imprese edili è un tema sempre più centrale: saperla proporre e gestire, magari con l'aiuto dei [migliori gestionali per l'edilizia](/tecnologie-e-innovazione/migliori-gestionali-edilizia), diventa un vantaggio competitivo. Pianificare bene oggi significa una casa più efficiente, sicura e pronta per il futuro, senza spese inutili.",
    },
  ],
};
