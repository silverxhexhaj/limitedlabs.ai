"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import AdminSidebar from "./AdminSidebar";

type AdminMobileNavigation = {
  openNavigation: () => void;
};

const AdminMobileNavigationContext = createContext<AdminMobileNavigation | null>(null);

export function useAdminMobileNavigation() {
  const value = useContext(AdminMobileNavigationContext);
  if (!value) {
    throw new Error("useAdminMobileNavigation must be used within AdminShell");
  }
  return value;
}

type AdminShellProps = {
  adminEmail: string;
  children: ReactNode;
};

export default function AdminShell({ adminEmail, children }: AdminShellProps) {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!navigationOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawerRef.current?.querySelector<HTMLElement>("button")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setNavigationOpen(false);
        return;
      }
      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("hidden"));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [navigationOpen]);

  const navigation = useMemo(
    () => ({
      openNavigation: () => {
        previousFocusRef.current =
          document.activeElement instanceof HTMLElement ? document.activeElement : null;
        setNavigationOpen(true);
      },
    }),
    [],
  );

  return (
    <AdminMobileNavigationContext.Provider value={navigation}>
      <div className="flex min-h-dvh">
        <AdminSidebar
          adminEmail={adminEmail}
          className="sticky top-0 hidden h-dvh md:flex"
        />

        {navigationOpen ? (
          <div className="fixed inset-0 z-50 md:hidden">
            <button
              type="button"
              aria-label="Close admin navigation"
              className="absolute inset-0 bg-black/65 backdrop-blur-sm"
              onClick={() => setNavigationOpen(false)}
            />
            <div
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Admin navigation"
              className="relative h-dvh w-[min(86vw,320px)] max-w-full shadow-2xl"
            >
              <AdminSidebar
                adminEmail={adminEmail}
                className="h-dvh w-full"
                onClose={() => setNavigationOpen(false)}
              />
            </div>
          </div>
        ) : null}

        <div className="flex min-h-dvh min-w-0 flex-1 flex-col">{children}</div>
      </div>
    </AdminMobileNavigationContext.Provider>
  );
}
