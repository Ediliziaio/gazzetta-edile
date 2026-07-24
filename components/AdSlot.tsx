// Reserved-space ad placeholder. Fixed dimensions => zero CLS.
// Swap the inner markup for AdSense / Ad Manager when the editor is ready.

type Format = "leaderboard" | "rectangle" | "in-feed" | "mobile-anchor";

const DIMS: Record<Format, { w: number | string; h: number; label: string }> = {
  leaderboard: { w: 728, h: 90, label: "728×90" },
  rectangle: { w: 300, h: 250, label: "300×250" },
  "in-feed": { w: "100%", h: 120, label: "Native / in-feed" },
  "mobile-anchor": { w: "100%", h: 60, label: "Anchor 320×50" },
};

export function AdSlot({ format = "rectangle", className = "" }: { format?: Format; className?: string }) {
  const d = DIMS[format];
  return (
    <div className={`flex justify-center ${className}`} aria-hidden>
      <div
        className="flex items-center justify-center text-[0.65rem] uppercase tracking-widest text-muted"
        style={{
          width: d.w,
          maxWidth: "100%",
          height: d.h,
          background:
            "repeating-linear-gradient(45deg,#f4f1ec,#f4f1ec 10px,#efece7 10px,#efece7 20px)",
          border: "1px solid var(--line)",
        }}
      >
        Spazio pubblicitario · {d.label}
      </div>
    </div>
  );
}
