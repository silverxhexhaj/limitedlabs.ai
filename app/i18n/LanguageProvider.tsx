"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import { DEFAULT_LOCALE, LANG_STORAGE_KEY, isLocale, type Locale } from "./config";
import { messages, type Messages } from "./messages";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Active dictionary for the current locale. */
  t: Messages;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const LANGUAGE_CHANGE_EVENT = "limitedlabs-language-change";
let currentLocale: Locale = DEFAULT_LOCALE;

function getStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (isLocale(stored)) currentLocale = stored;
  } catch {
    // Use the in-memory choice when storage is unavailable.
  }
  return currentLocale;
}

function subscribeToLocale(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === LANG_STORAGE_KEY) onStoreChange();
  };
  window.addEventListener("storage", handleStorage);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getStoredLocale,
    () => DEFAULT_LOCALE,
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    currentLocale = next;
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      // The choice still applies for the current session.
    }
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: messages[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
