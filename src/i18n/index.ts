import { createInstance, type i18n as I18nInstance } from "i18next"
import { initReactI18next } from "react-i18next"
import { ar, en } from "./dictionaries"

export const locales = ["en", "ar"] as const
export type Locale = (typeof locales)[number]

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "ar"
}

export function direction(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr"
}

export function createI18n(locale: Locale): I18nInstance {
  const instance = createInstance()
  instance.use(initReactI18next)
  instance.init({
    lng: locale,
    fallbackLng: "en",
    supportedLngs: [...locales],
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    interpolation: { escapeValue: false },
    initAsync: false,
    returnNull: false,
    react: { useSuspense: false },
  })
  return instance
}

export function copyFor(locale: string) {
  return locale === "ar" ? ar : en
}
