import assert from "node:assert/strict";
import test from "node:test";

import { MemoryAuditSubmissionStore } from "../lib/audit/store.ts";
import type { AuditSubmissionInput } from "../lib/audit/types.ts";

const input: AuditSubmissionInput = {
  fullName: "Ada Operator",
  email: "ada@example.com",
  companyName: "Example Business",
  primaryUrl: "https://example.com/",
  additionalUrls: [],
  requestedSystems: ["software"],
  challenge:
    "The current website cannot explain the offer or route qualified customer enquiries.",
  desiredOutcome:
    "Ship a focused conversion path with clean attribution and a maintainable content structure.",
  consent: true,
  source: { landingPath: "/services/software" },
};

test("returns the existing submission for the same idempotency key", async () => {
  const store = new MemoryAuditSubmissionStore();
  const key = `idempotency-${crypto.randomUUID()}`;
  const first = await store.create(input, key);
  const second = await store.create(input, key);
  assert.equal(first.ok, true);
  assert.equal(second.ok, true);
  if (!first.ok || !second.ok) return;
  assert.equal(second.duplicate, true);
  assert.equal(second.submissionId, first.submissionId);
});

test("deduplicates matching normalized business submissions", async () => {
  const store = new MemoryAuditSubmissionStore();
  const uniqueInput = {
    ...input,
    email: `${crypto.randomUUID()}@example.com`,
    companyName: `Example ${crypto.randomUUID()}`,
  };
  const first = await store.create(uniqueInput, `key-${crypto.randomUUID()}`);
  const second = await store.create(
    {
      ...uniqueInput,
      companyName: `  ${uniqueInput.companyName.toUpperCase()}  `,
      primaryUrl: "https://www.example.com",
    },
    `key-${crypto.randomUUID()}`,
  );
  assert.equal(first.ok, true);
  assert.equal(second.ok, true);
  if (!second.ok) return;
  assert.equal(second.duplicate, true);
});

test("limits repeated attempts in the rolling window", async () => {
  const store = new MemoryAuditSubmissionStore();
  const key = `rate-${crypto.randomUUID()}`;
  for (let index = 0; index < 5; index += 1) {
    assert.equal(await store.checkRateLimit(key), true);
  }
  assert.equal(await store.checkRateLimit(key), false);
});
