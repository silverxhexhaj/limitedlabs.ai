import type { Messages } from "./en";

// Albanian (Shqip) UI strings. Typed as `Messages` so any missing or extra key
// relative to en.ts is a compile error.
export const sq: Messages = {
  languageToggle: {
    label: "EN",
    ariaLabel: "Kalo në anglisht",
  },

  header: {
    homeAria: "Faqja kryesore e Limited Labs",
    primaryNavAria: "Navigimi kryesor",
    mobileNavAria: "Navigimi në celular",
    openNav: "Hap navigimin",
    closeNav: "Mbyll navigimin",
    cta: "Auditim falas i sistemeve",
    mobileCta: "Merr një auditim falas të sistemeve",
    nav: {
      services: "Shërbimet",
      work: "Punët",
      courses: "Kurse",
      why: "Pse Limited Labs",
      proof: "Dëshmitë",
      faq: "Pyetje",
      contact: "Kontakt",
    },
  },

  hero: {
    eyebrow: "Agjenci sistemesh me fuqi AI · Tiranë, Shqipëri",
    heading: "I ndihmojmë bizneset të përmirësojnë mënyrën se si duken, shesin, ndërtojnë dhe punojnë.",
    lead:
      "Brand, Marketing, Software dhe Automatizim me AI — të lidhura si një sistem i vetëm.",
    note:
      "AI përshpejton kërkimin dhe ekzekutimin. Njerëzit marrin vendimet strategjike, ato që prekin klientin dhe ato me pasoja.",
    ctaPrimary: "Merr një auditim falas të biznesit",
    ctaSecondary: "Eksploro katër sistemet",
  },

  problem: {
    eyebrow: "Problemi operativ",
    heading: "Rritja ndalet kur sistemet nuk janë në të njëjtën linjë",
    items: [
      {
        title: "Biznesi duket i paqëndrueshëm.",
        body: "Pozicionimi, identiteti, website-i dhe përmbajtja tregojnë histori të ndryshme, ndaj besimi humbet përpara se të nisë një bisedë.",
      },
      {
        title: "Marketingu nuk ka një logjikë të përbashkët.",
        body: "Përmbajtja, reklamat, landing pages dhe follow-up menaxhohen si detyra të ndara, në vend që të funksionojnë si një rrugë e matshme për krijimin e kërkesës.",
      },
      {
        title: "Puna e përsëritur krijon ngarkesë.",
        body: "Email-i, WhatsApp-i, spreadsheets dhe mjetet e shkëputura i mbajnë operatorët të zënë, pa e bërë biznesin më të lehtë për t’u menaxhuar.",
      },
    ],
  },

  services: {
    eyebrow: "Katër sisteme të lidhura",
    heading: "Përmirësojmë të gjithë rrugëtimin, duke nisur aty ku ka më shumë rëndësi.",
    aiAutomationLabel: "Automatizim me AI",
    explorePrefix: "Eksploro ",
    productLab: {
      eyebrow: "Angazhim selektiv / Product Lab",
      title: "Validim i fokusuar dhe bashkë-ndërtim, me ftesë.",
      body: "Product Lab merret në konsideratë pas kualifikimit, kur kemi bindje për problemin. Nuk është një ofertë e pestë vetëshërbimi.",
      cta: "Si funksionon përzgjedhja",
    },
  },

  why: {
    eyebrow: "Pse ky model",
    heading: "Më pak kalime dorë më dorë. Përgjegjësi më e qartë.",
    principles: [
      {
        title: "Një logjikë e vetme operimi",
        body: "Brandi, marketingu, software-i dhe automatizimi projektohen së bashku, në vend që të kalohen mes furnitorëve të shkëputur.",
      },
      {
        title: "Sisteme mbi rezultate të izoluara",
        body: "Çdo dorëzim duhet të kthehet në infrastrukturë biznesi të ripërdorshme, jo në një tjetër aset që skadon pas lançimit.",
      },
      {
        title: "AI me kontroll të përgjegjshëm",
        body: "AI mbështet kërkimin, hartimin, analizën dhe ekzekutimin e rrjedhave të punës. Njerëzit zotërojnë strategjinë dhe vendimet me pasoja.",
      },
      {
        title: "Ndërtuar për realitetin operativ",
        body: "Zgjidhja duhet t’i përshtatet tregut, ekipit, mjeteve dhe aftësisë së klientit për ta mirëmbajtur pas dorëzimit.",
      },
    ],
  },

  work: {
    eyebrow: "Punë dhe modele pune të përzgjedhura",
    heading: "Dëshmia etiketohet para se të paraqitet.",
    body: "Artikujt aktualë përfshijnë koncepte dhe sisteme të brendshme. Çdo faqe shpjegon çfarë është puna, çfarë dihet dhe nëse një rezultat është matur apo ende është synim.",
    filterAria: "Filtro pamjet e rasteve sipas sistemit",
    viewDetails: "Shiko detajet",
    categories: {
      all: "Të gjitha",
      brand: "Brand",
      software: "Software",
      marketing: "Marketing",
      automation: "Automatizim",
    },
  },

  proof: {
    eyebrow: "Dëshmitë",
    heading: "Ndërtuar rreth nevojave operative, jo pretendimeve të shpikura.",
    items: [
      {
        title: "Sistemi publik i Limited Labs",
        classification: "Sistem i brendshëm",
        body: "Arkitektura e shërbimeve, përmbajtja në nivel rruge, kontrollet e prodhimit, themelet e SEO-së dhe marrja e auditimeve janë ndërtuar si një sipërfaqe e vetme operimi.",
      },
      {
        title: "Operacionet e marketplace-it",
        classification: "Sistem i brendshëm",
        body: "Modele rrjedhash pune për shitës, porosi dhe administrim, zhvilluar rreth një modeli real operimi marketplace-i.",
      },
      {
        title: "Pikat e kontaktit në mikpritje",
        classification: "Eksperiment",
        body: "Modele brandi, përmbajtjeje dhe prezence lokale, testuar përballë kufizimeve të përditshme të operatorëve të mikpritjes.",
      },
      {
        title: "Automatizim me miratim të kontrolluar",
        classification: "Eksperiment",
        body: "Prototipe rrjedhash pune testojnë rrugëzimin, raportimin dhe ndihmën e AI, duke ruajtur pika të qarta miratimi njerëzor.",
      },
    ],
  },

  audit: {
    eyebrow: "Auditim falas i sistemeve",
    heading: "Gjej sistemin e parë që ia vlen të rregullohet.",
    body: "Aplikimet e kualifikuara marrin një vlerësim të shkruar e të përmbledhur të tre çështjeve me prioritet më të lartë, pse kanë rëndësi dhe veprimin e parë të rekomanduar.",
    steps: [
      "Ndaj kontekstin e biznesit dhe sistemet që krijojnë fërkim.",
      "Një person e shqyrton kërkesën dhe verifikon nëse auditimi mund të jetë i dobishëm.",
      "Kërkesat e kualifikuara marrin një vlerësim të shkruar me prioritet brenda tri ditëve pune.",
    ],
    form: {
      stepWord: "Hapi",
      ofThree: "nga 3",
      contextPreselected:
        "{system} është parazgjedhur nga faqja që po shihnit. Mund të shtoni ose ndryshoni sistemet më poshtë.",
      contextWork:
        "Ruajtëm shembullin e punës që po shihnit, që vlerësimi të ketë kontekstin e duhur.",
      contextDefault:
        "Na thoni ku ka ngecur biznesi. Një person shqyrton çdo kërkesë të kualifikuar.",
      errorSummary: "Rishikoni fushat e theksuara.",
      networkError:
        "Kërkesa nuk u dërgua dot. Dërgoni email te hello@limitedlabs.co në vend të kësaj.",
      verificationNotConfigured: "Verifikimi nuk është konfiguruar.",
      validationErrors: {
        fullName: "Vendosni një emër të plotë të vlefshëm.",
        email: "Vendosni një email pune të vlefshëm.",
        companyName: "Vendosni një emër të vlefshëm kompanie ose biznesi.",
        primaryUrl: "Vendosni një URL të plotë me http ose https.",
        additionalUrls: "Rishikoni URL-të shtesë.",
        requestedSystems: "Zgjidhni të paktën një sistem të vlefshëm.",
        challenge: "Përshkruani sfidën aktuale me të paktën 30 karaktere.",
        desiredOutcome: "Përshkruani rezultatin e dëshiruar me të paktën 30 karaktere.",
        timeline: "Zgjidhni një afat kohor të vlefshëm.",
        consent: "Pëlqimi kërkohet para dërgimit.",
        turnstile: "Përfundoni verifikimin para dërgimit.",
        form: "Rishikoni formularin dhe provoni përsëri.",
      },
      selectPlaceholder: "Zgjidh",
      step1Legend: "Biznesi juaj",
      fullName: "Emri i plotë *",
      email: "Email-i i punës *",
      company: "Kompania ose biznesi *",
      primaryUrl: "URL-ja kryesore e faqes ose rrjetit social *",
      phone: "Telefon ose WhatsApp",
      industry: "Industria",
      teamSize: "Madhësia e ekipit",
      teamSizeOptions: {
        solo: "Vetëm unë",
        small: "2–5",
        medium: "6–20",
        large: "21–50",
        xlarge: "51+",
      },
      additionalUrls: "URL shtesë",
      additionalUrlsPlaceholder: "Ndani deri në pesë URL me presje",
      step2Legend: "Çfarë ka nevojë për vëmendje",
      requestedSystems: "Sistemet e kërkuara *",
      systemLabels: {
        brand: "Brand",
        marketing: "Marketing",
        software: "Software",
        "ai-automation": "Automatizim me AI",
        "not-sure": "Ende i pasigurt",
      },
      challenge: "Sfida aktuale *",
      challengeHelp:
        "Minimumi 30 karaktere. Mos përfshini fjalëkalime apo kredenciale konfidenciale.",
      desiredOutcome: "Rezultati i dëshiruar *",
      desiredOutcomeHelp: "Përshkruani çfarë do të përmirësohej në mënyrë thelbësore për biznesin.",
      step3Legend: "Koha dhe shqyrtimi",
      timeline: "Afati kohor",
      timelineOptions: {
        immediately: "Menjëherë",
        "within-30-days": "Brenda 30 ditëve",
        "within-90-days": "Brenda 90 ditëve",
        exploring: "Po eksploroj",
      },
      budget: "Diapazoni i përafërt i buxhetit",
      budgetOptions: {
        none: "Preferoj të mos them",
        "under-2000": "Nën €2.000",
        "2000-5000": "€2.000–€5.000",
        "5000-10000": "€5.000–€10.000",
        "10000-plus": "€10.000+",
      },
      referral: "Si dëgjuat për ne?",
      summaryLine: "Do të shqyrtojmë {company} përgjatë {systems}.",
      summaryCompanyFallback: "biznesin tuaj",
      summarySystemsFallback: "sistemeve të zgjedhura",
      summaryDisclaimer:
        "Aplikimi nuk garanton një dorëzim falas. Mund të refuzojmë kërkesat që nuk kanë informacion të mjaftueshëm ose nuk përshtaten.",
      consentBefore: "Jap pëlqimin që Limited Labs të ruajë dhe shqyrtojë këtë aplikim siç përshkruhet në ",
      consentLink: "njoftimin e privatësisë",
      consentAfter: ". *",
      back: "Mbrapa",
      continue: "Vazhdo",
      submit: "Dërgo kërkesën për auditim",
      submitting: "Po dërgohet…",
      confirmBadge: "Aplikimi u mor",
      confirmHeading: "Një person do ta shqyrtojë.",
      confirmBody:
        "Kërkesat e kualifikuara marrin një vlerësim të shkruar e të përmbledhur me prioritet brenda tri ditëve pune. Ruajeni këtë referencë për ndjekje.",
      confirmDuplicate:
        "Kjo përkoi me një kërkesë të fundit, prandaj ruajtëm aplikimin origjinal në vend që të krijonim një dublikatë.",
    },
  },

  faq: {
    eyebrow: "Pyetje",
    heading: "Çfarë duhet të dini para se të aplikoni.",
    items: [
      {
        question: "Çfarë bën Limited Labs?",
        answer: "Diagnostikojmë dhe përmirësojmë sistemet e lidhura pas mënyrës se si një biznes duket, shet, ndërton dhe kryen punën e përsëritur.",
      },
      {
        question: "Kush përshtatet më mirë?",
        answer: "Bizneset shqiptare të vogla dhe të mesme tashmë të konsoliduara, me një ofertë reale, një vendimmarrës dhe një kufizim të qartë operativ apo rritjeje.",
      },
      {
        question: "A punoni jashtë Shqipërisë?",
        answer: "Po. Tirana dhe tregu shqiptar janë fokusi kryesor, ndërsa angazhimet ndërkombëtare pranohen kur përshtatja e punës është e fortë.",
      },
      {
        question: "Çfarë ndodh pas kërkesës për auditim falas?",
        answer: "Një person e shqyrton aplikimin. Kërkesat e kualifikuara marrin tre çështje me prioritet, pse kanë rëndësi dhe një veprim të parë të rekomanduar brenda tri ditëve pune.",
      },
      {
        question: "Si përdoret AI?",
        answer: "AI përshpejton kërkimin, sintezën, hartimin, analizën dhe ekzekutimin e rrjedhave të punës. Vendimet strategjike dhe ato që prekin klientin mbeten nën kontrollin njerëzor.",
      },
      {
        question: "Sa kushton një angazhim?",
        answer: "Çmimi vjen pas diagnozës, sepse fushëveprimi varet nga kufizimi i biznesit, sistemet e përfshira dhe niveli i kërkuar i zbatimit.",
      },
    ],
  },

  contact: {
    eyebrow: "Kontakt i drejtpërdrejtë",
    heading: "Nis me kontekst, jo me një ofertë shitjeje.",
    body: "Auditimi është pikënisja e preferuar. Kërkesat me email të drejtpërdrejtë dhe për takim njohjeje mbeten të disponueshme kur formulari i strukturuar nuk është i përshtatshëm.",
    ctaEmail: "Email te hello@limitedlabs.co",
    ctaCall: "Kërko një takim njohjeje",
  },

  footer: {
    tagline: "Një agjenci sistemesh me fuqi AI që i ndihmon operatorët e biznesit të përmirësojnë mënyrën se si duken, shesin, ndërtojnë dhe punojnë.",
    location: "Tiranë, Shqipëri",
    navigateHeading: "Navigo",
    contactHeading: "Kontakt",
    auditLink: "Auditim falas i sistemeve",
    privacyLink: "Njoftim privatësie",
    copyright: "© 2026 Limited Labs",
    accountability: "I ndihmuar nga AI. Përgjegjësi njerëzore.",
  },

  workClassifications: {
    "verified-client-work": "Punë klienti e verifikuar",
    "anonymized-client-work": "Punë klienti e anonimizuar",
    "internal-system": "Sistem i brendshëm",
    experiment: "Eksperiment",
    concept: "Koncept",
  },

  serviceDetail: {
    back: "Kthehu te shërbimet",
    serviceWord: "Shërbim",
    byInvitation: "Me ftesë",
    focusAreasAria: "Fushat e fokusit",
    ctaAudit: "Merr një auditim falas të sistemeve",
    ctaCall: "Kërko një takim njohjeje",
    whatsIncluded: "Çfarë përfshihet",
    whoItsFor: "Për kë është",
    deliverables: "Dorëzimet",
    howWeWork: "Si punojmë",
    relatedWork: "Punë të lidhura",
    relatedWorkBody: "Shembuj të klasifikuar dhe modele pune që mbivendosen me këtë sistem.",
    selectiveEngagement: "Angazhim selektiv",
    invitationBefore: "Product Lab merret në konsideratë pas kualifikimit, kur kemi bindje për problemin. ",
    invitationLink: "Kërko një auditim sistemesh",
    invitationAfter: " për të ndarë kontekstin operativ.",
    noRelated: "Ende nuk ka shembuj të tjerë të klasifikuar të publikuar në këtë kategori.",
    adjacentBefore: "Eksploro një sistem tjetër ose ",
    adjacentLink: "kërko një auditim kontekstual",
    adjacentAfter: ".",
    adjacentAria: "Shërbime ngjitur",
    previous: "I mëparshmi",
    next: "Tjetri",
  },

  courses: {
    eyebrow: "Kurse",
    heading: "Mëso sistemet që ndërtojmë.",
    lead:
      "Kurse të shkurtra dhe praktike që u mësojnë operatorëve të bizneseve të funksionojnë me AI — të njëjtat sisteme që ne ndërtojmë për klientët, të paketuara që t'i ndërtosh vetë.",
    metaAria: "Detajet e kursit",
    flagshipLabel: "Kursi kryesor",
    freeLabel: "Kurs falas",
    viewCourse: "Shiko kursin",
    comingSoonHeading: "Në zhvillim",
    comingSoonBody:
      "Po vijnë edhe kurse të tjera për operatorë — automatizim, marketing me AI dhe mjete të brendshme.",
    comingSoonTag: "Së shpejti",
    upcoming: [
      "Motorë Marketingu me AI për Operatorë",
      "Mjete të Brendshme pa Kod për një Fundjavë",
    ],
    ctaHeading: "S'je i sigurt nga t'ia nisësh?",
    ctaBody: "Merr një auditim falas të sistemeve dhe të tregojmë automatizimin e parë të duhur.",
    ctaButton: "Merr një auditim falas të sistemeve",
  },

  courseDetail: {
    back: "Kthehu te kurset",
    courseWord: "Kurs",
    focusAreasAria: "Temat e mbuluara",
    enroll: "Regjistrohu tani",
    enrollFree: "Fillo falas",
    fromPrice: "Nga",
    freeWord: "Falas",
    noCard: "Falas përgjithmonë — pa kartë krediti",
    specLevel: "Niveli",
    specDuration: "Kohëzgjatja",
    specModules: "Modulet",
    specLanguages: "Gjuhët",
    outcomes: "Çfarë do të jesh në gjendje të bësh",
    whoItsFor: "Për kë është",
    curriculum: "Programi",
    lessonsWord: "mësime",
    included: "Çfarë përfshihet",
    instructor: "Kush e mëson",
    instructorBody:
      "Ndërtuar nga ekipi i Limited Labs — të njëjtët njerëz që dizajnojnë dhe ndërtojnë këto automatizime për klientët. Po mëson pikërisht sistemin që ne instalojmë, jo teori klase.",
    seeWork: "Shiko punët",
    pricing: "Çmimet",
    oneTime: "pagesë e njëhershme",
    mostPopular: "Më i popullarizuari",
    guarantee: "Garanci kthimi parash brenda 14 ditësh",
    faq: "Pyetje të shpeshta",
    finalHeading: "Fillo ta drejtosh biznesin tënd me AI.",
    finalBody:
      "Mëso sistemet, ndërto automatizimet dhe mbaji njerëzit në kontroll të çdo vendimi që ka rëndësi.",
    finalSecondary: "Preferon të bëhet për ty? Merr një auditim falas të sistemeve",
  },

  workDetail: {
    back: "Kthehu te punët",
    focusAreasAria: "Fushat e fokusit",
    ctaAudit: "Merr një auditim falas të sistemeve",
    labels: {
      challenge: "Sfida",
      approach: "Qasja",
      deliverables: "Dorëzimet",
      systems: "Sistemet",
      results: "Rezultatet",
    },
    adjacentBody: "Shfleto shembujt e klasifikuar ngjitur ose kthehu te auditimi i sistemeve.",
    adjacentAria: "Projekte ngjitur",
    previous: "I mëparshmi",
    next: "Tjetri",
  },

  privacy: {
    eyebrow: "Njoftim privatësie · Përditësuar më 8 qershor 2026",
    heading: "Aplikimet për auditim sistemesh",
    sections: [
      {
        heading: "Çfarë mbledhim",
        body: "Mbledhim informacionin e kontaktit, biznesit, interesit për sisteme, sfidës, rezultatit, kohës dhe atribuimit të shfaqur në formularin e auditimit. Mos dërgoni fjalëkalime, informacion pagese, identifikues shtetërorë apo kredenciale konfidenciale sistemesh.",
      },
      {
        heading: "Pse e mbledhim",
        body: "Informacioni përdoret për të vlerësuar përshtatjen, për të përgatitur një vlerësim me prioritet për kërkesat e kualifikuara, për t'iu përgjigjur personit që e dërgoi dhe për të matur besueshmërinë e gypit publik të përftimit.",
      },
      {
        heading: "Ruajtja dhe aksesi",
        body: "Aplikimet transmetohen përmes lidhjeve të enkriptuara dhe ruhen në sisteme me akses të kontrolluar. Aksesi kufizohet te personat që operojnë Limited Labs dhe që kanë nevojë për informacionin për të shqyrtuar dhe iu përgjigjur kërkesës.",
      },
      {
        heading: "Mbajtja dhe fshirja",
        body: "I mbajmë aplikimet gjatë kohës që shqyrtohen aktivisht dhe për një periudhë të arsyeshme operative më pas. Për të kërkuar akses, korrigjim ose fshirje, dërgoni email te ",
      },
      {
        heading: "Analitika",
        body: "Analitika e faqes publike nuk duhet të përfshijë emra nga formulari, email-e, URL biznesi, tekst sfide, rezultate të dëshiruara apo përmbajtje tjetër të formularit që identifikon personin.",
      },
    ],
    retentionEmailSuffix: ".",
    returnLink: "Kthehu te auditimi",
  },
};
