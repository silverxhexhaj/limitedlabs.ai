import type { AuditSubmissionInput, AuditSubmissionNotifier } from "./types";

class NoopAuditSubmissionNotifier implements AuditSubmissionNotifier {
  async notifyNewSubmission() {}
}

class ResendAuditSubmissionNotifier implements AuditSubmissionNotifier {
  constructor(
    private readonly apiKey: string,
    private readonly from: string,
    private readonly internalTo: string,
  ) {}

  private async send(payload: Record<string, unknown>) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Audit notification failed.");
  }

  async notifyNewSubmission(input: AuditSubmissionInput, submissionId: string) {
    await this.send({
      from: this.from,
      to: [this.internalTo],
      subject: `New systems audit request: ${input.companyName}`,
      text: [
        `Reference: ${submissionId}`,
        `Name: ${input.fullName}`,
        `Company: ${input.companyName}`,
        `Email: ${input.email}`,
        `Primary URL: ${input.primaryUrl}`,
        `Systems: ${input.requestedSystems.join(", ")}`,
        `Landing path: ${input.source.landingPath}`,
        "",
        "Review the stored submission before responding.",
      ].join("\n"),
    });

    await this.send({
      from: this.from,
      to: [input.email],
      subject: `We received your Limited Labs audit request`,
      text: [
        `Hi ${input.fullName},`,
        "",
        "We received your systems audit request.",
        `Reference: ${submissionId}`,
        "",
        "A human will review the request. Qualified submissions receive a concise written priority review within three business days.",
        "",
        "Limited Labs",
        "Tirana, Albania",
      ].join("\n"),
    });
  }
}

export function createAuditSubmissionNotifier(): AuditSubmissionNotifier {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.AUDIT_EMAIL_FROM;
  const internalTo = process.env.AUDIT_NOTIFICATION_EMAIL || "hello@limitedlabs.co";
  if (apiKey && from) return new ResendAuditSubmissionNotifier(apiKey, from, internalTo);
  return new NoopAuditSubmissionNotifier();
}
