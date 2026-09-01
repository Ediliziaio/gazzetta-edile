import type { Metadata } from "next";
import { Fraunces, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@/components/Analytics";
import { CookieBanner } from "@/components/CookieBanner";
import { SITE, baseUrl, absoluteUrl } from "@/lib/site";

// Display: Fraunces — serif Didone ad alto contrasto, in armonia col logo.
const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif-head",
  display: "swap",
});

// Corpo/UI: Libre Franklin — grottesco editoriale da quotidiano.
const sans = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-sans-ui",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: SITE.name,
    url: baseUrl,
    description: SITE.description,
    // Il logo del publisher è richiesto da Google per i rich result degli articoli.
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo.png"),
      width: 1923,
      height: 503,
    },
    foundingDate: "2026",
    knowsAbout: [
      "edilizia",
      "ristrutturazioni",
      "serramenti e infissi",
      "efficienza energetica",
      "materiali da costruzione",
      "impianti",
      "incentivi e bonus edilizi",
      "normativa edilizia",
    ],
    sameAs: SITE.sameAs,
  };
  const siteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: SITE.name,
    url: baseUrl,
    inLanguage: "it-IT",
    publisher: { "@id": absoluteUrl("/#organization") },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: absoluteUrl("/cerca?q={search_term_string}"),
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="it" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Analytics />
        <JsonLd data={[orgSchema, siteSchema]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[60] focus:rounded focus:bg-charcoal focus:px-3 focus:py-2 focus:text-white"
        >
          Vai al contenuto
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
