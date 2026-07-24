import type { Faq as FaqType } from "@/lib/content";
import { renderInline } from "./RichText";
import { JsonLd } from "./JsonLd";

export function Faq({ items }: { items: FaqType[] }) {
  if (!items.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="mt-12" aria-labelledby="faq-title">
      <JsonLd data={schema} />
      <h2 id="faq-title" className="font-head text-2xl font-bold text-charcoal">
        Domande frequenti
      </h2>
      <div className="mt-4 divide-y divide-line border-y border-line">
        {items.map((f, i) => (
          <details key={i} className="group py-4">
            <summary className="flex cursor-pointer items-center justify-between gap-3 font-head text-lg font-semibold text-charcoal marker:content-['']">
              {f.q}
              <span className="text-bordeaux transition-transform group-open:rotate-45" aria-hidden>
                +
              </span>
            </summary>
            <p className="mt-2 text-ink-soft">{renderInline(f.a)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
