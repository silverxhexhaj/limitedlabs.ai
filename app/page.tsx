import Image from "next/image";
import Link from "next/link";

import AuditForm from "./components/AuditForm";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import WorksTabs from "./components/WorksTabs";
import LandingInteractions from "./LandingInteractions";
import { SERVICE_ITEMS } from "./services/servicesData";
import { wrap } from "./site";

const tagRow = "flex flex-wrap gap-2";
const tagSm =
  "rounded-full border border-border-strong px-2.5 py-[5px] font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-ink-muted";
const eyebrow =
  "font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ink-faint";

const CORE_SERVICE_ORDER = ["brand", "marketing-engines", "software", "automation"];
const coreServices = CORE_SERVICE_ORDER.map((slug) =>
  SERVICE_ITEMS.find((service) => service.slug === slug),
).filter((service): service is NonNullable<typeof service> => Boolean(service));
const productLab = SERVICE_ITEMS.find((service) => service.slug === "product-lab");

const problems = [
  {
    title: "The business looks inconsistent.",
    body: "Positioning, identity, website, and content tell different stories, so trust leaks before a conversation starts.",
  },
  {
    title: "Marketing has no shared logic.",
    body: "Content, ads, landing pages, and follow-up are managed as separate tasks instead of one measurable demand path.",
  },
  {
    title: "Recurring work creates drag.",
    body: "Email, WhatsApp, spreadsheets, and disconnected tools keep operators busy without making the business easier to run.",
  },
];

const principles = [
  {
    index: "01",
    title: "One operating logic",
    body: "Brand, marketing, software, and automation are designed together instead of handed across disconnected vendors.",
  },
  {
    index: "02",
    title: "Systems over isolated outputs",
    body: "Every deliverable should become reusable business infrastructure, not another asset that expires after launch.",
  },
  {
    index: "03",
    title: "AI with accountable control",
    body: "AI supports research, drafting, analysis, and workflow execution. Humans own strategy and consequential decisions.",
  },
  {
    index: "04",
    title: "Built for the operating reality",
    body: "The solution has to fit the client's market, team, tools, and ability to maintain it after handoff.",
  },
];

const proofItems = [
  {
    title: "Limited Labs public system",
    classification: "Internal system",
    body: "Service architecture, route-level content, production checks, SEO foundations, and the audit intake are built as one operating surface.",
  },
  {
    title: "Marketplace operations",
    classification: "Internal system",
    body: "Seller, order, and administrative workflow patterns developed around a real marketplace operating model.",
  },
  {
    title: "Hospitality touchpoints",
    classification: "Experiment",
    body: "Brand, content, and local-presence patterns tested against the daily constraints of hospitality operators.",
  },
  {
    title: "Approval-gated automation",
    classification: "Experiment",
    body: "Workflow prototypes test routing, reporting, and AI assistance while preserving explicit human approval points.",
  },
];

const faqs = [
  [
    "What does Limited Labs do?",
    "We diagnose and improve the connected systems behind how a business looks, sells, builds, and performs recurring work.",
  ],
  [
    "Who is the best fit?",
    "Established Albanian small and medium-sized businesses with a real offer, a decision owner, and a clear operational or growth constraint.",
  ],
  [
    "Do you work outside Albania?",
    "Yes. Tirana and the Albanian market are the primary focus, with international engagements accepted when the working fit is strong.",
  ],
  [
    "What happens after the free audit request?",
    "A human reviews the submission. Qualified requests receive three priority issues, why they matter, and a recommended first action within three business days.",
  ],
  [
    "How is AI used?",
    "AI accelerates research, synthesis, drafting, analysis, and workflow execution. Strategic and client-facing decisions remain human-controlled.",
  ],
  [
    "How much does an engagement cost?",
    "Pricing follows diagnosis because scope depends on the business constraint, systems involved, and required level of implementation.",
  ],
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="pb-[clamp(72px,9vw,132px)] pt-[clamp(140px,16vw,220px)]">
          <div className={wrap}>
            <div className="max-w-[1120px]">
              <p className={`${eyebrow} anim`}>AI-powered systems agency · Tirana, Albania</p>
              <h1 className="anim d1 mt-7 max-w-[14ch] font-display text-[clamp(48px,8.5vw,118px)] font-bold leading-[0.91] tracking-[-0.05em] text-ink [font-variation-settings:'opsz'_96]">
                We help Albanian business operators improve how they look, sell, build, and work.
              </h1>
              <div className="anim d2 mt-10 grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
                <p className="max-w-[54ch] text-[clamp(17px,1.5vw,21px)] leading-relaxed text-ink-muted">
                  Brand, Marketing, Software, and AI Automation connected under one operating logic.
                  We improve the highest-leverage parts of the business without adding another layer of
                  disconnected vendors.
                </p>
                <div className="md:justify-self-end">
                  <p className="max-w-[42ch] border-l border-border-strong pl-5 text-sm leading-relaxed text-ink-muted">
                    AI accelerates research and execution. Humans make strategic, client-facing, and
                    consequential decisions.
                  </p>
                </div>
              </div>
              <div className="anim d3 mt-10 flex flex-wrap gap-3">
                <a
                  href="#audit"
                  className="inline-flex min-h-12 items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-page transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Get a free systems audit
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center gap-3 rounded-full border border-border-strong px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
                >
                  Explore the four systems
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border py-[clamp(72px,8vw,112px)]" id="context">
          <div className={wrap}>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className={eyebrow}>The operating problem</p>
                <h2 className="mt-4 max-w-[12ch] font-display text-[clamp(38px,5vw,72px)] font-bold leading-[0.96] tracking-[-0.04em]">
                  Growth breaks when the systems disagree.
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {problems.map((problem, index) => (
                  <article
                    key={problem.title}
                    className="grid grid-cols-[auto_1fr] gap-5 rounded-[20px] border border-border bg-surface p-6 sm:p-8"
                    data-reveal
                  >
                    <span className={eyebrow}>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-[-0.025em]">
                        {problem.title}
                      </h3>
                      <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-ink-muted">
                        {problem.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-[clamp(80px,10vw,152px)]" id="services" aria-labelledby="services-heading">
          <div className={wrap}>
            <div className="mb-14 max-w-[780px]">
              <p className={eyebrow}>Four connected systems</p>
              <h2
                id="services-heading"
                className="mt-4 font-display text-[clamp(42px,7vw,96px)] font-bold leading-[0.94] tracking-[-0.045em]"
              >
                Improve the whole path, starting where it matters most.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              {coreServices.map((service) => (
                <article
                  key={service.slug}
                  className="group grid min-h-[420px] grid-rows-[auto_1fr_auto] overflow-hidden rounded-[24px] border border-border bg-surface p-[clamp(24px,3vw,36px)] transition-colors hover:border-border-strong"
                  data-reveal
                >
                  <div className="flex items-start justify-between gap-5">
                    <p className={eyebrow}>
                      {service.index} / {service.category === "automation" ? "AI Automation" : service.name}
                    </p>
                    <div className="grid size-20 shrink-0 place-items-center rounded-2xl border border-border bg-page p-3">
                      <Image
                        src={service.illustration}
                        alt=""
                        width={1254}
                        height={1254}
                        className="service-illustration-img h-full w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="mt-10">
                    <h3 className="max-w-[14ch] font-display text-[clamp(32px,4vw,54px)] font-bold leading-[0.96] tracking-[-0.04em]">
                      {service.tagline}
                    </h3>
                    <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-ink-muted">
                      {service.summary}
                    </p>
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-10 inline-flex min-h-12 w-fit items-center gap-3 rounded-full border border-border-strong px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.1em] transition-colors hover:border-ink"
                  >
                    Explore {service.category === "automation" ? "AI Automation" : service.name}
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>

            {productLab ? (
              <div
                className="mt-5 flex flex-col gap-6 rounded-[22px] border border-dashed border-border-strong p-[clamp(24px,3vw,36px)] sm:flex-row sm:items-center sm:justify-between"
                data-reveal
              >
                <div>
                  <p className={eyebrow}>Selective engagement / Product Lab</p>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.025em]">
                    Focused validation and co-building, by invitation.
                  </h3>
                  <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-ink-muted">
                    Product Lab is considered after qualification when we have conviction in the
                    problem. It is not a fifth self-service offer.
                  </p>
                </div>
                <Link
                  href="/services/product-lab"
                  className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full border border-border-strong px-6 py-3 text-sm font-semibold transition-colors hover:border-ink"
                >
                  How selection works
                </Link>
              </div>
            ) : null}
          </div>
        </section>

        <section
          className="border-y border-border py-[clamp(80px,10vw,144px)]"
          id="why"
          aria-labelledby="why-heading"
        >
          <div className={wrap}>
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className={eyebrow}>Why this model</p>
                <h2
                  id="why-heading"
                  className="mt-4 max-w-[11ch] font-display text-[clamp(42px,6vw,84px)] font-bold leading-[0.95] tracking-[-0.04em]"
                >
                  Fewer handoffs. Clearer accountability.
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[22px] border border-border bg-border sm:grid-cols-2">
                {principles.map((principle) => (
                  <article key={principle.index} className="bg-page p-[clamp(24px,3vw,36px)]">
                    <span className={eyebrow}>{principle.index}</span>
                    <h3 className="mt-8 font-display text-2xl font-bold tracking-[-0.025em]">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">{principle.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-[clamp(80px,10vw,144px)]" id="work" aria-labelledby="work-heading">
          <div className={wrap}>
            <div className="mb-12 max-w-[780px]">
              <p className={eyebrow}>Selected work and working models</p>
              <h2
                id="work-heading"
                className="mt-4 font-display text-[clamp(42px,7vw,92px)] font-bold leading-[0.94] tracking-[-0.045em]"
              >
                Evidence is labeled before it is presented.
              </h2>
              <p className="mt-5 max-w-[60ch] text-[15px] leading-relaxed text-ink-muted">
                Current items include concepts and internal systems. Each page states what the work is,
                what is known, and whether an outcome is measured or still a target.
              </p>
            </div>
          </div>
          <WorksTabs tagRow={tagRow} tagSm={tagSm} />
        </section>

        <section
          className="border-y border-border py-[clamp(80px,10vw,144px)]"
          id="proof"
          aria-labelledby="proof-heading"
        >
          <div className={wrap}>
            <div className="mb-12 max-w-[780px]">
              <p className={eyebrow}>Proof</p>
              <h2
                id="proof-heading"
                className="mt-4 font-display text-[clamp(42px,6vw,84px)] font-bold leading-[0.95] tracking-[-0.04em]"
              >
                Built around operating needs, not invented claims.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {proofItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-border bg-surface p-[clamp(24px,3vw,34px)]"
                  data-reveal
                >
                  <span className="rounded-full border border-border-strong px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint">
                    {item.classification}
                  </span>
                  <h3 className="mt-7 font-display text-2xl font-bold tracking-[-0.025em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-[clamp(80px,10vw,152px)]"
          id="audit"
          aria-labelledby="audit-heading"
        >
          <div className={wrap}>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <p className={eyebrow}>Free systems audit</p>
                <h2
                  id="audit-heading"
                  className="mt-4 font-display text-[clamp(42px,6vw,84px)] font-bold leading-[0.95] tracking-[-0.04em]"
                >
                  Find the first system worth fixing.
                </h2>
                <p className="mt-6 max-w-[48ch] text-[15px] leading-relaxed text-ink-muted">
                  Qualified submissions receive a concise written review of the three highest-priority
                  issues, why they matter, and the recommended first action.
                </p>
                <ol className="mt-8 space-y-5">
                  {[
                    "Share the business context and the systems creating friction.",
                    "A human reviews the request and checks whether the audit can be useful.",
                    "Qualified requests receive a written priority review within three business days.",
                  ].map((item, index) => (
                    <li key={item} className="flex gap-4 text-sm leading-relaxed text-ink-muted">
                      <span className={`${eyebrow} mt-0.5`}>{String(index + 1).padStart(2, "0")}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <AuditForm />
            </div>
          </div>
        </section>

        <section
          className="border-y border-border py-[clamp(80px,10vw,136px)]"
          id="faq"
          aria-labelledby="faq-heading"
        >
          <div className={wrap}>
            <div className="mb-12 max-w-[720px]">
              <p className={eyebrow}>FAQ</p>
              <h2
                id="faq-heading"
                className="mt-4 font-display text-[clamp(42px,6vw,80px)] font-bold leading-[0.95] tracking-[-0.04em]"
              >
                What to know before you submit.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[22px] border border-border bg-border md:grid-cols-2">
              {faqs.map(([question, answer]) => (
                <article key={question} className="bg-page p-[clamp(24px,3vw,34px)]">
                  <h3 className="font-display text-xl font-bold tracking-[-0.02em]">{question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-[clamp(80px,10vw,144px)]"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <div className={`${wrap} text-center`}>
            <p className={eyebrow}>Direct contact</p>
            <h2
              id="contact-heading"
              className="mx-auto mt-4 max-w-[13ch] font-display text-[clamp(46px,8vw,108px)] font-bold leading-[0.92] tracking-[-0.05em]"
            >
              Start with context, not a sales pitch.
            </h2>
            <p className="mx-auto mt-6 max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
              The audit is the preferred starting point. Direct email and discovery-call requests remain
              available when the structured form is not suitable.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:hello@limitedlabs.co"
                data-analytics-event="email_clicked"
                data-analytics-placement="final-contact"
                className="inline-flex min-h-12 items-center rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-page transition-transform hover:scale-[1.02]"
              >
                Email hello@limitedlabs.co
              </a>
              <a
                href="mailto:hello@limitedlabs.co?subject=Discovery%20call%20request%20-%20Limited%20Labs"
                data-analytics-event="discovery_call_clicked"
                data-analytics-placement="final-contact"
                className="inline-flex min-h-12 items-center rounded-full border border-border-strong px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                Request a discovery call
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <div className="grain-overlay" aria-hidden="true" />
      <LandingInteractions />
    </>
  );
}
