"use client";

import Link from "next/link";

import { COURSE_ITEMS } from "./coursesData";
import AnimatedHeading from "../components/AnimatedHeading";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { getCourseContent } from "../i18n/content/courseContent";
import { useLanguage } from "../i18n/LanguageProvider";
import LandingInteractions from "../LandingInteractions";
import { wrap } from "../site";

const eyebrowLabel =
  "inline-flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted before:h-px before:w-7 before:bg-accent before:content-['']";
const tagRow = "flex flex-wrap gap-2";
const tagSm =
  "rounded-full border border-border-strong px-2.5 py-[5px] font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-ink-muted";

export default function CoursesContent() {
  const { locale, t } = useLanguage();
  const copy = t.courses;
  const available = COURSE_ITEMS.filter((course) => course.status === "available");
  const headingAccent = locale === "sq" ? ["sistemet"] : ["systems"];

  return (
    <>
      <SiteHeader />

      <main id="top" className="pt-[92px] sm:pt-[110px]">
        <section className="section-grain relative overflow-hidden pb-[clamp(48px,7vw,96px)] pt-[clamp(24px,5vw,64px)]">
          <div className={`${wrap} relative z-[1]`}>
            <p className={`${eyebrowLabel} anim`}>{copy.eyebrow}</p>
            <AnimatedHeading
              as="h1"
              immediate
              delay={0.1}
              text={copy.heading}
              accentWords={headingAccent}
              className="mt-6 max-w-[16ch] font-display text-[clamp(38px,7vw,84px)] font-bold leading-[0.93] tracking-[-0.04em] text-ink"
            />
            <p className="anim d2 mt-8 max-w-[58ch] text-[clamp(16px,1.4vw,20px)] leading-relaxed text-ink-muted">
              {copy.lead}
            </p>
          </div>
        </section>

        <section className={`${wrap} pb-[clamp(48px,7vw,96px)]`}>
          <div className="grid grid-cols-1 gap-6">
            {available.map((course) => {
              const content = getCourseContent(course, locale);
              return (
                <article
                  key={course.slug}
                  className="group relative overflow-hidden rounded-[24px] border border-border bg-surface p-[clamp(24px,3.5vw,44px)] transition-[border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-border-strong"
                  data-reveal
                >
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
                          {course.index}
                        </span>
                        <span className="rounded-full bg-accent px-2.5 py-[5px] font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-[color:var(--accent-ink)]">
                          {course.isFree ? copy.freeLabel : copy.flagshipLabel}
                        </span>
                      </div>
                      <h2 className="mt-5 max-w-[20ch] font-display text-[clamp(26px,3.4vw,44px)] font-bold leading-[0.98] tracking-[-0.03em] text-ink">
                        {content.title}
                      </h2>
                      <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-ink-muted">
                        {content.summary}
                      </p>
                      <ul className={`${tagRow} mt-6`} aria-label={copy.metaAria}>
                        {content.meta.map((chip) => (
                          <li key={chip} className={tagSm}>{chip}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-5 lg:items-end lg:text-right">
                      <div>
                        {course.isFree ? null : (
                          <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                            {t.courseDetail.fromPrice}
                          </div>
                        )}
                        <div className="mt-1 font-display text-[clamp(34px,4vw,52px)] font-bold leading-none tracking-[-0.03em] text-ink">
                          {course.isFree ? t.courseDetail.freeWord : course.priceFrom}
                        </div>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted">
                          {content.level}
                        </div>
                      </div>
                      <Link
                        href={`/courses/${course.slug}`}
                        data-magnetic
                        className="relative z-[1] inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-page transition-[transform,background-color] duration-200 ease-out hover:scale-105 hover:bg-accent hover:text-[color:var(--accent-ink)]"
                      >
                        {copy.viewCourse}
                        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="absolute inset-0"
                    aria-label={`${content.title} — ${copy.viewCourse}`}
                  />
                </article>
              );
            })}
          </div>

          <div className="mt-[clamp(40px,6vw,72px)] rounded-[24px] border border-dashed border-border-strong bg-page p-[clamp(24px,3.5vw,44px)]" data-reveal>
            <h2 className={`${eyebrowLabel} mb-5`}>{copy.comingSoonHeading}</h2>
            <p className="max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
              {copy.comingSoonBody}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {copy.upcoming.map((title) => (
                <li
                  key={title}
                  className="inline-flex items-center gap-2.5 rounded-full border border-border px-4 py-2 text-[13px] text-ink-muted"
                >
                  <span className="size-[6px] shrink-0 rounded-full bg-border-strong" aria-hidden />
                  {title}
                  <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-ink-faint">
                    {copy.comingSoonTag}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-[clamp(40px,6vw,72px)] flex flex-col gap-6 rounded-[24px] border border-border-strong bg-surface px-[clamp(24px,4vw,48px)] py-[clamp(32px,4vw,52px)] text-center md:flex-row md:items-center md:justify-between md:text-left" data-reveal>
            <div>
              <h2 className="font-display text-[clamp(22px,2.6vw,32px)] font-bold tracking-[-0.03em] text-ink">
                {copy.ctaHeading}
              </h2>
              <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-ink-muted">
                {copy.ctaBody}
              </p>
            </div>
            <Link
              href="/?service=ai-automation#audit"
              data-magnetic
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[color:var(--accent-ink)] transition-colors hover:bg-ink hover:text-page"
            >
              {copy.ctaButton}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <LandingInteractions />
    </>
  );
}
