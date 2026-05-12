/* eslint-disable react/no-unescaped-entities -- static copy matches source HTML */
import LandingInteractions from "./LandingInteractions";

export default function Home() {
  return (
    <>
      <header className="nav" id="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="mark" aria-label="Limited Labs home">
            <svg viewBox="0 0 88 64" fill="none" aria-hidden="true">
              <path d="M8 8 V 56 H 38" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M50 8 V 56 H 80" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="38" cy="56" r="3.5" fill="currentColor"/>
              <circle cx="80" cy="56" r="3.5" fill="currentColor"/>
            </svg>
            <span className="mark-text">Limited Labs</span>
          </a>
          <a href="#contact" className="nav-cta">
            <span className="pulse" aria-hidden="true"></span>
            Let's Talk
          </a>
        </div>
      </header>

      <main id="top">

        
        <section className="hero">
          <div className="wrap">

            <div className="cloud-wrap anim d1">
              <svg className="cloud" viewBox="0 0 540 320" fill="none" aria-hidden="true">
                <path
                  d="M120 80 C 80 80, 50 110, 60 150 C 30 165, 35 215, 80 220 C 90 260, 140 270, 175 245 C 200 280, 280 285, 305 245 C 340 270, 410 260, 425 220 C 470 220, 485 175, 460 145 C 480 105, 440 75, 405 90 C 380 55, 320 50, 295 80 C 265 50, 195 50, 170 90 C 145 75, 125 75, 120 80 Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="draw"
                />
                <g transform="translate(120, 130)">
                  <path d="M0 0 V 40 H 18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M28 0 V 40 H 46" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g transform="translate(210, 150)" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <line x1="0" y1="-22" x2="0" y2="22"/>
                  <line x1="-22" y1="0" x2="22" y2="0"/>
                  <line x1="-16" y1="-16" x2="16" y2="16"/>
                  <line x1="-16" y1="16" x2="16" y2="-16"/>
                </g>
                <g transform="translate(280, 150)">
                  <path d="M-26 0 Q 0 -18, 26 0 Q 0 18, -26 0 Z" stroke="currentColor" strokeWidth="3" fill="none"/>
                  <circle cx="0" cy="0" r="6" fill="currentColor"/>
                </g>
                <g transform="translate(360, 150)" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  <path d="M-14 -22 Q -22 -22, -22 -12 L -22 -4 Q -22 0, -28 0 Q -22 0, -22 4 L -22 12 Q -22 22, -14 22"/>
                  <path d="M14 -22 Q 22 -22, 22 -12 L 22 -4 Q 22 0, 28 0 Q 22 0, 22 4 L 22 12 Q 22 22, 14 22"/>
                </g>
                <g transform="translate(420, 150)">
                  <path d="M-8 -20 L 6 -4 L -2 -4 L 8 20 L -6 0 L 2 0 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" fill="none"/>
                </g>
                <circle cx="170" cy="100" r="3" fill="currentColor" opacity="0.6"/>
                <circle cx="380" cy="200" r="3" fill="currentColor" opacity="0.6"/>
                <circle cx="240" cy="200" r="2.5" fill="currentColor" opacity="0.4"/>
              </svg>
            </div>

            <div className="hero-body">
              <div>
                <h1 className="anim d2">
                  <span className="stack">Welcome to</span>
                  <span className="stack pad">the LAB.</span>
                </h1>
              </div>
              <div className="hero-side anim d3">
                <p>We're your <strong>operating partner</strong> for brand, software, marketing, and automation — under one logic, not three vendors.</p>
                <p>From founders to family businesses, we build the systems that keep working after the project ends.</p>

                <svg className="hero-monogram" viewBox="0 0 200 100" fill="none" aria-hidden="true">
                  <path d="M10 10 V 70 Q 10 90, 30 90 H 80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M110 10 V 70 Q 110 90, 130 90 H 190" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <g transform="translate(180, 18)" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="0" y1="-8" x2="0" y2="8"/>
                    <line x1="-8" y1="0" x2="8" y2="0"/>
                    <line x1="-6" y1="-6" x2="6" y2="6"/>
                    <line x1="-6" y1="6" x2="6" y2="-6"/>
                  </g>
                </svg>
              </div>
            </div>

          </div>
        </section>

        
        <section className="statement">
          <div className="wrap">
            <h2>
              <span className="stack">We think systems.</span>
              <span className="stack pad">Then build engines.</span>
            </h2>
          </div>
        </section>

        
        <section className="services" id="services">
          <div className="wrap">

            <div className="service-slide">
              <div className="service-art">
                <svg viewBox="0 0 280 200" fill="none" aria-hidden="true">
                  <path d="M10 130 Q 40 60, 70 130 T 130 130 Q 160 70, 190 130 T 270 130"
                        stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  <path d="M10 155 L 270 155" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                  <circle cx="90" cy="40" r="6" fill="currentColor"/>
                  <circle cx="220" cy="38" r="4" fill="currentColor"/>
                  <text x="140" y="190" fontFamily="Bricolage Grotesque" fontWeight="700" fontSize="22" fill="currentColor" textAnchor="middle">brand</text>
                </svg>
              </div>
              <div className="service-info">
                <div className="eyebrow mono">01 / Brand</div>
                <h3>Strategic, sharp, and built to last.</h3>
                <p>Positioning, voice, identity, and content pillars. Not a logo on a Pinterest moodboard — a system that holds up across every channel for years.</p>
                <ul className="tag-row">
                  <li className="tag">Strategy</li>
                  <li className="tag">Positioning</li>
                  <li className="tag">Visual Identity</li>
                  <li className="tag">Copywriting</li>
                  <li className="tag">Content Pillars</li>
                  <li className="tag">Brand Guidelines</li>
                </ul>
              </div>
            </div>

            <div className="service-slide">
              <div className="service-art">
                <svg viewBox="0 0 280 200" fill="none" aria-hidden="true">
                  <path d="M70 50 Q 30 50, 30 90 L 30 95 Q 30 100, 18 100 Q 30 100, 30 105 L 30 110 Q 30 150, 70 150"
                        stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M210 50 Q 250 50, 250 90 L 250 95 Q 250 100, 262 100 Q 250 100, 250 105 L 250 110 Q 250 150, 210 150"
                        stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <circle cx="115" cy="100" r="5" fill="currentColor"/>
                  <circle cx="140" cy="100" r="5" fill="currentColor"/>
                  <circle cx="165" cy="100" r="5" fill="currentColor"/>
                  <line x1="60" y1="180" x2="220" y2="180" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="service-info">
                <div className="eyebrow mono">02 / Software</div>
                <h3>Websites, MVPs, internal tools.</h3>
                <p>From a landing page that converts to a shipped MVP. Next.js, Supabase, deployed on Vercel — a stack you can grow into, with documentation you'll actually read.</p>
                <ul className="tag-row">
                  <li className="tag">Landing Pages</li>
                  <li className="tag">PWAs</li>
                  <li className="tag">MVPs</li>
                  <li className="tag">Internal Tools</li>
                  <li className="tag">Next.js</li>
                  <li className="tag">Supabase</li>
                  <li className="tag">Vercel</li>
                </ul>
              </div>
            </div>

            <div className="service-slide">
              <div className="service-art">
                <svg viewBox="0 0 280 200" fill="none" aria-hidden="true">
                  <line x1="60" y1="60" x2="140" y2="100" stroke="currentColor" strokeWidth="2"/>
                  <line x1="60" y1="60" x2="60" y2="140" stroke="currentColor" strokeWidth="2"/>
                  <line x1="140" y1="100" x2="220" y2="60" stroke="currentColor" strokeWidth="2"/>
                  <line x1="140" y1="100" x2="220" y2="140" stroke="currentColor" strokeWidth="2"/>
                  <line x1="60" y1="140" x2="140" y2="100" stroke="currentColor" strokeWidth="2"/>
                  <line x1="140" y1="100" x2="140" y2="170" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="60" cy="60" r="10" fill="#131311" stroke="currentColor" strokeWidth="3"/>
                  <circle cx="60" cy="140" r="10" fill="#131311" stroke="currentColor" strokeWidth="3"/>
                  <circle cx="140" cy="100" r="14" fill="currentColor"/>
                  <circle cx="220" cy="60" r="10" fill="#131311" stroke="currentColor" strokeWidth="3"/>
                  <circle cx="220" cy="140" r="10" fill="#131311" stroke="currentColor" strokeWidth="3"/>
                  <circle cx="140" cy="170" r="8" fill="#131311" stroke="currentColor" strokeWidth="3"/>
                </svg>
              </div>
              <div className="service-info">
                <div className="eyebrow mono">03 / Marketing Engines</div>
                <h3>Content + ads that compound.</h3>
                <p>Meta Ads, content systems, and lead workflows. Built to publish, learn, and improve every month — not to win a creative award and disappear.</p>
                <ul className="tag-row">
                  <li className="tag">Content Calendars</li>
                  <li className="tag">Meta Ads</li>
                  <li className="tag">Copywriting (AL/EN)</li>
                  <li className="tag">Campaign Strategy</li>
                  <li className="tag">KPI Reporting</li>
                  <li className="tag">Lead Workflows</li>
                </ul>
              </div>
            </div>

            <div className="service-slide">
              <div className="service-art">
                <svg viewBox="0 0 280 200" fill="none" aria-hidden="true">
                  <path d="M60 100 A 60 60 0 1 1 220 100" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  <path d="M210 85 L 220 100 L 235 90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M220 100 A 60 60 0 1 1 60 100" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="6 6"/>
                  <path d="M70 115 L 60 100 L 45 110" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <circle cx="140" cy="100" r="14" stroke="currentColor" strokeWidth="2.5" fill="#131311"/>
                  <text x="140" y="106" fontFamily="Geist Mono" fontWeight="500" fontSize="13" fill="currentColor" textAnchor="middle">AI</text>
                </svg>
              </div>
              <div className="service-info">
                <div className="eyebrow mono">04 / Automation</div>
                <h3>Remove drag. Keep humans deciding.</h3>
                <p>Workflow audit, automation map, and a working system. AI drafts, you decide. Built with Make.com, Supabase, and APIs that talk to each other — instead of email threads that don't.</p>
                <ul className="tag-row">
                  <li className="tag">Workflow Audit</li>
                  <li className="tag">Make.com</li>
                  <li className="tag">API Integrations</li>
                  <li className="tag">Internal AI Tools</li>
                  <li className="tag">SOPs</li>
                </ul>
              </div>
            </div>

            <div className="service-slide">
              <div className="service-art">
                <svg viewBox="0 0 280 200" fill="none" aria-hidden="true">
                  <path d="M115 30 V 70 L 80 160 Q 75 175, 90 175 H 190 Q 205 175, 200 160 L 165 70 V 30"
                        stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <line x1="105" y1="30" x2="175" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="120" cy="135" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="150" cy="150" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="170" cy="125" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M92 115 Q 110 110, 140 115 T 188 115" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6"/>
                  <g transform="translate(140, 14)" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="0" y1="-8" x2="0" y2="8"/>
                    <line x1="-8" y1="0" x2="8" y2="0"/>
                  </g>
                </svg>
              </div>
              <div className="service-info">
                <div className="eyebrow mono">05 / Product Lab</div>
                <h3>For founders with an idea worth testing.</h3>
                <p>By invitation. We scope, build, validate — and we'll tell you when to pull the plug. No vanity MVPs. No "let's see what happens."</p>
                <ul className="tag-row">
                  <li className="tag">Idea Evaluation</li>
                  <li className="tag">MVP Scope</li>
                  <li className="tag">Validation Plan</li>
                  <li className="tag">Pitch Deck</li>
                  <li className="tag">Roadmap</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        
        <section className="work-section" id="work">
          <div className="wrap">
            <div className="work-head">
              <h2>Our first hits.<br/><span style={{ color: "var(--ink-3)" }}>Forthcoming.</span></h2>
              <div className="drag-hint">
                DRAG
                <svg viewBox="0 0 60 40" fill="none" aria-hidden="true">
                  <path d="M5 20 Q 25 5, 45 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <path d="M38 14 L 47 20 L 41 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="work-track-outer">
            <div className="work-track" id="workTrack">

              <article className="work-card">
                <div className="work-thumb">
                  <span className="forthcoming-badge">Q2 2026</span>
                  <div className="work-thumb-inner grad-1">
                    <svg width="60%" viewBox="0 0 200 200" fill="none" aria-hidden="true" style={{ opacity: 0.9 }}>
                      <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="3" fill="none"/>
                      <path d="M60 100 L 90 130 L 145 70" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h4>Hospitality Brand</h4>
                <ul className="tag-row">
                  <li className="tag">Branding</li>
                  <li className="tag">Identity</li>
                  <li className="tag">Content</li>
                </ul>
              </article>

              <article className="work-card">
                <div className="work-thumb">
                  <span className="forthcoming-badge">Q2 2026</span>
                  <div className="work-thumb-inner grad-2">
                    <svg width="55%" viewBox="0 0 200 200" fill="none" aria-hidden="true" style={{ opacity: 0.9 }}>
                      <rect x="40" y="60" width="120" height="80" rx="8" stroke="white" strokeWidth="3" fill="none"/>
                      <line x1="55" y1="80" x2="100" y2="80" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                      <line x1="55" y1="100" x2="140" y2="100" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                      <line x1="55" y1="120" x2="115" y2="120" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <h4>E-commerce MVP</h4>
                <ul className="tag-row">
                  <li className="tag">UI/UX</li>
                  <li className="tag">Next.js</li>
                  <li className="tag">Supabase</li>
                </ul>
              </article>

              <article className="work-card">
                <div className="work-thumb">
                  <span className="forthcoming-badge">Q2 2026</span>
                  <div className="work-thumb-inner grad-3">
                    <svg width="55%" viewBox="0 0 200 200" fill="none" aria-hidden="true" style={{ opacity: 0.9 }}>
                      <path d="M40 160 L 80 100 L 110 130 L 160 50" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <circle cx="80" cy="100" r="5" fill="white"/>
                      <circle cx="110" cy="130" r="5" fill="white"/>
                      <circle cx="160" cy="50" r="5" fill="white"/>
                    </svg>
                  </div>
                </div>
                <h4>Local SMB Campaign</h4>
                <ul className="tag-row">
                  <li className="tag">Meta Ads</li>
                  <li className="tag">Content</li>
                  <li className="tag">Strategy</li>
                </ul>
              </article>

              <article className="work-card">
                <div className="work-thumb">
                  <span className="forthcoming-badge">Q3 2026</span>
                  <div className="work-thumb-inner grad-4">
                    <svg width="55%" viewBox="0 0 200 200" fill="none" aria-hidden="true" style={{ opacity: 0.9 }}>
                      <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="3" fill="none"/>
                      <path d="M90 80 Q 90 70, 100 70 T 110 80 Q 110 100, 100 100 V 115" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
                      <circle cx="100" cy="130" r="3" fill="white"/>
                    </svg>
                  </div>
                </div>
                <h4>Real Estate PWA</h4>
                <ul className="tag-row">
                  <li className="tag">Product</li>
                  <li className="tag">Branding</li>
                  <li className="tag">PWA</li>
                </ul>
              </article>

              <article className="work-card">
                <div className="work-thumb">
                  <span className="forthcoming-badge">Q3 2026</span>
                  <div className="work-thumb-inner grad-5">
                    <svg width="55%" viewBox="0 0 200 200" fill="none" aria-hidden="true" style={{ opacity: 0.9 }}>
                      <path d="M40 80 L 70 110 L 100 80 L 130 110 L 160 80" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M40 130 L 70 100 L 100 130 L 130 100 L 160 130" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6"/>
                    </svg>
                  </div>
                </div>
                <h4>Restaurant System</h4>
                <ul className="tag-row">
                  <li className="tag">Brand</li>
                  <li className="tag">Marketing</li>
                  <li className="tag">Automation</li>
                </ul>
              </article>

              <article className="work-card">
                <div className="work-thumb">
                  <span className="forthcoming-badge">Q3 2026</span>
                  <div className="work-thumb-inner grad-6">
                    <svg width="55%" viewBox="0 0 200 200" fill="none" aria-hidden="true" style={{ opacity: 0.9 }}>
                      <rect x="60" y="60" width="80" height="80" rx="4" stroke="white" strokeWidth="3" fill="none"/>
                      <circle cx="100" cy="100" r="20" stroke="white" strokeWidth="3" fill="none"/>
                      <line x1="100" y1="80" x2="100" y2="120" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                      <line x1="80" y1="100" x2="120" y2="100" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <h4>Internal Ops Tool</h4>
                <ul className="tag-row">
                  <li className="tag">Automation</li>
                  <li className="tag">Tooling</li>
                  <li className="tag">AI</li>
                </ul>
              </article>

            </div>
          </div>
        </section>

        
        <section className="marquee-section" aria-hidden="true">
          <div className="marquee" id="marquee">
            <span className="marquee-item">brand</span>
            <span className="marquee-item muted">∗</span>
            <span className="marquee-item">software</span>
            <span className="marquee-item muted">∗</span>
            <span className="marquee-item">marketing</span>
            <span className="marquee-item muted">∗</span>
            <span className="marquee-item">automation</span>
            <span className="marquee-item muted">∗</span>
            <span className="marquee-item">product lab</span>
            <span className="marquee-item muted">∗</span>
            <span className="marquee-item">brand</span>
            <span className="marquee-item muted">∗</span>
            <span className="marquee-item">software</span>
            <span className="marquee-item muted">∗</span>
            <span className="marquee-item">marketing</span>
            <span className="marquee-item muted">∗</span>
            <span className="marquee-item">automation</span>
            <span className="marquee-item muted">∗</span>
            <span className="marquee-item">product lab</span>
            <span className="marquee-item muted">∗</span>
          </div>
        </section>

        
        <section className="stats">
          <div className="wrap">
            <div className="stats-head">
              <h2>Why this matters.</h2>
              <p>Most small businesses lose money in the gap between brand, marketing, and product. We close it.</p>
            </div>
            <div className="stats-grid">

              <div className="stat-card">
                <svg className="stat-icon" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                  <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 18 L 16 22 L 24 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <div>
                  <div className="stat-num">70%</div>
                  <p className="stat-text">of small businesses lose customers to bad UX. We rebuild it.</p>
                </div>
              </div>

              <div className="stat-card">
                <svg className="stat-icon" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                  <circle cx="18" cy="18" r="14" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18 10 V 18 L 23 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                </svg>
                <div>
                  <div className="stat-num">0.5s</div>
                  <p className="stat-text">the time you have to make a first impression. Faster than a scroll.</p>
                </div>
              </div>

              <div className="stat-card">
                <svg className="stat-icon" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                  <path d="M6 18 Q 18 6, 30 18 Q 18 30, 6 18 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="18" cy="18" r="4" fill="currentColor"/>
                </svg>
                <div>
                  <div className="stat-num">55%</div>
                  <p className="stat-text">of first impressions are visual. So yeah — make it look intentional.</p>
                </div>
              </div>

              <div className="stat-card">
                <svg className="stat-icon" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                  <rect x="6" y="6" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 14 H 24 M 12 18 H 22 M 12 22 H 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div>
                  <div className="stat-num">94%</div>
                  <p className="stat-text">of customer complaints come down to design. Not the copy. The vibes.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        
        <section className="testimonials">
          <div className="wrap">
            <div className="test-head">
              <h2>What our clients <em style={{ fontStyle: "italic", color: "var(--ink-3)", fontWeight: 700 }}>will</em> say.</h2>
            </div>

            <div className="test-grid">

              <div className="test-card">
                <div className="bubble">
                  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <path d="M8 10 H 40 V 30 H 22 L 14 38 V 30 H 8 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
                    <circle cx="18" cy="20" r="1.5" fill="currentColor"/>
                    <circle cx="24" cy="20" r="1.5" fill="currentColor"/>
                    <circle cx="30" cy="20" r="1.5" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <div className="name">First client</div>
                  <div className="role">Pilot engagement — Q2 2026</div>
                  <p className="quote">"We're in early. Our first client testimonials publish here as engagements wrap. In the meantime, the honest truth is we're newly founded — and proud of it."</p>
                </div>
              </div>

              <div className="test-card">
                <div className="bubble">
                  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <path d="M10 14 Q 10 8, 16 8 H 32 Q 38 8, 38 14 V 28 Q 38 34, 32 34 H 24 L 16 40 V 34 Q 10 34, 10 28 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
                    <path d="M18 18 Q 24 14, 30 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <path d="M18 24 Q 24 28, 30 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
                <div>
                  <div className="name">Second client</div>
                  <div className="role">Pilot engagement — Q2 2026</div>
                  <p className="quote">"Want your name here? Get on a call. We're choosing our first cohort of clients carefully — small, real businesses we can do excellent work for."</p>
                </div>
              </div>

              <div className="test-empty">
                <span className="mono label">Want to be on this wall?</span>
                <p>We're taking on three new clients for Q2 2026. <a href="#contact" style={{ color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: "4px" }}>Tell us what you're building.</a></p>
              </div>

            </div>
          </div>
        </section>

        
        <section className="cta" id="contact">
          <div className="wrap">
            <div className="cta-art">
              <div className="badge">
                <svg className="ring" viewBox="0 0 200 200" aria-hidden="true">
                  <defs>
                    <path id="circlePath" d="M 100, 100 m -78, 0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
                  </defs>
                  <text fill="currentColor" fontFamily="Geist Mono" fontSize="11" letterSpacing="2.5">
                    <textPath href="#circlePath">
                      LIMITED LABS · LET'S BUILD SOMETHING · LIMITED LABS · LET'S BUILD SOMETHING · 
                    </textPath>
                  </text>
                </svg>
                <svg className="lips" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                  <path d="M10 40 Q 22 22, 40 30 Q 58 22, 70 40 Q 58 58, 40 50 Q 22 58, 10 40 Z"
                        stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
                  <path d="M10 40 Q 22 38, 40 40 Q 58 38, 70 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <path d="M40 30 V 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
                </svg>
              </div>
            </div>
            <h2>we're always<br/>happy to chat.</h2>
            <div className="cta-buttons">
              <a href="mailto:hello@limitedlabs.co" className="btn-large btn-fill">
                hello@limitedlabs.co
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8 H 13 M 9 4 L 13 8 L 9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="btn-large btn-outline">
                Book a discovery call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13 L 13 3 M 7 3 H 13 V 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        
        <section className="big-wordmark" aria-hidden="true">
          <svg viewBox="0 0 1400 200" fill="none" preserveAspectRatio="xMidYMid meet">
            <text x="700" y="160" fontFamily="Bricolage Grotesque" fontWeight="700" fontSize="240" fill="currentColor" textAnchor="middle" letterSpacing="-12" style={{ fontVariationSettings: "'opsz' 96, 'wdth' 100" }}>LIMITED LABS</text>
          </svg>
        </section>

      </main>


      <footer>
        <div className="wrap">
          <div className="foot">
            <div className="foot-brand">
              <svg viewBox="0 0 88 64" fill="none" aria-hidden="true">
                <path d="M8 8 V 56 H 38" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M50 8 V 56 H 80" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="38" cy="56" r="3.5" fill="currentColor"/>
                <circle cx="80" cy="56" r="3.5" fill="currentColor"/>
              </svg>
              <p>A digital systems studio. Brand, build, automate — under one logic.</p>
            </div>
            <div className="foot-col">
              <h5>Studio</h5>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Contact</h5>
              <ul>
                <li><a href="mailto:hello@limitedlabs.co">hello@limitedlabs.co</a></li>
                <li><a href="#">Tirana, Albania</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Follow</h5>
              <ul>
                <li><a href="#">Instagram ↗</a></li>
                <li><a href="#">LinkedIn ↗</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span className="mono">© 2026 Limited Labs — v0.1</span>
            <span className="mono">Built in Tirana</span>
          </div>
        </div>
      </footer>
      <LandingInteractions />
    </>
  );
}
