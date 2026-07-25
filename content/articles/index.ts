import type { Article } from "@/lib/content";
import { pannelliSolariGuida } from "./pannelli-solari-guida";
import { impiantoFotovoltaicoCosti } from "./impianto-fotovoltaico-costi";
import { cappottoTermicoGuida } from "./cappotto-termico-guida";
import { superbonusIncentivi2026 } from "./superbonus-incentivi-2026";
import { serramentiInfissiComeScegliere } from "./serramenti-infissi-come-scegliere";
import { miglioriGestionaliEdilizia } from "./migliori-gestionali-edilizia";
import { ristrutturareCasaCosti2026 } from "./ristrutturare-casa-costi-2026";
import { pompeDiCaloreGuida } from "./pompe-di-calore-guida";

// Registro di tutti gli articoli. Aggiungere qui ogni nuovo articolo.
export const articles: Article[] = [
  pannelliSolariGuida,
  impiantoFotovoltaicoCosti,
  cappottoTermicoGuida,
  superbonusIncentivi2026,
  serramentiInfissiComeScegliere,
  miglioriGestionaliEdilizia,
  ristrutturareCasaCosti2026,
  pompeDiCaloreGuida,
];
