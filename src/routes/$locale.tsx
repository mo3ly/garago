import { useEffect, useMemo } from "react"
import { createFileRoute, notFound, Outlet } from "@tanstack/react-router"
import { I18nextProvider } from "react-i18next"
import { copyFor, createI18n, direction, isLocale } from "@/i18n"

export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale)) {
      throw notFound()
    }
  },
  head: ({ params }) => {
    const copy = copyFor(params.locale)
    const other = params.locale === "ar" ? "en" : "ar"
    return {
      meta: [
        { title: copy.metaTitle },
        { name: "description", content: copy.metaDescription },
        { property: "og:title", content: copy.metaTitle },
        { property: "og:description", content: copy.metaDescription },
        {
          property: "og:locale",
          content: params.locale === "ar" ? "ar_QA" : "en_QA",
        },
      ],
      links: [
        { rel: "alternate", hrefLang: "en", href: "/en" },
        { rel: "alternate", hrefLang: "ar", href: "/ar" },
        { rel: "alternate", hrefLang: other, href: `/${other}` },
      ],
    }
  },
  component: LocaleLayout,
})

function LocaleLayout() {
  const { locale } = Route.useParams()
  const language = locale === "ar" ? "ar" : "en"
  const dir = direction(language)
  const i18n = useMemo(() => createI18n(language), [language])

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = dir
  }, [language, dir])

  return (
    <I18nextProvider i18n={i18n}>
      <div
        lang={language}
        dir={dir}
        className={language === "ar" ? "font-ar" : undefined}
      >
        <Outlet />
      </div>
    </I18nextProvider>
  )
}
