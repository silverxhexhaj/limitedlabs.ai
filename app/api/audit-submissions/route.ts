import { createHash } from "node:crypto";

import { NextResponse } from "next/server";

import { createAuditSubmissionNotifier } from "@/lib/audit/notifier";
import { createAuditSubmissionStore } from "@/lib/audit/store";
import { verifyTurnstileToken } from "@/lib/audit/turnstile";
import { validateAuditSubmission } from "@/lib/audit/validation";
import type { CreateAuditSubmissionResult } from "@/lib/audit/types";

function response(result: CreateAuditSubmissionResult, status: number) {
  return NextResponse.json(result, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function clientIp(request: Request): string | undefined {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || undefined;
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return response(
      { ok: false, code: "validation", message: "The request body must be valid JSON." },
      400,
    );
  }

  const validation = validateAuditSubmission(payload);
  if (!validation.ok) {
    return response(
      {
        ok: false,
        code: "validation",
        message: validation.message,
        fieldErrors: validation.fieldErrors,
      },
      400,
    );
  }

  const idempotencyKey = request.headers.get("idempotency-key")?.trim();
  if (!idempotencyKey || idempotencyKey.length < 16 || idempotencyKey.length > 200) {
    return response(
      {
        ok: false,
        code: "validation",
        message: "A valid submission key is required.",
      },
      400,
    );
  }

  const ip = clientIp(request);
  const rateLimitKey = createHash("sha256")
    .update(`${ip || "unknown"}:${validation.input.email}`)
    .digest("hex");

  try {
    const store = createAuditSubmissionStore();
    const allowed = await store.checkRateLimit(rateLimitKey);
    if (!allowed) {
      return response(
        {
          ok: false,
          code: "rate-limited",
          message: "Too many attempts. Wait a few minutes and try again.",
        },
        429,
      );
    }

    const human = await verifyTurnstileToken(validation.turnstileToken, ip);
    if (!human) {
      return response(
        {
          ok: false,
          code: "validation",
          message: "Complete the verification and try again.",
          fieldErrors: { turnstile: "Verification is required." },
        },
        400,
      );
    }

    const result = await store.create(validation.input, idempotencyKey);
    if (!result.ok) return response(result, 503);

    if (!result.duplicate) {
      try {
        await createAuditSubmissionNotifier().notifyNewSubmission(
          validation.input,
          result.submissionId,
        );
      } catch {
        console.error("Audit submission stored, but notification delivery failed.", {
          submissionId: result.submissionId,
        });
      }
    }

    return response(result, 201);
  } catch {
    console.error("Audit submission infrastructure failed.");
    return response(
      {
        ok: false,
        code: "storage-failed",
        message: "We could not store your request. Please email hello@limitedlabs.co.",
      },
      503,
    );
  }
}
