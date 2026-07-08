"use client";

import Link from "next/link";

import type { CourseItem } from "../coursesData";
import AnimatedHeading from "../../components/AnimatedHeading";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { getCourseContent } from "../../i18n/content/courseContent";
import { useLanguage } from "../../i18n/LanguageProvider";
import LandingInteractions from "../../LandingInteractions";
import { wrap } from "../../site";

const eyebrow =
  "font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-ink-muted";
const eyebrowLabel =
  "inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted before:h-px before:w-7 before:bg-accent before:content-['']";
const tagRow = "flex flex-wrap gap-2";
const tagSm =
  "rounded-full border border-border-strong px-2.5 py-[5px] font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-ink-muted";

type Props = {
  course: CourseItem;
  auditHref: string;
};

export default function CourseDetailContent({ course, auditHref }: Props) {
  const { locale, t } = useLanguage();
  const content = getCourseContent(course, locale);
  const copy = t.courseDetail;

  const specs = [
    { label: copy.specLevel, value: content.level },
    { label: copy.specDuration, value: content.durationLabel },
    { label: copy.specModules, value: String(course.moduleCount) },
    { label: copy.specLanguages, value: course.languages },
  ];

  return (
    <>
      <SiteHeader />
      <span hidden data-page-view-event="course_interest_viewed" data-page-view-slug={course.slug} />

      <main id="top" className="pt-[92px] sm:pt-[110px]">
        <div className={wrap}>
          <nav className="mb-8 flex flex-col items-start gap-3 min-[480px]:mb-10 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center min-[480px]:justify-between" aria-label="Breadcrumb">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-ink"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3 L 5 8 L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {copy.back}
            </Link>
            <span className={eyebrow}>{copy.courseWord} / {course.index}</span>
          </nav>

          {/* Hero + sticky enrol card */}
          <div className="grid grid-cols-1 gap-[clamp(32px,5vw,64px)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-start">
            <div>
              <div className={`${eyebrow} mb-[18px]`}>{course.index} / {content.level}</div>
              <AnimatedHeading
                as="h1"
                immediate
                delay={0.1}
                text={content.title}
                accentWords={content.accentWords}
                className="font-display text-[clamp(34px,5.2vw,72px)] font-bold leading-[0.96] tracking-[-0.04em] text-ink"
              />
              <ul className={`${tagRow} mt-7`} aria-label={t.courses.metaAria}>
                {content.meta.map((chip) => <li key={chip} className={tagSm}>{chip}</li>)}
              </ul>
              <p className="mt-8 max-w-[54ch] text-[clamp(15px,1.3vw,18px)] leading-relaxed text-ink-muted">
                {content.subtitle}
              </p>
              <ul className={`${tagRow} mt-8`}>
                {course.tags.map((tag) => <li key={tag} className={tagSm}>{tag}</li>)}
              </ul>
            </div>

            <aside className="rounded-[24px] border border-border-strong bg-surface p-[clamp(24px,3vw,32px)] lg:sticky lg:top-[110px]">
              <div className="flex items-baseline gap-2">
                {course.isFree ? null : <span className={eyebrow}>{copy.fromPrice}</span>}
                <span className="font-display text-[clamp(36px,4vw,48px)] font-bold leading-none tracking-[-0.03em] text-ink">
                  {course.isFree ? copy.freeWord : course.priceFrom}
                </span>
              </div>
              <p className="mt-1.5 text-[13px] text-ink-muted">
                {course.isFree ? copy.noCard : copy.oneTime}
              </p>

              <dl className="mt-6 flex flex-col divide-y divide-border border-y border-border">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex items-center justify-between gap-4 py-2.5">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint">{spec.label}</dt>
                    <dd className="text-right text-[13px] font-medium text-ink">{spec.value}</dd>
                  </div>
                ))}
              </dl>

              <a
                href="#pricing"
                data-magnetic
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[color:var(--accent-ink)] transition-colors hover:bg-ink hover:text-page"
              >
                {course.isFree ? copy.enrollFree : copy.enroll}<span aria-hidden="true">→</span>
              </a>
              <Link
                href={auditHref}
                className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-border-strong px-6 py-2.5 text-[13px] font-medium text-ink transition-colors hover:border-ink"
              >
                {copy.finalSecondary}
              </Link>
              {course.isFree ? null : (
                <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint">
                  {copy.guarantee}
                </p>
              )}
            </aside>
          </div>

          {/* Outcomes */}
          <section className="mt-[clamp(64px,8vw,120px)]" data-reveal>
            <h2 className={`${eyebrowLabel} mb-8`}>{copy.outcomes}</h2>
            <div className="grid grid-cols-1 gap-4 min-[620px]:grid-cols-2">
              {content.outcomes.map((item) => (
                <div key={item} className="flex gap-3.5 rounded-[18px] border border-border bg-surface p-[clamp(18px,2.4vw,24px)]">
                  <span className="mt-1.5 size-[7px] shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="text-[15px] leading-snug text-ink">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Curriculum */}
          <section className="mt-[clamp(56px,7vw,104px)]" data-reveal>
            <h2 className={`${eyebrowLabel} mb-8`}>{copy.curriculum}</h2>
            <div className="flex flex-col gap-3">
              {content.modules.map((module, index) => (
                <details
                  key={module.title}
                  className="course-module group rounded-[20px] border border-border bg-surface px-[clamp(20px,2.6vw,28px)] py-[clamp(16px,2vw,22px)] transition-colors duration-300 open:border-border-strong"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 [&::-webkit-details-marker]:hidden">
                    <span className="font-mono text-[12px] font-medium text-ink-faint">
                      {course.modules[index]?.index}
                    </span>
                    <h3 className="flex-1 font-display text-[clamp(17px,1.9vw,22px)] font-bold leading-tight tracking-[-0.02em] text-ink">
                      {module.title}
                    </h3>
                    <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted min-[480px]:inline">
                      {module.duration}
                    </span>
                    <svg
                      className="shrink-0 text-ink-muted transition-transform duration-300 group-open:rotate-45"
                      width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"
                    >
                      <path d="M9 3.5v11M3.5 9h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </summary>
                  <ul className="mt-5 flex flex-col gap-2.5 border-t border-border pt-5">
                    {module.lessons.map((lesson) => (
                      <li key={lesson} className="flex gap-3 text-[14px] leading-snug text-ink-muted">
                        <span className="mt-[7px] h-px w-4 shrink-0 bg-border-strong" aria-hidden />
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </section>

          {/* What's included */}
          <section className="mt-[clamp(56px,7vw,104px)]" data-reveal>
            <h2 className={`${eyebrowLabel} mb-8`}>{copy.included}</h2>
            <div className="grid grid-cols-1 gap-4 min-[620px]:grid-cols-2 lg:grid-cols-3">
              {content.included.map((item) => (
                <article key={item.title} className="rounded-[22px] border border-border bg-surface p-[clamp(20px,2.8vw,28px)]">
                  <h3 className="mb-2 font-display text-lg font-bold tracking-[-0.02em] text-ink">{item.title}</h3>
                  <p className="text-[14px] leading-relaxed text-ink-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Who it's for + instructor */}
          <div className="mt-[clamp(48px,6vw,80px)] grid grid-cols-1 gap-5 md:grid-cols-2">
            <section className="rounded-[22px] border border-border bg-surface p-[clamp(24px,3vw,32px)]" data-reveal>
              <h2 className={`${eyebrow} mb-5`}>{copy.whoItsFor}</h2>
              <ul className="flex flex-col gap-3">
                {content.whoItsFor.map((item) => (
                  <li key={item} className="flex gap-3 text-[14.5px] leading-snug text-ink-muted">
                    <span className="mt-2 size-[6px] shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="rounded-[22px] border border-dashed border-border-strong bg-page p-[clamp(24px,3vw,32px)]" data-reveal>
              <h2 className={`${eyebrow} mb-5`}>{copy.instructor}</h2>
              <p className="text-[15px] leading-relaxed text-ink-muted">{copy.instructorBody}</p>
              <Link
                href="/#work"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-1 underline-offset-4 transition-colors hover:text-accent"
              >
                {copy.seeWork}<span aria-hidden="true">→</span>
              </Link>
            </section>
          </div>

          {/* Pricing */}
          <section id="pricing" className="mt-[clamp(64px,8vw,120px)] scroll-mt-[100px]" data-reveal>
            <h2 className={`${eyebrowLabel} mb-8`}>{copy.pricing}</h2>
            <div
              className={
                course.pricing.length > 1
                  ? "grid grid-cols-1 gap-5 md:grid-cols-2"
                  : "mx-auto grid w-full max-w-[560px] grid-cols-1 gap-5"
              }
            >
              {course.pricing.map((tier, index) => {
                const tierCopy = content.pricing[index];
                return (
                  <article
                    key={tier.id}
                    className={`relative flex flex-col rounded-[24px] border p-[clamp(24px,3vw,36px)] ${
                      tier.featured
                        ? "border-accent bg-surface"
                        : "border-border bg-surface"
                    }`}
                  >
                    {tier.featured ? (
                      <span className="absolute -top-3 left-[clamp(24px,3vw,36px)] rounded-full bg-accent px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-[color:var(--accent-ink)]">
                        {course.pricing.length > 1 ? copy.mostPopular : t.courses.freeLabel}
                      </span>
                    ) : null}
                    <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">{tierCopy?.name}</h3>
                    <p className="mt-1.5 text-[13.5px] text-ink-muted">{tierCopy?.tagline}</p>
                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="font-display text-[clamp(34px,4vw,46px)] font-bold leading-none tracking-[-0.03em] text-ink">
                        {course.isFree ? copy.freeWord : tier.price}
                      </span>
                      {course.isFree ? null : (
                        <span className="text-[13px] text-ink-muted">{copy.oneTime}</span>
                      )}
                    </div>
                    <ul className="mt-6 flex flex-1 flex-col gap-3">
                      {tierCopy?.features.map((feature) => (
                        <li key={feature} className="flex gap-3 text-[14px] leading-snug text-ink">
                          <svg className="mt-0.5 size-4 shrink-0 text-accent" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3 8.5l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={tier.checkoutUrl}
                      data-magnetic
                      data-analytics-event="course_enroll_clicked"
                      data-analytics-slug={course.slug}
                      data-analytics-tier={tier.id}
                      className={`mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors ${
                        tier.featured
                          ? "bg-accent text-[color:var(--accent-ink)] hover:bg-ink hover:text-page"
                          : "bg-ink text-page hover:bg-accent hover:text-[color:var(--accent-ink)]"
                      }`}
                    >
                      {tierCopy?.ctaLabel}<span aria-hidden="true">→</span>
                    </a>
                  </article>
                );
              })}
            </div>
            <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.08em] text-ink-faint">
              {course.isFree ? copy.noCard : copy.guarantee}
            </p>
          </section>

          {/* FAQ */}
          <section className="mt-[clamp(56px,7vw,104px)]" data-reveal>
            <h2 className={`${eyebrowLabel} mb-8`}>{copy.faq}</h2>
            <div className="flex flex-col gap-3">
              {content.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[18px] border border-border bg-surface px-[clamp(20px,2.6vw,28px)] py-[clamp(14px,1.8vw,20px)] open:border-border-strong"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 [&::-webkit-details-marker]:hidden">
                    <h3 className="flex-1 text-[15.5px] font-medium text-ink">{faq.question}</h3>
                    <svg
                      className="shrink-0 text-ink-muted transition-transform duration-300 group-open:rotate-45"
                      width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true"
                    >
                      <path d="M9 3.5v11M3.5 9h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </summary>
                  <p className="mt-3 max-w-[62ch] text-[14.5px] leading-relaxed text-ink-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="section-grain relative my-[clamp(56px,7vw,104px)] overflow-hidden rounded-[28px] border border-border-strong px-[clamp(24px,4vw,56px)] py-[clamp(40px,5vw,72px)] text-center" data-reveal>
            <div className="relative z-[1]">
              <AnimatedHeading
                as="h2"
                text={copy.finalHeading}
                accentLast={2}
                className="mx-auto max-w-[18ch] font-display text-[clamp(28px,4.2vw,52px)] font-bold leading-[0.98] tracking-[-0.03em] text-ink"
              />
              <p className="mx-auto mt-5 max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
                {copy.finalBody}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 min-[480px]:flex-row">
                <a
                  href="#pricing"
                  data-magnetic
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-[color:var(--accent-ink)] transition-colors hover:bg-ink hover:text-page"
                >
                  {course.isFree ? copy.enrollFree : copy.enroll}<span aria-hidden="true">→</span>
                </a>
                <Link
                  href={auditHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-border-strong px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
                >
                  {copy.finalSecondary}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
      <LandingInteractions />
    </>
  );
}
