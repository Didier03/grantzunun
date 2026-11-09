export const i18nConfig = {
  defaultLocale: "es",
  locales: ["es", "en"],
} as const;

export type Locale = (typeof i18nConfig)["locales"][number];

export const LOCALE_LABELS: Record<Locale, { short: string; name: string; nativeName: string }> = {
  es: {
    short: "ES",
    name: "Spanish",
    nativeName: "Español",
  },
  en: {
    short: "EN",
    name: "English",
    nativeName: "English",
  },
};

export const LOCALE_COOKIE_NAME = "NEXT_LOCALE";
export const LOCALE_STORAGE_KEY = "grantzunun_locale";

export function isValidLocale(locale: unknown): locale is Locale {
  return typeof locale === "string" && i18nConfig.locales.includes(locale as Locale);
}
