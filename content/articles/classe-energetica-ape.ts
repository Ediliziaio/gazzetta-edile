import type { Article } from "@/lib/content";

export const classeEnergeticaApe: Article = {
  slug: "classe-energetica-ape",
  category: "efficienza-energetica",
  title: "Classe energetica e APE: cos'è e come migliorarla",
  metaTitle: "Classe energetica e APE: guida pratica | Gazzetta Edile",
  metaDescription:
    "Cos'è la classe energetica di un edificio, come si legge l'APE, quali sono le classi dalla A4 alla G e come migliorarla: la guida completa all'efficienza.",
  abstract:
    "La classe energetica indica quanta energia consuma un edificio ed è certificata dall'APE, l'Attestato di Prestazione Energetica. Va dalla A4 (la più efficiente) alla G (la più energivora). Migliorarla significa ridurre consumi e bollette, aumentando comfort e valore dell'immobile con interventi mirati su involucro e impianti.",
  keywordPrimary: "classe energetica",
  keywordsSecondary: [
    "APE attestato di prestazione energetica",
    "come migliorare la classe energetica",
    "classi energetiche A B C",
    "classe energetica edificio come si calcola",
  ],
  author: "marco-ferri",
  publishedAt: "2026-07-25",
  updatedAt: "2026-07-25",
  cover: {
    src: "/covers/classe-energetica-ape.png",
    alt: "Etichetta della classe energetica di un edificio (APE)",
  },
  pillar: false,
  schemaType: "Article",
  related: ["cappotto-termico-guida", "pompe-di-calore-guida"],
  faq: [
    {
      q: "Che cos'è la classe energetica di un edificio?",
      a: "La classe energetica esprime quanta energia consuma un immobile per riscaldamento, raffrescamento, acqua calda e ventilazione. Si misura su una scala che va dalla A4, la più efficiente, alla G, la più energivora, ed è certificata dall'APE rilasciato da un tecnico abilitato.",
    },
    {
      q: "A cosa serve l'APE e quando è obbligatorio?",
      a: "L'APE, Attestato di Prestazione Energetica, fotografa l'efficienza dell'immobile e la sua classe. In genere è richiesto nella compravendita, nella locazione e per accedere ad alcuni incentivi. Obblighi e casi di esenzione cambiano nel tempo: verifica sempre la normativa vigente.",
    },
    {
      q: "Quanto costa fare un APE?",
      a: "Il costo di un APE per un appartamento va indicativamente dai 100 ai 250 euro, in funzione della metratura, della zona e della complessità del sopralluogo. Su edifici grandi o unità particolari il prezzo può salire. Chiedi sempre un preventivo a un certificatore abilitato.",
    },
    {
      q: "Come si migliora la classe energetica di casa?",
      a: "Si migliora riducendo le dispersioni dell'involucro e rendendo più efficienti gli impianti: cappotto termico, infissi performanti, pompa di calore, fotovoltaico e sistemi di regolazione. Ogni intervento fa salire la classe; combinandoli si può guadagnare più di un gradino.",
    },
    {
      q: "Quanto dura l'APE?",
      a: "L'APE ha in genere una validità di dieci anni dalla data di rilascio, a condizione che vengano rispettati i controlli periodici sugli impianti e che l'immobile non subisca interventi che ne modifichino la prestazione energetica. In quei casi va aggiornato.",
    },
  ],
  body: [
    {
      type: "p",
      text: "La **classe energetica** è il modo più immediato per capire quanto consuma un edificio. È l'equivalente dell'etichetta che troviamo sugli elettrodomestici: una scala di lettere che sintetizza il fabbisogno di energia dell'immobile per riscaldarlo, raffrescarlo e produrre acqua calda. Questa valutazione viene certificata dall'**APE**, l'Attestato di Prestazione Energetica, un documento sempre più decisivo nella compravendita, nell'affitto e nell'accesso agli incentivi. Migliorare la classe energetica significa spendere meno in bolletta e aumentare il valore di mercato della casa.",
    },
    {
      type: "h2",
      id: "cos-e",
      text: "Che cos'è la classe energetica",
    },
    {
      type: "p",
      text: "La classe energetica misura la **prestazione energetica globale** dell'edificio, cioè quanta energia serve per mantenerlo confortevole durante tutto l'anno. L'indicatore di riferimento è l'**EP gl,nren**, l'indice di prestazione energetica globale non rinnovabile, espresso in chilowattora per metro quadro all'anno (kWh/m² anno): più è basso, migliore è la classe. Il calcolo tiene conto dell'isolamento dell'involucro, dell'efficienza degli impianti, dell'esposizione e del clima della zona. Un edificio ben isolato e con impianti moderni ottiene una classe alta; uno datato e disperdente finisce nelle classi più basse.",
    },
    {
      type: "h2",
      id: "classi",
      text: "Quali sono le classi energetiche, dalla A4 alla G",
    },
    {
      type: "p",
      text: "Le **classi energetiche** vanno dalla A4, la più efficiente, alla G, la più energivora. Le classi A si articolano in quattro livelli (A4, A3, A2, A1) per distinguere gli edifici ad altissima efficienza. Ecco la scala con i valori indicativi di consumo: ricorda che le soglie precise dipendono dalla zona climatica e dai riferimenti normativi, quindi verifica sempre la normativa vigente.",
    },
    {
      type: "table",
      headers: ["Classe", "Consumo indicativo", "Tipo di edificio"],
      rows: [
        ["A4", "< 0,40 EP", "Nuovo o riqualificato, quasi a energia zero"],
        ["A3 - A1", "0,40 - 0,80 EP", "Alta efficienza, ottimo isolamento e impianti"],
        ["B", "0,80 - 1,00 EP", "Buona efficienza, spesso post ristrutturazione"],
        ["C - D", "1,00 - 1,75 EP", "Prestazioni medie, involucro migliorabile"],
        ["E - F", "1,75 - 2,50 EP", "Edifici datati, consumi elevati"],
        ["G", "> 2,50 EP", "Nessun isolamento, massima dispersione"],
      ],
    },
    {
      type: "callout",
      title: "Attenzione ai valori",
      text: "I numeri sono un riferimento indicativo: il valore EP dipende dall'edificio di riferimento della zona climatica. Solo un certificatore abilitato, con un sopralluogo, determina la classe reale. Diffida delle classi dichiarate senza APE.",
    },
    {
      type: "h2",
      id: "ape",
      text: "Che cos'è l'APE e come si legge",
    },
    {
      type: "p",
      text: "L'**APE (Attestato di Prestazione Energetica)** è il documento ufficiale che certifica la classe energetica dell'immobile. Lo redige un tecnico abilitato dopo un sopralluogo e ha in genere validità decennale, salvo interventi che modifichino la prestazione. Nell'attestato trovi la classe assegnata, l'indice di prestazione, i consumi stimati e una sezione di **raccomandazioni** con gli interventi consigliati per salire di classe. È il punto di partenza ideale per pianificare una riqualificazione.",
    },
    {
      type: "h3",
      id: "quando-serve",
      text: "Quando serve l'APE",
    },
    {
      type: "ul",
      items: [
        "**Compravendita**: l'attestato accompagna il rogito e la classe va indicata negli annunci immobiliari.",
        "**Locazione**: richiesto per i nuovi contratti di affitto, con obblighi che variano nel tempo.",
        "**Ristrutturazioni importanti**: per documentare il miglioramento ottenuto con i lavori.",
        "**Incentivi e bonus**: spesso necessario per accedere alle agevolazioni per l'efficienza energetica.",
      ],
    },
    {
      type: "h2",
      id: "migliorare",
      text: "Come migliorare la classe energetica",
    },
    {
      type: "p",
      text: "Migliorare la **classe energetica** significa ridurre il fabbisogno dell'edificio agendo su due fronti: l'**involucro**, per limitare le dispersioni, e gli **impianti**, per produrre energia in modo più efficiente. La strategia più efficace parte dall'involucro e prosegue con gli impianti, così da non sovradimensionare questi ultimi. Ecco l'ordine di intervento consigliato.",
    },
    {
      type: "ol",
      items: [
        "**Isola l'involucro**: il [cappotto termico](/efficienza-energetica/cappotto-termico-guida) riduce da subito le dispersioni delle pareti ed è spesso il primo passo.",
        "**Sostituisci gli infissi**: serramenti a taglio termico e doppi o tripli vetri eliminano i ponti termici delle finestre.",
        "**Efficienta il riscaldamento**: una [pompa di calore](/efficienza-energetica/pompe-di-calore-guida) al posto della vecchia caldaia alza la classe in modo netto.",
        "**Produci energia rinnovabile**: il fotovoltaico abbatte la quota di energia non rinnovabile, il fattore che pesa di più sull'indice.",
        "**Regola e monitora**: termostati smart, valvole termostatiche e sistemi di gestione ottimizzano i consumi residui.",
      ],
    },
    {
      type: "p",
      text: "Combinando più interventi si può guadagnare **più di un gradino** di classe: passare da una F a una B o A è realistico in una riqualificazione profonda. Prima di partire, fai redigere un APE con le raccomandazioni: ti dirà quali lavori portano il maggiore beneficio in rapporto alla spesa. Per capire quali agevolazioni sono disponibili, consulta i [bonus edilizi aggiornati](/incentivi-e-bonus) e verifica sempre requisiti e aliquote in vigore.",
    },
    {
      type: "h2",
      id: "perché-conviene",
      text: "Perché conviene migliorare la classe",
    },
    {
      type: "p",
      text: "Una classe energetica più alta porta vantaggi concreti. In primo luogo la **bolletta**: meno energia serve, meno si spende, con un risparmio che negli edifici datati può essere molto significativo. In secondo luogo il **comfort**: pareti più calde d'inverno, ambienti più freschi d'estate e assenza di muffe. Infine il **valore immobiliare**: sul mercato una casa in classe A o B si vende prima e a un prezzo superiore rispetto a una in classe F o G. Investire sull'efficienza, insomma, è al tempo stesso un risparmio corrente e una rivalutazione del patrimonio.",
    },
  ],
};
