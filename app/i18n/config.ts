export type Locale = "en" | "sq";

export const LOCALES: readonly Locale[] = ["en", "sq"];

export const DEFAULT_LOCALE: Locale = "en";

/** localStorage key for the visitor's language choice (mirrors the theme key). */
export const LANG_STORAGE_KEY = "limitedlabs-lang";

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "sq";
}
