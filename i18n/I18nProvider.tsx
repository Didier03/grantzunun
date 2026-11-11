"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import {
  Locale,
  i18nConfig,
  isValidLocale,
  LOCALE_COOKIE_NAME,
  LOCALE_STORAGE_KEY,
} from "./config";
import { es, Dictionary } from "./dictionaries/es";
import { en } from "./dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = {
  es,
  en,
};

interface I18nContextValue {
  locale: Locale;
  setLocale: (newLocale: Locale) => void;
  toggleLocale: () => void;
  t: Dictionary;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function getCookieLocale(): Locale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${LOCALE_COOKIE_NAME}=([^;]*)`)
  );
  const val = match ? decodeURIComponent(match[1]) : null;
  return isValidLocale(val) ? val : null;
}

function persistLocale(locale: Locale) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Ignore storage errors in restricted environments
  }
  document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  document.documentElement.lang = locale;
}

export function I18nProvider({
  children,
  initialLocale = i18nConfig.defaultLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    // Resolve saved preference or browser preference on mount
    let resolved: Locale | null = null;
    try {
      const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      if (isValidLocale(stored)) {
        resolved = stored;
      }
    } catch {
      // Ignore localStorage read errors
    }

    if (!resolved) {
      resolved = getCookieLocale();
    }

    if (!resolved && typeof navigator !== "undefined") {
      const browserLang = navigator.language?.slice(0, 2).toLowerCase();
      if (isValidLocale(browserLang)) {
        resolved = browserLang;
      }
    }

    const finalLocale = resolved || i18nConfig.defaultLocale;
    if (finalLocale !== locale) {
      setLocaleState(finalLocale);
    }
    persistLocale(finalLocale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
      document.title = dictionaries[locale].meta.title;
    }
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    persistLocale(newLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next: Locale = prev === "es" ? "en" : "es";
      persistLocale(next);
      return next;
    });
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: dictionaries[locale],
    }),
    [locale, setLocale, toggleLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
}

export const useI18n = useTranslation;
