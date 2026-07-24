// The 8 SEO silos of Gazzetta Edile. Order = navigation order.

export interface Category {
  slug: string;
  name: string; // display name
  nav: string; // short label for nav
  title: string; // H1 / meta for the hub page
  description: string; // hub intro + meta description
  keyword: string; // primary keyword for the silo
}

export const CATEGORIES: Category[] = [
  {
    slug: "ristrutturazioni",
    name: "Ristrutturazioni",
    nav: "Ristrutturazioni",
    title: "Ristrutturazioni: guide, costi e detrazioni",
    description:
      "Come ristrutturare casa nel 2026: costi al metro quadro, permessi, capitolati, chiavi in mano e detrazioni fiscali. Guide pratiche per privati e imprese edili.",
    keyword: "ristrutturazione casa",
  },
  {
    slug: "serramenti-e-infissi",
    name: "Serramenti e Infissi",
    nav: "Serramenti",
    title: "Serramenti e Infissi: materiali, prezzi e detrazioni",
    description:
      "Finestre, porte e infissi: PVC, alluminio, legno, prezzi al mq, classi energetiche e detrazioni. Come scegliere i serramenti giusti per la tua casa o il tuo cantiere.",
    keyword: "serramenti e infissi",
  },
  {
    slug: "efficienza-energetica",
    name: "Efficienza Energetica",
    nav: "Efficienza Energetica",
    title: "Efficienza Energetica: fotovoltaico, pompe di calore, cappotto",
    description:
      "Pannelli solari, fotovoltaico, pompe di calore, cappotto termico e riqualificazione energetica: costi, resa, incentivi e come intervenire davvero sull'edificio.",
    keyword: "efficienza energetica edificio",
  },
  {
    slug: "materiali-da-costruzione",
    name: "Materiali da Costruzione",
    nav: "Materiali",
    title: "Materiali da Costruzione: guide tecniche e prezzi",
    description:
      "Calcestruzzo, laterizi, isolanti, malte e materiali innovativi: schede tecniche, prestazioni, prezzi e criteri di scelta per il cantiere.",
    keyword: "materiali da costruzione",
  },
  {
    slug: "impianti",
    name: "Impianti",
    nav: "Impianti",
    title: "Impianti: elettrico, idraulico, termico e domotica",
    description:
      "Impianti elettrici, idraulici, di riscaldamento e domotica: normative, dimensionamento, costi e integrazione negli interventi edilizi.",
    keyword: "impianti edilizia",
  },
  {
    slug: "incentivi-e-bonus",
    name: "Incentivi e Bonus",
    nav: "Incentivi e Bonus",
    title: "Incentivi e Bonus edilizi: guida aggiornata",
    description:
      "Superbonus, Ecobonus, Bonus ristrutturazioni e detrazioni fiscali: aliquote, requisiti, scadenze e come utilizzarli correttamente nel 2026.",
    keyword: "bonus edilizi 2026",
  },
  {
    slug: "tecnologie-e-innovazione",
    name: "Tecnologie e Innovazione",
    nav: "Tecnologie",
    title: "Tecnologie e Innovazione per l'edilizia",
    description:
      "BIM, digitalizzazione del cantiere, stampa 3D, prefabbricazione e nuove tecnologie: come stanno cambiando il modo di costruire.",
    keyword: "tecnologie edilizia",
  },
  {
    slug: "normative",
    name: "Normative",
    nav: "Normative",
    title: "Normative edilizia: regole, permessi e sicurezza",
    description:
      "Testo Unico Edilizia, permessi, CILA e SCIA, sicurezza cantiere e adempimenti: cosa dice la norma e come applicarla senza errori.",
    keyword: "normativa edilizia",
  },
];

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug);

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
