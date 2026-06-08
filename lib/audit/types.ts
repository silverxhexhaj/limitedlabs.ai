export const REQUESTED_SYSTEMS = [
  "brand",
  "marketing",
  "software",
  "ai-automation",
  "not-sure",
] as const;

export type RequestedSystem = (typeof REQUESTED_SYSTEMS)[number];

export const AUDIT_TIMELINES = [
  "immediately",
  "within-30-days",
  "within-90-days",
  "exploring",
] as const;

export type AuditTimeline = (typeof AUDIT_TIMELINES)[number];

export type LeadStatus =
  | "new"
  | "reviewing"
  | "qualified"
  | "audit-prepared"
  | "call-booked"
  | "closed"
  | "archived";

export type AuditSource = {
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

export type AuditSubmissionInput = {
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
  source: AuditSource;
};

export type AuditSubmissionRequest = AuditSubmissionInput & {
  turnstileToken?: string;
};

export type AuditSubmission = AuditSubmissionInput & {
  id: string;
  idempotencyKey: string;
  consentedAt: string;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
};

export type CreateAuditSubmissionResult =
  | { ok: true; submissionId: string; duplicate: boolean }
  | {
      ok: false;
      code: "validation" | "rate-limited" | "storage-failed";
      message: string;
      fieldErrors?: Record<string, string>;
    };

export interface AuditSubmissionStore {
  checkRateLimit(key: string): Promise<boolean>;
  create(
    input: AuditSubmissionInput,
    idempotencyKey: string,
  ): Promise<CreateAuditSubmissionResult>;
}

export interface AuditSubmissionNotifier {
  notifyNewSubmission(submission: AuditSubmissionInput, submissionId: string): Promise<void>;
}
