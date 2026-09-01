import type { Article } from "@/lib/content";
// Efficienza energetica
import { pannelliSolariGuida } from "./pannelli-solari-guida";
import { impiantoFotovoltaicoCosti } from "./impianto-fotovoltaico-costi";
import { cappottoTermicoGuida } from "./cappotto-termico-guida";
import { pompeDiCaloreGuida } from "./pompe-di-calore-guida";
import { fotovoltaicoAccumulo } from "./fotovoltaico-con-accumulo";
import { classeEnergeticaApe } from "./classe-energetica-ape";
import { caldaiaVsPompaCalore } from "./caldaia-o-pompa-di-calore";
// Ristrutturazioni
import { ristrutturareCasaCosti2026 } from "./ristrutturare-casa-costi-2026";
import { ristrutturareBagno } from "./ristrutturare-bagno-costi";
import { ristrutturareCucina } from "./ristrutturare-cucina-costi";
import { rifareTetto } from "./rifare-il-tetto-costi";
// Serramenti e infissi
import { serramentiInfissiComeScegliere } from "./serramenti-infissi-come-scegliere";
import { finestrePvc } from "./finestre-pvc-prezzi";
import { porteBlindate } from "./porte-blindate-come-scegliere";
import { tapparelleoscuranti } from "./tapparelle-persiane-oscuranti";
// Incentivi e bonus
import { superbonusIncentivi2026 } from "./superbonus-incentivi-2026";
import { ecobonus2026 } from "./ecobonus-2026-come-funziona";
import { bonusRistrutturazioni2026 } from "./bonus-ristrutturazioni-2026";
import { contoTermico2026 } from "./conto-termico-2026";
// Impianti
import { impiantoElettricoCasa } from "./impianto-elettrico-casa";
import { impiantoIdraulico } from "./impianto-idraulico-casa";
import { vmcVentilazione } from "./vmc-ventilazione-meccanica";
// Materiali da costruzione
import { materialiDaCostruzioneGuida } from "./materiali-da-costruzione-guida";
import { calcestruzzoTipi } from "./calcestruzzo-tipi-caratteristiche";
import { isolantiTermici } from "./isolanti-termici-a-confronto";
// Tecnologie e innovazione
import { miglioriGestionaliEdilizia } from "./migliori-gestionali-edilizia";
import { bimEdilizia } from "./bim-edilizia-cos-e";
import { casaDomotica } from "./casa-domotica-guida";
// Normative
import { permessiEdiliziCilaScia } from "./permessi-edilizi-cila-scia";
import { sicurezzaCantiere } from "./sicurezza-cantiere-psc-pos";

// Registro di tutti gli articoli. Aggiungere qui ogni nuovo articolo.
export const articles: Article[] = [
  pannelliSolariGuida,
  impiantoFotovoltaicoCosti,
  cappottoTermicoGuida,
  pompeDiCaloreGuida,
  fotovoltaicoAccumulo,
  classeEnergeticaApe,
  caldaiaVsPompaCalore,
  ristrutturareCasaCosti2026,
  ristrutturareBagno,
  ristrutturareCucina,
  rifareTetto,
  serramentiInfissiComeScegliere,
  finestrePvc,
  porteBlindate,
  tapparelleoscuranti,
  superbonusIncentivi2026,
  ecobonus2026,
  bonusRistrutturazioni2026,
  contoTermico2026,
  impiantoElettricoCasa,
  impiantoIdraulico,
  vmcVentilazione,
  materialiDaCostruzioneGuida,
  calcestruzzoTipi,
  isolantiTermici,
  miglioriGestionaliEdilizia,
  bimEdilizia,
  casaDomotica,
  permessiEdiliziCilaScia,
  sicurezzaCantiere,
];
