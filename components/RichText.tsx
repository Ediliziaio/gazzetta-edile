import Link from "next/link";
import { Fragment, type ReactNode } from "react";

// Minimal inline formatter: **bold** and [text](/url). Keeps article source readable
// without pulling in a full markdown runtime.
export function renderInline(text: string): ReactNode {
  // Split on bold first, then handle links inside each chunk.
  const boldParts = text.split(/(\*\*[^*]+\*\*)/g);
  return boldParts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{renderLinks(part.slice(2, -2))}</strong>;
    }
    return <Fragment key={i}>{renderLinks(part)}</Fragment>;
  });
}

function renderLinks(text: string): ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      const [, label, href] = m;
      const external = href.startsWith("http");
      return external ? (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ) : (
        <Link key={i} href={href}>
          {label}
        </Link>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
