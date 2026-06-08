import type { Locale } from "../config";
import type { WorkItem } from "@/app/work/workData";

/** Localized, display-facing subset of a work item. Non-text fields (slug,
 *  quarter, classification, tags, art, gradient) come from the source data. */
export type WorkContent = {
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  systems: string[];
  results: string;
};

/** Albanian translations keyed by work slug. */
const WORK_CONTENT_SQ: Record<string, WorkContent> = {
  "hospitality-brand": {
    title: "Sistem Brandi për Mikpritjen",
    summary:
      "Një koncept që tregon se si pozicionimi, gjuha vizuale dhe modelet e përsëritshme të përmbajtjes mund t'i bëjnë pikat e kontaktit në mikpritje të duken koherente.",
    challenge:
      "Brandi duhej të dukej premium pa qenë i zakontë dhe të qëndronte në menu, tabela, rrjete sociale dhe trajnim stafi — jo thjesht një logo.",
    approach:
      "Qasja e propozuar nis me historinë dhe udhëtimin e mysafirit, pastaj përcakton një sistem të fokusuar tipografie e ngjyrash, drejtim fotografik dhe rregulla praktike zëri.",
    deliverables: [
      "Pozicionim + kufij emërtimi",
      "Sistem logoje + rregulla përdorimi",
      "Tipografi, ngjyra dhe elemente bazë faqosjeje",
      "Shabllone për rrjete sociale + OOH",
      "Narrativë lançimi + mesazhe kryesore",
    ],
    systems: [
      "Udhëzues brandi (PDF i lehtë)",
      "Shtylla përmbajtjeje + tema mujore",
      "Emërtim asetesh + strukturë dosjesh",
    ],
    results:
      "Synimi i rezultatit: një sistem brandi mikpritjeje gati për lançim, me asete të ripërdorshme, pika kontakti më të qarta me mysafirin dhe një strukturë përmbajtjeje gati për rezervime, evente dhe fushata lokale.",
  },
  "e-commerce-mvp": {
    title: "Plan MVP për E-commerce",
    summary:
      "Një koncept për një MVP të fokusuar dyqani që mbulon katalogun, arkëtimin, bazat e administrimit dhe lidhjet e analitikës.",
    challenge:
      "Të ecësh shpejt pa e ngujuar ekipin në qoshe — UX i pastër sot, hapësirë për pagesa, inventar dhe fushata nesër.",
    approach:
      "Plani përcakton një v1 qëllimisht të vogël, i jep përparësi rrjedhës së blerjes dhe hartëzon nevojat e të dhënave e të administrimit para zgjerimit.",
    deliverables: [
      "Arkitekturë produkti + fushëveprim MVP",
      "Ekrane UI për shfletim → shportë → sukses",
      "Skemë Supabase + plan Row Level Security",
      "Vendosje + konfigurim mjedisi",
    ],
    systems: [
      "Rrugë aplikacioni Next.js",
      "Supabase Postgres + Auth",
      "Pipeline vendosjeje Vercel",
      "Lidhje monitorimi gabimesh (opsionale)",
    ],
    results:
      "Synimi i rezultatit: një themel dyqani i përgatitur për gjurmim konvertimi, atribuim fushatash, zgjerim inventari dhe një rrugë më të shpejtë nga vizita e parë te blerja e parë.",
  },
  "local-smb-campaign": {
    title: "Sistem Kërkese Lokale",
    summary:
      "Një koncept për të lidhur strukturën e ofertës, testimin krijues dhe vendimet javore në një sistem të matshëm kërkese lokale.",
    challenge:
      "Gjeografi e ngushtë + buxhet i kufizuar do të thotë që çdo test krijues dhe audience duhet të mësojë diçka të dobishme brenda ditësh, jo muajsh.",
    approach:
      "Qasja e propozuar përdor një narrativë të thjeshtë gypi, këndvështrime reklamash të përsëritshme dhe një ritëm raportimi që nxit vendime për të mbajtur, rregulluar ose ndaluar.",
    deliverables: [
      "Hartë përputhjeje oferte + faqe uljeje",
      "Matricë krijuese (këndvështrime × formate)",
      "Listë kontrolli optimizimi javor",
      "Shabllone skenarësh ndjekjeje kontaktesh",
    ],
    systems: [
      "Strukturë Meta Ads",
      "UTM + emërtim eventesh",
      "Grupim mujor përmbajtjeje",
      "Panel KPI (i lehtë)",
    ],
    results:
      "Synimi i rezultatit: një motor fushatash lokale ku çdo test krijues, vizitë në faqen e uljes dhe përgjigje kontakti mund të matet e të përmirësohet çdo javë.",
  },
  "real-estate-pwa": {
    title: "Koncept PWA për Pasuri të Paluajtshme",
    summary:
      "Një koncept për një përvojë të shpejtë e të instalueshme shfletimi pronash, projektuar rreth qartësisë së listimeve, rrjedhës së pyetjeve dhe performancës në celular.",
    challenge:
      "Media cilësore pa kohë brutale ngarkimi — dhe një UX që fiton besimin shpejt në një kategori skeptike.",
    approach:
      "Koncepti i jep përparësi navigimit me pyetjen në plan të parë, shpërndarjes së imazheve sipas pajisjes, ruajtjes në kesh dhe një arkitekture informacioni qëllimisht të dukshme.",
    deliverables: [
      "Rrjedha UX për listim + detaje",
      "Hapësirë brandi për sinjale besimi te agjenti",
      "Manifest PWA + asete miqësore me ofline",
      "Buxhet performance + strategji imazhesh",
    ],
    systems: [
      "Next.js",
      "Ruajtje në kesh miqësore me edge",
      "Evente analitike për gypin e pyetjeve",
      "Lidhje dorëzimi me email/SMS",
    ],
    results:
      "Synimi i rezultatit: një përvojë e shpejtë shfletimi pronash, projektuar rreth normës së pyetjeve, performancës në celular dhe përdorimit të përsëritur gati për instalim.",
  },
  "restaurant-system": {
    title: "Sistem Operimi për Restorante",
    summary:
      "Një koncept që lidh brandin, marketingun dhe automatizimin e lehtë për operacione ditore restoranti më të qëndrueshme.",
    challenge:
      "Restorantet ecin me marzhe të holla dhe me kohë edhe më të hollë — mjetet duhet të jenë të dukshme dhe të mirëmbajtshme nga staf joteknik.",
    approach:
      "Qasja e propozuar hartëzon operacionet javore, zëvendëson punën e dyfishtë me shabllone dhe automatizon kujtesat rutinë, rrugëzimin dhe dorëzimet.",
    deliverables: [
      "Freskim brandi + hierarki menuje",
      "Kalendar fushatash i lidhur me kapacitetin real të kuzhinës",
      "Hartë automatizimi (me miratime njerëzore të ruajtura)",
      "SOP miqësore për stafin",
    ],
    systems: [
      "Shabllone përmbajtjeje",
      "Rrugëzim kontaktesh/pyetjesh",
      "Rrjedhë kërkese për vlerësim (opsionale)",
      "Etiketim i lehtë CRM",
    ],
    results:
      "Synimi i rezultatit: më pak kërkesa të përsëritura për përmbajtje, planifikim më i pastër promocionesh dhe pika kontakti më të qëndrueshme me klientin në menu, rrjete sociale dhe ndjekje.",
  },
  "internal-ops-tool": {
    title: "Konsolë Operimi e Brendshme",
    summary:
      "Një model sistemi i brendshëm për ta kthyer punën administrative të përsëritur në rrjedha të udhëhequra me gjendje të qarta dhe kontrolle miratimi.",
    challenge:
      "Fletëllogaritëset funksionuan derisa nuk funksionuan më: lejet, gjurmueshmëria dhe shpejtësia u bënë kërkesat reale të produktit.",
    approach:
      "Qasja e brendshme hartëzon së pari punët e operatorit dhe kalimet e gjendjeve, pastaj e rrit konsolën modul pas moduli.",
    deliverables: [
      "Auditim rrjedhash pune + model lejesh",
      "Ekrane kryesore për 3 punët kryesore për t'u kryer",
      "Plan integrimi API",
      "Listë kontrolli shpërndarjeje + shënime trajnimi",
    ],
    systems: [
      "Akses sipas roleve",
      "Evente regjistri auditimi",
      "Punë në sfond për importe",
      "Ndihmë AI pas pikave të miratimit",
    ],
    results:
      "Synimi i rezultatit: ngarkesë më e ulët administrative manuale, pronësi më e qartë dhe kapacitet më i sigurt pune përmes lejeve, regjistrave të auditimit dhe ndihmës së AI me miratim të kontrolluar.",
  },
};

function englishWorkContent(work: WorkItem): WorkContent {
  return {
    title: work.title,
    summary: work.detail.summary,
    challenge: work.detail.challenge,
    approach: work.detail.approach,
    deliverables: work.detail.deliverables,
    systems: work.detail.systems,
    results: work.detail.results,
  };
}

export function getWorkContent(work: WorkItem, locale: Locale): WorkContent {
  if (locale === "en") return englishWorkContent(work);
  return WORK_CONTENT_SQ[work.slug] ?? englishWorkContent(work);
}
