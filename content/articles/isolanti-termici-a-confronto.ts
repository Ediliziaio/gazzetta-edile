import type { Article } from "@/lib/content";

export const isolantiTermici: Article = {
  slug: "isolanti-termici-a-confronto",
  category: "materiali-da-costruzione",
  title: "Isolanti termici a confronto: quale scegliere",
  metaTitle: "Isolanti termici a confronto | Gazzetta Edile",
  metaDescription:
    "Isolanti termici a confronto: EPS, lana di roccia, fibra di legno. Conducibilità (lambda), prezzi, pro e contro per scegliere il materiale giusto.",
  abstract:
    "Gli isolanti termici più diffusi sono EPS, lana di roccia e fibra di legno. La scelta dipende da conducibilità termica (lambda), spessore, costo, comportamento al fuoco e sostenibilita. Un lambda basso isola meglio a parita di spessore; i materiali naturali offrono migliore sfasamento estivo e minore impatto ambientale.",
  keywordPrimary: "isolanti termici",
  keywordsSecondary: [
    "conducibilità termica lambda",
    "isolante naturale",
    "EPS lana di roccia fibra di legno",
    "isolamento termico casa",
  ],
  author: "marco-ferri",
  publishedAt: "2026-07-25",
  updatedAt: "2026-07-25",
  cover: {
    src: "/covers/isolanti-termici-a-confronto.png",
    alt: "Pannelli di diversi materiali isolanti termici",
  },
  pillar: false,
  schemaType: "Article",
  related: ["cappotto-termico-guida", "materiali-da-costruzione-guida"],
  faq: [
    {
      q: "Qual e l'isolante termico migliore?",
      a: "Non esiste un isolante migliore in assoluto: dipende dall'uso. Per il miglior rapporto prezzo-prestazioni si sceglie l'EPS, per la resistenza al fuoco e l'isolamento acustico la lana di roccia, per il comfort estivo e la sostenibilita la fibra di legno. La scelta parte sempre dalla conducibilità termica e dallo spessore disponibile.",
    },
    {
      q: "Cosa indica la conducibilità termica lambda?",
      a: "Il lambda (conducibilità termica, in W/mK) misura quanto un materiale lascia passare il calore: più e basso, meglio isola. A parita di spessore un isolante con lambda 0,032 isola più di uno con lambda 0,040. E il primo dato da confrontare nelle schede tecniche.",
    },
    {
      q: "Quanto costa isolare termicamente una casa?",
      a: "Il costo dei soli materiali isolanti varia in genere tra 8 e 40 euro al metro quadro, in base al tipo e allo spessore. Al materiale va aggiunta la posa. Su un cappotto termico completo il costo chiavi in mano si aggira sui 90-160 euro al metro quadro, con forti variazioni locali.",
    },
    {
      q: "Qual e l'isolante più sostenibile?",
      a: "Gli isolanti naturali come fibra di legno, sughero e canapa sono i più sostenibili: sono rinnovabili, riciclabili e a basso impatto ambientale. Offrono inoltre un ottimo sfasamento termico, utile contro il caldo estivo, a fronte di un costo superiore rispetto ai materiali sintetici.",
    },
    {
      q: "Che differenza c'e tra isolamento invernale ed estivo?",
      a: "L'isolamento invernale riduce le dispersioni di calore verso l'esterno e dipende soprattutto dal lambda. Il comfort estivo dipende anche dallo sfasamento, cioe dal ritardo con cui il calore attraversa la parete: qui i materiali densi come fibra di legno e sughero rendono meglio dei sintetici leggeri.",
    },
  ],
  body: [
    {
      type: "p",
      text: "Scegliere gli **isolanti termici** giusti e una delle decisioni più importanti in una ristrutturazione o in una nuova costruzione: incide sul comfort, sulle bollette e sul valore dell'immobile. Il mercato offre decine di prodotti, dai pannelli sintetici alle fibre naturali, con prestazioni e prezzi molto diversi. In questa guida mettiamo a confronto i principali isolanti termici, spieghiamo come leggere la conducibilità termica e forniamo criteri concreti per capire quale materiale conviene in ogni situazione.",
    },
    {
      type: "h2",
      id: "cosa-guardare",
      text: "Cosa guardare prima di scegliere un isolante",
    },
    {
      type: "p",
      text: "Il primo parametro e la **conducibilità termica**, indicata con la lettera greca lambda e misurata in W/mK: quanto più e bassa, tanto meglio il materiale trattiene il calore. Un pannello con lambda 0,031 isola di più, a parita di spessore, rispetto a uno con lambda 0,040. Ma il lambda non basta: contano anche lo spessore disponibile, la densità, il comportamento al fuoco, la resistenza all'umidità e lo sfasamento termico, cioe il ritardo con cui il calore estivo attraversa la parete.",
    },
    {
      type: "ul",
      items: [
        "**Conducibilità termica (lambda)**: il dato chiave per l'isolamento invernale, più basso e meglio e.",
        "**Spessore**: a parita di prestazione, un lambda alto richiede più centimetri e più ingombro.",
        "**Reazione al fuoco**: classi di Euroclasse da A1 (incombustibile) a F, decisiva in facciata.",
        "**Sfasamento e densità**: materiali pesanti proteggono meglio dal caldo estivo.",
        "**Sostenibilita**: origine, riciclabilita e impatto ambientale del materiale.",
      ],
    },
    {
      type: "h2",
      id: "confronto",
      text: "Isolanti termici a confronto: tabella riassuntiva",
    },
    {
      type: "p",
      text: "La tabella seguente mette a confronto i principali **isolanti termici** per conducibilità, prezzo orientativo del solo materiale e caratteristiche principali. I valori di lambda e prezzo sono forniti con forbici, perché variano molto per densità, produttore e formato del prodotto.",
    },
    {
      type: "table",
      headers: ["Isolante", "Lambda (W/mK)", "Prezzo (euro/mq)", "Pro", "Contro"],
      rows: [
        ["EPS (polistirene espanso)", "0,031-0,038", "8-18", "Economico, leggero, versatile", "Sintetico, sfasamento basso"],
        ["XPS (polistirene estruso)", "0,032-0,036", "12-25", "Resiste all'acqua, ottimo sotto terra", "Costa più dell'EPS, sintetico"],
        ["Lana di roccia", "0,034-0,040", "12-28", "Incombustibile, fonoassorbente", "Più pesante, teme l'umidità"],
        ["Lana di vetro", "0,032-0,040", "8-20", "Economica, leggera, buon acustico", "Fragile alla posa, teme l'acqua"],
        ["Fibra di legno", "0,038-0,045", "18-40", "Ottimo sfasamento estivo, naturale", "Costo elevato, spessori maggiori"],
        ["Sughero", "0,040-0,045", "20-40", "Naturale, durevole, traspirante", "Prezzo alto, lambda medio"],
        ["Poliuretano (PIR/PUR)", "0,022-0,028", "18-35", "Lambda bassissimo, spessori minimi", "Sintetico, sensibile al fuoco"],
      ],
    },
    {
      type: "h2",
      id: "sintetici",
      text: "Gli isolanti sintetici: EPS, XPS e poliuretano",
    },
    {
      type: "p",
      text: "Gli isolanti sintetici derivano dalla lavorazione di polimeri e sono i più diffusi per il buon rapporto tra prezzo e prestazioni. L'**EPS**, il classico polistirene espanso bianco, e la scelta più economica ed e alla base della maggior parte dei cappotti termici. L'**XPS** e più compatto e resiste all'acqua, quindi si usa a contatto col terreno, sotto i massetti e nelle zone soggette a umidità. Il **poliuretano** (PIR e PUR) ha il lambda più basso di tutti: isola con spessori ridotti dove lo spazio manca, ma richiede attenzione al comportamento al fuoco.",
    },
    {
      type: "h3",
      id: "quando-sintetici",
      text: "Quando conviene un isolante sintetico",
    },
    {
      type: "p",
      text: "I materiali sintetici sono la scelta più razionale quando il budget e stretto, quando serve un lambda molto basso in poco spessore o quando il pannello deve resistere all'acqua. Il limite principale e lo **sfasamento** contenuto: d'estate le pareti coibentate con soli materiali leggeri tendono a scaldarsi più in fretta. Per un intervento sull'involucro esterno vale la pena approfondire la nostra guida al [cappotto termico](/efficienza-energetica/cappotto-termico-guida), dove il tipo di isolante incide su costo e resa finale.",
    },
    {
      type: "h2",
      id: "naturali",
      text: "Gli isolanti naturali sono davvero migliori?",
    },
    {
      type: "p",
      text: "Gli **isolanti naturali** come fibra di legno, sughero, canapa, lana di pecora e cellulosa hanno un lambda leggermente più alto dei sintetici, quindi a parita di prestazione servono spessori maggiori. In cambio offrono vantaggi che i sintetici non hanno: un eccellente **sfasamento termico** che protegge dal caldo estivo, buona traspirabilita, origine rinnovabile e riciclabilita a fine vita. Sono la scelta tipica dell'edilizia green e delle case in legno, dove il comfort estivo e la sostenibilita hanno lo stesso peso del risparmio invernale.",
    },
    {
      type: "callout",
      title: "Non guardare solo al lambda",
      text: "Un isolante naturale con lambda 0,040 puo garantire un comfort estivo nettamente superiore a un sintetico con lambda 0,032, grazie allo sfasamento. Per il caldo estivo contano densità e capacità termica, non solo la conducibilità: valutare entrambi evita scelte deludenti in facciata a sud e in copertura.",
    },
    {
      type: "h2",
      id: "lane-minerali",
      text: "Le lane minerali: fuoco e acustica",
    },
    {
      type: "p",
      text: "La **lana di roccia** e la **lana di vetro** sono isolanti minerali molto usati perché uniscono buone prestazioni termiche a due qualità preziose: l'incombustibilita e l'isolamento acustico. La lana di roccia in particolare, classificata Euroclasse A1, e spesso obbligatoria nelle facciate degli edifici alti e nei compartimenti antincendio. Entrambe temono l'acqua e vanno protette dall'umidità, ma restano la soluzione di riferimento quando la sicurezza al fuoco o l'abbattimento del rumore sono prioritari.",
    },
    {
      type: "h2",
      id: "come-scegliere",
      text: "Come scegliere l'isolante giusto passo per passo",
    },
    {
      type: "p",
      text: "La scelta dell'isolante non parte dal prodotto ma dall'obiettivo. Ecco un percorso logico per arrivare al materiale adatto senza sprechi.",
    },
    {
      type: "ol",
      items: [
        "Definisci dove isolare: facciata, tetto, pavimento controterra o interno.",
        "Calcola lo spessore disponibile e la trasmittanza da raggiungere per la tua zona climatica.",
        "Verifica i vincoli: reazione al fuoco in facciata, umidità controterra, esigenze acustiche.",
        "Confronta i prodotti a parita di prestazione, non di spessore, usando il lambda dichiarato.",
        "Valuta sfasamento e sostenibilita se ti interessano comfort estivo e basso impatto ambientale.",
        "Chiedi le schede tecniche e la marcatura CE, e confronta i preventivi a parita di qualità.",
      ],
    },
    {
      type: "p",
      text: "In sintesi, non esiste un isolante perfetto per ogni situazione: c'e quello giusto per la funzione, il clima e il budget del tuo intervento. L'**EPS** resta il riferimento economico, la **lana di roccia** vince su fuoco e acustica, la **fibra di legno** sul comfort estivo, il poliuretano dove serve un lambda minimo. Per inquadrare l'isolante nel contesto più ampio dei materiali edili, vedi la nostra guida ai [materiali da costruzione](/materiali-da-costruzione/materiali-da-costruzione-guida); per l'applicazione pratica sull'involucro, la guida al [cappotto termico](/efficienza-energetica/cappotto-termico-guida) e il complemento naturale di questo confronto.",
    },
  ],
};
