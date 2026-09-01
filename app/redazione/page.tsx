import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { AUTHORS } from "@/lib/authors";

export const metadata: Metadata = {
  title: "Redazione",
  description: "Gli autori e i tecnici che scrivono e verificano i contenuti di Gazzetta Edile.",
  alternates: { canonical: "/redazione" },
};

export default function Redazione() {
  return (
    <PageShell
      title="Redazione"
      path="/redazione"
      intro="Chi scrive e verifica i contenuti di Gazzetta Edile."
    >
      <div className="not-prose space-y-6">
        {Object.values(AUTHORS).map((a) => (
          <Link
            key={a.id}
            href={`/autori/${a.id}`}
            className="flex gap-4 rounded-sm border border-line bg-surface p-5 transition-colors hover:border-bordeaux"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bordeaux text-lg font-bold text-white">
              {a.name.charAt(0)}
            </div>
            <div>
              <p className="font-head text-lg font-bold text-charcoal">{a.name}</p>
              <p className="text-xs uppercase tracking-wide text-bordeaux">{a.role}</p>
              <p className="mt-1 text-sm text-muted">{a.bio}</p>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
