import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Immagine OG di default (home, rubriche, pagine di servizio).
// Gli articoli usano la propria cover come OG.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#fbfaf7",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div style={{ height: 14, background: "#9c1b2e", width: "100%" }} />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 90px",
          }}
        >
          <div
            style={{
              fontSize: 30,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#9c1b2e",
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
            }}
          >
            Testata verticale sull&apos;edilizia
          </div>
          <div style={{ display: "flex", alignItems: "baseline", marginTop: 18 }}>
            <div style={{ fontSize: 128, fontWeight: 700, color: "#171512", letterSpacing: -2 }}>
              Gazzetta
            </div>
            <div style={{ fontSize: 128, fontWeight: 700, color: "#9c1b2e", letterSpacing: -2, marginLeft: 24 }}>
              Edile
            </div>
          </div>
          <div style={{ fontSize: 34, color: "#4a463f", marginTop: 26, fontFamily: "Arial, sans-serif", maxWidth: 900 }}>
            Ristrutturazioni · Serramenti · Efficienza energetica · Incentivi · Materiali · Impianti
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 90px 46px",
            fontSize: 26,
            color: "#6f6a60",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <span>www.gazzettaedile.it</span>
          <span>Guide · dati · risposte pratiche</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
