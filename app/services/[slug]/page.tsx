import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import WorkCardLink from "../../components/WorkCardLink";
import LandingInteractions from "../../LandingInteractions";
import { wrap } from "../../site";
import { WORK_ITEMS, type WorkItem } from "../../work/workData";
import {
  SERVICE_ITEMS,
  getServiceBySlug,
  serviceCategoryToWorkFilter,
  type ServiceItem,
} from "../servicesData";

const tagRow = "flex flex-wrap gap-2";

const tagSm =
  "rounded-full border border-border-strong px-2.5 py-[5px] font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-ink-muted";

const eyebrowCore =
  "font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted";

const serviceArt =
  "service-art relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[20px] border border-border p-8 [&>span]:flex [&>span]:h-full [&>span]:w-full [&>span]:max-w-full [&>span]:items-center [&>span]:justify-center";

/** Tag substrings matched per category (case-insensitive) — mirrors WorksTabs. */
const CATEGORY_MATCHERS: Record<"brand" | "software" | "marketing" | "automation", string[]> = {
  brand: ["branding", "identity", "brand", "visual"],
  software: ["ui/ux", "next.js", "supabase", "pwa", "product", "tooling", "mvp"],
  marketing: ["meta ads", "marketing", "strategy", "campaign", "content"],
  automation: ["automation", "ai"],
};

function tagMatchesCategory(
  tag: string,
  category: "brand" | "software" | "marketing" | "automation",
): boolean {
  const normalized = tag.toLowerCase();
  return CATEGORY_MATCHERS[category].some(
    (matcher) => normalized.includes(matcher) || matcher.includes(normalized),
  );
}

function workMatchesCategory(
  work: WorkItem,
  category: "brand" | "software" | "marketing" | "automation",
): boolean {
  return work.tags.some((tag) => tagMatchesCategory(tag, category));
}

function getRelatedWork(service: ServiceItem): WorkItem[] {
  const filter = serviceCategoryToWorkFilter(service.category);
  if (!filter) return [];
  return WORK_ITEMS.filter((work) => workMatchesCategory(work, filter)).slice(0, 3);
}

function discussMailto(service: ServiceItem): string {
  const subject = encodeURIComponent(`Discuss ${service.name} offer — Limited Labs`);
  return `mailto:hello@limitedlabs.co?subject=${subject}`;
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICE_ITEMS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getServiceBySlug(slug);
  if (!item) {
    return { title: "Services — Limited Labs" };
  }
  return {
    title: `${item.name} — Limited Labs`,
    description: item.summary,
    openGraph: {
      title: `${item.name} — Limited Labs`,
      description: item.summary,
      images: [{ url: item.illustration, alt: `${item.name} service` }],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const idx = SERVICE_ITEMS.findIndex((s) => s.slug === slug);
  const prev = idx > 0 ? SERVICE_ITEMS[idx - 1] : null;
  const next = idx < SERVICE_ITEMS.length - 1 ? SERVICE_ITEMS[idx + 1] : null;
  const relatedWork = getRelatedWork(service);

  return (
    <>
      <SiteHeader />

      <main id="top" className="pt-[110px]">
        <div className={wrap}>
          <nav className="mb-10 flex flex-wrap items-center justify-between gap-4" aria-label="Breadcrumb">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M10 3 L 5 8 L10 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to services
            </Link>
            <span className={eyebrowCore}>
              Service / {service.index}
              {service.invitationOnly ? " · By invitation" : ""}
            </span>
          </nav>

          <div className="grid grid-cols-1 gap-[clamp(32px,5vw,64px)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:items-start">
            <div>
              <div className={`${eyebrowCore} mb-[18px]`}>
                {service.index} / {service.name}
              </div>
              <h1 className="font-display text-[clamp(40px,6vw,88px)] font-bold leading-[0.93] tracking-[-0.04em] text-ink [font-variation-settings:'opsz'_96]">
                {service.tagline}
              </h1>
              <ul className={`${tagRow} mt-6`} aria-label="Focus areas">
                {service.tags.map((t) => (
                  <li key={t} className={tagSm}>
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-8 max-w-[52ch] text-[clamp(15px,1.2vw,17px)] leading-normal text-ink-muted">
                {service.summary}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={discussMailto(service)}
                  className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-[14px] text-sm font-medium text-page transition-[transform,background-color] duration-200 ease-out hover:scale-105 hover:bg-accent"
                >
                  Discuss this offer
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
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 rounded-full border border-border-strong px-7 py-[14px] text-sm font-medium text-ink transition-[border-color,transform] duration-200 hover:scale-105 hover:border-ink"
                >
                  Book a discovery call
                </Link>
              </div>
            </div>

            <div className={`${serviceArt} lg:sticky lg:top-[120px]`}>
              <Image
                src={service.illustration}
                alt={`${service.name} service illustration`}
                width={1254}
                height={1254}
                className="service-illustration-img h-auto max-h-full w-auto max-w-full object-contain object-center"
                sizes="(max-width: 768px) 70vw, 400px"
                priority
              />
              <span className="service-ticks" aria-hidden="true">
                <span />
              </span>
            </div>
          </div>

          <section className="mt-[clamp(64px,8vw,120px)]" data-reveal>
            <h2 className={`${eyebrowCore} mb-8`}>What&apos;s included</h2>
            <div className="grid grid-cols-1 gap-4 min-[620px]:grid-cols-2">
              {service.includes.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-border bg-surface p-[clamp(20px,2.8vw,28px)] transition-[border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-border-strong"
                >
                  <h3 className="mb-2 font-display text-lg font-bold tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-ink-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-[clamp(48px,6vw,80px)] grid grid-cols-1 gap-5 md:grid-cols-2">
            <section
              className="rounded-[22px] border border-border bg-surface p-[clamp(24px,3vw,32px)]"
              data-reveal
            >
              <h2 className={`${eyebrowCore} mb-5`}>Who it&apos;s for</h2>
              <ul className="flex flex-col gap-3">
                {service.whoItsFor.map((item) => (
                  <li key={item} className="flex gap-3 text-[14.5px] leading-snug text-ink-muted">
                    <span className="mt-2 size-[6px] shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section
              className="rounded-[22px] border border-dashed border-border-strong bg-page p-[clamp(24px,3vw,32px)]"
              data-reveal
            >
              <h2 className={`${eyebrowCore} mb-5`}>Deliverables</h2>
              <ul className="flex flex-col gap-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-[14.5px] leading-snug text-ink-muted">
                    <span className="mt-[7px] h-px w-6 shrink-0 bg-border-strong" aria-hidden />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-[clamp(48px,6vw,80px)]" data-reveal>
            <h2 className={`${eyebrowCore} mb-8`}>How we work</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {service.process.map((step) => (
                <article
                  key={step.step}
                  className="rounded-[22px] border border-border bg-surface p-[clamp(24px,3vw,32px)]"
                >
                  <span className={`${eyebrowCore} mb-4 block`}>{step.step}</span>
                  <h3 className="mb-3 font-display text-xl font-bold tracking-[-0.02em] text-ink">
                    {step.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-ink-muted">{step.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-[clamp(64px,8vw,120px)]" data-reveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className={`${eyebrowCore} mb-3`}>Related work</h2>
                <p className="max-w-[46ch] text-[14.5px] leading-relaxed text-ink-muted">
                  Case snapshots that overlap with this service — placeholders until real projects publish.
                </p>
              </div>
            </div>

            {service.invitationOnly ? (
              <div className="rounded-[20px] border border-dashed border-border-strong bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_14px,rgba(245,244,239,0.015)_14px,rgba(245,244,239,0.015)_15px)] p-10 text-center">
                <span className={`${eyebrowCore} mb-1 inline-block`}>[ FORTHCOMING ]</span>
                <p className="mx-auto mt-3 max-w-[50ch] text-[15px] text-ink-muted">
                  Product Lab case studies publish after Q2 deliveries. In the meantime,{" "}
                  <a
                    href={discussMailto(service)}
                    className="text-ink underline decoration-1 underline-offset-4"
                  >
                    tell us what you&apos;re building
                  </a>
                  .
                </p>
              </div>
            ) : relatedWork.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedWork.map((work) => (
                  <WorkCardLink key={work.slug} work={work} tagRow={tagRow} tagSm={tagSm} layout="grid" />
                ))}
              </div>
            ) : (
              <div className="rounded-[20px] border border-dashed border-border-strong p-10 text-center">
                <p className="text-[15px] text-ink-muted">
                  First case studies in this category publish after Q2 deliveries.
                </p>
              </div>
            )}
          </section>

          <nav
            className="my-[clamp(48px,6vw,90px)] flex flex-col gap-4 rounded-[22px] border border-border-strong bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_14px,rgba(245,244,239,0.015)_14px,rgba(245,244,239,0.015)_15px)] px-[clamp(20px,3vw,32px)] py-[clamp(20px,3vw,28px)] min-[760px]:flex-row min-[760px]:items-center min-[760px]:justify-between"
            aria-label="Adjacent services"
            data-reveal
          >
            <div className="text-sm text-ink-muted">
              Explore other offers — or{" "}
              <a href={discussMailto(service)} className="text-ink underline decoration-1 underline-offset-4">
                discuss this one
              </a>
              .
            </div>
            <div className="flex flex-wrap gap-3">
              {prev ? (
                <Link
                  href={`/services/${prev.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-5 py-3 text-sm font-medium text-ink transition-[border-color,transform] duration-200 hover:-translate-x-0.5 hover:border-ink-faint"
                >
                  Previous
                  <span className="text-ink-faint">{prev.name}</span>
                </Link>
              ) : null}
              {next ? (
                <Link
                  href={`/services/${next.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-page transition-[transform,background-color] duration-200 hover:scale-[1.02] hover:bg-accent"
                >
                  Next
                  <span className="text-page/90">{next.name}</span>
                </Link>
              ) : null}
            </div>
          </nav>
        </div>
      </main>

      <SiteFooter />
      <LandingInteractions />
    </>
  );
}
