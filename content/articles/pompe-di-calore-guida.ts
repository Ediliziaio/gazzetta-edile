import type { Article } from "@/lib/content";

export const pompeDiCaloreGuida: Article = {
  slug: "pompe-di-calore-guida",
  category: "efficienza-energetica",
  title: "Pompe di calore: come funzionano, costi e quando convengono",
  metaTitle: "Pompe di calore: come funzionano e costi 2026 | Gazzetta Edile",
  metaDescription:
    "Guida alle pompe di calore nel 2026: come funzionano, tipi (aria-acqua, aria-aria, geotermica), costi di acquisto e gestione, resa e quando convengono davvero.",
  abstract:
    "La pompa di calore è un impianto che riscalda, raffresca e produce acqua calda spostando il calore presente nell'aria, nell'acqua o nel terreno, con consumi elettrici ridotti. Un impianto aria-acqua per una casa costa in media 8.000-16.000 euro e conviene soprattutto in edifici ben isolati e con fotovoltaico.",
  keywordPrimary: "pompe di calore",
  keywordsSecondary: [
    "come funziona la pompa di calore",
    "pompa di calore costi",
    "pompa di calore aria acqua",
    "pompa di calore conviene",
  ],
  author: "marco-ferri",
  publishedAt: "2026-07-25",
  updatedAt: "2026-07-25",
  cover: {
    src: "https://images.unsplash.com/photo-1631545806609-c2b999be5aeb?auto=format&fit=crop&w=1200&q=70",
    alt: "Unità esterna di una pompa di calore installata a parete di un'abitazione",
  },
  pillar: false,
  schemaType: "Article",
  related: ["pannelli-solari-guida", "cappotto-termico-guida"],
  faq: [
    {
      q: "Come funziona una pompa di calore?",
      a: "La pompa di calore sposta il calore già presente nell'ambiente (aria, acqua o terreno) verso l'interno della casa, usando energia elettrica solo per far funzionare il ciclo. Per ogni kWh elettrico consumato ne restituisce in media 3-5 di calore, ed è per questo molto più efficiente delle caldaie tradizionali.",
    },
    {
      q: "Quanto costa una pompa di calore?",
      a: "Una pompa di calore aria-acqua per una casa costa in media 8.000-16.000 euro installata, in base a potenza e tipo di impianto. Le soluzioni geotermiche costano di più per via delle sonde nel terreno, mentre i climatizzatori aria-aria partono da cifre inferiori.",
    },
    {
      q: "La pompa di calore conviene con i termosifoni?",
      a: "Conviene di più con impianti a bassa temperatura come il riscaldamento a pavimento. Con i termosifoni tradizionali funziona, ma rende meno: spesso servono radiatori sovradimensionati o a bassa temperatura. In edifici ben isolati il rendimento migliora sensibilmente.",
    },
    {
      q: "Pompa di calore e fotovoltaico: conviene abbinarli?",
      a: "Sì, è l'abbinamento ideale. Il fotovoltaico produce l'energia elettrica che alimenta la pompa di calore, riducendo drasticamente i costi di riscaldamento e raffrescamento. Con un buon autoconsumo la casa diventa in gran parte autosufficiente dal punto di vista energetico.",
    },
  ],
  body: [
    {
      type: "p",
      text: "Le **pompe di calore** sono diventate il cuore della casa efficiente: riscaldano d'inverno, raffrescano d'estate e producono acqua calda sanitaria, il tutto con consumi elettrici contenuti. Sostituiscono la caldaia a gas e, abbinate al [fotovoltaico](/efficienza-energetica/pannelli-solari-guida), permettono di avvicinarsi all'autosufficienza energetica. In questa guida vediamo come funzionano, i tipi disponibili, i costi di acquisto e gestione e in quali casi convengono davvero.",
    },
    {
      type: "h2",
      id: "come-funziona",
      text: "Come funziona una pompa di calore",
    },
    {
      type: "p",
      text: "A differenza di una caldaia, che **produce** calore bruciando gas, la pompa di calore **sposta** il calore già presente nell'ambiente esterno (aria, acqua o terreno) verso l'interno dell'abitazione. Per farlo utilizza un ciclo frigorifero e un compressore alimentato a energia elettrica. Il grande vantaggio è l'efficienza: per ogni kWh elettrico consumato, una buona pompa di calore restituisce in media **3-5 kWh di calore**. Questo rapporto è misurato dal **COP** (Coefficient of Performance) in riscaldamento e dall'**EER** in raffrescamento: più alti sono, più l'impianto è efficiente.",
    },
    {
      type: "h2",
      id: "tipi",
      text: "I tipi di pompa di calore",
    },
    {
      type: "p",
      text: "Le pompe di calore si distinguono in base alla sorgente da cui prelevano il calore e al modo in cui lo distribuiscono in casa:",
    },
    {
      type: "ul",
      items: [
        "**Aria-acqua**: preleva calore dall'aria e lo cede all'acqua dell'impianto (pavimento, radiatori, acqua sanitaria). È la più diffusa nelle abitazioni.",
        "**Aria-aria**: preleva calore dall'aria e lo distribuisce come aria calda o fredda; sono i comuni climatizzatori. Non produce acqua calda sanitaria.",
        "**Geotermica (terreno-acqua)**: sfrutta il calore stabile del sottosuolo tramite sonde. Molto efficiente ma con costi di installazione più alti.",
        "**Acqua-acqua**: usa l'acqua di falda come sorgente; ottime prestazioni dove è disponibile una fonte idrica adatta.",
      ],
    },
    {
      type: "h2",
      id: "costi",
      text: "Quanto costa una pompa di calore",
    },
    {
      type: "p",
      text: "Il costo dipende dalla tipologia, dalla potenza e dalla complessità dell'installazione. Ecco i valori medi orientativi, installazione inclusa.",
    },
    {
      type: "table",
      headers: ["Tipo", "Costo indicativo", "Note"],
      rows: [
        ["Aria-aria (climatizzatore)", "2.000 - 6.000 €", "Solo clima, no acqua sanitaria"],
        ["Aria-acqua", "8.000 - 16.000 €", "Soluzione più comune per la casa"],
        ["Geotermica", "15.000 - 30.000 €", "Alta efficienza, sonde nel terreno"],
      ],
    },
    {
      type: "callout",
      title: "Occhio ai consumi elettrici",
      text: "La pompa di calore sposta la spesa dal gas all'elettricità. Per questo l'abbinamento con il fotovoltaico è così vantaggioso: l'energia autoprodotta alimenta la pompa e abbatte i costi di gestione.",
    },
    {
      type: "h2",
      id: "resa",
      text: "Resa, impianto e isolamento",
    },
    {
      type: "p",
      text: "La resa di una pompa di calore dipende molto dal **tipo di impianto** e dall'**isolamento** dell'edificio. Dà il meglio con sistemi a **bassa temperatura**, come il riscaldamento a pavimento, che richiedono acqua meno calda e mantengono alto il COP. Con i termosifoni tradizionali funziona comunque, ma con rendimenti inferiori: spesso conviene affiancarla a radiatori a bassa temperatura o ventilconvettori. In un edificio ben isolato — magari dopo un intervento di [cappotto termico](/efficienza-energetica/cappotto-termico-guida) e la sostituzione degli infissi — il fabbisogno cala e la pompa lavora in condizioni ideali.",
    },
    {
      type: "h2",
      id: "conviene",
      text: "Quando conviene la pompa di calore",
    },
    {
      type: "p",
      text: "La pompa di calore conviene soprattutto in queste situazioni: **edifici ben isolati**, **impianti a bassa temperatura**, presenza (o previsione) di un **impianto fotovoltaico** e volontà di **eliminare il gas** dalla propria abitazione. In una casa nuova o ristrutturata a regola d'arte è ormai la scelta di riferimento per climatizzazione e acqua calda. In edifici molto datati e poco isolati, invece, conviene prima ridurre le dispersioni, altrimenti i consumi elettrici rischiano di vanificare parte del risparmio.",
    },
    {
      type: "ol",
      items: [
        "Valuta l'isolamento dell'edificio: meno disperde, meglio rende la pompa di calore.",
        "Verifica il tipo di impianto: il pavimento radiante è l'ideale, i termosifoni vanno dimensionati bene.",
        "Considera l'abbinamento con il fotovoltaico per abbattere i costi elettrici.",
        "Controlla incentivi e detrazioni vigenti per la sostituzione dell'impianto di riscaldamento.",
        "Affidati a un termotecnico per il corretto dimensionamento della potenza.",
      ],
    },
    {
      type: "h2",
      id: "manutenzione",
      text: "Manutenzione, durata e incentivi",
    },
    {
      type: "p",
      text: "La pompa di calore richiede una **manutenzione contenuta ma regolare**: controllo periodico del circuito, pulizia degli scambiatori e verifica del gas refrigerante da parte di un tecnico abilitato. La vita utile di un impianto ben mantenuto è di circa **15-20 anni**. Sul fronte economico, la sostituzione di un vecchio generatore con una pompa di calore rientra tra gli interventi che possono accedere alle **detrazioni fiscali** per l'efficienza energetica: aliquote e requisiti cambiano nel tempo, quindi conviene verificare la normativa vigente e i [bonus edilizi aggiornati](/incentivi-e-bonus) prima di procedere.",
    },
    {
      type: "p",
      text: "In definitiva, la pompa di calore è oggi una delle tecnologie più efficaci per riscaldare e raffrescare in modo efficiente e sostenibile. Il suo rendimento reale, però, si costruisce a monte: **isolamento, impianto e integrazione con il fotovoltaico** sono ciò che trasforma un buon impianto in un investimento davvero conveniente.",
    },
  ],
};
