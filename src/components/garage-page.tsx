import { useState, type FormEvent } from "react"
import { Link } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import { Map, MapMarker, MarkerContent } from "@/components/ui/map"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  GarageBanner,
  GarageLogo,
  garageFacts,
} from "@/components/garage-cover"
import { Logo } from "@/components/logo"
import { VerifiedBadge } from "@/components/verified-badge"
import { textFor, type DemoGarage } from "@/data/garages"
import { cn } from "cn"

export function GaragePage({ garage }: { garage: DemoGarage }) {
  const { t, i18n } = useTranslation()
  const locale = i18n.language === "ar" ? "ar" : "en"
  const other = locale === "ar" ? "en" : "ar"
  const area = textFor(garage.area, locale)
  const facts = garageFacts(garage.id)
  const services = garage.services
    .map((item) => textFor(item, locale))
    .join(locale === "ar" ? "، " : ", ")
  const address =
    garage.zone
      ? t("garagePage.address", { zone: garage.zone, area })
      : area === "Doha" || area === "الدوحة"
        ? area
        : t("garagePage.addressPlain", { area })
  const hours = garage.hours
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean)
  const [pickup, setPickup] = useState({ name: "", mobile: "" })
  const [error, setError] = useState("")
  const [done, setDone] = useState(false)

  function onPickup(event: FormEvent) {
    event.preventDefault()
    if (
      pickup.name.trim().length < 2 ||
      pickup.mobile.replace(/\D/g, "").length < 8
    ) {
      setError(t("pickupForm.error"))
      setDone(false)
      return
    }
    setError("")
    setDone(true)
  }

  return (
    <div className="min-h-screen bg-paper text-charcoal">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-paper">
        <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link
            to="/$locale"
            params={{ locale }}
            aria-label={t("nav.home")}
            activeOptions={{ exact: true }}
            className="shrink-0"
          >
            <Logo className="h-9" />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/$locale/garages/$garageId"
              params={{ locale: other, garageId: String(garage.id) }}
              className="px-2 text-sm font-semibold"
            >
              {t("langSwitch")}
            </Link>
            <Link
              to="/$locale"
              params={{ locale }}
              hash="garages"
              activeOptions={{ exact: true }}
              className={cn(
                buttonVariants(),
                "h-11 rounded-full px-5 text-sm font-semibold"
              )}
            >
              {t("garagePage.back")}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-8">
        <div className="relative">
          <GarageBanner name={garage.name} area={area} />
          <div className="absolute start-6 -bottom-8 sm:start-10 sm:-bottom-10">
            <GarageLogo name={garage.name} />
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-3 sm:mt-14">
          {garage.verified ? (
            <VerifiedBadge label={t("garagePage.verified")} size="md" />
          ) : (
            <span className="rounded-full bg-cool px-2.5 py-1 text-xs font-semibold text-mist">
              {t("garagePage.unverified")}
            </span>
          )}
          <p className="text-sm font-medium text-mist">{address}</p>
        </div>
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Fact
            label={t("garagePage.phone")}
            value={facts.phone}
            href={facts.tel}
          />
          <Fact
            label={t("garagePage.whatsapp")}
            value={facts.phone}
            href={facts.whatsapp}
          />
          <Fact
            label={t("garagePage.since")}
            value={String(facts.established)}
          />
          <Fact label={t("garagePage.bays")} value={String(facts.bays)} />
        </ul>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <section className="rounded-3xl bg-white p-6 sm:p-8">
              <h2 className="text-sm font-semibold text-garago">
                {t("garagePage.about")}
              </h2>
              <p className="mt-3 text-lg leading-relaxed">{garage.summary}</p>
              <p className="mt-4 leading-relaxed text-mist">
                {t("garagePage.more", {
                  bays: facts.bays,
                  area,
                  year: facts.established,
                  services,
                })}
              </p>
            </section>

            <section className="rounded-3xl bg-white p-6 sm:p-8">
              <h2 className="text-sm font-semibold text-garago">
                {t("garagePage.visit")}
              </h2>
              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold text-mist">
                    {t("garagePage.payments")}
                  </dt>
                  <dd className="mt-1 font-medium">
                    {t("garagePage.paymentValue")}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-mist">
                    {t("garagePage.languages")}
                  </dt>
                  <dd className="mt-1 font-medium">
                    {t("garagePage.languageValue")}
                  </dd>
                </div>
              </dl>
              <p className="mt-5 leading-relaxed text-mist">
                {t("garagePage.drive")}
              </p>
            </section>

            <section className="rounded-3xl bg-white p-6 sm:p-8">
              <h2 className="text-sm font-semibold text-garago">
                {t("garagePage.hours")}
              </h2>
              <ul className="mt-3 space-y-2">
                {hours.map((line) => (
                  <li key={line} className="text-base font-medium">
                    {line}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl bg-white p-6 sm:p-8">
              <h2 className="text-sm font-semibold text-garago">
                {t("garagePage.services")}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {garage.services.map((item) => (
                  <li
                    key={item.en}
                    className="rounded-full bg-cool px-3 py-1.5 text-sm font-medium"
                  >
                    {textFor(item, locale)}
                  </li>
                ))}
              </ul>
              <h2 className="mt-8 text-sm font-semibold text-garago">
                {t("garagePage.origins")}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {garage.origins.map((item) => (
                  <li
                    key={item.en}
                    className="rounded-full border border-black/10 px-3 py-1.5 text-sm font-medium"
                  >
                    {textFor(item, locale)}
                  </li>
                ))}
              </ul>
            </section>

            {garage.sourceUrl ? (
              <a
                href={garage.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-sm font-semibold text-garago"
              >
                {t("garagePage.listing")}
              </a>
            ) : null}
          </div>

          <div className="space-y-6 lg:sticky lg:top-28">
            <section className="overflow-hidden rounded-3xl bg-white">
              <div className="flex items-center justify-between gap-3 px-5 py-4">
                <h2 className="text-sm font-semibold">
                  {t("garagePage.location")}
                </h2>
                <p className="text-xs font-medium text-mist">
                  {garage.pin
                    ? garage.approximate
                      ? t("map.approximate")
                      : area
                    : t("map.noPin")}
                </p>
              </div>
              {garage.pin ? (
                <div className="h-72">
                  <Map
                    theme="light"
                    center={[garage.pin.lon, garage.pin.lat]}
                    zoom={13.4}
                  >
                    <MapMarker
                      longitude={garage.pin.lon}
                      latitude={garage.pin.lat}
                    >
                      <MarkerContent>
                        <span className="block size-4 rounded-full border-2 border-white bg-garago shadow-md ring-4 ring-garago/30" />
                      </MarkerContent>
                    </MapMarker>
                  </Map>
                </div>
              ) : (
                <p className="px-5 pb-6 text-sm text-mist">{t("map.noPin")}</p>
              )}
            </section>

            <form
              onSubmit={onPickup}
              className="rounded-3xl bg-charcoal p-6 text-white"
            >
              <p className="text-sm font-semibold text-garago">
                {t("pickupForm.request")}
              </p>
              <p className="mt-2 text-sm text-white/70">
                {t("pickupForm.meta", { area, pickup: garage.hours })}
              </p>
              {done ? (
                <p className="mt-5 text-base leading-relaxed text-white/90">
                  {t("pickupForm.sent", {
                    name: garage.name,
                    location: area,
                  })}
                </p>
              ) : (
                <div className="mt-5 grid gap-3">
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
                    className="h-12 rounded-full px-5 font-semibold"
                  >
                    {t("pickupForm.confirm")}
                  </Button>
                </div>
              )}
              {error ? (
                <p
                  className="mt-3 text-sm font-medium text-garago"
                  role="alert"
                >
                  {error}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

function Fact({
  label,
  value,
  href,
}: {
  label: string
  value: string
  href?: string
}) {
  const body = href ? (
    <a href={href} className="mt-1 block font-semibold hover:text-garago">
      {value}
    </a>
  ) : (
    <p className="mt-1 font-semibold">{value}</p>
  )
  return (
    <li className="rounded-2xl bg-white px-4 py-4">
      <p className="text-xs font-medium text-mist">{label}</p>
      {body}
    </li>
  )
}
