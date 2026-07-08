import type { Locale } from "../config";
import type { ServiceItem } from "@/app/services/servicesData";

/** Localized, display-facing subset of a service. Non-text fields (slug, index,
 *  illustration, tags, etc.) come straight from the English source data. */
export type ServiceContent = {
  name: string;
  tagline: string;
  summary: string;
  includes: { title: string; description: string }[];
  whoItsFor: string[];
  process: { title: string; description: string }[];
  deliverables: string[];
};

/** Albanian translations keyed by service slug. */
const SERVICE_CONTENT_SQ: Record<string, ServiceContent> = {
  brand: {
    name: "Brand",
    tagline: "Strategjik, i mprehtë dhe i ndërtuar për të zgjatur.",
    summary:
      "Një sistem brandi që qëndron në çdo kanal për vite me radhë — jo një logo në një moodboard.",
    includes: [
      { title: "Strategji dhe pozicionim brandi", description: "Auditim konkurrence, hartë e audiencës, deklaratë pozicionimi dhe shtylla brandi." },
      { title: "Emërtim dhe slogane", description: "Listë e ngushtë, kontroll gjuhësor (SQ/EN) dhe verifikim bazë i markës tregtare." },
      { title: "Identitet vizual", description: "Sistem logoje, tipografi, ngjyra, ikonografi dhe drejtim fotografik." },
      { title: "Zë dhe ton", description: "Rregulla zëri, udhëzues stili për tekstin dhe shembuj çfarë të bësh/mos bësh." },
      { title: "Shtylla përmbajtjeje", description: "4–6 përkufizime shtyllash, tema mujore dhe arketipa postimesh." },
      { title: "Udhëzues brandi", description: "PDF i lehtë ose faqe Notion, bibliotekë asetesh dhe emërtim skedarësh." },
      { title: "Narrativë lançimi", description: "Dokument historie, tekst kryesor, mesazh i themeluesit dhe shpërndarje e brendshme." },
      { title: "Pika nisjeje kontakti", description: "Shabllone për rrjetet sociale, firmë email-i, prezantim, një-faqësh prezantimi dhe fillimet e tabelave." },
      { title: "Auditim brandi (zbulim me pagesë)", description: "Shqyrtim heuristik në web, rrjete sociale dhe personalisht — me raport mangësish të përfshirë." },
    ],
    whoItsFor: [
      "Biznese mikpritjeje, pasurish të paluajtshme dhe shërbimesh që duken jokoherente nëpër kanale.",
      "Themelues që kanë nevojë për një histori reale pozicionimi para se të shpenzojnë për reklama apo një faqe interneti.",
      "Ekipe të lodhura nga asete dizajni të njëhershme pa një sistem pas tyre.",
      "Operatorë gati të investojnë në një brand që zgjat — jo një logo të shpejtë nga Fiverr.",
    ],
    process: [
      { title: "Dëgjojmë dhe auditojmë", description: "Hartëzojmë tregun, audiencën dhe pikat aktuale të kontaktit. Merrni një pamje të qartë se çfarë funksionon, çfarë është zhurmë dhe ku janë mangësitë." },
      { title: "Sistem dhe shembull", description: "Fiksojmë pozicionimin, zërin dhe drejtimin vizual — pastaj e tregojmë të zbatuar në kanale reale, që ta ndieni sistemin para se të dorëzohet." },
      { title: "Dorëzim dhe udhëzues", description: "Asetet përfundimtare, udhëzuesit dhe shabllonet vendosen në një strukturë që ekipi juaj mund ta drejtojë pa qenë ne në dhomë çdo javë." },
    ],
    deliverables: [
      "Pozicionim + kufij emërtimi",
      "Sistem logoje + rregulla përdorimi",
      "Tipografi, ngjyra dhe elemente bazë faqosjeje",
      "Udhëzues zëri dhe toni",
      "Shtylla përmbajtjeje + tema mujore",
      "Udhëzues brandi (PDF ose Notion)",
      "Shabllone për rrjete sociale + OOH",
      "Narrativë lançimi + mesazhe kryesore",
    ],
  },
  software: {
    name: "Software",
    tagline: "Faqe interneti, MVP, mjete të brendshme.",
    summary:
      "Nga një faqe uljeje që konverton te një MVP i dorëzuar — mbi një grup teknologjish ku mund të rriteni.",
    includes: [
      { title: "Faqe uljeje", description: "Një-faqësh konvertimi, variante A/B dhe LCP i shpejtë." },
      { title: "Faqe marketingu", description: "Faqe me shumë nënfaqe me CMS të lehtë aty ku duhet." },
      { title: "PWA", description: "Aplikacione të instalueshme, miqësore me ofline për katalogë, lista dhe menu." },
      { title: "MVP e-commerce", description: "Dyqane Next.js + Supabase, arkëtim me Stripe dhe bazat e administrimit." },
      { title: "MVP SaaS", description: "Autentikim, faturim, panele dhe akses sipas roleve." },
      { title: "Mjete të brendshme", description: "Konsola operimi dhe CRM të personalizuara që zëvendësojnë fletëllogaritëset." },
      { title: "Auditime performance dhe SEO", description: "Core Web Vitals, të dhëna të strukturuara dhe pastrim ridrejtimesh." },
      { title: "Integrime", description: "Pagesa, analitikë, CRM, kalendar dhe email." },
      { title: "Marrëveshje mirëmbajtjeje", description: "Buxhet mujor përmirësimi, rregullim defektesh dhe shqyrtim analitike." },
    ],
    whoItsFor: [
      "Themelues në fazë të hershme që kanë nevojë për një MVP por nuk kanë ekip të brendshëm.",
      "Biznese të vogla e të mesme me një faqe që nuk konverton ose nuk përditësohet dot pa një zhvillues.",
      "Operatorë që i kanë tejkaluar fletëllogaritëset dhe kanë nevojë për një mjet të brendshëm të thjeshtë.",
      "Biznese që duan një grup teknologjish modern — jo një temë WordPress nga viti 2019.",
    ],
    process: [
      { title: "Fushëveprim dhe arkitekturë", description: "Përcaktojmë versionin më të vogël të dorëzueshëm, hartëzojmë modelet e të dhënave dhe biem dakord se çfarë bën v1 — dhe çfarë qëllimisht nuk bën." },
      { title: "Dizajn dhe ndërtim", description: "Së pari rrjedhat UX, pastaj kodi. Shihni software funksional herët, jo një prezantim Figma që s'dorëzohet kurrë." },
      { title: "Vendosje dhe dorëzim", description: "Vendosje në prodhim, dokumentim mjedisi dhe një rrugë e qartë që ekipi juaj të iterojë ose që ne të qëndrojmë në marrëveshje mirëmbajtjeje." },
    ],
    deliverables: [
      "Arkitekturë produkti + dokument fushëveprimi MVP",
      "Ekrane UI për rrjedhat kryesore të përdoruesit",
      "Aplikacion Next.js me backend Supabase",
      "Vendosje + konfigurim mjedisi",
      "Dokumentim që ekipi juaj mund ta ndjekë",
      "Lidhje për analitikë dhe monitorim gabimesh",
    ],
  },
  "marketing-engines": {
    name: "Motorë Marketingu",
    tagline: "Përmbajtje + reklama që rriten me kohën.",
    summary:
      "Përmbajtje, reklama dhe rrjedha kontaktesh të ndërtuara për të publikuar, mësuar dhe përmirësuar çdo muaj.",
    includes: [
      { title: "Meta Ads", description: "Konfigurim llogarie, pixel + evente, audienca, matricë krijuese dhe optimizim javor." },
      { title: "Google Ads (Search/PMax)", description: "Shtesë opsionale për kërkim lokal me qëllim të lartë." },
      { title: "Sistem përmbajtjeje", description: "Kalendar mujor, ditë xhirimi në grup dhe arketipa postimesh me skenar." },
      { title: "Shkrim tekstesh (SQ/EN)", description: "Tekste për postime, reklama, email dhe faqe uljeje në shqip dhe anglisht." },
      { title: "Rrjedha kontaktesh", description: "Faqe uljeje, kapje, sekuenca ndjekjeje dhe dorëzim me WhatsApp/email." },
      { title: "Marketing me email", description: "Konfigurim liste, rrjedhë mirëseardhjeje dhe plan mujor shpërndarjeje." },
      { title: "Panel analitike dhe KPI", description: "Skemë UTM, emërtim eventesh dhe raport mujor KPI." },
      { title: "Brife për influencues / UGC", description: "Kontaktim me krijues lokalë të verifikuar dhe shabllone briefesh." },
      { title: "Fushata lokale / gjeo", description: "Reklama me kufizim gjeografik për restorante, pasuri të paluajtshme dhe mikpritje." },
      { title: "Auditim përmbajtjeje (i njëhershëm)", description: "Analizë e performancës aktuale të kanaleve me hapa të qartë në vijim." },
    ],
    whoItsFor: [
      "Biznese lokale shqiptare që shpenzojnë për reklama pa një sistem pas pjesës krijuese.",
      "Brande e-commerce që kanë nevojë që përmbajtja dhe reklamat me pagesë të punojnë si një motor i vetëm.",
      "Operatorë mikpritjeje dhe pasurish të paluajtshme që kanë nevojë për kërkesë të rezervuar, jo shtrirje sa për sy e faqe.",
      "Ekipe që duan një ritëm javor të të mësuarit — jo një fushatë të njëhershme dhe heshtje.",
    ],
    process: [
      { title: "Hartë oferte dhe gypi", description: "Përputhim ofertën, përvojën e faqes së uljes dhe narrativën e reklamës, që çdo euro e shpenzuar të ketë ku të ulet me dobi." },
      { title: "Sistem krijues dhe lançim", description: "Këndvështrime reklamash të përsëritshme, grup përmbajtjeje dhe konfigurim gjurmimi — pastaj dalim live me një matricë të qartë testimi." },
      { title: "Mëso dhe optimizo", description: "Vendime javore: mbaj, rregullo ose hiq. Raportim që nxit veprim, jo prezantime slajdesh." },
    ],
    deliverables: [
      "Hartë përputhjeje oferte + faqe uljeje",
      "Matricë krijuese (këndvështrime × formate)",
      "Strukturë llogarie Meta Ads",
      "Kalendar përmbajtjeje (mujor)",
      "Listë kontrolli optimizimi javor",
      "Shabllone skenarësh ndjekjeje kontaktesh",
      "Panel KPI (i lehtë)",
    ],
  },
  automation: {
    name: "Automatizim",
    tagline: "Hiq ngarkesën. Mbaj njerëzit duke vendosur.",
    summary:
      "Një sistem automatizimi funksional për rrjedhat tuaja reale të punës. AI harton, ju vendosni.",
    includes: [
      { title: "Auditim rrjedhash pune", description: "Hartëzo proceset aktuale, identifiko pikat kryesore të ngarkesës dhe vlerëso realizueshmërinë." },
      { title: "Ndërtime Make.com / n8n / Zapier", description: "Lidhje e mjeteve që përdorni tashmë — pa i hequr e zëvendësuar." },
      { title: "Integrime API", description: "Lidhës të personalizuar kur nuk ekziston integrim nativ." },
      { title: "Mjete të brendshme AI", description: "Chatbot mbi dokumentet tuaja, hartime me ndihmën e AI dhe kategorizim." },
      { title: "Konfigurim CRM / pipeline", description: "Pipeline HubSpot, Pipedrive ose Notion me etiketim automatik." },
      { title: "Rrugëzim dhe dorëzim kontaktesh", description: "Caktim me radhë, përgjigje automatike dhe rregulla përshkallëzimi." },
      { title: "Rrjedhë kërkese për vlerësim", description: "Aktivizohet automatikisht pas blerjes ose vizitës — me pika miratimi njerëzor." },
      { title: "Bot raportimi", description: "Përmbledhje ditore ose javore në Slack, WhatsApp ose email." },
      { title: "Automatizim dokumentesh", description: "Fatura, propozime dhe kontrata të gjeneruara nga shabllone." },
      { title: "SOP dhe trajnim", description: "Udhëzues të shkruar dhe video Loom për çdo rrjedhë pune." },
    ],
    whoItsFor: [
      "Operatorë brenda kompanive të vogla që nuk e justifikojnë dot një punësim të plotë inxhinieri.",
      "Ekipe që mbyten në dorëzime manuale — email, WhatsApp, fletëllogaritëse.",
      "Biznese që duan që AI të hartojë dhe njerëzit të vendosin — jo e kundërta.",
      "Kushdo që e ka provuar Zapier një herë dhe hoqi dorë sepse askush nuk e dokumentoi.",
    ],
    process: [
      { title: "Audito dhe hartëzo", description: "Intervistojmë njerëzit që e bëjnë punën, vizatojmë makinën reale të gjendjeve dhe zgjedhim së pari automatizimet me ndikimin më të lartë." },
      { title: "Ndërto dhe vendos kontrolle", description: "Rrjedha funksionale me pika miratimi njerëzor, regjistra auditimi dhe plane kthimi — asgjë nuk del live pa një rrugë miratimi." },
      { title: "Trajno dhe mirëmbaj", description: "SOP, video Loom dhe një dritare mirëmbajtjeje që sistemi të vazhdojë të punojë pasi ne të largohemi." },
    ],
    deliverables: [
      "Auditim rrjedhash pune + hartë automatizimi",
      "3 rrjedhat kryesore me prioritet të ndërtuara e të testuara",
      "Plan integrimi API",
      "Pika miratimi njerëzor + regjistra auditimi",
      "SOP për çdo rrjedhë pune",
      "Listë kontrolli shpërndarjeje + shënime trajnimi",
    ],
  },
  "product-lab": {
    name: "Product Lab",
    tagline: "Për themelues me një ide që ia vlen të testohet.",
    summary:
      "Me ftesë. Përcaktojmë fushëveprimin, ndërtojmë, validojmë — dhe ju themi kur duhet ndalur.",
    includes: [
      { title: "Sprint vlerësimi ideje", description: "Sprint 1–2 javë: validim problemi, përmasim tregu dhe rekomandim vazhdo/ndalo." },
      { title: "Përcaktim fushëveprimi dhe plan rruge MVP", description: "Fushëveprim i ashpër për v1, momente kyçe dhe vendime ndërto-apo-bli." },
      { title: "Plan validimi", description: "Test faqeje uljeje, test reklame, intervista me klientë dhe metrika suksesi." },
      { title: "Prezantim investimi", description: "Hark narrativ, histori financiare dhe finesë dizajni." },
      { title: "Materiale për investitorë", description: "Një-faqësh, skicë e dhomës së të dhënave dhe pyetje të shpeshta." },
      { title: "Angazhim bashkë-ndërtimi", description: "Limited Labs ndërton MVP-në — me komponent opsional kapitali ose ndarjeje të të ardhurave." },
      { title: "Ritëm këshillimi për themeluesin", description: "Takime javore përgjatë sprintit." },
      { title: "Vendim eksplicit vazhdo/ndalo", description: "Rekomandim i qartë në fund të dritares së validimit — përfshirë kur duhet ndalur." },
    ],
    whoItsFor: [
      "Themelues me një ide specifike dhe disiplinën për ta testuar — jo për ta eksploruar pafund.",
      "Operatorë në fazë të hershme që kanë nevojë për një partner që thotë jo, jo vetëm po.",
      "Ekipe të ftuar pas një takimi njohjeje — nuk e marrim çdo ide.",
      "Kushdo që preferon të vrasë shpejt një ide të keqe sesa të financojë gjashtë muaj një MVP sa për sy e faqe.",
    ],
    process: [
      { title: "Vlerëso", description: "Problemi, tregu dhe realizueshmëria — e vëmë idenë në provë para se të shkruajmë qoftë edhe një rresht kodi." },
      { title: "Përcakto dhe valido", description: "Fushëveprim i ashpër MVP dhe një plan validimi me metrika reale suksesi — jo regjistrime sa për sy e faqe." },
      { title: "Ndërto ose ndalo", description: "Bashkë-ndërtojmë MVP-në, ia dorëzojmë ekipit tuaj ose rekomandojmë një mbyllje të pastër. Ju themi cilën." },
    ],
    deliverables: [
      "Raport vlerësimi ideje",
      "Fushëveprim MVP + plan rruge",
      "Plan validimi me metrika suksesi",
      "Prezantim investimi (nëse mblidhen fonde)",
      "Rekomandim vazhdo/ndalo",
      "Propozim bashkë-ndërtimi (nëse vazhdohet)",
    ],
  },
};

/** English content derived directly from the source data. */
function englishServiceContent(service: ServiceItem): ServiceContent {
  return {
    name: service.name,
    tagline: service.tagline,
    summary: service.summary,
    includes: service.includes.map((i) => ({ title: i.title, description: i.description })),
    whoItsFor: service.whoItsFor,
    process: service.process.map((p) => ({ title: p.title, description: p.description })),
    deliverables: service.deliverables,
  };
}

export function getServiceContent(service: ServiceItem, locale: Locale): ServiceContent {
  if (locale === "en") return englishServiceContent(service);
  return SERVICE_CONTENT_SQ[service.slug] ?? englishServiceContent(service);
}
