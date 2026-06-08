import {
  type AuditSubmissionInput,
  type AuditSubmissionStore,
  type CreateAuditSubmissionResult,
} from "./types";
import { normalizeCompanyName, normalizePrimaryUrl } from "./validation";

type StoredSubmission = {
  id: string;
  idempotencyKey: string;
  input: AuditSubmissionInput;
  createdAt: number;
};

const memoryState = globalThis as typeof globalThis & {
  __limitedLabsAuditSubmissions?: StoredSubmission[];
  __limitedLabsAuditRateLimits?: Map<string, number[]>;
};

export class MemoryAuditSubmissionStore implements AuditSubmissionStore {
  private get submissions() {
    memoryState.__limitedLabsAuditSubmissions ??= [];
    return memoryState.__limitedLabsAuditSubmissions;
  }

  private get rateLimits() {
    memoryState.__limitedLabsAuditRateLimits ??= new Map();
    return memoryState.__limitedLabsAuditRateLimits;
  }

  async checkRateLimit(key: string): Promise<boolean> {
    const now = Date.now();
    const windowStart = now - 10 * 60 * 1000;
    const attempts = (this.rateLimits.get(key) ?? []).filter((item) => item >= windowStart);
    if (attempts.length >= 5) return false;
    attempts.push(now);
    this.rateLimits.set(key, attempts);
    return true;
  }

  async create(
    input: AuditSubmissionInput,
    idempotencyKey: string,
  ): Promise<CreateAuditSubmissionResult> {
    const idempotent = this.submissions.find((item) => item.idempotencyKey === idempotencyKey);
    if (idempotent) {
      return { ok: true, submissionId: idempotent.id, duplicate: true };
    }

    const cutoff = Date.now() - 10 * 60 * 1000;
    const duplicate = this.submissions.find(
      (item) =>
        item.createdAt >= cutoff &&
        item.input.email === input.email &&
        normalizeCompanyName(item.input.companyName) === normalizeCompanyName(input.companyName) &&
        normalizePrimaryUrl(item.input.primaryUrl) === normalizePrimaryUrl(input.primaryUrl),
    );
    if (duplicate) {
      return { ok: true, submissionId: duplicate.id, duplicate: true };
    }

    const id = crypto.randomUUID();
    this.submissions.push({ id, idempotencyKey, input, createdAt: Date.now() });
    return { ok: true, submissionId: id, duplicate: false };
  }
}

class SupabaseAuditSubmissionStore implements AuditSubmissionStore {
  constructor(
    private readonly baseUrl: string,
    private readonly serviceRoleKey: string,
  ) {}

  private async request(path: string, init: RequestInit = {}) {
    return fetch(`${this.baseUrl.replace(/\/$/, "")}/rest/v1${path}`, {
      ...init,
      headers: {
        apikey: this.serviceRoleKey,
        Authorization: `Bearer ${this.serviceRoleKey}`,
        "Content-Type": "application/json",
        ...init.headers,
      },
      cache: "no-store",
    });
  }

  async checkRateLimit(key: string): Promise<boolean> {
    const response = await this.request("/rpc/check_audit_submission_rate_limit", {
      method: "POST",
      body: JSON.stringify({
        p_key: key,
        p_window_seconds: 600,
        p_max_attempts: 5,
      }),
    });
    if (!response.ok) throw new Error("Audit rate-limit storage failed.");
    return response.json() as Promise<boolean>;
  }

  async create(
    input: AuditSubmissionInput,
    idempotencyKey: string,
  ): Promise<CreateAuditSubmissionResult> {
    const idempotencyQuery = new URLSearchParams({
      select: "id",
      idempotency_key: `eq.${idempotencyKey}`,
      limit: "1",
    });
    const existingResponse = await this.request(`/audit_submissions?${idempotencyQuery}`);
    if (!existingResponse.ok) {
      return { ok: false, code: "storage-failed", message: "We could not store the request." };
    }
    const existing = (await existingResponse.json()) as Array<{ id: string }>;
    if (existing[0]) {
      return { ok: true, submissionId: existing[0].id, duplicate: true };
    }

    const duplicateQuery = new URLSearchParams({
      select: "id",
      email: `eq.${input.email}`,
      company_name_normalized: `eq.${normalizeCompanyName(input.companyName)}`,
      primary_url_normalized: `eq.${normalizePrimaryUrl(input.primaryUrl)}`,
      created_at: `gte.${new Date(Date.now() - 10 * 60 * 1000).toISOString()}`,
      order: "created_at.desc",
      limit: "1",
    });
    const duplicateResponse = await this.request(`/audit_submissions?${duplicateQuery}`);
    if (!duplicateResponse.ok) {
      return { ok: false, code: "storage-failed", message: "We could not store the request." };
    }
    const duplicates = (await duplicateResponse.json()) as Array<{ id: string }>;
    if (duplicates[0]) {
      return { ok: true, submissionId: duplicates[0].id, duplicate: true };
    }

    const now = new Date().toISOString();
    const insertResponse = await this.request("/audit_submissions", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({
        idempotency_key: idempotencyKey,
        full_name: input.fullName,
        email: input.email,
        phone: input.phone,
        company_name: input.companyName,
        company_name_normalized: normalizeCompanyName(input.companyName),
        primary_url: input.primaryUrl,
        primary_url_normalized: normalizePrimaryUrl(input.primaryUrl),
        additional_urls: input.additionalUrls,
        industry: input.industry,
        team_size: input.teamSize,
        requested_systems: input.requestedSystems,
        challenge: input.challenge,
        desired_outcome: input.desiredOutcome,
        timeline: input.timeline,
        budget_range: input.budgetRange,
        referral_detail: input.referralDetail,
        consent: true,
        consented_at: now,
        source: input.source,
        status: "new",
      }),
    });

    if (insertResponse.status === 409) {
      const retryResponse = await this.request(`/audit_submissions?${idempotencyQuery}`);
      const retryRows = retryResponse.ok
        ? ((await retryResponse.json()) as Array<{ id: string }>)
        : [];
      if (retryRows[0]) {
        return { ok: true, submissionId: retryRows[0].id, duplicate: true };
      }
    }

    if (!insertResponse.ok) {
      return { ok: false, code: "storage-failed", message: "We could not store the request." };
    }

    const inserted = (await insertResponse.json()) as Array<{ id: string }>;
    if (!inserted[0]?.id) {
      return { ok: false, code: "storage-failed", message: "We could not confirm the request." };
    }
    return { ok: true, submissionId: inserted[0].id, duplicate: false };
  }
}

export function createAuditSubmissionStore(): AuditSubmissionStore {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) return new SupabaseAuditSubmissionStore(url, key);
  if (process.env.NODE_ENV === "production") {
    throw new Error("Audit storage is not configured.");
  }
  return new MemoryAuditSubmissionStore();
}
