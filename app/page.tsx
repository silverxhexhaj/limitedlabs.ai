import LandingInteractions from "./LandingInteractions";

const wrap = "mx-auto w-full max-w-[var(--max)] px-[var(--gutter)]";

const tagRow = "flex flex-wrap gap-2";

const tag =
  "rounded-full border border-border-strong px-3 py-[7px] font-mono text-[10.5px] font-medium uppercase tracking-[0.06em] text-ink-muted transition-colors hover:border-ink hover:text-ink";

const tagSm =
  "rounded-full border border-border-strong px-2.5 py-[5px] font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-ink-muted transition-colors hover:border-ink hover:text-ink";

const serviceSlide =
  "group grid grid-cols-1 gap-8 border-b border-border py-[clamp(40px,6vw,80px)] last:border-b-0 md:grid-cols-2 md:items-center md:gap-[clamp(32px,5vw,80px)] md:even:[&>div:first-of-type]:order-2 md:even:[&>div:last-of-type]:order-1";

const serviceArt =
  "relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[20px] border border-border bg-surface p-8 transition-transform duration-500 ease-[cubic-bezier(0.2,0.6,0.2,1)] group-hover:scale-[1.015]";

const eyebrowCore =
  "font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted";

const eyebrow = `mb-[18px] ${eyebrowCore}`;

export default function Home() {
  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[100] py-[18px] transition-[background,border-color] duration-300 ease-out"
        id="nav"
      >
        <div className={`${wrap} flex items-center justify-between`}>
          <a
            href="#top"
            className="inline-flex items-center gap-3 text-ink"
            aria-label="Limited Labs home"
          >
            <svg className="h-8 w-11 shrink-0" viewBox="0 0 88 64" fill="none" aria-hidden="true">
              <path
                d="M8 8 V 56 H 38"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M50 8 V 56 H 80"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="38" cy="56" r="3.5" fill="currentColor" />
              <circle cx="80" cy="56" r="3.5" fill="currentColor" />
            </svg>
            <span className="font-display hidden text-sm font-bold tracking-[-0.02em] min-[720px]:inline">
              Limited Labs
            </span>
          </a>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              id="themeToggle"
              className="grid size-11 shrink-0 grid-cols-1 grid-rows-1 place-items-center rounded-full border border-border-strong bg-surface text-ink transition-[border-color,transform,background-color] duration-200 ease-out hover:scale-105 hover:border-ink-faint"
              aria-label="Switch color theme"
            >
              <svg
                className="col-start-1 row-start-1 hidden size-5 stroke-[1.75] dark:block"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="col-start-1 row-start-1 block size-5 stroke-[1.75] dark:hidden"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-ink px-[22px] py-3 text-sm font-medium text-page transition-[transform,background-color] duration-200 ease-out hover:scale-105 hover:bg-accent"
            >
              <span
                className="size-[7px] shrink-0 rounded-full bg-[#00d27a] shadow-[0_0_0_0_rgba(0,210,122,0.6)] motion-safe:animate-[pulse_2s_infinite]"
                aria-hidden="true"
              />
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="pb-20 pt-[110px]">
          <div className={wrap}>
            <div className="anim relative grid place-items-center overflow-hidden rounded-[24px] border border-border bg-surface px-6 py-[clamp(40px,8vw,110px)] before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_30%,rgba(245,244,239,0.04)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(245,244,239,0.03)_0%,transparent_50%)] before:content-[''] d1">
              <svg
                className="cloud h-auto w-full max-w-[540px]"
                viewBox="0 0 540 320"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M120 80 C 80 80, 50 110, 60 150 C 30 165, 35 215, 80 220 C 90 260, 140 270, 175 245 C 200 280, 280 285, 305 245 C 340 270, 410 260, 425 220 C 470 220, 485 175, 460 145 C 480 105, 440 75, 405 90 C 380 55, 320 50, 295 80 C 265 50, 195 50, 170 90 C 145 75, 125 75, 120 80 Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="draw text-ink"
                />
                <g transform="translate(120, 130)">
                  <path
                    d="M0 0 V 40 H 18"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 0 V 40 H 46"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <g transform="translate(210, 150)" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <line x1="0" y1="-22" x2="0" y2="22" />
                  <line x1="-22" y1="0" x2="22" y2="0" />
                  <line x1="-16" y1="-16" x2="16" y2="16" />
                  <line x1="-16" y1="16" x2="16" y2="-16" />
                </g>
                <g transform="translate(280, 150)">
                  <path
                    d="M-26 0 Q 0 -18, 26 0 Q 0 18, -26 0 Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                  <circle cx="0" cy="0" r="6" fill="currentColor" />
                </g>
                <g
                  transform="translate(360, 150)"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                >
                  <path d="M-14 -22 Q -22 -22, -22 -12 L -22 -4 Q -22 0, -28 0 Q -22 0, -22 4 L -22 12 Q -22 22, -14 22" />
                  <path d="M14 -22 Q 22 -22, 22 -12 L 22 -4 Q 22 0, 28 0 Q 22 0, 22 4 L 22 12 Q 22 22, 14 22" />
                </g>
                <g transform="translate(420, 150)">
                  <path
                    d="M-8 -20 L 6 -4 L -2 -4 L 8 20 L -6 0 L 2 0 Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </g>
                <circle cx="170" cy="100" r="3" fill="currentColor" opacity="0.6" className="text-ink" />
                <circle cx="380" cy="200" r="3" fill="currentColor" opacity="0.6" className="text-ink" />
                <circle cx="240" cy="200" r="2.5" fill="currentColor" opacity="0.4" className="text-ink" />
              </svg>
            </div>

            <div className="mt-[clamp(60px,8vw,100px)] grid grid-cols-1 items-end gap-10 max-[880px]:gap-10 md:grid-cols-[1.4fr_1fr] md:gap-[clamp(32px,5vw,80px)]">
              <div>
                <h1 className="anim font-display text-[clamp(48px,8.5vw,130px)] font-bold leading-[0.9] tracking-[-0.04em] text-ink [font-variation-settings:'opsz'_96,'wdth'_100] d2">
                  <span className="block">Welcome to</span>
                  <span className="inline-block pl-[clamp(20px,4vw,80px)]">the LAB.</span>
                </h1>
              </div>
              <div className="anim d3">
                <p className="max-w-[38ch] text-[clamp(15px,1.2vw,17px)] leading-normal text-ink-muted">
                  We&apos;re your{" "}
                  <strong className="font-medium text-ink underline decoration-[1.5px] underline-offset-4">
                    operating partner
                  </strong>{" "}
                  for brand, software, marketing, and automation — under one logic, not three vendors.
                </p>
                <p className="mt-[18px] max-w-[38ch] text-[clamp(15px,1.2vw,17px)] leading-normal text-ink-muted">
                  From founders to family businesses, we build the systems that keep working after the
                  project ends.
                </p>

                <svg
                  className="hero-monogram mt-7 h-auto max-w-[200px] text-ink"
                  viewBox="0 0 200 100"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10 10 V 70 Q 10 90, 30 90 H 80"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M110 10 V 70 Q 110 90, 130 90 H 190"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <g transform="translate(180, 18)" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="0" y1="-8" x2="0" y2="8" />
                    <line x1="-8" y1="0" x2="8" y2="0" />
                    <line x1="-6" y1="-6" x2="6" y2="6" />
                    <line x1="-6" y1="6" x2="6" y2="-6" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[clamp(80px,10vw,160px)] pb-[clamp(40px,6vw,80px)]">
          <div className={wrap}>
            <h2 className="font-display text-[clamp(48px,9vw,144px)] font-bold leading-[0.88] tracking-[-0.04em] text-ink [font-variation-settings:'opsz'_96]">
              <span className="block">We think systems.</span>
              <span className="inline-block pl-[clamp(20px,4vw,100px)]">Then build engines.</span>
            </h2>
          </div>
        </section>

        <section className="pb-20 pt-10" id="services">
          <div className={wrap}>
            <div className={serviceSlide} data-reveal>
              <div className={serviceArt}>
                <svg className="h-auto w-[70%] max-w-[280px] text-ink" viewBox="0 0 280 200" fill="none" aria-hidden="true">
                  <path
                    d="M10 130 Q 40 60, 70 130 T 130 130 Q 160 70, 190 130 T 270 130"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M10 155 L 270 155"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <circle cx="90" cy="40" r="6" fill="currentColor" />
                  <circle cx="220" cy="38" r="4" fill="currentColor" />
                  <text
                    x="140"
                    y="190"
                    fontFamily="Bricolage Grotesque"
                    fontWeight="700"
                    fontSize="22"
                    fill="currentColor"
                    textAnchor="middle"
                  >
                    brand
                  </text>
                </svg>
              </div>
              <div>
                <div className={eyebrow}>01 / Brand</div>
                <h3 className="mb-5 font-display text-[clamp(32px,4.2vw,56px)] font-bold leading-none tracking-[-0.035em] [font-variation-settings:'opsz'_72] text-ink">
                  Strategic, sharp, and built to last.
                </h3>
                <p className="mb-7 max-w-[44ch] text-[clamp(15px,1.2vw,17px)] leading-normal text-ink-muted">
                  Positioning, voice, identity, and content pillars. Not a logo on a Pinterest moodboard
                  — a system that holds up across every channel for years.
                </p>
                <ul className={tagRow}>
                  <li className={tag}>Strategy</li>
                  <li className={tag}>Positioning</li>
                  <li className={tag}>Visual Identity</li>
                  <li className={tag}>Copywriting</li>
                  <li className={tag}>Content Pillars</li>
                  <li className={tag}>Brand Guidelines</li>
                </ul>
              </div>
            </div>

            <div className={serviceSlide} data-reveal>
              <div className={serviceArt}>
                <svg className="h-auto w-[70%] max-w-[280px] text-ink" viewBox="0 0 280 200" fill="none" aria-hidden="true">
                  <path
                    d="M70 50 Q 30 50, 30 90 L 30 95 Q 30 100, 18 100 Q 30 100, 30 105 L 30 110 Q 30 150, 70 150"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M210 50 Q 250 50, 250 90 L 250 95 Q 250 100, 262 100 Q 250 100, 250 105 L 250 110 Q 250 150, 210 150"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <circle cx="115" cy="100" r="5" fill="currentColor" />
                  <circle cx="140" cy="100" r="5" fill="currentColor" />
                  <circle cx="165" cy="100" r="5" fill="currentColor" />
                  <line x1="60" y1="180" x2="220" y2="180" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className={eyebrow}>02 / Software</div>
                <h3 className="mb-5 font-display text-[clamp(32px,4.2vw,56px)] font-bold leading-none tracking-[-0.035em] [font-variation-settings:'opsz'_72] text-ink">
                  Websites, MVPs, internal tools.
                </h3>
                <p className="mb-7 max-w-[44ch] text-[clamp(15px,1.2vw,17px)] leading-normal text-ink-muted">
                  From a landing page that converts to a shipped MVP. Next.js, Supabase, deployed on
                  Vercel — a stack you can grow into, with documentation you&apos;ll actually read.
                </p>
                <ul className={tagRow}>
                  <li className={tag}>Landing Pages</li>
                  <li className={tag}>PWAs</li>
                  <li className={tag}>MVPs</li>
                  <li className={tag}>Internal Tools</li>
                  <li className={tag}>Next.js</li>
                  <li className={tag}>Supabase</li>
                  <li className={tag}>Vercel</li>
                </ul>
              </div>
            </div>

            <div className={serviceSlide} data-reveal>
              <div className={serviceArt}>
                <svg className="h-auto w-[70%] max-w-[280px] text-ink" viewBox="0 0 280 200" fill="none" aria-hidden="true">
                  <line x1="60" y1="60" x2="140" y2="100" stroke="currentColor" strokeWidth="2" />
                  <line x1="60" y1="60" x2="60" y2="140" stroke="currentColor" strokeWidth="2" />
                  <line x1="140" y1="100" x2="220" y2="60" stroke="currentColor" strokeWidth="2" />
                  <line x1="140" y1="100" x2="220" y2="140" stroke="currentColor" strokeWidth="2" />
                  <line x1="60" y1="140" x2="140" y2="100" stroke="currentColor" strokeWidth="2" />
                  <line x1="140" y1="100" x2="140" y2="170" stroke="currentColor" strokeWidth="2" />
                  <circle cx="60" cy="60" r="10" fill="var(--bg-2)" stroke="currentColor" strokeWidth="3" />
                  <circle cx="60" cy="140" r="10" fill="var(--bg-2)" stroke="currentColor" strokeWidth="3" />
                  <circle cx="140" cy="100" r="14" fill="currentColor" />
                  <circle cx="220" cy="60" r="10" fill="var(--bg-2)" stroke="currentColor" strokeWidth="3" />
                  <circle cx="220" cy="140" r="10" fill="var(--bg-2)" stroke="currentColor" strokeWidth="3" />
                  <circle cx="140" cy="170" r="8" fill="var(--bg-2)" stroke="currentColor" strokeWidth="3" />
                </svg>
              </div>
              <div>
                <div className={eyebrow}>03 / Marketing Engines</div>
                <h3 className="mb-5 font-display text-[clamp(32px,4.2vw,56px)] font-bold leading-none tracking-[-0.035em] [font-variation-settings:'opsz'_72] text-ink">
                  Content + ads that compound.
                </h3>
                <p className="mb-7 max-w-[44ch] text-[clamp(15px,1.2vw,17px)] leading-normal text-ink-muted">
                  Meta Ads, content systems, and lead workflows. Built to publish, learn, and improve
                  every month — not to win a creative award and disappear.
                </p>
                <ul className={tagRow}>
                  <li className={tag}>Content Calendars</li>
                  <li className={tag}>Meta Ads</li>
                  <li className={tag}>Copywriting (AL/EN)</li>
                  <li className={tag}>Campaign Strategy</li>
                  <li className={tag}>KPI Reporting</li>
                  <li className={tag}>Lead Workflows</li>
                </ul>
              </div>
            </div>

            <div className={serviceSlide} data-reveal>
              <div className={serviceArt}>
                <svg className="h-auto w-[70%] max-w-[280px] text-ink" viewBox="0 0 280 200" fill="none" aria-hidden="true">
                  <path
                    d="M60 100 A 60 60 0 1 1 220 100"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M210 85 L 220 100 L 235 90"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M220 100 A 60 60 0 1 1 60 100"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="6 6"
                  />
                  <path
                    d="M70 115 L 60 100 L 45 110"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <circle cx="140" cy="100" r="14" stroke="currentColor" strokeWidth="2.5" fill="var(--bg-2)" />
                  <text
                    x="140"
                    y="106"
                    fontFamily="Geist Mono"
                    fontWeight="500"
                    fontSize="13"
                    fill="currentColor"
                    textAnchor="middle"
                  >
                    AI
                  </text>
                </svg>
              </div>
              <div>
                <div className={eyebrow}>04 / Automation</div>
                <h3 className="mb-5 font-display text-[clamp(32px,4.2vw,56px)] font-bold leading-none tracking-[-0.035em] [font-variation-settings:'opsz'_72] text-ink">
                  Remove drag. Keep humans deciding.
                </h3>
                <p className="mb-7 max-w-[44ch] text-[clamp(15px,1.2vw,17px)] leading-normal text-ink-muted">
                  Workflow audit, automation map, and a working system. AI drafts, you decide. Built with
                  Make.com, Supabase, and APIs that talk to each other — instead of email threads that
                  don&apos;t.
                </p>
                <ul className={tagRow}>
                  <li className={tag}>Workflow Audit</li>
                  <li className={tag}>Make.com</li>
                  <li className={tag}>API Integrations</li>
                  <li className={tag}>Internal AI Tools</li>
                  <li className={tag}>SOPs</li>
                </ul>
              </div>
            </div>

            <div className={serviceSlide} data-reveal>
              <div className={serviceArt}>
                <svg className="h-auto w-[70%] max-w-[280px] text-ink" viewBox="0 0 280 200" fill="none" aria-hidden="true">
                  <path
                    d="M115 30 V 70 L 80 160 Q 75 175, 90 175 H 190 Q 205 175, 200 160 L 165 70 V 30"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <line x1="105" y1="30" x2="175" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="120" cy="135" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="150" cy="150" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="170" cy="125" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path
                    d="M92 115 Q 110 110, 140 115 T 188 115"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.6"
                  />
                  <g transform="translate(140, 14)" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="0" y1="-8" x2="0" y2="8" />
                    <line x1="-8" y1="0" x2="8" y2="0" />
                  </g>
                </svg>
              </div>
              <div>
                <div className={eyebrow}>05 / Product Lab</div>
                <h3 className="mb-5 font-display text-[clamp(32px,4.2vw,56px)] font-bold leading-none tracking-[-0.035em] [font-variation-settings:'opsz'_72] text-ink">
                  For founders with an idea worth testing.
                </h3>
                <p className="mb-7 max-w-[44ch] text-[clamp(15px,1.2vw,17px)] leading-normal text-ink-muted">
                  By invitation. We scope, build, validate — and we&apos;ll tell you when to pull the plug.
                  No vanity MVPs. No &quot;let&apos;s see what happens.&quot;
                </p>
                <ul className={tagRow}>
                  <li className={tag}>Idea Evaluation</li>
                  <li className={tag}>MVP Scope</li>
                  <li className={tag}>Validation Plan</li>
                  <li className={tag}>Pitch Deck</li>
                  <li className={tag}>Roadmap</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 pt-[clamp(80px,10vw,160px)]" id="work">
          <div className={wrap}>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <h2 className="font-display text-[clamp(40px,7vw,112px)] font-bold leading-[0.92] tracking-[-0.04em] text-ink [font-variation-settings:'opsz'_96]">
                Our first hits.
                <br />
                <span className="text-ink-faint">In the Works.</span>
              </h2>
              <div className="inline-flex -rotate-[4deg] items-center gap-2.5 font-hand text-[28px] text-ink">
                DRAG
                <svg className="w-[50px]" viewBox="0 0 60 40" fill="none" aria-hidden="true">
                  <path
                    d="M5 20 Q 25 5, 45 20"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M38 14 L 47 20 L 41 28"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-[var(--max)] overflow-hidden px-[var(--gutter)] py-2">
            <div
              className="flex cursor-grab gap-5 overflow-x-auto overflow-y-hidden overscroll-x-contain overscroll-y-none px-0 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
              id="workTrack"
            >
              <article
                className="min-w-0 shrink-0 basis-[clamp(260px,min(32vw,100%),420px)] snap-start transition-transform duration-300 ease-out max-[380px]:basis-[min(280px,calc(100vw-(var(--gutter)*2)-24px))] hover:-translate-y-1"
                data-reveal
              >
                <div className="relative mb-[18px] aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface">
                  <span className="absolute left-3.5 top-3.5 z-[1] rounded-full border border-white/20 bg-[rgba(10,10,10,0.5)] px-2.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-cream backdrop-blur-md">
                    Q2 2026
                  </span>
                  <div className="absolute inset-0 grid place-items-center p-8 bg-[linear-gradient(135deg,#ff7a59_0%,#c93b8b_50%,#4a1e5c_100%)]">
                    <svg width="60%" viewBox="0 0 200 200" fill="none" aria-hidden="true" className="opacity-90">
                      <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="3" fill="none" />
                      <path
                        d="M60 100 L 90 130 L 145 70"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-2 font-display text-[26px] font-bold leading-none tracking-[-0.025em] text-ink [font-variation-settings:'opsz'_36]">
                  Hospitality Brand
                </h4>
                <ul className={tagRow}>
                  <li className={tagSm}>Branding</li>
                  <li className={tagSm}>Identity</li>
                  <li className={tagSm}>Content</li>
                </ul>
              </article>

              <article
                className="min-w-0 shrink-0 basis-[clamp(260px,min(32vw,100%),420px)] snap-start transition-transform duration-300 ease-out max-[380px]:basis-[min(280px,calc(100vw-(var(--gutter)*2)-24px))] hover:-translate-y-1"
                data-reveal
              >
                <div className="relative mb-[18px] aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface">
                  <span className="absolute left-3.5 top-3.5 z-[1] rounded-full border border-white/20 bg-[rgba(10,10,10,0.5)] px-2.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-cream backdrop-blur-md">
                    Q2 2026
                  </span>
                  <div className="absolute inset-0 grid place-items-center p-8 bg-[linear-gradient(135deg,#b8a4ff_0%,#6e7cff_50%,#1a3aa0_100%)]">
                    <svg width="55%" viewBox="0 0 200 200" fill="none" aria-hidden="true" className="opacity-90">
                      <rect x="40" y="60" width="120" height="80" rx="8" stroke="white" strokeWidth="3" fill="none" />
                      <line x1="55" y1="80" x2="100" y2="80" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      <line x1="55" y1="100" x2="140" y2="100" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      <line x1="55" y1="120" x2="115" y2="120" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-2 font-display text-[26px] font-bold leading-none tracking-[-0.025em] text-ink [font-variation-settings:'opsz'_36]">
                  E-commerce MVP
                </h4>
                <ul className={tagRow}>
                  <li className={tagSm}>UI/UX</li>
                  <li className={tagSm}>Next.js</li>
                  <li className={tagSm}>Supabase</li>
                </ul>
              </article>

              <article
                className="min-w-0 shrink-0 basis-[clamp(260px,min(32vw,100%),420px)] snap-start transition-transform duration-300 ease-out max-[380px]:basis-[min(280px,calc(100vw-(var(--gutter)*2)-24px))] hover:-translate-y-1"
                data-reveal
              >
                <div className="relative mb-[18px] aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface">
                  <span className="absolute left-3.5 top-3.5 z-[1] rounded-full border border-white/20 bg-[rgba(10,10,10,0.5)] px-2.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-cream backdrop-blur-md">
                    Q2 2026
                  </span>
                  <div className="absolute inset-0 grid place-items-center p-8 bg-[linear-gradient(135deg,#ffe27a_0%,#ff9c4a_50%,#b73a1a_100%)]">
                    <svg width="55%" viewBox="0 0 200 200" fill="none" aria-hidden="true" className="opacity-90">
                      <path
                        d="M40 160 L 80 100 L 110 130 L 160 50"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <circle cx="80" cy="100" r="5" fill="white" />
                      <circle cx="110" cy="130" r="5" fill="white" />
                      <circle cx="160" cy="50" r="5" fill="white" />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-2 font-display text-[26px] font-bold leading-none tracking-[-0.025em] text-ink [font-variation-settings:'opsz'_36]">
                  Local SMB Campaign
                </h4>
                <ul className={tagRow}>
                  <li className={tagSm}>Meta Ads</li>
                  <li className={tagSm}>Content</li>
                  <li className={tagSm}>Strategy</li>
                </ul>
              </article>

              <article
                className="min-w-0 shrink-0 basis-[clamp(260px,min(32vw,100%),420px)] snap-start transition-transform duration-300 ease-out max-[380px]:basis-[min(280px,calc(100vw-(var(--gutter)*2)-24px))] hover:-translate-y-1"
                data-reveal
              >
                <div className="relative mb-[18px] aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface">
                  <span className="absolute left-3.5 top-3.5 z-[1] rounded-full border border-white/20 bg-[rgba(10,10,10,0.5)] px-2.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-cream backdrop-blur-md">
                    Q3 2026
                  </span>
                  <div className="absolute inset-0 grid place-items-center p-8 bg-[linear-gradient(135deg,#7affc0_0%,#2da38a_50%,#0c4a5e_100%)]">
                    <svg width="55%" viewBox="0 0 200 200" fill="none" aria-hidden="true" className="opacity-90">
                      <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="3" fill="none" />
                      <path
                        d="M90 80 Q 90 70, 100 70 T 110 80 Q 110 100, 100 100 V 115"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <circle cx="100" cy="130" r="3" fill="white" />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-2 font-display text-[26px] font-bold leading-none tracking-[-0.025em] text-ink [font-variation-settings:'opsz'_36]">
                  Real Estate PWA
                </h4>
                <ul className={tagRow}>
                  <li className={tagSm}>Product</li>
                  <li className={tagSm}>Branding</li>
                  <li className={tagSm}>PWA</li>
                </ul>
              </article>

              <article
                className="min-w-0 shrink-0 basis-[clamp(260px,min(32vw,100%),420px)] snap-start transition-transform duration-300 ease-out max-[380px]:basis-[min(280px,calc(100vw-(var(--gutter)*2)-24px))] hover:-translate-y-1"
                data-reveal
              >
                <div className="relative mb-[18px] aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface">
                  <span className="absolute left-3.5 top-3.5 z-[1] rounded-full border border-white/20 bg-[rgba(10,10,10,0.5)] px-2.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-cream backdrop-blur-md">
                    Q3 2026
                  </span>
                  <div className="absolute inset-0 grid place-items-center p-8 bg-[linear-gradient(135deg,#ffbb9d_0%,#ff6b9d_50%,#5e1a4a_100%)]">
                    <svg width="55%" viewBox="0 0 200 200" fill="none" aria-hidden="true" className="opacity-90">
                      <path
                        d="M40 80 L 70 110 L 100 80 L 130 110 L 160 80"
                        stroke="white"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M40 130 L 70 100 L 100 130 L 130 100 L 160 130"
                        stroke="white"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        opacity="0.6"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-2 font-display text-[26px] font-bold leading-none tracking-[-0.025em] text-ink [font-variation-settings:'opsz'_36]">
                  Restaurant System
                </h4>
                <ul className={tagRow}>
                  <li className={tagSm}>Brand</li>
                  <li className={tagSm}>Marketing</li>
                  <li className={tagSm}>Automation</li>
                </ul>
              </article>

              <article
                className="min-w-0 shrink-0 basis-[clamp(260px,min(32vw,100%),420px)] snap-start transition-transform duration-300 ease-out max-[380px]:basis-[min(280px,calc(100vw-(var(--gutter)*2)-24px))] hover:-translate-y-1"
                data-reveal
              >
                <div className="relative mb-[18px] aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface">
                  <span className="absolute left-3.5 top-3.5 z-[1] rounded-full border border-white/20 bg-[rgba(10,10,10,0.5)] px-2.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-cream backdrop-blur-md">
                    Q3 2026
                  </span>
                  <div className="absolute inset-0 grid place-items-center p-8 bg-[linear-gradient(135deg,#c4a3ff_0%,#5a3aa0_50%,#1a1040_100%)]">
                    <svg width="55%" viewBox="0 0 200 200" fill="none" aria-hidden="true" className="opacity-90">
                      <rect x="60" y="60" width="80" height="80" rx="4" stroke="white" strokeWidth="3" fill="none" />
                      <circle cx="100" cy="100" r="20" stroke="white" strokeWidth="3" fill="none" />
                      <line x1="100" y1="80" x2="100" y2="120" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      <line x1="80" y1="100" x2="120" y2="100" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <h4 className="mb-2 font-display text-[26px] font-bold leading-none tracking-[-0.025em] text-ink [font-variation-settings:'opsz'_36]">
                  Internal Ops Tool
                </h4>
                <ul className={tagRow}>
                  <li className={tagSm}>Automation</li>
                  <li className={tagSm}>Tooling</li>
                  <li className={tagSm}>AI</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-border py-10" aria-hidden="true">
          <div className="marquee-track text-ink" id="marquee">
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] [font-variation-settings:'opsz'_60,'wdth'_90]">
              brand
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] text-ink-faint [font-variation-settings:'opsz'_60,'wdth'_90]">
              ∗
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] [font-variation-settings:'opsz'_60,'wdth'_90]">
              software
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] text-ink-faint [font-variation-settings:'opsz'_60,'wdth'_90]">
              ∗
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] [font-variation-settings:'opsz'_60,'wdth'_90]">
              marketing
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] text-ink-faint [font-variation-settings:'opsz'_60,'wdth'_90]">
              ∗
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] [font-variation-settings:'opsz'_60,'wdth'_90]">
              automation
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] text-ink-faint [font-variation-settings:'opsz'_60,'wdth'_90]">
              ∗
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] [font-variation-settings:'opsz'_60,'wdth'_90]">
              product lab
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] text-ink-faint [font-variation-settings:'opsz'_60,'wdth'_90]">
              ∗
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] [font-variation-settings:'opsz'_60,'wdth'_90]">
              brand
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] text-ink-faint [font-variation-settings:'opsz'_60,'wdth'_90]">
              ∗
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] [font-variation-settings:'opsz'_60,'wdth'_90]">
              software
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] text-ink-faint [font-variation-settings:'opsz'_60,'wdth'_90]">
              ∗
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] [font-variation-settings:'opsz'_60,'wdth'_90]">
              marketing
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] text-ink-faint [font-variation-settings:'opsz'_60,'wdth'_90]">
              ∗
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] [font-variation-settings:'opsz'_60,'wdth'_90]">
              automation
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] text-ink-faint [font-variation-settings:'opsz'_60,'wdth'_90]">
              ∗
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] [font-variation-settings:'opsz'_60,'wdth'_90]">
              product lab
            </span>
            <span className="inline-flex items-center gap-4 whitespace-nowrap py-0 pl-7 pr-7 font-display text-[clamp(28px,4vw,48px)] font-bold lowercase tracking-[-0.03em] text-ink-faint [font-variation-settings:'opsz'_60,'wdth'_90]">
              ∗
            </span>
          </div>
        </section>

        <section className="py-[clamp(80px,10vw,140px)]">
          <div className={wrap}>
            <div className="mb-16 max-w-[50ch]">
              <h2 className="mb-4 font-display text-[clamp(36px,5.5vw,80px)] font-bold leading-[0.95] tracking-[-0.035em] text-ink [font-variation-settings:'opsz'_96]">
                Why this matters.
              </h2>
              <p className="max-w-[42ch] text-[15px] text-ink-muted">
                Most small businesses lose money in the gap between brand, marketing, and product. We
                close it.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 min-[980px]:grid-cols-4">
              <div
                className="relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-[20px] border border-border bg-surface p-7 transition-[border-color] duration-300 ease-out hover:border-ink-faint"
                data-reveal
              >
                <svg className="h-9 w-9 text-ink opacity-80" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                  <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M12 18 L 16 22 L 24 14"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
                <div>
                  <div className="mb-2.5 mt-10 font-display text-[clamp(46px,5vw,72px)] font-bold leading-none tracking-[-0.04em] text-ink [font-variation-settings:'opsz'_96]">
                    70%
                  </div>
                  <p className="text-[13.5px] leading-snug text-ink-muted">
                    of small businesses lose customers to bad UX. We rebuild it.
                  </p>
                </div>
              </div>

              <div
                className="relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-[20px] border border-border bg-surface p-7 transition-[border-color] duration-300 ease-out hover:border-ink-faint"
                data-reveal
              >
                <svg className="h-9 w-9 text-ink opacity-80" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                  <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="2" />
                  <path d="M18 10 V 18 L 23 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
                <div>
                  <div className="mb-2.5 mt-10 font-display text-[clamp(46px,5vw,72px)] font-bold leading-none tracking-[-0.04em] text-ink [font-variation-settings:'opsz'_96]">
                    0.5s
                  </div>
                  <p className="text-[13.5px] leading-snug text-ink-muted">
                    the time you have to make a first impression. Faster than a scroll.
                  </p>
                </div>
              </div>

              <div
                className="relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-[20px] border border-border bg-surface p-7 transition-[border-color] duration-300 ease-out hover:border-ink-faint"
                data-reveal
              >
                <svg className="h-9 w-9 text-ink opacity-80" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                  <path d="M6 18 Q 18 6, 30 18 Q 18 30, 6 18 Z" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="18" cy="18" r="4" fill="currentColor" />
                </svg>
                <div>
                  <div className="mb-2.5 mt-10 font-display text-[clamp(46px,5vw,72px)] font-bold leading-none tracking-[-0.04em] text-ink [font-variation-settings:'opsz'_96]">
                    55%
                  </div>
                  <p className="text-[13.5px] leading-snug text-ink-muted">
                    of first impressions are visual. So yeah — make it look intentional.
                  </p>
                </div>
              </div>

              <div
                className="relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-[20px] border border-border bg-surface p-7 transition-[border-color] duration-300 ease-out hover:border-ink-faint"
                data-reveal
              >
                <svg className="h-9 w-9 text-ink opacity-80" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                  <rect x="6" y="6" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path
                    d="M12 14 H 24 M 12 18 H 22 M 12 22 H 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <div>
                  <div className="mb-2.5 mt-10 font-display text-[clamp(46px,5vw,72px)] font-bold leading-none tracking-[-0.04em] text-ink [font-variation-settings:'opsz'_96]">
                    94%
                  </div>
                  <p className="text-[13.5px] leading-snug text-ink-muted">
                    of customer complaints come down to design. Not the copy. The vibes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border pb-20 pt-[clamp(80px,10vw,160px)]">
          <div className={wrap}>
            <div className="mb-14 max-w-[18ch]">
              <h2 className="font-display text-[clamp(36px,6vw,88px)] font-bold leading-[0.95] tracking-[-0.035em] text-ink [font-variation-settings:'opsz'_96]">
                What our clients <em className="font-bold italic text-ink-faint">will</em> say.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 min-[720px]:grid-cols-2">
              <div
                className="grid grid-cols-[80px_1fr] gap-6 rounded-[20px] border border-border bg-surface p-8 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:border-border-strong"
                data-reveal
              >
                <div className="grid size-20 place-items-center rounded-2xl border border-border bg-page text-ink">
                  <svg className="h-12 w-auto" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <path
                      d="M8 10 H 40 V 30 H 22 L 14 38 V 30 H 8 Z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <circle cx="18" cy="20" r="1.5" fill="currentColor" />
                    <circle cx="24" cy="20" r="1.5" fill="currentColor" />
                    <circle cx="30" cy="20" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <div className="mb-0.5 font-display text-lg font-bold tracking-[-0.02em] text-ink">
                    First client
                  </div>
                  <div className="mb-3.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.08em] text-ink-faint">
                    Pilot engagement — Q2 2026
                  </div>
                  <p className="text-[14.5px] leading-normal text-ink-muted">
                    &quot;We&apos;re in early. Our first client testimonials publish here as engagements wrap.
                    In the meantime, the honest truth is we&apos;re newly founded — and proud of it.&quot;
                  </p>
                </div>
              </div>

              <div
                className="grid grid-cols-[80px_1fr] gap-6 rounded-[20px] border border-border bg-surface p-8 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-[3px] hover:border-border-strong"
                data-reveal
              >
                <div className="grid size-20 place-items-center rounded-2xl border border-border bg-page text-ink">
                  <svg className="h-12 w-auto" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <path
                      d="M10 14 Q 10 8, 16 8 H 32 Q 38 8, 38 14 V 28 Q 38 34, 32 34 H 24 L 16 40 V 34 Q 10 34, 10 28 Z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path d="M18 18 Q 24 14, 30 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M18 24 Q 24 28, 30 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                </div>
                <div>
                  <div className="mb-0.5 font-display text-lg font-bold tracking-[-0.02em] text-ink">
                    Second client
                  </div>
                  <div className="mb-3.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.08em] text-ink-faint">
                    Pilot engagement — Q2 2026
                  </div>
                  <p className="text-[14.5px] leading-normal text-ink-muted">
                    &quot;Want your name here? Get on a call. We&apos;re choosing our first cohort of clients
                    carefully — small, real businesses we can do excellent work for.&quot;
                  </p>
                </div>
              </div>

              <div
                className="col-span-full rounded-[20px] border border-dashed border-border-strong bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_14px,rgba(245,244,239,0.015)_14px,rgba(245,244,239,0.015)_15px)] p-10 text-center"
                data-reveal
              >
                <span className={`${eyebrowCore} mb-1 inline-block`}>Want to be on this wall?</span>
                <p className="mx-auto mt-3 max-w-[50ch] text-[15px] text-ink-muted">
                  We&apos;re taking on three new clients for Q2 2026.{" "}
                  <a href="#contact" className="text-ink underline decoration-1 underline-offset-4">
                    Tell us what you&apos;re building.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-[clamp(80px,12vw,180px)] text-center" id="contact">
          <div className={wrap}>
            <div className="relative mb-8 grid h-[220px] place-items-center">
              <div className="relative grid h-[200px] w-[200px] place-items-center">
                <svg
                  className="cta-ring absolute inset-0 animate-[spin_18s_linear_infinite] text-ink"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <defs>
                    <path id="circlePath" d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
                  </defs>
                  <text fill="currentColor" fontFamily="Geist Mono" fontSize="11" letterSpacing="2.5">
                    <textPath href="#circlePath">
                      LIMITED LABS · LET&apos;S BUILD SOMETHING · LIMITED LABS · LET&apos;S BUILD SOMETHING ·{" "}
                    </textPath>
                  </text>
                </svg>
                <svg className="relative z-[1] h-20 w-20 text-ink" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                  <path
                    d="M10 40 Q 22 22, 40 30 Q 58 22, 70 40 Q 58 58, 40 50 Q 22 58, 10 40 Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M10 40 Q 22 38, 40 40 Q 58 38, 70 40"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path d="M40 30 V 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                </svg>
              </div>
            </div>
            <h2 className="mb-10 font-display text-[clamp(48px,9vw,144px)] font-bold lowercase leading-[0.9] tracking-[-0.04em] text-ink [font-variation-settings:'opsz'_96]">
              we&apos;re always
              <br />
              happy to chat.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:hello@limitedlabs.co"
                className="inline-flex items-center gap-3 rounded-full bg-ink px-8 py-[18px] text-base font-medium text-page transition-[transform,background-color] duration-200 ease-out hover:scale-105 hover:bg-accent"
              >
                hello@limitedlabs.co
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8 H 13 M 9 4 L 13 8 L 9 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full border border-border-strong bg-transparent px-8 py-[18px] text-base font-medium text-ink transition-[border-color] duration-200 ease-out hover:border-ink"
              >
                Book a discovery call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 13 L 13 3 M 7 3 H 13 V 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="overflow-hidden py-10 pb-[60px]" aria-hidden="true">
          <svg className="h-auto w-full text-ink" viewBox="0 0 1400 200" fill="none" preserveAspectRatio="xMidYMid meet">
            <text
              x="700"
              y="160"
              fontFamily="Bricolage Grotesque"
              fontWeight="700"
              fontSize="240"
              fill="currentColor"
              textAnchor="middle"
              letterSpacing="-12"
              style={{ fontVariationSettings: "'opsz' 96, 'wdth' 100" }}
            >
              LIMITED LABS
            </text>
          </svg>
        </section>
      </main>

      <footer className="border-t border-border pt-14 pb-8">
        <div className={wrap}>
          <div className="mb-20 grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 min-[880px]:grid-cols-4">
            <div>
              <svg className="mb-4 h-auto w-[60px] text-ink" viewBox="0 0 88 64" fill="none" aria-hidden="true">
                <path
                  d="M8 8 V 56 H 38"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M50 8 V 56 H 80"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="38" cy="56" r="3.5" fill="currentColor" />
                <circle cx="80" cy="56" r="3.5" fill="currentColor" />
              </svg>
              <p className="max-w-[32ch] text-sm text-ink-muted">
                A digital systems studio. Brand, build, automate — under one logic.
              </p>
            </div>
            <div>
              <h5 className="mb-4 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-faint">
                Studio
              </h5>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a href="#services" className="text-sm text-ink transition-colors duration-200 hover:text-ink-muted">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-sm text-ink transition-colors duration-200 hover:text-ink-muted">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-ink transition-colors duration-200 hover:text-ink-muted">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-faint">
                Contact
              </h5>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href="mailto:hello@limitedlabs.co"
                    className="text-sm text-ink transition-colors duration-200 hover:text-ink-muted"
                  >
                    hello@limitedlabs.co
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-ink transition-colors duration-200 hover:text-ink-muted">
                    Tirana, Albania
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-faint">
                Follow
              </h5>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a href="#" className="text-sm text-ink transition-colors duration-200 hover:text-ink-muted">
                    Instagram ↗
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-ink transition-colors duration-200 hover:text-ink-muted">
                    LinkedIn ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted">
              © 2026 Limited Labs — v0.1
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted">
              Built in Tirana
            </span>
          </div>
        </div>
      </footer>
      <LandingInteractions />
    </>
  );
}
