import { useEffect, useId, useState, type FormEvent } from "react"
import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import { Button, buttonVariants } from "@/components/ui/button"
import { Logo, LogoMark } from "@/components/logo"
import {
  ArrowIcon,
  CalendarIcon,
  CarIcon,
  PinIcon,
  LinkIcon,
  ShieldIcon,
} from "@/components/brand-icons"
import { GarageExplorer } from "@/components/garage-explorer"
import { garages, textFor } from "@/data/garages"
import { cn } from "cn"

const nav = [
  { href: "#how", key: "how" },
  { href: "#services", key: "services" },
  { href: "#garages", key: "garages" },
  { href: "#partners", key: "partners" },
] as const

const pillarIcons = [CarIcon, PinIcon, CalendarIcon, ShieldIcon, LinkIcon]
const pillarKeys = ["car", "nearby", "book", "trusted", "pickup"] as const
const districtKeys = [
  "industrial",
  "abuHamour",
  "ainKhaled",
  "alBidda",
  "alAziziya",
] as const

const everywhere = new Set([
  "doha",
  "qatar",
  "doha, qatar",
  "doha qatar",
  "الدوحة",
  "قطر",
  "الدوحة، قطر",
  "الدوحة, قطر",
  "الدوحه",
])

type Step = { n: string; title: string; body: string }
type WorkItem = { title: string; body: string }

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ")
}

export function LandingPage() {
  const { t, i18n } = useTranslation()
  const locale = i18n.language === "ar" ? "ar" : "en"
  const defaultLocation = t("hero.defaultLocation")
  const steps = t("steps", { returnObjects: true }) as Step[]
  const work = t("workItems", { returnObjects: true }) as WorkItem[]
  const [query, setQuery] = useState(defaultLocation)
  const [submitted, setSubmitted] = useState(defaultLocation)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)
  const [shownCount, setShownCount] = useState(garages.length)
  const [pickup, setPickup] = useState({ name: "", mobile: "" })
  const [pickupError, setPickupError] = useState("")
  const [pickupDone, setPickupDone] = useState(false)
  const [partner, setPartner] = useState({ garage: "", area: "", email: "" })
  const [partnerError, setPartnerError] = useState("")
  const [partnerDone, setPartnerDone] = useState(false)
  const menuId = useId()

  const place =
    !normalize(submitted) || everywhere.has(normalize(submitted))
      ? t("places.doha")
      : submitted.trim()
  const shownLocation = query.trim() || defaultLocation

  useEffect(() => {
    if (!menuOpen) return
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

  function search(next: string) {
    const value = next.trim() || defaultLocation
    setQuery(value)
    setSubmitted(value)
    setSelected(null)
    setPickupDone(false)
    setPickupError("")
    setMenuOpen(false)
    document.getElementById("garages")?.scrollIntoView({ behavior: "smooth" })
  }

  function onSearch(event: FormEvent) {
    event.preventDefault()
    search(query)
  }

  function onPickup(event: FormEvent) {
    event.preventDefault()
    if (
      pickup.name.trim().length < 2 ||
      pickup.mobile.replace(/\D/g, "").length < 8
    ) {
      setPickupError(t("pickupForm.error"))
      setPickupDone(false)
      return
    }
    setPickupError("")
    setPickupDone(true)
  }

  function onPartner(event: FormEvent) {
    event.preventDefault()
    if (
      partner.garage.trim().length < 2 ||
      partner.area.trim().length < 2 ||
      !partner.email.includes("@")
    ) {
      setPartnerError(t("partners.error"))
      setPartnerDone(false)
      return
    }
    setPartnerError("")
    setPartnerDone(true)
  }

  const selectedGarage = garages.find((garage) => garage.id === selected)

  return (
    <div className="bg-paper text-charcoal">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-paper">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" aria-label={t("nav.home")} className="shrink-0">
            <Logo className="h-9" />
          </a>
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label={t("nav.primary")}
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-charcoal/75 transition-colors hover:text-charcoal"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/$locale"
              params={{ locale: locale === "ar" ? "en" : "ar" }}
              hrefLang={locale === "ar" ? "en" : "ar"}
              className="px-2 text-sm font-semibold"
            >
              {t("langSwitch")}
            </Link>
            <a
              href="#find"
              className={cn(
                buttonVariants(),
                "hidden h-11 rounded-full px-5 text-sm font-semibold sm:inline-flex"
              )}
            >
              {t("nav.find")}
            </a>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-black/10 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls={menuId}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">
                {menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              </span>
              <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
                <span
                  className={cn(
                    "h-0.5 w-full bg-charcoal transition",
                    menuOpen && "translate-y-1 rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-full bg-charcoal transition",
                    menuOpen && "-translate-y-1 -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
        {menuOpen ? (
          <nav
            id={menuId}
            className="border-t border-black/5 px-5 py-4 lg:hidden"
            aria-label={t("nav.mobile")}
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-base font-medium hover:bg-cool"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
              <a
                href="#find"
                className={cn(
                  buttonVariants(),
                  "mt-2 h-12 rounded-full text-base font-semibold"
                )}
                onClick={() => setMenuOpen(false)}
              >
                {t("nav.find")}
              </a>
            </div>
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="text-sm font-semibold text-garago">
              {t("hero.tagline")}
            </p>
            <h1 className="mt-4 max-w-xl text-[2.7rem] leading-[1.02] font-extrabold tracking-[-0.045em] text-balance sm:text-6xl">
              {t("hero.title1")}
              <span className="block">{t("hero.title2")}</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-mist">
              {t("hero.body")}
            </p>
            <form id="find" onSubmit={onSearch} className="mt-8 max-w-xl">
              <label
                htmlFor="location"
                className="mb-2 block text-sm font-medium"
              >
                {t("hero.location")}
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex h-14 min-w-0 flex-1 items-center gap-3 rounded-full border border-black/10 bg-white px-4 shadow-[0_10px_30px_-18px_rgba(17,19,24,0.45)]">
                  <PinIcon className="size-5 shrink-0 text-garago" />
                  <input
                    id="location"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={t("hero.placeholder")}
                    autoComplete="street-address"
                    className="w-full bg-transparent text-base font-medium outline-none placeholder:text-mist"
                  />
                </div>
                <Button
                  type="submit"
                  className="h-14 rounded-full px-6 text-base font-semibold"
                >
                  {t("nav.find")}
                  <ArrowIcon className="size-4 rtl:-scale-x-100" />
                </Button>
              </div>
            </form>
            <div className="mt-4 flex flex-wrap gap-2">
              {districtKeys.map((key) => {
                const district = t(`districts.${key}`)
                const active = normalize(submitted) === normalize(district)
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => search(district)}
                    className={cn(
                      "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                      active
                        ? "bg-garago text-white"
                        : "bg-cool text-charcoal hover:bg-charcoal hover:text-white"
                    )}
                    aria-pressed={active}
                  >
                    {district}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-charcoal px-6 py-10 sm:px-10">
            <div
              className="pointer-events-none absolute -top-20 -right-16 size-64 rounded-full bg-garago"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-16 size-56 rounded-full bg-white/5"
              aria-hidden="true"
            />
            <Phone location={shownLocation} />
            <p className="relative mt-6 text-center text-sm font-medium text-white/70">
              {t("hero.tagline")}
            </p>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 bg-cool">
          <h2 className="sr-only">{t("pillarsHeading")}</h2>
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-8 px-5 py-10 sm:grid-cols-3 sm:px-8 lg:grid-cols-5">
            {pillarKeys.map((key, index) => {
              const Icon = pillarIcons[index]
              return (
                <li
                  key={key}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <Icon className="size-8 text-garago" />
                  <span className="text-sm font-medium text-charcoal">
                    {t(`pillars.${key}`)}
                  </span>
                </li>
              )
            })}
          </ul>
        </section>

        <section
          id="how"
          className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28"
        >
          <p className="text-sm font-semibold tracking-wide text-garago">
            {t("how.kicker")}
          </p>
          <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-[-0.04em] text-balance sm:text-5xl">
            {t("how.title")}
          </h2>
          <ol className="mt-14 grid gap-12 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.n}>
                <p className="text-sm font-bold tracking-[0.18em] text-garago">
                  {step.n}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs leading-relaxed text-mist">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-black/5">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <h2 className="max-w-lg text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              {t("workHeading")}
            </h2>
            <ul className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {work.map((item) => (
                <li key={item.title} className="border-t-2 border-garago pt-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-mist">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="garages" className="scroll-mt-24 bg-cool">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold text-garago">
                  {t("garages.kicker")}
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                  {t("garages.around", { place })}
                </h2>
              </div>
              <p className="text-sm font-medium text-mist" aria-live="polite">
                {shownCount === 0
                  ? t("garages.none")
                  : t("garagesCount", { count: shownCount })}
              </p>
            </div>

            {selectedGarage ? (
              <form
                onSubmit={onPickup}
                className="mt-8 rounded-3xl bg-charcoal p-6 text-white sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-garago">
                      {t("pickupForm.request")}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold">
                      {selectedGarage.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/70">
                      {t("pickupForm.meta", {
                        area: textFor(selectedGarage.area, locale),
                        pickup: selectedGarage.hours,
                      })}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-sm font-medium text-white/70 underline-offset-4 hover:underline"
                    onClick={() => {
                      setSelected(null)
                      setPickupDone(false)
                      setPickupError("")
                    }}
                  >
                    {t("pickupForm.change")}
                  </button>
                </div>
                {pickupDone ? (
                  <p className="mt-6 max-w-lg text-base leading-relaxed text-white/90">
                    {t("pickupForm.sent", {
                      name: selectedGarage.name,
                      location: shownLocation,
                    })}
                  </p>
                ) : (
                  <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium text-white/60">
                        {t("pickupForm.name")}
                      </span>
                      <input
                        value={pickup.name}
                        onChange={(event) =>
                          setPickup((current) => ({
                            ...current,
                            name: event.target.value,
                          }))
                        }
                        autoComplete="name"
                        className="h-12 w-full rounded-2xl bg-white px-4 text-base text-charcoal outline-none"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-medium text-white/60">
                        {t("pickupForm.mobile")}
                      </span>
                      <input
                        value={pickup.mobile}
                        onChange={(event) =>
                          setPickup((current) => ({
                            ...current,
                            mobile: event.target.value,
                          }))
                        }
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+974"
                        className="h-12 w-full rounded-2xl bg-white px-4 text-base text-charcoal outline-none placeholder:text-mist"
                      />
                    </label>
                    <Button
                      type="submit"
                      className="h-12 self-end rounded-full px-5 font-semibold sm:mb-0"
                    >
                      {t("pickupForm.confirm")}
                    </Button>
                  </div>
                )}
                {pickupError ? (
                  <p
                    className="mt-3 text-sm font-medium text-garago"
                    role="alert"
                  >
                    {pickupError}
                  </p>
                ) : null}
              </form>
            ) : null}

            <GarageExplorer
              query={submitted}
              selectedId={selected}
              onCount={setShownCount}
              onSelect={(id) => {
                setSelected(id)
                setPickupDone(false)
                setPickupError("")
              }}
              onReset={() => search(defaultLocation)}
            />
          </div>
        </section>

        <section className="bg-charcoal text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-garago">
                {t("pickup.kicker")}
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-balance sm:text-5xl">
                {t("pickup.title")}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
                {t("pickup.body")}
              </p>
            </div>
            <LinkScene />
          </div>
        </section>

        <section id="partners" className="scroll-mt-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-garago">
                {t("partners.kicker")}
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-balance">
                {t("partners.title")}
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-mist">
                {t("partners.body")}
              </p>
            </div>
            <form
              onSubmit={onPartner}
              className="rounded-3xl bg-cool p-6 sm:p-8"
            >
              {partnerDone ? (
                <p className="text-lg font-semibold">
                  {t("partners.thanks", {
                    email: partner.email,
                    garage: partner.garage,
                  })}
                </p>
              ) : (
                <div className="grid gap-4">
                  <Field
                    label={t("partners.garageName")}
                    value={partner.garage}
                    onChange={(value) =>
                      setPartner((current) => ({ ...current, garage: value }))
                    }
                    autoComplete="organization"
                  />
                  <Field
                    label={t("partners.area")}
                    value={partner.area}
                    onChange={(value) =>
                      setPartner((current) => ({ ...current, area: value }))
                    }
                    placeholder={t("partners.areaPlaceholder")}
                  />
                  <Field
                    label={t("partners.email")}
                    value={partner.email}
                    onChange={(value) =>
                      setPartner((current) => ({ ...current, email: value }))
                    }
                    type="email"
                    autoComplete="email"
                    placeholder={t("partners.emailPlaceholder")}
                  />
                  <Button
                    type="submit"
                    className="mt-1 h-12 rounded-full px-6 text-base font-semibold"
                  >
                    {t("partners.submit")}
                  </Button>
                </div>
              )}
              {partnerError ? (
                <p
                  className="mt-3 text-sm font-medium text-garago"
                  role="alert"
                >
                  {partnerError}
                </p>
              ) : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-charcoal text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Logo tone="onDark" className="h-11" />
            <p className="mt-4 text-sm font-medium text-white/80">
              {t("hero.tagline")}
            </p>
            <p className="mt-1 text-sm text-white/50">{t("footerLine")}</p>
          </div>
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label={t("nav.footer")}
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-white"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  placeholder?: string
  autoComplete?: string
}) {
  const id = useId()
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-2xl border border-transparent bg-white px-4 text-base outline-none focus:border-garago"
      />
    </label>
  )
}

function Phone({ location }: { location: string }) {
  const { t } = useTranslation()
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="rounded-[2.2rem] bg-black p-2 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.65)]">
        <div className="overflow-hidden rounded-[1.8rem] bg-white text-charcoal">
          <div className="relative flex items-center justify-between px-5 pt-3 text-[11px] font-semibold">
            <span>9:41</span>
            <span className="absolute top-0 left-1/2 h-4 w-16 -translate-x-1/2 rounded-b-xl bg-black" />
            <span className="flex items-end gap-0.5" aria-hidden="true">
              <span className="h-1 w-0.5 rounded-full bg-charcoal" />
              <span className="h-1.5 w-0.5 rounded-full bg-charcoal" />
              <span className="h-2 w-0.5 rounded-full bg-charcoal" />
              <span className="h-2.5 w-0.5 rounded-full bg-charcoal" />
            </span>
          </div>
          <div className="flex items-center justify-center px-5 pt-3">
            <Logo className="h-7" />
          </div>
          <p className="px-6 pt-4 text-center text-[15px] leading-snug font-semibold">
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
          </p>
          <div className="mx-4 mt-4 flex items-center gap-2 rounded-full border border-black/10 px-3 py-2">
            <PinIcon className="size-3.5 shrink-0 text-mist" />
            <span className="min-w-0 truncate text-start text-xs">
              <span className="block text-[10px] text-mist">
                {t("hero.location")}
              </span>
              <span className="block font-medium">{location}</span>
            </span>
          </div>
          <div className="relative mx-4 mt-3 h-36 overflow-hidden rounded-2xl">
            <CityScene />
          </div>
          <div className="px-4 pt-3 pb-4">
            <div className="flex h-11 items-center justify-center gap-2 rounded-full bg-garago text-sm font-semibold text-white">
              {t("nav.find")}
              <ArrowIcon className="size-4 rtl:-scale-x-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CityScene() {
  return (
    <svg
      viewBox="0 0 280 150"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="280" height="150" fill="#E6E5E9" />
      <circle cx="214" cy="72" r="54" fill="#FF6A00" />
      <g fill="#111318">
        <rect x="14" y="52" width="12" height="70" />
        <rect x="30" y="30" width="10" height="92" />
        <rect x="44" y="58" width="18" height="64" />
        <rect x="66" y="24" width="9" height="98" />
        <rect x="80" y="46" width="16" height="76" />
        <rect x="100" y="64" width="22" height="58" />
        <rect x="126" y="40" width="11" height="82" />
      </g>
      <rect y="122" width="280" height="28" fill="#D4D3D8" />
      <g transform="translate(58,96)">
        <path
          fill="#16181d"
          d="M10 20c6-8 14-14 26-14h42c9 0 15 4 20 11l7 3h16c5 0 8 3 8 7v6H8c-2 0-4-2-4-4v-3c0-3 2-5 6-6Z"
        />
        <path fill="#2c2f36" d="M38 10h26l5 9H34Z" />
        <circle
          cx="34"
          cy="34"
          r="7"
          fill="#111318"
          stroke="#E6E5E9"
          strokeWidth="3"
        />
        <circle
          cx="108"
          cy="34"
          r="7"
          fill="#111318"
          stroke="#E6E5E9"
          strokeWidth="3"
        />
      </g>
    </svg>
  )
}

function LinkScene() {
  return (
    <div className="relative flex items-center justify-center gap-4 sm:gap-8">
      <span className="grid size-24 place-items-center rounded-3xl bg-white text-charcoal sm:size-28">
        <PinIcon className="size-10 text-garago" />
      </span>
      <span
        className="h-1 w-16 rounded-full bg-garago sm:w-24"
        aria-hidden="true"
      />
      <span className="grid size-24 place-items-center rounded-3xl bg-white sm:size-28">
        <LogoMark className="h-12 w-auto text-garago" />
      </span>
    </div>
  )
}
