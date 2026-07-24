"use client";

import { absoluteUrl } from "@/lib/site";

export function ShareButtons({ path, title }: { path: string; title: string }) {
  const url = absoluteUrl(path);
  const items = [
    { label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { label: "X", href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}` },
  ];
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted">Condividi</span>
      {items.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-line px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-bordeaux hover:text-bordeaux"
        >
          {s.label}
        </a>
      ))}
    </div>
  );
}
