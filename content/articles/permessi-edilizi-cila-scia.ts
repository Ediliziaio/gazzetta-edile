import type { Article } from "@/lib/content";

export const permessiEdiliziCilaScia: Article = {
  slug: "permessi-edilizi-cila-scia",
  category: "normative",
  title: "CILA, SCIA e permesso di costruire: quale serve e quando",
  metaTitle: "CILA, SCIA e permesso di costruire 2026 | Gazzetta Edile",
  metaDescription:
    "Permessi edilizi 2026: differenze tra CILA, SCIA e permesso di costruire, quando servono, tempi, costi e sanzioni per i lavori senza titolo abilitativo.",
  abstract:
    "Per i lavori edilizi servono titoli diversi: la CILA per la manutenzione straordinaria senza opere strutturali, la SCIA per interventi più rilevanti, il permesso di costruire per nuove costruzioni e ristrutturazioni pesanti. La manutenzione ordinaria rientra invece nell'edilizia libera. Scegliere il titolo giusto evita sanzioni e blocchi.",
  keywordPrimary: "permessi edilizi",
  keywordsSecondary: [
    "differenza CILA e SCIA",
    "quando serve la SCIA",
    "permesso di costruire",
    "edilizia libera",
  ],
  author: "chiara-bruno",
  publishedAt: "2026-07-25",
  updatedAt: "2026-07-25",
  cover: {
    src: "/covers/permessi-edilizi-cila-scia.png",
    alt: "Progetto edilizio, timbro e documenti per una pratica di permesso edilizio",
  },
  pillar: true,
  schemaType: "Article",
  related: ["ristrutturare-casa-costi-2026", "superbonus-incentivi-2026"],
  faq: [
    {
      q: "Qual è la differenza tra CILA e SCIA?",
      a: "La CILA serve per la manutenzione straordinaria che non tocca le parti strutturali dell'edificio, la SCIA per interventi più rilevanti, comprese alcune modifiche strutturali e ristrutturazioni. La SCIA richiede una documentazione tecnica più ampia e asseverazioni specifiche.",
    },
    {
      q: "Quando serve il permesso di costruire?",
      a: "Il permesso di costruire è necessario per le nuove costruzioni, gli ampliamenti importanti e le ristrutturazioni edilizie pesanti che modificano volumi, sagoma o destinazione. È il titolo più impegnativo, rilasciato dal Comune dopo l'istruttoria.",
    },
    {
      q: "Quali lavori si possono fare senza permessi?",
      a: "Rientrano nell'edilizia libera gli interventi di manutenzione ordinaria (tinteggiature, sostituzione di pavimenti e sanitari, piccole riparazioni) e alcune opere elencate dalla normativa, che non richiedono titoli ma vanno comunque eseguite nel rispetto delle regole.",
    },
    {
      q: "Cosa rischio se faccio lavori senza titolo?",
      a: "Eseguire lavori senza il titolo corretto è un abuso edilizio: espone a sanzioni economiche, all'ordine di ripristino o demolizione e complica la vendita dell'immobile. In alcuni casi è possibile la sanatoria, ma non è mai garantita: meglio partire con il titolo giusto.",
    },
  ],
  body: [
    {
      type: "p",
      text: "Prima di iniziare qualsiasi lavoro edilizio è indispensabile capire quale **permesso** serve. Scegliere il titolo abilitativo sbagliato — o non richiederlo affatto — trasforma un intervento in un **abuso edilizio**, con sanzioni e problemi in caso di vendita. In questa guida spieghiamo in modo chiaro le differenze tra **CILA**, **SCIA** e **permesso di costruire**, quando serve ciascuno, cosa rientra nell'edilizia libera e quali sono le conseguenze dei lavori senza titolo.",
    },
    {
      type: "h2",
      id: "titoli-in-breve",
      text: "I titoli abilitativi in breve",
    },
    {
      type: "p",
      text: "Il tipo di titolo dipende dalla **rilevanza dell'intervento**: più incide su strutture, volumi e destinazione dell'edificio, più il titolo è impegnativo. Ecco il quadro di sintesi.",
    },
    {
      type: "table",
      headers: ["Titolo", "Per quali interventi", "Chi lo predispone"],
      rows: [
        ["Edilizia libera", "Manutenzione ordinaria e opere minori", "Nessun titolo (a volte comunicazione)"],
        ["CILA", "Manutenzione straordinaria senza opere strutturali", "Tecnico abilitato"],
        ["SCIA", "Interventi rilevanti, anche strutturali", "Tecnico abilitato + asseverazioni"],
        ["Permesso di costruire", "Nuove costruzioni, ristrutturazioni pesanti", "Progetto + istruttoria comunale"],
      ],
    },
    {
      type: "h2",
      id: "edilizia-libera",
      text: "Edilizia libera: cosa si può fare senza permessi",
    },
    {
      type: "p",
      text: "Nell'**edilizia libera** rientrano gli interventi di **manutenzione ordinaria** — tinteggiature, sostituzione di pavimenti e rivestimenti, riparazione di sanitari e infissi senza modifiche — e una serie di opere minori elencate dalla normativa. Non richiedono titoli, ma vanno comunque eseguite nel rispetto delle regole edilizie, igieniche e di sicurezza, e senza toccare parti strutturali o prospetti in modo rilevante.",
    },
    {
      type: "h2",
      id: "cila",
      text: "CILA: la manutenzione straordinaria",
    },
    {
      type: "p",
      text: "La **CILA** (Comunicazione Inizio Lavori Asseverata) è il titolo più usato nelle ristrutturazioni interne. Serve per la **manutenzione straordinaria** che **non interessa le parti strutturali** dell'edificio: ad esempio spostare tramezzi non portanti, rifare impianti, modificare la distribuzione interna. Va predisposta da un tecnico abilitato, che asseverano la conformità dell'intervento, e consente in genere di iniziare i lavori dalla presentazione. È il titolo tipico di una [ristrutturazione d'appartamento](/ristrutturazioni/ristrutturare-casa-costi-2026).",
    },
    {
      type: "h2",
      id: "scia",
      text: "SCIA: gli interventi più rilevanti",
    },
    {
      type: "p",
      text: "La **SCIA** (Segnalazione Certificata di Inizio Attività) serve per interventi **più rilevanti**, che possono interessare anche le **parti strutturali** o modificare l'edificio in modo significativo: alcune ristrutturazioni, opere che incidono sui prospetti, interventi che richiedono verifiche tecniche più approfondite. Rispetto alla CILA richiede una documentazione più ampia e **asseverazioni** specifiche del progettista. Anche in questo caso, di norma, i lavori possono iniziare con la presentazione della segnalazione.",
    },
    {
      type: "h2",
      id: "permesso-costruire",
      text: "Permesso di costruire: nuove costruzioni e opere maggiori",
    },
    {
      type: "p",
      text: "Il **permesso di costruire** è il titolo più impegnativo. È necessario per le **nuove costruzioni**, gli **ampliamenti** importanti e le **ristrutturazioni edilizie pesanti** che modificano volumi, sagoma o destinazione d'uso. A differenza di CILA e SCIA, prevede un'**istruttoria del Comune** e il rilascio di un provvedimento prima dell'inizio dei lavori. I tempi sono più lunghi e la documentazione più complessa, perché l'intervento ha un impatto rilevante sul territorio.",
    },
    {
      type: "h2",
      id: "sanzioni",
      text: "Lavori senza titolo: rischi e sanzioni",
    },
    {
      type: "p",
      text: "Eseguire lavori senza il titolo corretto costituisce **abuso edilizio** e comporta conseguenze serie: **sanzioni economiche**, ordine di **ripristino o demolizione** delle opere e gravi difficoltà in caso di vendita o accesso ai bonus. In alcuni casi è possibile regolarizzare con una **sanatoria**, ma non è mai garantita e ha costi propri. La regola d'oro è semplice: prima di aprire il cantiere, far verificare a un **tecnico abilitato** lo stato legittimo dell'immobile e il titolo necessario. È il modo migliore per lavorare tranquilli ed evitare problemi futuri. Per il quadro delle agevolazioni collegate, vedi la guida ai [bonus edilizi 2026](/incentivi-e-bonus/superbonus-incentivi-2026).",
    },
  ],
};
