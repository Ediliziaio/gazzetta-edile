import type { Article } from "@/lib/content";

export const calcestruzzoTipi: Article = {
  slug: "calcestruzzo-tipi-caratteristiche",
  category: "materiali-da-costruzione",
  title: "Calcestruzzo: tipi, classi di resistenza e usi",
  metaTitle: "Calcestruzzo: tipi e classi di resistenza | Gazzetta Edile",
  metaDescription:
    "Guida al calcestruzzo: tipi, classi di resistenza (da C12/15 a C50/60), calcestruzzo armato, differenza con il cemento, usi in cantiere e come sceglierlo.",
  abstract:
    "Il calcestruzzo è un materiale composto da cemento, acqua, sabbia e ghiaia che indurisce e resiste alla compressione. Si classifica per classe di resistenza, da C12/15 a oltre C50/60. La scelta dipende dall'uso strutturale: fondazioni, pilastri, solai o pavimentazioni. Il progettista definisce classe e caratteristiche.",
  keywordPrimary: "calcestruzzo",
  keywordsSecondary: [
    "classi di resistenza calcestruzzo",
    "calcestruzzo armato",
    "cemento vs calcestruzzo",
    "tipi di calcestruzzo",
  ],
  author: "redazione",
  publishedAt: "2026-07-25",
  updatedAt: "2026-07-25",
  cover: {
    src: "/covers/calcestruzzo-tipi-caratteristiche.png",
    alt: "Getto di calcestruzzo in cantiere",
  },
  pillar: false,
  schemaType: "Article",
  related: ["materiali-da-costruzione-guida", "rifare-il-tetto-costi"],
  faq: [
    {
      q: "Che differenza c'è tra cemento e calcestruzzo?",
      a: "Il cemento è il legante in polvere, uno solo dei componenti. Il calcestruzzo è il materiale finito che si ottiene mescolando cemento, acqua, sabbia e ghiaia (gli inerti). In pratica il cemento è l'ingrediente, il calcestruzzo è l'impasto indurito usato in cantiere.",
    },
    {
      q: "Cosa indica la classe di resistenza del calcestruzzo?",
      a: "La classe, ad esempio C25/30, indica la resistenza caratteristica a compressione a 28 giorni: il primo numero riferito al provino cilindrico, il secondo a quello cubico, espressi in N/mm². Più alti sono i valori, maggiore è la resistenza del calcestruzzo.",
    },
    {
      q: "Qual è il calcestruzzo più usato in edilizia residenziale?",
      a: "Nelle strutture residenziali si impiegano di norma classi da C25/30 a C32/40 per fondazioni, pilastri e solai. Per i magri di sottofondazione bastano classi basse come C12/15, mentre le opere più sollecitate richiedono classi superiori definite dal progettista.",
    },
    {
      q: "Cos'è il calcestruzzo armato?",
      a: "Il calcestruzzo armato, o cemento armato, è calcestruzzo in cui vengono annegate barre d'acciaio. Il calcestruzzo resiste alla compressione e l'acciaio alla trazione: insieme formano un materiale composito capace di sopportare i carichi di travi, pilastri e solai.",
    },
    {
      q: "Quanto tempo impiega il calcestruzzo a fare presa?",
      a: "La presa inizia in poche ore, ma la resistenza di riferimento si misura a 28 giorni di maturazione. Dopo circa 24-48 ore si possono rimuovere alcune casseforti, mentre la maturazione completa e la stagionatura richiedono settimane, con la giusta cura e umidità.",
    },
  ],
  body: [
    {
      type: "p",
      text: "Il **calcestruzzo** è il materiale da costruzione più diffuso al mondo e la spina dorsale di quasi ogni edificio: fondazioni, pilastri, travi, solai e pavimentazioni nascono da un impasto apparentemente semplice di cemento, acqua e inerti. Dietro questa semplicità si nasconde però una tecnologia precisa, fatta di classi di resistenza, dosaggi e regole normative. In questa guida vediamo che cos'è il calcestruzzo, quali tipi esistono, come si leggono le classi di resistenza e come si sceglie quello giusto in cantiere.",
    },
    {
      type: "h2",
      id: "cos-e",
      text: "Che cos'è il calcestruzzo",
    },
    {
      type: "p",
      text: "Il calcestruzzo è un materiale composito ottenuto miscelando un legante (il **cemento**), acqua e aggregati inerti (sabbia e ghiaia o pietrisco), a cui si aggiungono spesso additivi per migliorarne le prestazioni. Una volta impastato, il materiale è fluido e lavorabile: viene gettato nelle casseforti e, grazie alla reazione chimica di idratazione del cemento, indurisce fino a diventare una pietra artificiale capace di sopportare carichi elevati. La caratteristica principale del calcestruzzo è l'eccellente **resistenza a compressione**, mentre la sua resistenza a trazione è modesta: per questo, nelle strutture, viene quasi sempre armato con acciaio.",
    },
    {
      type: "h3",
      id: "cemento-vs-calcestruzzo",
      text: "Cemento e calcestruzzo non sono la stessa cosa",
    },
    {
      type: "p",
      text: "Nel linguaggio comune i due termini si confondono, ma indicano cose diverse. Il **cemento** è soltanto il legante in polvere, uno dei componenti dell'impasto. Il **calcestruzzo** è invece il prodotto finito che si ottiene combinando cemento, acqua e inerti. In sintesi, il cemento è l'ingrediente, il calcestruzzo è la ricetta completa che arriva in cantiere con l'autobetoniera. Capire questa differenza aiuta a leggere correttamente capitolati e voci di computo.",
    },
    {
      type: "table",
      headers: ["Componente", "Ruolo", "Note"],
      rows: [
        ["Cemento", "Legante", "Reagisce con l'acqua e tiene insieme l'impasto"],
        ["Acqua", "Attivatore", "Il rapporto acqua/cemento governa la resistenza"],
        ["Sabbia", "Inerte fine", "Riempie i vuoti tra gli aggregati grossi"],
        ["Ghiaia o pietrisco", "Inerte grosso", "Fornisce volume e stabilità"],
        ["Additivi", "Modificatori", "Fluidificanti, acceleranti, ritardanti, aeranti"],
      ],
    },
    {
      type: "h2",
      id: "classi-resistenza",
      text: "Come si leggono le classi di resistenza",
    },
    {
      type: "p",
      text: "Il calcestruzzo strutturale si identifica con una **classe di resistenza**, indicata da una sigla come C25/30. La lettera C sta per calcestruzzo (concrete), mentre i due numeri esprimono la resistenza caratteristica a compressione a 28 giorni, misurata in N/mm² (o MPa): il primo valore si riferisce al provino cilindrico, il secondo al provino cubico. Più alti sono i numeri, maggiore è la resistenza. La scelta della classe non è mai libera: spetta al progettista strutturale in funzione dei carichi, della classe di esposizione ambientale e della durabilità richiesta dalla normativa.",
    },
    {
      type: "table",
      headers: ["Classe", "Resistenza (cil./cubica)", "Uso tipico"],
      rows: [
        ["C12/15", "12/15 N/mm²", "Magrone, sottofondazioni, riempimenti"],
        ["C20/25", "20/25 N/mm²", "Fondazioni leggere, opere non strutturali"],
        ["C25/30", "25/30 N/mm²", "Fondazioni, pilastri e solai residenziali"],
        ["C28/35", "28/35 N/mm²", "Strutture in c.a. mediamente sollecitate"],
        ["C32/40", "32/40 N/mm²", "Strutture importanti, ambienti aggressivi"],
        ["C50/60", "50/60 N/mm²", "Calcestruzzi ad alte prestazioni, opere speciali"],
      ],
    },
    {
      type: "callout",
      title: "La classe la decide il progettista",
      text: "Non scegliere mai la classe di resistenza a occhio o per abitudine. La classe, insieme alla classe di esposizione e al diametro massimo degli inerti, deve essere prescritta nel progetto strutturale e riportata nel capitolato. Un calcestruzzo sottodimensionato compromette la sicurezza; uno sovradimensionato fa lievitare i costi senza motivo.",
    },
    {
      type: "h2",
      id: "tipi",
      text: "Quali tipi di calcestruzzo esistono",
    },
    {
      type: "p",
      text: "Oltre alla classe di resistenza, il calcestruzzo si distingue per composizione, tecnologia e destinazione d'uso. Ecco i principali tipi che si incontrano in cantiere:",
    },
    {
      type: "ul",
      items: [
        "**Calcestruzzo ordinario**: l'impasto standard per fondazioni, pilastri e solai, il più diffuso in edilizia.",
        "**Calcestruzzo armato (cemento armato)**: con barre d'acciaio annegate, per resistere anche a flessione e trazione.",
        "**Calcestruzzo precompresso**: con cavi d'acciaio in tensione, usato per grandi luci come travi e ponti.",
        "**Calcestruzzo alleggerito**: con aggregati leggeri (argilla espansa) per ridurre il peso e migliorare l'isolamento.",
        "**Calcestruzzo autocompattante (SCC)**: talmente fluido da riempire le casseforti senza vibrazione.",
        "**Calcestruzzo ad alte prestazioni (HPC)**: classi elevate e grande durabilità per opere speciali.",
        "**Calcestruzzo drenante e stampato**: soluzioni per pavimentazioni esterne, estetiche o permeabili.",
      ],
    },
    {
      type: "h3",
      id: "calcestruzzo-armato",
      text: "Il calcestruzzo armato in dettaglio",
    },
    {
      type: "p",
      text: "Il **calcestruzzo armato** è la soluzione strutturale per eccellenza. Il principio è semplice ed efficace: il calcestruzzo assorbe le sollecitazioni di compressione, mentre le barre d'acciaio (i tondini) assorbono quelle di trazione, dove il calcestruzzo da solo cederebbe. I due materiali collaborano perché hanno un coefficiente di dilatazione termica simile e perché il calcestruzzo protegge l'acciaio dalla corrosione. Da questa sinergia nascono travi, pilastri, platee e solai capaci di reggere i carichi di un intero edificio. Per approfondire il quadro dei materiali strutturali, vedi la nostra [guida ai materiali da costruzione](/materiali-da-costruzione/materiali-da-costruzione-guida).",
    },
    {
      type: "h2",
      id: "usi-cantiere",
      text: "Usi del calcestruzzo in cantiere",
    },
    {
      type: "p",
      text: "Il calcestruzzo accompagna l'intero ciclo costruttivo, dalle opere sotto terra alle finiture esterne. La classe e il tipo cambiano a seconda della funzione e dell'esposizione. Ecco un percorso tipico, dal basso verso l'alto:",
    },
    {
      type: "ol",
      items: [
        "Getto del **magrone** di pulizia sotto le fondazioni, con classi basse come C12/15.",
        "Realizzazione di **fondazioni** (plinti, travi rovesce, platee) in calcestruzzo armato.",
        "Elevazione di **pilastri e setti** portanti, con classi definite dai carichi.",
        "Getto di **solai e travi** che sostengono i piani dell'edificio.",
        "Esecuzione di **massetti e pavimentazioni** industriali o esterne.",
        "Opere accessorie: cordoli, muri di contenimento, scale, rampe.",
      ],
    },
    {
      type: "p",
      text: "In tutte queste fasi contano la corretta posa, la vibrazione (dove prevista) e soprattutto la **stagionatura**: mantenere il getto umido nei primi giorni evita fessurazioni e garantisce che il calcestruzzo raggiunga la resistenza di progetto. Anche interventi come il rifacimento di solai o coperture partono spesso da opere in calcestruzzo: se stai valutando lavori sul tetto, può esserti utile la nostra guida su [come rifare il tetto e i costi](/ristrutturazioni/rifare-il-tetto-costi).",
    },
    {
      type: "h2",
      id: "come-scegliere",
      text: "Come scegliere il calcestruzzo giusto",
    },
    {
      type: "p",
      text: "La scelta del calcestruzzo non si riduce al prezzo al metro cubo. I fattori che contano davvero sono la **classe di resistenza** prescritta dal progetto, la **classe di esposizione** (ambienti umidi, marini, con cicli di gelo o aggressioni chimiche), la lavorabilità (classe di consistenza) e il diametro massimo degli aggregati compatibile con le armature. Affidarsi a un fornitore di calcestruzzo preconfezionato con certificazione **FPC** e marcatura di conformità è la garanzia migliore per ottenere un materiale conforme a quanto richiesto.",
    },
    {
      type: "p",
      text: "In sintesi, il calcestruzzo è un materiale tanto comune quanto tecnico: dietro ogni getto c'è una ricetta calibrata su carichi, ambiente e durabilità. Conoscere tipi, classi di resistenza e usi permette a imprese e committenti di dialogare con progettisti e fornitori, controllare la qualità in cantiere e spendere in modo consapevole, evitando sia i rischi di un materiale scadente sia gli sprechi di uno sovradimensionato.",
    },
  ],
};
