// Central site configuration — single source of truth for SEO/schema/branding.

export const SITE = {
  name: "Gazzetta Edile",
  legalName: "Gazzetta Edile",
  tagline: "La testata verticale dell'edilizia italiana",
  description:
    "Gazzetta Edile è la testata giornalistica online dedicata all'edilizia: ristrutturazioni, serramenti, efficienza energetica, materiali, impianti, incentivi, tecnologie e normative. Guide autorevoli, dati e risposte pratiche per imprese, professionisti e privati.",
  locale: "it_IT",
  lang: "it",
  // Dominio di produzione (override via env per i preview).
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.gazzettaedile.it",
  publisher: "Redazione Gazzetta Edile",
  email: "redazione@gazzettaedile.it",
  // Placeholder social — da confermare
  sameAs: [] as string[],
} as const;

export const baseUrl = SITE.url;

export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${clean === "/" ? "" : clean}`;
}
