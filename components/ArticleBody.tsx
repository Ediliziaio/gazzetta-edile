import type { Block } from "@/lib/content";
import { renderInline } from "./RichText";
import { AdSlot } from "./AdSlot";

// Renders the block-based body. An in-content ad is injected once, after the
// block nearest the middle, in reserved space (no layout shift).
export function ArticleBody({ blocks }: { blocks: Block[] }) {
  const adAfter = Math.min(
    blocks.length - 1,
    Math.max(2, Math.floor(blocks.length / 2))
  );

  return (
    <div className="prose-ge">
      {blocks.map((b, i) => (
        <div key={i}>
          {renderBlock(b)}
          {i === adAfter && (
            <AdSlot format="rectangle" className="my-8" />
          )}
        </div>
      ))}
    </div>
  );
}

function renderBlock(b: Block) {
  switch (b.type) {
    case "p":
      return <p>{renderInline(b.text)}</p>;
    case "h2":
      return <h2 id={b.id}>{b.text}</h2>;
    case "h3":
      return <h3 id={b.id}>{b.text}</h3>;
    case "ul":
      return (
        <ul>
          {b.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {b.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {b.headers.map((h, i) => (
                  <th
                    key={i}
                    className="border border-line bg-surface px-3 py-2 text-left font-semibold text-charcoal"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-line px-3 py-2 text-ink-soft">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <div className="my-6 rounded-sm border border-line bg-surface p-4">
          {b.title && <p className="mb-1 font-semibold text-charcoal">{b.title}</p>}
          <p className="text-ink-soft">{renderInline(b.text)}</p>
        </div>
      );
    case "quote":
      return (
        <blockquote className="my-6 border-l-4 border-bordeaux pl-4 text-lg italic text-charcoal">
          {renderInline(b.text)}
          {b.cite && <cite className="mt-1 block text-sm not-italic text-muted">— {b.cite}</cite>}
        </blockquote>
      );
  }
}
