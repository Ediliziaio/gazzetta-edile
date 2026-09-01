// Gestione del consenso cookie (GDPR + Google Consent Mode v2).
// Nessuno strumento di misurazione parte prima del consenso esplicito.

export const CONSENT_KEY = "ge_consent_v1";
export const CONSENT_EVENT = "ge:consent-change";

export type ConsentChoice = "granted" | "denied";

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    // Storage non disponibile (private mode, cookie bloccati): nessun consenso.
    return null;
  }
}

export function writeConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    /* ignora: il consenso vale comunque per la sessione corrente */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
}

// Traduce la scelta nei segnali di Google Consent Mode v2.
export function consentSignals(choice: ConsentChoice) {
  return {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  };
}
