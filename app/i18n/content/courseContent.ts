import type { Locale } from "../config";
import type { CourseItem } from "@/app/courses/coursesData";

/** Localized, display-facing subset of a course. Non-text fields (slug, index,
 *  price, meta chips, tags, checkout URLs, featured flags) come straight from
 *  the English source data. */
export type CoursePricingContent = {
  name: string;
  tagline: string;
  features: string[];
  ctaLabel: string;
};

export type CourseContent = {
  title: string;
  accentWords: string[];
  subtitle: string;
  summary: string;
  level: string;
  durationLabel: string;
  meta: string[];
  outcomes: string[];
  whoItsFor: string[];
  modules: { title: string; duration: string; lessons: string[] }[];
  included: { title: string; description: string }[];
  pricing: CoursePricingContent[];
  faqs: { question: string; answer: string }[];
};

/** Albanian translations keyed by course slug. */
const COURSE_CONTENT_SQ: Record<string, CourseContent> = {
  "ai-operations-for-business-owners": {
    title: "Drejtoje biznesin tënd me AI — pa humbur kontrollin.",
    accentWords: ["AI", "kontrollin"],
    subtitle:
      "Një kurs i shkurtër dhe praktik që u mëson operatorëve të bizneseve të automatizojnë punën e përsëritur me AI — ku AI harton dhe njeriu vendos. Pa kod, pa hype dhe pa nevojë për një diplomë në informatikë.",
    summary:
      "Automatizo punën tënde të përsëritur me AI — rrugëzim kontaktesh, propozime dhe raportim — duke i mbajtur njerëzit në kontroll të çdo vendimi me pasoja.",
    level: "Pa kod · Për operatorë",
    durationLabel: "2.5 orë",
    meta: ["2.5 ORË", "5 MODULE", "EN / SQ", "AKSES I PËRJETSHËM"],
    outcomes: [
      "Hartëzo çdo detyrë të përsëritur në biznesin tënd dhe vlerësoje për potencial automatizimi.",
      "Ndërto tri automatizime funksionale: rrugëzim kontaktesh, hartime propozimesh dhe një raport javor që montohet vetë.",
      "Shkruaj pika miratimi ku AI harton dhe njerëzit vendosin çështjet me pasoja.",
      "Dorëzo një plan operimi 90-ditor që mund ta drejtosh pa punësuar një agjenci.",
    ],
    whoItsFor: [
      "Pronarë dhe operatorë biznesesh të vogla e të mesme që bëjnë të njëjtën punë manuale çdo javë.",
      "Ekipe joteknike që duan që AI të hartojë ndërsa njerëzit qëndrojnë në kontroll.",
      "Agjenci dhe të pavarur që duan një sistem operimi të përsëritshëm, jo prompte të njëhershme.",
      "Kushdo që e provoi ChatGPT një herë dhe s'e ktheu kurrë në një rrjedhë pune reale.",
    ],
    modules: [
      {
        title: "Hartëzo punën tënde të përsëritur & gjej pikat me potencial automatizimi",
        duration: "35 min",
        lessons: [
          "Pse dështon adoptimi i AI në shumicën e bizneseve të vogla",
          "Inventari i Operacioneve: listo çdo detyrë të përsëritur",
          "Vlerësim potenciali: frekuencë × kohë × gjykim",
          "Vija e gjykimit: çfarë duhet të mbetet njerëzore",
          "Zgjedhja e tri automatizimeve të para",
          "Dorëzim: Harta jote e Automatizimit",
        ],
      },
      {
        title: "Kapja & rrugëzimi i kontakteve me ndihmën e AI",
        duration: "30 min",
        lessons: [
          "Ku rrjedhin kontaktet: pritja, koha e përgjigjes, ndjekja",
          "Ndërtimi i një pritjeje AI që kualifikon dhe etiketon",
          "Rregulla rrugëzimi: kush merr çfarë, dhe kur",
          "Përgjigje automatike që tingëllojnë njerëzore — me pika miratimi",
          "Lidhja e formularëve, inbox-it dhe CRM-së (pa kod)",
          "Dorëzim: një rrjedhë funksionale rrugëzimi kontaktesh",
        ],
      },
      {
        title: "Dokumente, propozime & komunikim me klientët",
        duration: "30 min",
        lessons: [
          "Propozime të hartuara nga AI nisur nga një shabllon dhe një brief i shkurtër",
          "Kthimi i shënimeve të çrregullta në email ndjekjeje dhe përmbledhje",
          "Një bibliotekë promptesh për mesazhet e tua të përsëritura",
          "Ruajtja e zërit të brandit të qëndrueshëm në çdo hartim",
          "Lista e kontrollit njerëzor para se të dërgohet çdo gjë",
          "Dorëzim: sistemi yt i hartimit të propozimeve + komunikimit",
        ],
      },
      {
        title: "Raportim & mjete të brendshme pa kod",
        duration: "30 min",
        lessons: [
          "Raporti javor që montohet vetë",
          "Tërheqja e numrave nga mjetet e tua në një pamje të vetme",
          "Përmbledhje AI në Slack, WhatsApp ose email",
          "Ndërtimi i një asistenti të thjeshtë «pyet-dokumentet» të brendshëm",
          "Panele që ekipi yt vërtet do t'i hapë",
          "Dorëzim: një raport javor i automatizuar",
        ],
      },
      {
        title: "Modeli i kontrollit: qeverisje, cilësi & çfarë të mos automatizohet kurrë",
        duration: "25 min",
        lessons: [
          "Pika miratimi, regjistra auditimi dhe plane kthimi",
          "Kontrolle cilësie: kap gabimet e AI para se t'i shohin klientët",
          "Të dhëna dhe privatësi: çfarë të mos ngjitet kurrë në AI",
          "Shkrimi i SOP-ve që sistemi t'i mbijetojë largimit të stafit",
          "Kur ta mbash manuale — dhe kur ta japësh me kontratë",
          "Dorëzim: një-faqëshi yt i qeverisjes + plani 90-ditor",
        ],
      },
    ],
    included: [
      { title: "5 module video (~2.5 orë)", description: "Mësime të shkurtra për t'i bërë bashkë me videon — jo teori leksioni." },
      { title: "Paketë shabllonesh", description: "Inventari i Operacioneve, matrica e Vlerësimit dhe një-faqëshi i Rregullave të Miratimit." },
      { title: "Bibliotekë promptesh", description: "30+ prompte gati për t'u përshtatur për pritje, propozime dhe raportim." },
      { title: "Udhëzues konfigurimi pa varësi mjeti", description: "Ndërtoje në Make.com, n8n ose Zapier — çfarëdo që përdor tashmë." },
      { title: "Akses i përjetshëm & përditësime", description: "Blej një herë. Mësime të reja dhe përditësime mjetesh të përfshira." },
      { title: "Certifikatë përfundimi", description: "Një certifikatë e ndashme sapo të përfundosh të pesë modulet." },
    ],
    pricing: [
      {
        name: "Vetëshërbim",
        tagline: "Mëso dhe ndërtoje vetë.",
        features: [
          "Të 5 modulet (~2.5 orë)",
          "Shabllone + bibliotekë promptesh",
          "Udhëzues konfigurimi pa varësi mjeti",
          "Akses i përjetshëm & përditësime",
          "Pyetje & përgjigje në komunitet",
          "Certifikatë përfundimi",
        ],
        ctaLabel: "Regjistrohu tani",
      },
      {
        name: "Pro",
        tagline: "Mësoje, pastaj merr sy eksperti mbi ndërtimin tënd.",
        features: [
          "Gjithçka te Vetëshërbimi",
          "Takim 1:1 auditimi sistemesh (60 min)",
          "Hartë automatizimi e personalizuar",
          "Mbështetje me përparësi me email (30 ditë)",
          "Licencë ekipi (deri në 5 persona)",
        ],
        ctaLabel: "Merr rrugën Pro",
      },
    ],
    faqs: [
      { question: "A më duhet të di të programoj?", answer: "Jo. Çdo automatizim ndërtohet me mjete pa kod si Make.com, n8n ose Zapier. Nëse di të përdorësh një fletëllogaritëse, mund ta ndjekësh." },
      { question: "Çfarë mjetesh më duhen?", answer: "Një kompjuter, një llogari AI (ChatGPT ose Claude) dhe një plan falas i Make.com ose Zapier. I mbajmë sa më shumë te mjete me plane bujare falas." },
      { question: "A ofrohet në shqip?", answer: "Po. Kursi ofrohet në anglisht dhe shqip — ndoshta i vetmi kurs serioz i operacioneve me AI në gjuhën shqipe." },
      { question: "Sa kohë kam akses?", answer: "Të përjetshëm, përfshirë përditësimet e ardhshme. AI ecën shpejt, ndaj i freskojmë mësimet kur ndryshojnë mjetet — ti mban çdo përditësim." },
      { question: "Po nëse s'është për mua?", answer: "Ka një garanci kthimi parash brenda 14 ditësh. Kalo modulin e parë dhe, nëse s'të përshtatet, na shkruaj për kthim të plotë." },
      { question: "A mund ta ndjekë ekipi im bashkë?", answer: "Po. Rruga Pro përfshin një licencë ekipi për deri në pesë persona, plus një takim 1:1 auditimi sistemesh për biznesin tënd." },
    ],
  },
  "ai-essentials-claude-chatgpt": {
    title: "Bëj punë të vërtetë me Claude & ChatGPT.",
    accentWords: ["Claude", "ChatGPT"],
    subtitle:
      "Një kurs fillestar falas dhe joteknik për Claude dhe ChatGPT. Mëso të shkruash, planifikosh, hulumtosh dhe zgjidhësh probleme të përditshme me AI — në gjuhë të thjeshtë, pa zhargon dhe pa asgjë për të instaluar.",
    summary:
      "Një kurs falas dhe miqësor për fillestarët mbi përdorimin e Claude dhe ChatGPT për punën e përditshme — shkrim, planifikim dhe hulumtim në gjuhë të thjeshtë, pa nevojë për formim teknik.",
    level: "Fillestar · Joteknik",
    durationLabel: "90 minuta",
    meta: ["90 MIN", "5 MODULE", "EN / SQ", "FALAS"],
    outcomes: [
      "Përdor Claude ose ChatGPT me siguri çdo ditë — dhe di cilin të zgjedhësh.",
      "Shkruaj prompte të qarta që marrin përgjigje të dobishme që në provën e parë ose të dytë.",
      "Harto email-e, dokumente dhe përkthime në minuta në vend të orëve.",
      "Hulumto, planifiko dhe merr vendime me AI — duke verifikuar atë që të thotë.",
    ],
    whoItsFor: [
      "Fillestarë të plotë që s'kanë përdorur kurrë AI — ose e provuan një herë dhe hoqën dorë.",
      "Punonjës zyre, menaxherë dhe pronarë biznesesh që duan fitore praktike ditore.",
      "Ekipe që dëgjojnë vazhdimisht për AI, por askush s'u ka treguar nga t'ia nisin.",
      "Kushdo që do një hyrje në gjuhë të thjeshtë — pa nevojë për formim teknik.",
    ],
    modules: [
      {
        title: "Njihu me asistentin tënd AI",
        duration: "15 min",
        lessons: [
          "Çfarë janë në të vërtetë Claude dhe ChatGPT — me fjalë të thjeshta",
          "Ku shkëlqen AI dhe ku dështon",
          "Hapja e llogarisë falas (asgjë për të instaluar)",
          "Biseda jote e parë: një udhëzim hap pas hapi",
          "Pse AI ndonjëherë shpik gjëra — dhe si ta dallosh",
        ],
      },
      {
        title: "Prompting që funksionon vërtet",
        duration: "20 min",
        lessons: [
          "Formula e thjeshtë: kontekst, detyrë, format",
          "Pse përgjigjja e parë është një draft, jo një rezultat",
          "Pyetje vijuese: më e shkurtër, më e gjatë, më e thjeshtë, ton tjetër",
          "Jep shembuj që AI të përshtatet me stilin tënd",
          "Dorëzim: fleta jote personale e prompteve",
        ],
      },
      {
        title: "Shkrimi i përditshëm me AI",
        duration: "20 min",
        lessons: [
          "Email-e: hartim, përgjigje dhe zbutje e mesazheve të vështira",
          "Përmbledhja e dokumenteve të gjata dhe shënimeve të mbledhjeve",
          "Përkthim mes shqipes dhe anglishtes që tingëllon natyrshëm",
          "Postime sociale dhe njoftime me zërin tënd",
          "Korrigjim dhe përmirësim i çdo gjëje që ke shkruar",
        ],
      },
      {
        title: "Mendim, planifikim & hulumtim",
        duration: "20 min",
        lessons: [
          "Brainstorming: merr 20 ide kur je bllokuar në zero",
          "Peshimi i vendimeve: pro, kundra dhe pikat e verbra",
          "Hulumtimi i një teme — dhe verifikimi i asaj që të thotë AI",
          "Mëso çdo gjë më shpejt me AI si mësues",
          "Planifiko projekte, udhëtime dhe evente hap pas hapi",
        ],
      },
      {
        title: "Përdorim i sigurt & i zgjuar",
        duration: "15 min",
        lessons: [
          "Bazat e privatësisë: çfarë të mos ngjitet kurrë në AI",
          "Verifikimi i fakteve: beso, por verifiko",
          "Përdorimi i AI në punë me ndershmëri dhe hapur",
          "Plane falas kundrejt me pagesë: kur ia vlen përmirësimi",
          "Ku të shkosh më pas: automatizimi i punës sate të përsëritur",
        ],
      },
    ],
    included: [
      { title: "5 module video (~90 min)", description: "Mësime të shkurtra në gjuhë të thjeshtë që i mbaron me një ulje." },
      { title: "Fletë promptesh", description: "50 prompte kopjo-ngjit për email-e, përmbledhje, përkthime dhe planifikim." },
      { title: "Shabllone për përdorim ditor", description: "Pika nisjeje gati për detyrat që bën çdo javë." },
      { title: "Anglisht & shqip", description: "Kursi i plotë i disponueshëm në të dyja gjuhët." },
      { title: "Akses i përjetshëm & përditësime", description: "Falas përgjithmonë, përfshirë përditësimet kur ndryshojnë mjetet." },
      { title: "Certifikatë përfundimi", description: "Një certifikatë e ndashme sapo të përfundosh të pesë modulet." },
    ],
    pricing: [
      {
        name: "Falas",
        tagline: "Kursi i plotë. Pa kartë krediti, pa kushte të fshehura.",
        features: [
          "Të 5 modulet (~90 min)",
          "Fletë promptesh (50 prompte)",
          "Shabllone për përdorim ditor",
          "Anglisht & shqip",
          "Akses i përjetshëm & përditësime",
          "Certifikatë përfundimi",
        ],
        ctaLabel: "Fillo falas",
      },
    ],
    faqs: [
      { question: "A është vërtet falas?", answer: "Po — kursi i plotë, jo një provë e shkurtër. Pa kartë krediti. Është hyrja jonë në mënyrën se si Limited Labs e mendon AI-në; nëse më vonë do të automatizosh biznesin, kursi ynë me pagesë i Operacioneve me AI vazhdon aty ku mbaron ky.", },
      { question: "A më duhet një llogari me pagesë e ChatGPT ose Claude?", answer: "Jo. Gjithçka në kurs funksionon me planet falas të të dy mjeteve. Tregojmë edhe kur ia vlen një plan me pagesë — por s'do të të duhet një i tillë për ta ndjekur." },
      { question: "S'jam aspak teknik. A është për mua?", answer: "Pikërisht për ty. S'ka kod, s'ka zhargon dhe s'ka asgjë për të instaluar. Nëse di të shkruash një email, mund të bësh gjithçka në këtë kurs." },
      { question: "A ofrohet në shqip?", answer: "Po — kursi i plotë ofrohet në anglisht dhe shqip." },
      { question: "Sa kohë kam akses?", answer: "Përgjithmonë, përfshirë përditësimet e ardhshme ndërsa Claude dhe ChatGPT evoluojnë." },
      { question: "Çfarë duhet të ndjek pas këtij?", answer: "Nëse drejton një biznes ose një ekip, hapi tjetër është Operacionet me AI për Pronarët e Bizneseve — ai i kthen mësimet e këtushme në automatizime funksionale për kontakte, propozime dhe raportim." },
    ],
  },
};

/** English content derived directly from the source data. */
function englishCourseContent(course: CourseItem): CourseContent {
  return {
    title: course.title,
    accentWords: course.accentWords,
    subtitle: course.subtitle,
    summary: course.summary,
    level: course.level,
    durationLabel: course.durationLabel,
    meta: course.meta,
    outcomes: course.outcomes,
    whoItsFor: course.whoItsFor,
    modules: course.modules.map((m) => ({ title: m.title, duration: m.duration, lessons: m.lessons })),
    included: course.included.map((i) => ({ title: i.title, description: i.description })),
    pricing: course.pricing.map((p) => ({
      name: p.name,
      tagline: p.tagline,
      features: p.features,
      ctaLabel: p.ctaLabel,
    })),
    faqs: course.faqs.map((f) => ({ question: f.question, answer: f.answer })),
  };
}

export function getCourseContent(course: CourseItem, locale: Locale): CourseContent {
  if (locale === "en") return englishCourseContent(course);
  return COURSE_CONTENT_SQ[course.slug] ?? englishCourseContent(course);
}
