"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  CONSENT_EVENT,
  consentSignals,
  readConsent,
  type ConsentChoice,
} from "@/lib/consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * GA4 con Google Consent Mode v2.
 * Lo stato di default è "denied" e viene impostato PRIMA del caricamento di
 * gtag.js: senza consenso non vengono scritti cookie di analytics/marketing.
 * Se NEXT_PUBLIC_GA_ID non è configurato non viene caricato nulla.
 */
export function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;
    const apply = (choice: ConsentChoice) => {
      window.gtag?.("consent", "update", consentSignals(choice));
    };
    const stored = readConsent();
    if (stored) apply(stored);

    const onChange = (e: Event) => {
      const choice = (e as CustomEvent<ConsentChoice>).detail;
      if (choice) apply(choice);
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      {/* Consent Mode: default negato, prima di qualsiasi tag */}
      <Script id="ge-consent-default" strategy="beforeInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent','default',{
  ad_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  analytics_storage:'denied',
  functionality_storage:'granted',
  security_storage:'granted',
  wait_for_update: 500
});
`}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ge-ga4-init" strategy="afterInteractive">
        {`
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });
`}
      </Script>
    </>
  );
}
