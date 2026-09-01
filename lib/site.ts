// Central site configuration — single source of truth for SEO/schema/branding.

export const SITE = {
  name: "Gazzetta Edile",
  legalName: "Domus Group S.r.l.",
  tagline: "Materiali da costruzione a confronto",
  description:
    "Materiali da costruzione a confronto: isolanti, laterizi, calcestruzzo, legno e serramenti valutati su prestazioni, durabilità, sostenibilità e prezzi.",
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
