"use client";

import React from "react";
import { Globe } from "lucide-react";
import { useTranslation, i18nConfig, LOCALE_LABELS, Locale } from "@/i18n";

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
  className?: string;
}

export function LanguageSwitcher({
  variant = "light",
  className = "",
}: LanguageSwitcherProps) {
  const { locale, setLocale, toggleLocale, t } = useTranslation();

  const isDark = variant === "dark";

  return (
    <div
      role="group"
      aria-label={t.navbar.switchLanguageAria}
      className={`inline-flex items-center rounded-lg p-0.5 border transition-colors ${
        isDark
          ? "bg-emerald-950/60 border-emerald-700/50 text-emerald-100"
          : "bg-neutral-100 border-neutral-200/90 text-neutral-700"
      } ${className}`}
    >
      <button
        type="button"
        onClick={toggleLocale}
        title={t.navbar.switchLanguageAria}
        aria-label={t.navbar.switchLanguageAria}
        className={`pl-2 pr-1 py-1 flex items-center justify-center transition-colors ${
          isDark
            ? "text-[#85f8c4] hover:text-white"
            : "text-[#006948] hover:text-[#005137]"
        }`}
      >
        <Globe className="w-3.5 h-3.5" />
      </button>

      {i18nConfig.locales.map((lang: Locale) => {
        const isActive = locale === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLocale(lang)}
            aria-pressed={isActive}
            title={LOCALE_LABELS[lang].nativeName}
            className={`px-2 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all duration-150 ${
              isActive
                ? isDark
                  ? "bg-[#85f8c4] text-[#002114] shadow-xs"
                  : "bg-[#006948] text-white shadow-xs"
                : isDark
                  ? "text-emerald-200/80 hover:text-white"
                  : "text-neutral-600 hover:text-[#006948]"
            }`}
          >
            {LOCALE_LABELS[lang].short}
          </button>
        );
      })}
    </div>
  );
}
