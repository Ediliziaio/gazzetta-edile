import Image from "next/image";

// Slot pubblicitari con creativi reali.
// SEO: i link pubblicitari sono marcati rel="sponsored" (richiesto da Google per
// link promozionali/a pagamento) + noopener. Dimensioni esplicite => zero CLS.

type Format = "leaderboard" | "rectangle" | "in-feed" | "skyscraper" | "mobile-anchor";

const ADV_URL =
  "https://www.ediliziaincloud.com/?utm_source=gazzettaedile&utm_medium=banner&utm_campaign=display";

const ADV_ALT =
  "EdiliziaInCloud: il gestionale con AI per imprese edili. Prova gratuita di 31 giorni";

interface Creative {
  src: string;
  width: number;
  height: number;
  maxWidth: number;
}

const CREATIVES: Record<Format, Creative> = {
  leaderboard: { src: "/ads/eic-leaderboard.png", width: 970, height: 90, maxWidth: 970 },
  "in-feed": { src: "/ads/eic-billboard.png", width: 970, height: 402, maxWidth: 970 },
  rectangle: { src: "/ads/eic-rectangle.png", width: 300, height: 250, maxWidth: 300 },
  skyscraper: { src: "/ads/eic-skyscraper.png", width: 300, height: 600, maxWidth: 300 },
  "mobile-anchor": { src: "/ads/eic-square.png", width: 336, height: 244, maxWidth: 336 },
};

function Banner({ format, priority = false }: { format: Format; priority?: boolean }) {
  const c = CREATIVES[format];
  return (
    <a
      href={ADV_URL}
      target="_blank"
      rel="sponsored noopener noreferrer"
      aria-label={ADV_ALT}
      className="block transition-opacity hover:opacity-90"
      style={{ width: "100%", maxWidth: c.maxWidth }}
    >
      <Image
        src={c.src}
        alt={ADV_ALT}
        width={c.width}
        height={c.height}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes={`(max-width: 768px) 100vw, ${c.maxWidth}px`}
        className="h-auto w-full rounded-[2px]"
      />
    </a>
  );
}

export function AdSlot({
  format = "rectangle",
  className = "",
  priority = false,
}: {
  format?: Format;
  className?: string;
  priority?: boolean;
}) {
  // Il leaderboard è illeggibile sotto i 768px: su mobile si usa il creativo compatto.
  const responsive = format === "leaderboard" || format === "in-feed";

  return (
    <aside
      className={`flex flex-col items-center ${className}`}
      aria-label="Contenuto pubblicitario"
    >
      <span className="mb-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted/70">
        Pubblicità
      </span>
      {responsive ? (
        <>
          <div className="hidden w-full justify-center md:flex">
            <Banner format={format} priority={priority} />
          </div>
          <div className="flex w-full justify-center md:hidden">
            <Banner format="mobile-anchor" priority={priority} />
          </div>
        </>
      ) : (
        <Banner format={format} priority={priority} />
      )}
    </aside>
  );
}
