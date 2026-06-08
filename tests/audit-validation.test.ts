import assert from "node:assert/strict";
import test from "node:test";

import { validateAuditSubmission } from "../lib/audit/validation.ts";

function validPayload() {
  return {
    fullName: "Ada Operator",
    email: "ADA@EXAMPLE.COM ",
    companyName: " Example Business ",
    primaryUrl: "https://example.com/",
    additionalUrls: [],
    requestedSystems: ["brand", "marketing"],
    challenge:
      "The website, content, and lead follow-up currently communicate different priorities.",
    desiredOutcome:
      "Create one measurable path from first impression through qualified customer follow-up.",
    timeline: "within-90-days",
    consent: true,
    source: {
      landingPath: "/services/brand?utm_source=linkedin",
      utmSource: "linkedin",
    },
  };
}

test("normalizes a valid audit submission", () => {
  const result = validateAuditSubmission(validPayload());
  assert.equal(result.ok, true);
  if (!result.ok) return;
  assert.equal(result.input.email, "ada@example.com");
  assert.equal(result.input.companyName, "Example Business");
  assert.deepEqual(result.input.requestedSystems, ["brand", "marketing"]);
});

test("rejects unknown request and enum values", () => {
  const result = validateAuditSubmission({
    ...validPayload(),
    requestedSystems: ["brand", "unknown"],
    unexpected: "value",
  });
  assert.equal(result.ok, false);
  if (result.ok) return;
  assert.equal(result.fieldErrors.form, "Unexpected submission data was provided.");
  assert.match(result.fieldErrors.requestedSystems, /invalid/);
});

test("requires complete http URLs and meaningful free text", () => {
  const result = validateAuditSubmission({
    ...validPayload(),
    primaryUrl: "example.com",
    challenge: "Too short",
    desiredOutcome: "Also short",
  });
  assert.equal(result.ok, false);
  if (result.ok) return;
  assert.ok(result.fieldErrors.primaryUrl);
  assert.ok(result.fieldErrors.challenge);
  assert.ok(result.fieldErrors.desiredOutcome);
});
