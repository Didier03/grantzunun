export {
  i18nConfig,
  LOCALE_LABELS,
  LOCALE_COOKIE_NAME,
  LOCALE_STORAGE_KEY,
  isValidLocale,
  type Locale,
} from "./config";
export { es, type Dictionary } from "./dictionaries/es";
export { en } from "./dictionaries/en";
export { I18nProvider, useTranslation, useI18n } from "./I18nProvider";
