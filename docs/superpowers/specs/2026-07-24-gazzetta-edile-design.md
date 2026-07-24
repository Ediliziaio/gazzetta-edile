# Gazzetta Edile — Design Spec

**Data:** 2026-07-24
**Stato:** in revisione
**Autore sessione:** brainstorming con Florin

---

## 1. Obiettivo

Portale editoriale (testata giornalistica online) verticale sull'edilizia: **Gazzetta Edile**.
Leggero, velocissimo, costruito per dominare Google + i motori generativi (ChatGPT, Perplexity,
Gemini, Claude, Google AI Overviews). Pensato per scalare a centinaia di articoli.

**Priorità (ordine fisso):** indicizzazione → SEO tecnica/TAG → velocità → mobile → AEO → GEO.

**Modello di business:** contenuti + spazi pubblicitari (display, native, sponsorizzazioni).
Predisposizione a lead-gen verso l'ecosistema AEDIX/EiC in fase successiva.

## 2. Scope di questa fase ("prima la piattaforma")

**IN SCOPE ora:**
- Progetto Next.js 16 nuovo in `~/gazzetta-edile`, deploy Vercel.
- Architettura a silos completa (8 categorie) + routing.
- Home page magazine.
- Template pagina articolo completo (SEO/GEO/AEO).
- Layer tecnico SEO/GEO/AEO: metadata, JSON-LD, sitemap (+news), robots (crawler AI), llms.txt, HTML sitemap.
- Design system (palette + tipografia da logo).
- Pagine editoriali di servizio.
- **5 articoli pilota completi (≥4.000 caratteri)**, incluso 1 pillar per sitelink.

**FUORI SCOPE ora (sessioni successive):**
- I restanti ~25 articoli del piano editoriale.
- Backend CMS/admin (Supabase) — data-layer astratto per non riscrivere se aggiunto dopo.
- Collegamento dominio e go-live produzione.
- Embed reale form lead EiC (la pagina Contatti sarà pronta ad accoglierlo).

## 3. Decisioni prese

| Tema | Decisione |
|---|---|
| Natura | Sito **nuovo da zero** in `~/gazzetta-edile` (guida-edile resta intatto e separato) |
| Nome | **Gazzetta Edile** (il "Il Giornale Edile" del brief §4 era un refuso) |
| Stack | Next.js 16 (App Router) + React 19 + Tailwind v4 + TypeScript |
| Contenuti | **MDX nel repo**, SSG puro, frontmatter validato con zod |
| Deploy | **Vercel** |
| Tipografia | **Titoli serif** (come il logo) + **corpo sans** pulito |
| Lead/monetizzazione | **Slot pubblicitari AdSense-ready** ora; Contatti pre-predisposta per form EiC dopo |
| Pilota | 5 articoli **completi ≥4.000 caratteri** |

## 4. Stack & content model

- Next.js 16 App Router, RSC, prerendering statico (SSG) per tutte le pagine articolo/categoria.
- Contenuti in `/content/articoli/**/*.mdx` (organizzati per categoria) + `/content/autori/*`.
- **Frontmatter validato con zod** in `lib/content.ts` (fallisce il build se un campo obbligatorio manca → niente contenuto SEO incompleto in produzione).
- `generateStaticParams` genera tutte le rotte a build time.
- Rendering MDX in RSC (libreria da confermare in fase di planning tra `@next/mdx` nativo o `next-mdx-remote/rsc`; scelta guidata dalla necessità di frontmatter tipizzato + componenti custom nel corpo).
- **Data-layer dietro interfaccia** (`getAllArticles`, `getArticleBySlug`, `getArticlesByCategory`, …) così un backend Supabase può sostituire la sorgente file senza toccare i template.

### Schema frontmatter articolo (bozza)

```yaml
title: string                  # titolo articolo = H1
slug: string                   # derivato/override, url-safe
category: enum(8 silos)
tags: string[]
metaTitle: string              # ≤ 60 char
metaDescription: string        # ≤ 155 char
abstract: string               # risposta rapida AEO, 40–60 parole
keywordPrimary: string
keywordsSecondary: string[]
author: string                 # ref a /content/autori
publishedAt: date
updatedAt: date
coverImage: string
coverAlt: string               # alt descrittivo con keyword
faq: { q: string, a: string }[]  # → FAQPage
related: string[]              # slug articoli correlati (fallback: stessi silo)
pillar: boolean                # true = pagina pilastro (strategia sitelink)
schemaType: enum(Article|NewsArticle|HowTo)  # default Article
```

Autori (E-E-A-T): `name`, `role`, `bio`, `avatar`, `sameAs[]` → schema `Author`/`Person`.

## 5. Architettura a silos & URL

8 macro-silos (category-first URL, brevi e parlanti):

1. `ristrutturazioni`
2. `serramenti-e-infissi`
3. `efficienza-energetica`
4. `materiali-da-costruzione`
5. `impianti`
6. `incentivi-e-bonus`
7. `tecnologie-e-innovazione`
8. `normative`

**Rotte:**
- `/` — home
- `/[categoria]/` — hub del silo (landing pillar + lista cluster)
- `/[categoria]/[slug]/` — articolo (es. `/efficienza-energetica/pannelli-solari-guida/`)
- `/chi-siamo`, `/redazione`, `/contatti`, `/pubblicita`, `/privacy`, `/cookie-policy`
- `/mappa` — sitemap HTML per utenti
- (opzionale futuro) `/tag/[tag]/`

Le rotte statiche hanno precedenza sul dinamico `[categoria]` → nessuna collisione.
**Breadcrumb** derivato dall'URL su ogni pagina, con markup `BreadcrumbList`.
**Internal linking:** ogni articolo linka pillar↔cluster dello stesso silo; hub silo linka i figli.

## 6. Home page (magazine)

Struttura "prima pagina di giornale" ad alta densità e alta velocità:

1. **Header sticky:** logo + nav 8 categorie + ricerca + Chi siamo/Contatti. Slot **leaderboard** (728×90 / responsive) con spazio riservato, fuori dal percorso LCP.
2. **Hero apertura:** 1 notizia principale (immagine LCP, `priority`) + 2–4 secondarie in evidenza.
3. **Blocchi per silo:** ultimi articoli di ogni categoria, stile magazine.
4. **"Più letti / In evidenza":** rail per far emergere i pillar.
5. **Slot native/in-feed** tra i blocchi (dimensioni riservate, CLS = 0).
6. **Footer:** mappa completa sezioni + pagine di servizio + newsletter.

Gerarchia tipografica: H1 unico (brand/testata), H2/H3 sui blocchi. Immagini lazy tranne LCP.
Elementi E-E-A-T: firma redazione, data aggiornamento, testata riconoscibile.

## 7. Template pagina articolo (showpiece SEO/GEO/AEO)

Ordine verticale:

1. Breadcrumb (`BreadcrumbList`)
2. **H1** = titolo articolo (unico)
3. Riga meta: autore + data pubblicazione + data aggiornamento (E-E-A-T)
4. Cover (AVIF/WebP, dimensioni esplicite, `priority` = LCP)
5. **"Risposta rapida"** answer box in cima, 40–60 parole auto-conclusive (AEO)
6. **TOC** cliccabile con ancore H2/H3 (favorisce sitelink)
7. Corpo MDX: H2/H3 semantici, liste, tabelle, passaggi numerati
8. **Slot ad inline** tra i paragrafi (spazio riservato, no layout shift)
9. **Blocco FAQ** in fondo (`FAQPage`)
10. Articoli correlati (link interni pillar↔cluster)
11. Bottoni condivisione leggeri
12. Sidebar desktop: rettangolo 300×250 + "più letti"

**JSON-LD per articolo:** `Article`/`NewsArticle` + `BreadcrumbList` + `FAQPage` (+ `HowTo` dove pertinente) + `Author`.

## 8. Layer tecnico SEO/GEO/AEO

**Metadata (Next `generateMetadata` per pagina):**
- `title` ≤ 60, `description` ≤ 155, `canonical` su ogni pagina.
- Open Graph + Twitter Card.
- Heading semantici (un solo H1), alt su tutte le immagini.

**Structured data (JSON-LD):**
- Site-wide (root layout): `Organization` + `WebSite` con `SearchAction`.
- Per pagina: come §7.

**Indicizzazione:**
- `app/sitemap.ts` dinamica (tutte le rotte) + sitemap **news** dove applicabile.
- `app/robots.ts`: nessun blocco accidentale; **consenti crawler AI** — GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, oltre ai bot classici.
- **`/llms.txt`** (public) con riassunto contenuti chiave + pagine pillar.
- HTML sitemap `/mappa`.
- Canonical + gestione archivi/paginazione per evitare thin/duplicate.

**GEO:** contenuti fattuali/citabili (dati, definizioni, elenchi sintetici), frasi "estraibili" auto-conclusive, schema ricco, E-E-A-T e fonti.

**AEO (focus):** answer box in cima, FAQ con markup, H2 formulati come domande reali ("Quanto costa…", "Come funziona…", "Conviene…"), tabelle/liste/step per snippet e HowTo, copertura completa dell'intento (definizione, costi, pro/contro, procedura, normativa).

## 9. Velocità / Core Web Vitals

Target: **LCP < 2,5s · INP < 200ms · CLS < 0,1 · Lighthouse 90+ mobile e desktop.**
- Tailwind v4 (CSS snello), zero JS bloccante, font self-hosted via `next/font`.
- `next/image` AVIF/WebP, dimensioni esplicite, lazy sotto la piega (LCP escluso).
- Slot ad con dimensioni riservate → CLS 0.
- SSG + CDN Vercel; nessun runtime DB.

## 10. Mobile-first

Responsive fluido, touch target adeguati, font leggibili senza zoom, menu a drawer,
niente elementi che sforano la viewport, niente pop-up invadenti (penalizzati da Google),
slot ad mobile non invasivi (sticky/anchor discreto, non copre il contenuto).

## 11. Spazi pubblicitari (predisposti, li riempirà l'editore)

- Leaderboard header 728×90 / responsive (no impatto LCP).
- Rettangolo 300×250 in sidebar e/o tra i paragrafi.
- Native / in-feed nella home tra i blocchi.
- Sticky/anchor mobile discreto.
- Ogni slot con dimensioni riservate (CLS 0), compatibile AdSense / Ad Manager e inserzioni dirette.
- Componente `<AdSlot>` riutilizzabile con placeholder in dev.

## 12. Design system

Da logo (serif classico nero + accento bordeaux + motivo finestra):

- **Palette:** charcoal near-black `~#1c1c1c`; sfondo bianco/off-white; **accento bordeaux `~#9c1b2e`**; grigi neutri per meta/bordi. (Valori esatti calibrati in implementazione per contrasto AA.)
- **Tipografia:** **titoli serif** display (classica, coerente col logo) + **corpo sans** pulito ad alta leggibilità; sans anche per UI/meta. Self-hosted via `next/font`.
- **Tono visivo:** autorevolezza Forbes + densità da quotidiano Corriere + snellezza verticale GuidaFinestra.
- Nessun orpello che danneggi performance o crawlabilità.

## 13. Pagine editoriali di servizio

Chi siamo, Redazione/Autori, Contatti (form pronto per embed EiC futuro), Pubblicità/Media Kit,
Privacy, Cookie policy. Cookie banner consent-aware predisposto (senza tracciamento attivo finché non richiesto).

## 14. Contenuti pilota (5 articoli completi ≥4.000 char)

Un **pillar progettato per sitelink** + cluster collegati (esempio del brief):

1. **PILLAR** — *Pannelli solari: guida completa (costi, incentivi, come funzionano, manutenzione)* — `efficienza-energetica`, con sezioni ancorate (ogni H2 = potenziale sitelink). `pillar: true`.
2. *Quanto costa un impianto fotovoltaico nel 2026* — `efficienza-energetica`, cluster → pillar.
3. *Cappotto termico: guida, costi e resa* — `efficienza-energetica`, cluster → pillar.
4. *Superbonus e incentivi edilizia 2026: cosa resta* — `incentivi-e-bonus`.
5. *Serramenti e infissi: come sceglierli (materiali, prezzi, detrazioni)* — `serramenti-e-infissi`.

Ognuno: title/meta ottimizzati, H1 + H2/H3 (alcuni come domande), answer box, TOC, FAQ,
schema, immagini con alt, link interni. Interconnessi per dimostrare la strategia sitelink.

## 15. Struttura file (bozza)

```
gazzetta-edile/
  app/
    layout.tsx                 # header/footer, JSON-LD Organization+WebSite, font
    page.tsx                   # home magazine
    [categoria]/
      page.tsx                 # hub silo
      [slug]/page.tsx          # articolo
    (editoriali)/…             # chi-siamo, contatti, ecc.
    mappa/page.tsx
    sitemap.ts
    robots.ts
  content/
    articoli/<categoria>/<slug>.mdx
    autori/<autore>.json
  components/
    editorial/ (Hero, ArticleCard, SiloBlock, TOC, AnswerBox, Faq, Breadcrumb, RelatedArticles…)
    ads/AdSlot.tsx
    seo/JsonLd.tsx
  lib/
    content.ts                 # loader + zod schema + data-layer interface
    categories.ts              # config 8 silos
    seo.ts                     # helper metadata/schema
  public/
    llms.txt, favicon, og default
```

## 16. Deliverable attesi (a fine implementazione)

1. Mappa sito / silos (questo documento §5).
2. Home magazine funzionante con slot ad.
3. Template articolo con tutti gli elementi SEO/GEO/AEO.
4. Layer tecnico SEO: metadata, JSON-LD, sitemap+news, robots (crawler AI), canonical, llms.txt, CWV.
5. Piano editoriale 30+ titoli con keyword + internal linking/sitelink (documento a parte).
6. 5 articoli pilota ≥4.000 char ottimizzati, incluso il pillar.

## 17. Rischi / note

- **API MDX Next.js 16:** verificare in planning la libreria/config corretta (training data potenzialmente obsoleto) prima di scrivere codice.
- **Tailwind v4:** config PostCSS nuova rispetto a v3.
- **Collisione route** categoria vs pagine statiche: confermata gestita da precedenza statica di Next.
- **Piano editoriale completo** e i 25 articoli restanti = sessioni dedicate successive.
