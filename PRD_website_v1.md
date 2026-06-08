# Limited Labs Website PRD

**Version:** 1.0
**Date:** June 8, 2026
**Owners:** Ambri, Silver
**Status:** Approved product direction
**Product:** Limited Labs public website
**Canonical URL:** `https://www.limitedlabs.ai`
**Source of truth:** This document supersedes `PRD_landing_page.md`, which remains as historical context.

---

## 1. Product Summary

Limited Labs is an AI-powered systems agency for Albanian small and medium-sized business operators, with international engagements accepted where there is a strong fit.

The agency connects four disciplines that clients often buy from separate vendors:

1. Brand
2. Marketing
3. Software
4. AI Automation

Limited Labs does not sell disconnected deliverables. It diagnoses how a business attracts demand, communicates value, converts customers, and performs recurring work, then improves the highest-leverage parts as one system.

The website is the agency's public acquisition and qualification surface. Its primary job is to generate qualified requests for a free systems audit. It must also establish credibility, explain the four connected systems, show honest proof, and prepare structured lead data for a future back office.

Product Lab remains a selective, invitation-only engagement rather than a fifth equal service.

---

## 2. Current State

The original PRD described a static, single-page website. The implemented product has moved beyond that scope.

The current baseline is:

- A multi-page Next.js application.
- A homepage with service, work, differentiation, proof, FAQ, audit, and contact sections.
- Individual service pages under `/services/[slug]`.
- Individual work pages under `/work/[slug]`.
- English-language metadata, sitemap, robots rules, structured data, and PWA support.
- An authenticated admin prototype that is not part of this website release.
- A free audit CTA that currently relies primarily on prefilled email links.

Version 1.0 optimizes this existing architecture. It is not a visual redesign or a rebuild from scratch.

---

## 3. Goals and Non-Goals

### 3.1 Goals

- Make the audience, offer, differentiation, and primary CTA understandable within the opening viewport.
- Position Limited Labs as an AI-powered systems agency without presenting AI as unsupervised or replacing human judgment.
- Explain Brand, Marketing, Software, and AI Automation as connected systems.
- Convert qualified visitors into structured free systems audit submissions.
- Give prospective clients enough evidence to trust the agency without invented claims.
- Route service and work-page traffic into one coherent conversion funnel.
- Capture clean, attributable lead data that can later feed a CRM or agency back office.
- Meet production standards for mobile usability, accessibility, SEO, analytics, performance, privacy, and reliability.

### 3.2 Non-Goals

- Building the agency back office, CRM, operator scheduler, or project delivery system.
- Automatically generating or sending the written audit.
- Automatically publishing content, contacting leads, booking calls, or changing campaigns.
- Publishing public pricing.
- Replacing the current visual identity.
- Launching an Albanian-language version in this release.
- Adding a blog, newsletter, customer portal, or self-service checkout.

---

## 4. Audience and Positioning

### 4.1 Primary Audience

Owners and operators of Albanian SMBs, initially concentrated in:

- Hospitality and food service
- Real estate and construction-adjacent businesses
- Retail and e-commerce
- Professional and local services
- Small companies with recurring manual operations

These buyers usually have an operating business but face one or more of the following:

- Inconsistent positioning or visual identity
- A website that does not explain or convert
- Disconnected content, advertising, and follow-up
- Repetitive work across email, WhatsApp, spreadsheets, and internal tools
- Multiple vendors working without shared strategy or accountability

### 4.2 Secondary Audience

- International SMB operators who can work remotely with a Tirana-based agency.
- Early-stage founders who need a focused software build or selective Product Lab engagement.

### 4.3 Not the Audience

- Buyers selecting solely on the lowest price.
- Requests for isolated production work with no clear business outcome.
- "Make us viral" engagements without a viable offer, budget, or decision owner.
- Enterprise procurement-led engagements requiring capabilities the agency does not yet operate.

### 4.4 Positioning Statement

> Limited Labs is an AI-powered systems agency that helps Albanian business operators improve how they look, sell, build, and work - under one operating logic.

### 4.5 Public Category and AI Language

The primary public category is **AI-powered systems agency**.

AI should be presented as an operating advantage used for research, synthesis, drafting, analysis, and workflow execution. Public copy must also make the control model clear:

- AI assists and accelerates.
- Humans make strategic and client-facing decisions.
- High-impact actions require approval.
- Clients receive accountable outcomes, not access to an ungoverned agent.

Avoid unsupported claims such as "fully autonomous agency," "zero-human delivery," or guaranteed growth.

---

## 5. Offer Architecture

### 5.1 Brand

**Promise:** Create a coherent business identity that can be used consistently across channels.

Representative capabilities:

- Positioning and audience definition
- Naming, messaging, voice, and tone
- Visual identity and brand guidelines
- Content pillars and reusable templates
- Launch and touchpoint systems

### 5.2 Marketing

**Promise:** Connect the offer, creative, distribution, conversion path, and follow-up into a measurable demand system.

Representative capabilities:

- Content systems
- Meta Ads and selected search campaigns
- Landing-page alignment
- Lead capture and follow-up workflows
- Email marketing
- Analytics and reporting

### 5.3 Software

**Promise:** Design and ship focused digital products that solve a clear customer or operational problem.

Representative capabilities:

- Conversion websites and landing pages
- PWAs and MVPs
- E-commerce and SaaS foundations
- Internal tools
- Integrations, performance, and SEO
- Maintenance and iterative improvement

### 5.4 AI Automation

**Promise:** Remove recurring operational drag while keeping people in control of consequential decisions.

Representative capabilities:

- Workflow audits and process mapping
- Tool and API integrations
- AI-assisted internal tools
- Lead routing and reporting
- Document and communication workflows
- Approval gates, logs, SOPs, and training

### 5.5 Product Lab

Product Lab is invitation-only and secondary in the information hierarchy. It may be offered to founders after qualification when Limited Labs has conviction in the problem and is prepared to evaluate, validate, or co-build the product.

It must not compete visually with the four core services on the homepage.

---

## 6. User Journey

### 6.1 Primary Journey

1. A visitor arrives from search, referral, outreach, social media, or a direct link.
2. The opening viewport identifies who Limited Labs helps, what systems it builds, and the free audit CTA.
3. The visitor explores relevant services, work, process, proof, or FAQs.
4. The visitor starts the structured audit form.
5. The website validates and stores the submission.
6. Limited Labs receives an internal notification.
7. The visitor sees a clear confirmation and expected response time.
8. A human reviews and qualifies the request.
9. Qualified leads receive a written priority review and recommended next step.
10. A discovery call is offered when there is a credible engagement fit.

### 6.2 Secondary Journeys

- A visitor with a clear need opens a service detail page and enters the same audit funnel with service interest preselected.
- A visitor opens a work page, reviews its evidence classification, and enters the audit funnel with source context preserved.
- A visitor uses direct email or the discovery-call link when the structured form is unsuitable.

### 6.3 Audit Promise

Qualified submissions receive a concise written review covering:

- The three highest-priority issues across brand, website, marketing, or recurring workflows.
- Why those issues matter.
- The recommended first action or engagement.

The target response time is three business days. Submission does not guarantee a free deliverable; requests may be declined when information is insufficient or the business is not a fit.

---

## 7. Information Architecture

### 7.1 Global Navigation

Required destinations:

- Services
- Work
- Why Limited Labs
- Proof
- FAQ
- Contact
- Free Systems Audit

The audit CTA must remain visually primary on desktop and mobile. Navigation from service and work pages must return visitors to valid homepage sections or dedicated routes without broken anchor behavior.

### 7.2 Homepage

The homepage must contain:

1. **Hero**
   - Audience: Albanian business operators, with international availability expressed secondarily.
   - Outcome-led positioning.
   - The four connected systems.
   - Primary CTA: `Get a free systems audit`.
   - Secondary CTA: explore services or selected work.

2. **Four systems**
   - Brand, Marketing, Software, and AI Automation.
   - Each system links to its detail page.
   - Product Lab appears separately and with selective language.

3. **Selected work**
   - Verified or clearly classified work only.
   - Each item links to a detail page where available.

4. **Why this model**
   - One operating logic instead of disconnected vendors.
   - Systems over one-off outputs.
   - AI-assisted execution with human judgment.
   - Practical delivery adapted to the client's market and team.

5. **Proof**
   - Verified client evidence, operating artifacts, or explicitly labeled experiments.
   - No empty testimonial placeholders.

6. **Audit explanation**
   - What is reviewed.
   - What a qualified prospect receives.
   - What happens after submission.
   - Expected response time.

7. **Structured audit form**

8. **FAQ**
   - Services and fit
   - Albania and international availability
   - Engagement starting point
   - Audit process
   - AI and human review
   - Pricing handled after diagnosis

9. **Final CTA and contact**

### 7.3 Service Pages

Each core service page must include:

- Service name and outcome-led summary
- Problems it solves
- Capabilities and representative deliverables
- Who it is for and who it is not for
- Delivery process
- Relevant work or proof
- Relationship to the other systems
- Audit CTA with the service preselected
- Unique metadata, canonical URL, and structured internal links

Product Lab must explicitly state that it is selective and not available through direct self-service purchase.

### 7.4 Work Pages

Each work page must include:

- Title and evidence classification
- Context and problem
- Approach
- Deliverables or systems involved
- Results, current state, or clearly labeled outcome target
- Relevant services
- Audit CTA

Work pages must never imply that a concept, target, anonymized engagement, or internal experiment is a named completed client result.

### 7.5 Contact Path

The structured audit is the preferred path. Direct email and discovery-call links remain available as secondary paths.

Until changed through a verified business decision, the public inbox is `hello@limitedlabs.co`.

### 7.6 Footer

Required footer content:

- Limited Labs name and concise positioning
- Tirana, Albania
- Service, work, audit, and contact links
- Verified social links only
- Privacy link when the form goes live
- Current copyright year

Admin access must not be promoted as a primary public navigation destination.

---

## 8. Audit Intake

### 8.1 Form Fields

Required:

- Full name
- Work email
- Company or business name
- Primary business URL or social profile
- Requested systems, with at least one selected
- Current challenge
- Desired outcome
- Consent to store and review the submission

Optional:

- Phone or WhatsApp number
- Additional URLs
- Industry
- Team size
- Timeline
- Approximate budget range
- Referral detail

Requested systems use these stable values:

- `brand`
- `marketing`
- `software`
- `ai-automation`
- `not-sure`

Timeline uses:

- `immediately`
- `within-30-days`
- `within-90-days`
- `exploring`

### 8.2 Validation

- Trim all text values.
- Require a valid email address.
- Require one valid primary URL using `http` or `https`.
- Require at least one requested system.
- Require challenge and desired-outcome fields with a minimum of 30 and maximum of 2,000 characters each.
- Limit names and company names to 120 characters.
- Limit additional URLs to five.
- Require explicit consent; consent must not be preselected.
- Reject unknown enum values and unexpected payload fields at the server boundary.
- Apply rate limiting and bot protection without blocking ordinary keyboard-only or privacy-conscious users.
- Show field-level errors and an error summary without clearing valid input.

### 8.3 Submission Behavior

- Disable repeated submission while a request is in flight.
- Generate an idempotency key for each submission attempt.
- Treat matching idempotency keys as one submission and return the existing successful result.
- Detect repeated normalized email, company, and primary URL submissions within ten minutes and return the existing confirmation instead of creating another record.
- Store the submission before sending notifications.
- Notification failure must not discard or hide a successfully stored lead.
- Show a confirmation state with submission reference and three-business-day response target.
- Do not expose internal qualification notes or status in the public response.

### 8.4 Stable Intake Boundary

The website must expose a provider-neutral application boundary equivalent to:

```ts
type CreateAuditSubmissionResult =
  | { ok: true; submissionId: string; duplicate: boolean }
  | { ok: false; code: "validation" | "rate-limited" | "storage-failed"; message: string };

interface AuditSubmissionStore {
  create(input: AuditSubmissionInput, idempotencyKey: string): Promise<CreateAuditSubmissionResult>;
}

interface AuditSubmissionNotifier {
  notifyNewSubmission(submissionId: string): Promise<void>;
}
```

The public endpoint is `POST /api/audit-submissions`. Storage and notification providers may change without changing the public request contract.

---

## 9. Data Contract

```ts
type RequestedSystem =
  | "brand"
  | "marketing"
  | "software"
  | "ai-automation"
  | "not-sure";

type LeadStatus =
  | "new"
  | "reviewing"
  | "qualified"
  | "audit-prepared"
  | "call-booked"
  | "closed"
  | "archived";

type AuditTimeline =
  | "immediately"
  | "within-30-days"
  | "within-90-days"
  | "exploring";

type AuditSource = {
  landingPath: string;
  referrer?: string;
  serviceSlug?: string;
  workSlug?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
};

type AuditSubmission = {
  id: string;
  idempotencyKey: string;
  fullName: string;
  email: string;
  phone?: string;
  companyName: string;
  primaryUrl: string;
  additionalUrls: string[];
  industry?: string;
  teamSize?: string;
  requestedSystems: RequestedSystem[];
  challenge: string;
  desiredOutcome: string;
  timeline?: AuditTimeline;
  budgetRange?: string;
  referralDetail?: string;
  consent: true;
  consentedAt: string;
  source: AuditSource;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
};
```

### 9.1 Status Rules

- New records begin as `new`.
- `reviewing` means a human has started evaluation.
- `qualified` means the agency intends to prepare the promised review or continue discovery.
- `audit-prepared` means the written review is ready or has been delivered.
- `call-booked` means a discovery call has been scheduled.
- `closed` means the lead converted, was declined, or ended with a recorded outcome.
- `archived` is for retention and cleanup after the active lifecycle.

Status changes are internal and human-controlled in version 1.0.

### 9.2 Data Handling

- Collect only the fields defined in this PRD.
- Do not collect passwords, payment details, government identifiers, or confidential system credentials.
- Encrypt data in transit and use access-controlled storage.
- Keep secrets and provider credentials in environment configuration.
- Log submission and notification failures without logging full free-text form contents.
- Provide a privacy notice describing purpose, retention, and contact for deletion requests before production launch.

---

## 10. Proof and Content Governance

Every work item must use one of these internal classifications:

- `verified-client-work`
- `anonymized-client-work`
- `internal-system`
- `experiment`
- `concept`

Public presentation rules:

- Verified client work may name the client and publish approved facts.
- Anonymized client work must say it is anonymized.
- Internal systems and experiments must be labeled as such.
- Concepts must not be framed as completed engagements.
- Outcome targets must use future- or target-oriented language.
- Quantitative results require a traceable source and client permission.
- Testimonials require the speaker's approval.
- AI-generated imagery must not be presented as documentary client evidence.

Content changes involving client identity, testimonials, performance claims, or publication of client materials require human approval.

---

## 11. Analytics

Analytics should be privacy-conscious and must not include free-text form values or personally identifiable information.

Required events:

| Event | Trigger | Required properties |
| --- | --- | --- |
| `audit_form_started` | First interaction with the audit form | `page_path`, `source_context` |
| `audit_form_submitted` | Server-confirmed successful submission | `page_path`, `requested_systems`, `duplicate` |
| `audit_form_error` | Submission or validation failure | `page_path`, `error_type` |
| `service_interest_viewed` | Service page or service detail opened | `service_slug`, `page_path` |
| `service_audit_clicked` | Audit CTA clicked from a service context | `service_slug`, `page_path` |
| `work_viewed` | Work detail opened | `work_slug`, `classification` |
| `work_audit_clicked` | Audit CTA clicked from a work context | `work_slug`, `page_path` |
| `email_clicked` | Public email link clicked | `page_path`, `placement` |
| `discovery_call_clicked` | Scheduler link clicked | `page_path`, `placement` |

UTM parameters and original landing context must persist through the session and be attached to the audit submission.

---

## 12. SEO, Accessibility, and Performance

### 12.1 SEO

- Use `https://www.limitedlabs.ai` as the canonical host.
- Redirect the non-`www` host to the canonical host.
- Provide unique titles, descriptions, canonical URLs, and social metadata for the homepage, services, and work pages.
- Keep service and work routes in the XML sitemap.
- Exclude admin routes from indexing.
- Maintain valid `ProfessionalService` structured data and add only schema supported by visible page content.
- Use one descriptive H1 per page and a logical heading hierarchy.
- Ensure internal links use descriptive labels and valid destinations.
- Prepare route and content structures for a future `/sq` Albanian locale without launching machine-translated pages.

### 12.2 Accessibility

- Meet WCAG 2.2 AA for public conversion paths.
- Support keyboard navigation, visible focus, semantic landmarks, and screen-reader labels.
- Associate every form field with a persistent label and error message.
- Move focus to the error summary after failed submission and to confirmation after success.
- Maintain minimum target sizes for touch controls.
- Respect `prefers-reduced-motion`.
- Do not use color alone to communicate state.
- Keep text and interactive contrast at AA minimum.

### 12.3 Performance and Reliability

- Optimize for mobile traffic first.
- Target Core Web Vitals in the "good" range at the 75th percentile.
- Avoid unnecessary client-side JavaScript in static content sections.
- Optimize responsive images and prevent layout shift.
- Audit submission must remain usable on slow mobile connections.
- A stored submission must survive notification provider failure.
- Production errors must present a recoverable message and reference rather than a blank or lost state.

---

## 13. Human Approval Policy

The website may automatically:

- Validate and store audit submissions.
- Send internal notifications.
- Send a neutral receipt confirming successful submission.
- Record privacy-safe analytics.

Human approval is required before:

- Sending the written audit or strategic recommendations.
- Sending personalized sales communication.
- Publishing or changing client work, testimonials, or performance claims.
- Booking or changing meetings on a prospect's behalf.
- Changing prices, proposals, campaigns, or client systems.
- Deleting active lead records.

---

## 14. Success Metrics

The initial measurement window is the first 90 days after the structured audit funnel launches.

Primary metrics:

- Qualified audit submissions per month
- Percentage of audit submissions marked `qualified`
- Qualified submission to discovery-call conversion
- Discovery-call to proposal conversion
- Proposal to won-engagement conversion

Supporting metrics:

- Audit form start-to-submit conversion
- Audit submission error rate
- Service-page to audit-start conversion
- Work-page to audit-start conversion
- Organic impressions and qualified service-page visits
- Median human response time
- Percentage of submissions with usable attribution data

Initial targets:

| Metric | Target |
| --- | --- |
| Qualified audit submissions | 5 or more per month |
| Audit start-to-submit conversion | 35% or higher |
| Qualified submission to booked call | 40% or higher |
| Submission error rate | Below 2% |
| Median first human response | Within 3 business days |
| Attribution completeness | 90% or higher |

Traffic volume and bounce rate are diagnostic metrics, not primary measures of success.

---

## 15. Release Acceptance Criteria

### 15.1 Positioning and Content

- The opening viewport identifies the primary audience, four systems, differentiation, and free audit CTA.
- The phrase "AI-powered systems agency" is supported by clear human-control language.
- Product Lab is visibly secondary to the four core systems.
- Pricing is not published.
- The site does not make unsupported autonomy, client, testimonial, or performance claims.

### 15.2 Information Architecture

- Homepage, service pages, work pages, navigation, footer, FAQ, contact paths, and audit funnel follow this PRD.
- All four core services have working detail routes and contextual audit CTAs.
- All published work has an evidence classification and accurate language.
- No public link points to a placeholder destination.

### 15.3 Audit Funnel

- Required fields and server-side validation match this PRD.
- The form handles loading, validation, rate-limit, storage-failure, and success states.
- Duplicate submission attempts do not create duplicate lead records.
- Source attribution and contextual service or work interest are preserved.
- A successful submission is stored before notification is attempted.
- Confirmation includes a reference and response-time expectation.
- Keyboard and screen-reader users can complete the full funnel.

### 15.4 Technical Quality

- Production build and lint checks pass.
- Homepage, service, and work metadata are unique and valid.
- Canonical redirects, sitemap, robots rules, and structured data are correct.
- Admin routes remain excluded from indexing.
- Public pages work at mobile, tablet, and desktop widths.
- Focus states, contrast, reduced motion, and error handling pass accessibility review.
- No implementation assumes the obsolete static single-file architecture.

---

## 16. Release Sequence

### Release 1.0

- Approve and apply the refreshed positioning and offer hierarchy.
- Align navigation, homepage, services, work, proof, and CTA language.
- Add evidence classifications to work content.
- Build the structured audit form and stable intake endpoint.
- Add storage, internal notification, receipt, analytics, privacy notice, and operational monitoring.
- Complete accessibility, SEO, responsive, and production-readiness review.

### Next Release

- Add human-reviewed Albanian localization.
- Connect audit submissions to the agency back office.
- Add internal qualification, assignment, audit drafting, and reporting workflows.
- Add verified case studies and performance evidence as engagements mature.

---

## 17. Assumptions

- The current Next.js application and visual system remain the implementation baseline.
- `https://www.limitedlabs.ai` remains the canonical public domain.
- English is the only launched language in version 1.0.
- Albanian localization will be written or reviewed by a fluent human.
- The free systems audit is the primary website conversion.
- The current public email remains available until a verified replacement is configured.
- Storage and notification vendors are implementation choices behind the stable intake interfaces.
- Back-office functionality begins after the website intake boundary is reliable.
