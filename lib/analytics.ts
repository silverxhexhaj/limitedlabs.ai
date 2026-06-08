export type PlausibleEvent =
  | "audit_form_started"
  | "audit_form_submitted"
  | "audit_form_error"
  | "service_interest_viewed"
  | "service_audit_clicked"
  | "work_viewed"
  | "work_audit_clicked"
  | "email_clicked"
  | "discovery_call_clicked";

declare global {
  interface Window {
    plausible?: (
      event: PlausibleEvent,
      options?: { props?: Record<string, string | number | boolean> },
    ) => void;
  }
}

export function trackEvent(
  event: PlausibleEvent,
  props: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined") return;
  window.plausible?.(event, { props });
}
