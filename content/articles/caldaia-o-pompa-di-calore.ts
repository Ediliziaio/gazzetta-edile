import type { Article } from "@/lib/content";

export const caldaiaVsPompaCalore: Article = {
  slug: "caldaia-o-pompa-di-calore",
  category: "efficienza-energetica",
  title: "Caldaia a condensazione o pompa di calore: quale conviene",
  metaTitle: "Caldaia o pompa di calore: quale conviene | Gazzetta Edile",
  metaDescription:
    "Caldaia a condensazione o pompa di calore? Confronto su costi, resa, consumi e casa ideale per capire quale conviene e quando passare all'elettrico.",
  abstract:
    "La caldaia a condensazione brucia gas ed è economica da installare, ma dipende dal metano. La pompa di calore usa energia elettrica, rende di più (COP intorno a 3-4) e conviene in case ben isolate, con impianti a bassa temperatura e fotovoltaico. La scelta dipende da coibentazione, terminali e mix energetico.",
  keywordPrimary: "caldaia o pompa di calore",
  keywordsSecondary: [
    "caldaia a condensazione o pompa di calore quale conviene",
    "differenza tra caldaia e pompa di calore",
    "pompa di calore consumi e costi",
    "sostituire caldaia con pompa di calore",
  ],
  author: "marco-ferri",
  publishedAt: "2026-07-25",
  updatedAt: "2026-07-25",
  cover: {
    src: "/covers/caldaia-o-pompa-di-calore.png",
    alt: "Caldaia a condensazione e unità pompa di calore a confronto",
  },
  pillar: false,
  schemaType: "Article",
  related: ["pompe-di-calore-guida", "classe-energetica-ape"],
  faq: [
    {
      q: "Conviene di più la caldaia a condensazione o la pompa di calore?",
      a: "Dipende dalla casa. La pompa di calore conviene in edifici ben isolati con impianti a bassa temperatura (pavimento radiante, ventilconvettori) e, ancora di più, con il fotovoltaico. La caldaia a condensazione resta competitiva in case poco coibentate con radiatori tradizionali o dove manca una potenza elettrica adeguata.",
    },
    {
      q: "Quanto consuma una pompa di calore rispetto a una caldaia?",
      a: "Una pompa di calore restituisce in media 3-4 kWh di calore per ogni kWh elettrico consumato (COP indicativo 3-4), mentre una caldaia a condensazione recupera al massimo circa il 98-108% dell'energia del gas. In condizioni favorevoli la pompa di calore riduce sensibilmente l'energia primaria richiesta.",
    },
    {
      q: "Posso sostituire la caldaia con una pompa di calore senza cambiare i termosifoni?",
      a: "In molti casi sì, ma i radiatori tradizionali lavorano ad alta temperatura e penalizzano la resa della pompa di calore. Meglio verificare il dimensionamento, valutare radiatori più grandi o a bassa temperatura e, dove possibile, migliorare prima l'isolamento dell'involucro.",
    },
    {
      q: "La pompa di calore funziona anche con il freddo intenso?",
      a: "Sì, le pompe di calore moderne lavorano anche con temperature sotto lo zero, ma la resa cala man mano che l'aria esterna si raffredda. Nelle zone molto rigide si usano modelli specifici o sistemi ibridi che affiancano una caldaia per i giorni più freddi.",
    },
    {
      q: "Il sistema ibrido caldaia più pompa di calore ha senso?",
      a: "Spesso sì. Il sistema ibrido combina pompa di calore e caldaia a condensazione e sceglie automaticamente la fonte più conveniente in base a temperatura esterna e costo dell'energia. E una soluzione di transizione utile in case non ancora perfettamente isolate.",
    },
  ],
  body: [
    {
      type: "p",
      text: "Quando si rifà l'impianto di riscaldamento, la domanda ricorrente è una sola: **caldaia o pompa di calore**? Le due tecnologie partono da principi opposti — una brucia gas, l'altra sposta calore usando elettricità — e la convenienza dipende molto dallo stato dell'edificio. In questa guida mettiamo a confronto **caldaia a condensazione** e **pompa di calore** su costi, resa, consumi e casa ideale, senza formule magiche: la scelta giusta cambia da immobile a immobile.",
    },
    {
      type: "h2",
      id: "come-funzionano",
      text: "Come funzionano le due tecnologie",
    },
    {
      type: "p",
      text: "La **caldaia a condensazione** è l'evoluzione della caldaia tradizionale: recupera parte del calore contenuto nei fumi di scarico condensando il vapore acqueo, e per questo raggiunge rendimenti nominali superiori al 100% riferiti al potere calorifico inferiore. Resta però un generatore a combustione: consuma **gas metano** (o GPL) e la sua efficienza reale è massima solo quando lavora a bassa temperatura di ritorno.",
    },
    {
      type: "p",
      text: "La **pompa di calore** non brucia nulla: usa energia elettrica per muovere un fluido refrigerante e trasferire calore dall'esterno (aria, acqua o terreno) all'interno dell'abitazione. Il suo indicatore chiave è il **COP** (coefficiente di prestazione): un COP di 3-4 significa che per ogni kWh elettrico assorbito restituisce 3-4 kWh di calore. Lo stesso apparecchio, invertendo il ciclo, può anche raffrescare d'estate.",
    },
    {
      type: "h3",
      id: "tipi-pompa",
      text: "I principali tipi di pompa di calore",
    },
    {
      type: "ul",
      items: [
        "**Aria-acqua**: la più diffusa nel residenziale, alimenta impianti idronici come pavimento radiante e ventilconvettori.",
        "**Aria-aria**: i classici climatizzatori che scaldano e raffrescano soffiando aria, semplici da installare.",
        "**Geotermica (acqua-acqua o terreno-acqua)**: la più efficiente e stabile, ma con costi e opere di installazione elevati.",
        "**Ibrida**: pompa di calore abbinata a una caldaia a condensazione, con gestione automatica della fonte più conveniente.",
      ],
    },
    {
      type: "h2",
      id: "confronto",
      text: "Caldaia o pompa di calore: il confronto diretto",
    },
    {
      type: "p",
      text: "La tabella riassume le differenze principali con valori indicativi: i numeri reali dipendono da clima, isolamento, tariffe energetiche e dimensionamento dell'impianto.",
    },
    {
      type: "table",
      headers: ["Voce", "Caldaia a condensazione", "Pompa di calore aria-acqua"],
      rows: [
        ["Fonte energetica", "Gas metano o GPL", "Energia elettrica"],
        ["Costo indicativo apparecchio + posa", "2.000 - 4.500 €", "8.000 - 16.000 €"],
        ["Resa / efficienza", "Rendimento circa 98 - 108%", "COP indicativo 3 - 4"],
        ["Costo di esercizio", "Legato al prezzo del gas", "Legato al prezzo dell'elettricità"],
        ["Raffrescamento estivo", "No", "Sì, invertendo il ciclo"],
        ["Casa ideale", "Poco isolata, radiatori tradizionali", "Ben isolata, bassa temperatura"],
      ],
    },
    {
      type: "callout",
      title: "Non confrontare solo il prezzo del kWh",
      text: "Un kWh elettrico costa più di un kWh di gas, ma la pompa di calore ne produce 3-4 di calore per ognuno assorbito. Per capire la convenienza reale bisogna rapportare il costo dell'energia all'efficienza dell'apparecchio, non fermarsi alla tariffa.",
    },
    {
      type: "h2",
      id: "quando-conviene-pompa",
      text: "Quando conviene la pompa di calore",
    },
    {
      type: "p",
      text: "La **pompa di calore** dà il meglio negli edifici che disperdono poco e che lavorano a bassa temperatura. Se l'involucro è ben coibentato — magari dopo un [cappotto termico](/efficienza-energetica/cappotto-termico-guida) — e i terminali sono a pavimento radiante o a ventilconvettori, il COP resta alto e i consumi scendono. L'abbinamento con un [impianto fotovoltaico](/efficienza-energetica/pompe-di-calore-guida) è la combinazione più efficiente: autoproducendo l'elettricità, il costo per kWh di calore crolla e l'autoconsumo aumenta.",
    },
    {
      type: "p",
      text: "Vale la pena considerare la pompa di calore quando ricorrono queste condizioni:",
    },
    {
      type: "ul",
      items: [
        "L'edificio è **ben isolato** o lo diventerà con una riqualificazione dell'involucro.",
        "L'impianto è o può diventare a **bassa temperatura** (pavimento, ventilconvettori, radiatori maggiorati).",
        "È disponibile una **potenza elettrica** adeguata o si può aumentarla senza costi eccessivi.",
        "C'è un **fotovoltaico** in casa o in progetto, che abbatte il costo dell'energia consumata.",
        "Si vuole un unico apparecchio per **riscaldare d'inverno e raffrescare d'estate**.",
      ],
    },
    {
      type: "h2",
      id: "quando-conviene-caldaia",
      text: "Quando conviene ancora la caldaia a condensazione",
    },
    {
      type: "p",
      text: "La **caldaia a condensazione** resta una scelta razionale in diversi scenari. In un appartamento poco isolato con radiatori tradizionali ad alta temperatura, una pompa di calore lavorerebbe con COP basso e consumi elevati, vanificando gran parte del vantaggio. Anche i costi iniziali contano: sostituire una vecchia caldaia con una a condensazione richiede un investimento contenuto e opere minime, mentre la pompa di calore comporta unità esterna, eventuale adeguamento elettrico e revisione dei terminali.",
    },
    {
      type: "p",
      text: "In molti casi la risposta non è o l'una o l'altra, ma **entrambe**: il sistema **ibrido** affianca pompa di calore e caldaia, lasciando a un regolatore la scelta della fonte più conveniente in base alla temperatura esterna e al prezzo dell'energia. È una soluzione di transizione utile per chi non ha ancora completato l'isolamento dell'edificio ma vuole già ridurre i consumi.",
    },
    {
      type: "h2",
      id: "come-scegliere",
      text: "Come scegliere passo per passo",
    },
    {
      type: "p",
      text: "Prima di decidere, conviene ragionare sull'intero sistema edificio-impianto, non solo sul generatore. Ecco un percorso logico da seguire:",
    },
    {
      type: "ol",
      items: [
        "Valuta lo stato dell'**involucro**: se disperde molto, isolare prima migliora ogni scelta successiva.",
        "Analizza i **terminali** esistenti (radiatori, pavimento, ventilconvettori) e la loro temperatura di lavoro.",
        "Verifica la **potenza elettrica** disponibile e la presenza o il progetto di un fotovoltaico.",
        "Fai calcolare da un tecnico il **fabbisogno termico** e il dimensionamento corretto del generatore.",
        "Confronta i **costi di esercizio** stimati sui tuoi consumi reali, non su medie generiche.",
        "Controlla la **classe energetica** dell'immobile e come cambierebbe: incide su comfort e valore, come spieghiamo nella guida su [classe energetica e APE](/efficienza-energetica/classe-energetica-ape).",
      ],
    },
    {
      type: "p",
      text: "Sul piano economico, ricorda che entrambi gli interventi possono rientrare tra i lavori agevolabili dalle **detrazioni fiscali** per l'efficientamento energetico, con aliquote e requisiti che cambiano nel tempo: verifica sempre la normativa vigente prima di pianificare la spesa. La regola di fondo resta semplice: **caldaia o pompa di calore** non ha una risposta universale, ma la pompa di calore diventa tanto più conveniente quanto più la casa è isolata, elettrificata e alimentata da energia autoprodotta.",
    },
  ],
};
