// Author registry — powers E-E-A-T bylines and Person/Author schema.

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  sameAs: string[];
}

export const AUTHORS: Record<string, Author> = {
  redazione: {
    id: "redazione",
    name: "Redazione Gazzetta Edile",
    role: "Redazione tecnica",
    bio: "La redazione di Gazzetta Edile riunisce giornalisti e tecnici del settore edile: geometri, ingegneri e periti che verificano dati, costi e normative prima della pubblicazione.",
    sameAs: [],
  },
  "marco-ferri": {
    id: "marco-ferri",
    name: "Marco Ferri",
    role: "Ingegnere edile · Efficienza energetica",
    bio: "Ingegnere edile specializzato in riqualificazione energetica e impianti a fonti rinnovabili. Segue per Gazzetta Edile i temi di fotovoltaico, pompe di calore e involucro.",
    sameAs: [],
  },
  "chiara-bruno": {
    id: "chiara-bruno",
    name: "Chiara Bruno",
    role: "Geometra · Ristrutturazioni e bonus",
    bio: "Geometra con esperienza in pratiche edilizie e detrazioni fiscali. Cura le guide su ristrutturazioni, permessi e incentivi.",
    sameAs: [],
  },
};

export function getAuthor(id: string): Author {
  return AUTHORS[id] ?? AUTHORS.redazione;
}
