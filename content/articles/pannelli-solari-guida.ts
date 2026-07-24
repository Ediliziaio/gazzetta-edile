import type { Article } from "@/lib/content";

export const pannelliSolariGuida: Article = {
  slug: "pannelli-solari-guida",
  category: "efficienza-energetica",
  title: "Pannelli solari: guida completa 2026 (costi, incentivi, come funzionano)",
  metaTitle: "Pannelli solari: guida completa 2026 | Gazzetta Edile",
  metaDescription:
    "Come funzionano i pannelli solari, quanto costano nel 2026, quali incentivi restano e come si fa manutenzione: la guida completa al fotovoltaico per la casa.",
  abstract:
    "I pannelli solari fotovoltaici trasformano la luce del sole in energia elettrica. Un impianto domestico da 3-6 kW costa oggi tra 5.000 e 12.000 euro, si ripaga in 5-9 anni e taglia la bolletta fino al 60-70%, soprattutto se abbinato a batterie di accumulo e autoconsumo.",
  keywordPrimary: "pannelli solari",
  keywordsSecondary: [
    "impianto fotovoltaico",
    "pannelli fotovoltaici costi",
    "incentivi fotovoltaico 2026",
    "fotovoltaico con accumulo",
  ],
  author: "marco-ferri",
  publishedAt: "2026-07-20",
  updatedAt: "2026-07-24",
  cover: {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=70",
    alt: "Pannelli solari fotovoltaici installati sul tetto di un'abitazione",
  },
  pillar: true,
  schemaType: "Article",
  related: ["impianto-fotovoltaico-costi", "cappotto-termico-guida"],
  faq: [
    {
      q: "Quanto costa mettere i pannelli solari in una casa?",
      a: "Un impianto fotovoltaico domestico chiavi in mano costa in media da 5.000 euro (3 kW) a 12.000 euro (6 kW). Con una batteria di accumulo si aggiungono 3.000-6.000 euro. Il prezzo dipende da potenza, tipo di moduli, tetto e complessità dell'installazione.",
    },
    {
      q: "Quanto si risparmia con i pannelli solari?",
      a: "Con un buon autoconsumo il risparmio in bolletta va dal 40% al 70% annuo. Aggiungendo un accumulo si sfrutta di più l'energia prodotta e si arriva anche oltre il 70%, riducendo l'acquisto di energia dalla rete nelle ore serali.",
    },
    {
      q: "I pannelli solari funzionano anche d'inverno o con nuvole?",
      a: "Sì. I moduli producono energia anche con cielo coperto, seppur in misura ridotta. La resa cala d'inverno per le giornate più corte, ma su base annua un impianto ben esposto in Italia produce mediamente 1.100-1.400 kWh per ogni kW installato.",
    },
    {
      q: "Quanti pannelli servono per una casa?",
      a: "Per una famiglia con consumi di 3.000-4.000 kWh l'anno servono circa 3 kW, cioè 7-8 moduli da 400-450 W. Consumi più alti o la presenza di pompa di calore e auto elettrica richiedono 4-6 kW.",
    },
    {
      q: "Quanto durano i pannelli solari?",
      a: "I moduli fotovoltaici hanno una vita utile di 25-30 anni, con garanzie di rendimento che assicurano l'80-85% della produzione anche dopo 25 anni. L'inverter va in genere sostituito una volta, dopo 10-15 anni.",
    },
  ],
  body: [
    {
      type: "p",
      text: "I **pannelli solari** sono diventati l'intervento di efficienza energetica più richiesto dalle famiglie italiane. Il motivo è semplice: producono energia elettrica gratuita dal sole, tagliano la bolletta e aumentano il valore dell'immobile. Ma prima di installarli è bene capire come funzionano, quanto costano davvero nel 2026 e quali incentivi sono ancora disponibili. In questa guida trovi tutto ciò che serve per decidere con cognizione di causa.",
    },
    {
      type: "h2",
      id: "come-funzionano",
      text: "Come funzionano i pannelli solari",
    },
    {
      type: "p",
      text: "Un **impianto fotovoltaico** trasforma la radiazione solare in energia elettrica sfruttando l'effetto fotovoltaico delle celle in silicio. La corrente continua prodotta dai moduli viene convertita in corrente alternata da un componente chiamato **inverter**, così da poter alimentare gli elettrodomestici di casa. L'energia prodotta e non consumata subito può essere immessa in rete oppure immagazzinata in una batteria di accumulo per l'uso serale.",
    },
    {
      type: "p",
      text: "È importante distinguere il fotovoltaico dal **solare termico**: il primo produce elettricità, il secondo scalda l'acqua sanitaria. Quando si parla genericamente di \"pannelli solari\" per abbattere la bolletta elettrica, ci si riferisce quasi sempre al fotovoltaico.",
    },
    {
      type: "h3",
      id: "componenti",
      text: "I componenti di un impianto",
    },
    {
      type: "ul",
      items: [
        "**Moduli fotovoltaici**: i pannelli veri e propri, oggi in genere da 400-450 W ciascuno.",
        "**Inverter**: converte la corrente e gestisce l'impianto; ne esistono di stringa e con ottimizzatori.",
        "**Struttura di montaggio**: fissa i moduli al tetto con la giusta inclinazione ed esposizione.",
        "**Sistema di accumulo** (opzionale): batterie al litio che conservano l'energia per la sera.",
        "**Sistema di monitoraggio**: app o portale per controllare produzione e consumi in tempo reale.",
      ],
    },
    {
      type: "h2",
      id: "quanto-costa",
      text: "Quanto costa un impianto fotovoltaico nel 2026",
    },
    {
      type: "p",
      text: "Il costo di un impianto dipende soprattutto dalla **potenza** (misurata in kW) e dalla presenza o meno di un accumulo. I prezzi degli ultimi anni sono scesi grazie alla maturità della tecnologia. Ecco un quadro orientativo dei costi chiavi in mano, IVA agevolata al 10% inclusa.",
    },
    {
      type: "table",
      headers: ["Potenza", "Moduli indicativi", "Costo senza accumulo", "Costo con accumulo"],
      rows: [
        ["3 kW", "7-8 moduli", "5.000 - 7.000 €", "8.000 - 12.000 €"],
        ["4,5 kW", "10-11 moduli", "7.000 - 9.500 €", "10.500 - 15.000 €"],
        ["6 kW", "13-15 moduli", "9.000 - 12.000 €", "13.000 - 18.000 €"],
      ],
    },
    {
      type: "callout",
      title: "Attenzione ai preventivi troppo bassi",
      text: "Un prezzo molto inferiore alla media può nascondere moduli di bassa qualità, inverter sottodimensionato o assenza di garanzie sull'installazione. Chiedi sempre schede tecniche, garanzie e referenze.",
    },
    {
      type: "h2",
      id: "quanto-si-risparmia",
      text: "Quanto si risparmia davvero",
    },
    {
      type: "p",
      text: "Il risparmio dipende dall'**autoconsumo**, cioè da quanta energia prodotta riesci a usare direttamente. Più consumi durante il giorno (o accumuli per la sera), più conviene. In condizioni normali, una famiglia che installa un impianto da 3-4 kW abbatte la bolletta elettrica del 40-70%. Con l'accumulo l'autoconsumo sale spesso oltre il 70-80%, perché anche l'energia serale arriva dal sole immagazzinato di giorno.",
    },
    {
      type: "p",
      text: "Il **tempo di ritorno** dell'investimento, considerando risparmio in bolletta e incentivi, è oggi di circa 5-9 anni per un impianto ben dimensionato. Dopo, l'energia autoprodotta è di fatto gratuita per tutta la vita residua dei moduli.",
    },
    {
      type: "h2",
      id: "incentivi",
      text: "Incentivi e detrazioni per il fotovoltaico",
    },
    {
      type: "p",
      text: "Nel 2026 il fotovoltaico residenziale beneficia principalmente della **detrazione fiscale per ristrutturazione**, che consente di recuperare in dichiarazione dei redditi una quota della spesa in dieci anni. A questa si aggiunge il meccanismo dello **scambio sul posto** o del ritiro dedicato per valorizzare l'energia immessa in rete, e la possibilità di aderire a una **comunità energetica rinnovabile (CER)** per ottenere incentivi sull'energia condivisa. Le aliquote e i requisiti cambiano nel tempo: verifica sempre la normativa aggiornata prima di firmare.",
    },
    {
      type: "ol",
      items: [
        "Verifica i consumi annui reali leggendo le bollette degli ultimi 12 mesi.",
        "Richiedi almeno tre preventivi confrontabili a parità di potenza e componenti.",
        "Valuta l'accumulo in base ai tuoi consumi serali e alla disponibilità di incentivi.",
        "Controlla titoli abilitativi e vincoli (es. edifici in centro storico o vincolati).",
        "Verifica garanzie su moduli, inverter e installazione prima della firma.",
      ],
    },
    {
      type: "h2",
      id: "manutenzione",
      text: "Manutenzione e durata nel tempo",
    },
    {
      type: "p",
      text: "Il fotovoltaico richiede poca manutenzione. È utile una **pulizia periodica** dei moduli (una o due volte l'anno, di più in zone polverose) e un controllo dell'inverter e dei collegamenti. Il monitoraggio da app segnala subito eventuali cali di produzione. I moduli durano 25-30 anni; l'inverter va in genere sostituito una volta nella vita dell'impianto, dopo 10-15 anni.",
    },
    {
      type: "h2",
      id: "conviene",
      text: "Conviene installare i pannelli solari?",
    },
    {
      type: "p",
      text: "Per la maggior parte delle famiglie con un tetto ben esposto, il fotovoltaico conviene: riduce stabilmente la bolletta, protegge dagli aumenti del prezzo dell'energia e valorizza l'immobile. Conviene ancora di più abbinandolo ad altri interventi di **efficienza energetica**, come il [cappotto termico](/efficienza-energetica/cappotto-termico-guida) o una pompa di calore, che riducono i consumi complessivi dell'edificio. Il consiglio è partire da un'analisi dei consumi e affidarsi a un installatore qualificato con referenze verificabili.",
    },
  ],
};
