import { useEffect, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  useMap,
} from "@/components/ui/map"
import { buttonVariants } from "@/components/ui/button"
import {
  garages,
  originOptions,
  serviceOptions,
  textFor,
  type DemoGarage,
} from "@/data/garages"
import { cn } from "cn"

type GarageExplorerProps = {
  query: string
  selectedId: number | null
  onSelect: (id: number | null) => void
  onReset: () => void
  onCount: (count: number) => void
}

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ")
}

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

function matchesQuery(garage: DemoGarage, raw: string) {
  const query = normalize(raw)
  if (!query || everywhere.has(query)) return true
  return garage.search.includes(query)
}

export function GarageExplorer({
  query,
  selectedId,
  onSelect,
  onReset,
  onCount,
}: GarageExplorerProps) {
  const { t, i18n } = useTranslation()
  const locale = i18n.language === "ar" ? "ar" : "en"
  const [service, setService] = useState<string | null>(null)
  const [origin, setOrigin] = useState<string | null>(null)

  const results = useMemo(
    () =>
      garages.filter((garage) => {
        if (!matchesQuery(garage, query)) return false
        if (service && !garage.services.some((item) => item.en === service)) {
          return false
        }
        if (origin && !garage.origins.some((item) => item.en === origin)) {
          return false
        }
        return true
      }),
    [origin, query, service]
  )

  const filtersActive = Boolean(service || origin)

  useEffect(() => {
    onCount(results.length)
  }, [onCount, results.length])

  useEffect(() => {
    if (
      selectedId != null &&
      !results.some((garage) => garage.id === selectedId)
    ) {
      onSelect(null)
    }
  }, [onSelect, results, selectedId])

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-4">
        <FilterRow
          label={t("map.service")}
          value={service}
          options={serviceOptions}
          locale={locale}
          allLabel={t("map.all")}
          onChange={setService}
        />
        <FilterRow
          label={t("map.origin")}
          value={origin}
          options={originOptions}
          locale={locale}
          allLabel={t("map.all")}
          onChange={setOrigin}
        />
        {filtersActive ? (
          <button
            type="button"
            className="w-fit text-sm font-semibold text-garago"
            onClick={() => {
              setService(null)
              setOrigin(null)
            }}
          >
            {t("map.clear")}
          </button>
        ) : null}
      </div>

      {results.length === 0 ? (
        <div className="mt-6 rounded-3xl bg-white px-6 py-12 text-center">
          <p className="text-lg font-semibold">
            {t("garages.emptyTitle", {
              area: query.trim() || t("places.doha"),
            })}
          </p>
          <p className="mt-2 text-mist">{t("garages.emptyBody")}</p>
          <button
            type="button"
            className="mt-5 text-sm font-semibold text-garago"
            onClick={() => {
              setService(null)
              setOrigin(null)
              onReset()
            }}
          >
            {t("garages.showDoha")}
          </button>
        </div>
      ) : (
        <div className="mt-6 grid items-start gap-4 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
          <ul className="order-2 max-h-[32rem] space-y-3 overflow-y-auto pe-1 lg:order-1">
            {results.map((garage) => {
              const active = selectedId === garage.id
              const area = textFor(garage.area, locale)
              return (
                <li key={garage.id}>
                  <article
                    className={cn(
                      "rounded-3xl bg-white p-4",
                      active && "ring-2 ring-garago"
                    )}
                  >
                    <button
                      type="button"
                      className="w-full text-start"
                      onClick={() => onSelect(garage.id)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-garago">
                            {area}
                          </p>
                          <h3 className="mt-1 text-lg font-semibold">
                            {garage.name}
                          </h3>
                        </div>
                        {garage.zone ? (
                          <p className="shrink-0 rounded-full bg-cool px-3 py-1 text-xs font-semibold">
                            {t("map.zone", { zone: garage.zone })}
                          </p>
                        ) : null}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-mist">
                        {garage.summary}
                      </p>
                      <p className="mt-2 text-xs font-medium text-charcoal/70">
                        {garage.pin
                          ? garage.approximate
                            ? t("map.approximate")
                            : garage.hours
                          : t("map.noPin")}
                      </p>
                    </button>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {garage.services.map((item) => (
                        <li
                          key={item.en}
                          className="rounded-full bg-cool px-3 py-1 text-xs font-medium"
                        >
                          {textFor(item, locale)}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className={cn(
                        buttonVariants(),
                        "mt-4 h-10 rounded-full px-4 text-sm font-semibold"
                      )}
                      onClick={() => onSelect(garage.id)}
                    >
                      {t("pickupForm.request")}
                    </button>
                  </article>
                </li>
              )
            })}
          </ul>

          <div className="order-1 overflow-hidden rounded-3xl bg-white lg:sticky lg:top-24 lg:order-2">
            <div className="flex items-center justify-between gap-3 border-b border-black/5 px-4 py-3">
              <p className="text-sm font-semibold">{t("map.demo")}</p>
              <p className="hidden text-xs font-medium text-mist sm:block">
                © OpenStreetMap · © CARTO
              </p>
            </div>
            <div className="h-[28rem] lg:h-[36rem]">
              <Map theme="light" center={[51.47, 25.25]} zoom={10.6}>
                <MapCamera garages={results} selectedId={selectedId} />
                {results.map((garage) =>
                  garage.pin ? (
                    <MapMarker
                      key={garage.id}
                      longitude={garage.pin.lon}
                      latitude={garage.pin.lat}
                      onClick={() => onSelect(garage.id)}
                    >
                      <MarkerContent>
                        <span
                          className={cn(
                            "block size-3.5 rounded-full border-2 border-white bg-garago shadow-md",
                            selectedId === garage.id &&
                              "size-5 ring-4 ring-garago/35"
                          )}
                        />
                      </MarkerContent>
                      <MarkerPopup className="w-60 border-0 bg-white p-0 shadow-xl">
                        <div className="space-y-1 text-start">
                          <p className="text-xs font-semibold text-garago">
                            {textFor(garage.area, locale)}
                          </p>
                          <p className="font-semibold">{garage.name}</p>
                          <p className="text-xs leading-relaxed text-mist">
                            {garage.summary}
                          </p>
                          {garage.approximate ? (
                            <p className="text-[11px] font-medium text-mist">
                              {t("map.approximate")}
                            </p>
                          ) : null}
                        </div>
                      </MarkerPopup>
                    </MapMarker>
                  ) : null
                )}
                <MapControls showCompass={false} />
              </Map>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function FilterRow({
  label,
  value,
  options,
  locale,
  allLabel,
  onChange,
}: {
  label: string
  value: string | null
  options: Array<{ en: string; ar: string }>
  locale: "en" | "ar"
  allLabel: string
  onChange: (value: string | null) => void
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <p className="w-20 shrink-0 text-sm font-semibold">{label}</p>
      <div className="flex gap-2 overflow-x-auto pb-1">
        <FilterChip
          active={value == null}
          onClick={() => onChange(null)}
          label={allLabel}
        />
        {options.map((option) => (
          <FilterChip
            key={option.en}
            active={value === option.en}
            onClick={() => onChange(value === option.en ? null : option.en)}
            label={textFor(option, locale)}
          />
        ))}
      </div>
    </div>
  )
}

function FilterChip({
  active,
  label,
  onClick,
}: {
  active: boolean
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
        active
          ? "bg-garago text-white"
          : "bg-white text-charcoal hover:bg-charcoal hover:text-white"
      )}
    >
      {label}
    </button>
  )
}

function MapCamera({
  garages: visible,
  selectedId,
}: {
  garages: DemoGarage[]
  selectedId: number | null
}) {
  const { map, isLoaded, mapLib } = useMap()
  const boundsKey = visible
    .filter((garage) => garage.pin)
    .map((garage) => garage.id)
    .join(",")

  useEffect(() => {
    if (!map || !isLoaded || !mapLib) return
    const pins = visible.filter(
      (garage): garage is DemoGarage & { pin: { lat: number; lon: number } } =>
        garage.pin != null
    )
    const selected = pins.find((garage) => garage.id === selectedId)
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (selected) {
      const target = {
        center: [selected.pin.lon, selected.pin.lat] as [number, number],
        zoom: Math.max(map.getZoom(), 13.2),
      }
      if (reduce) map.jumpTo(target)
      else map.flyTo({ ...target, essential: true })
      return
    }

    if (pins.length === 0) {
      map.jumpTo({ center: [51.47, 25.25], zoom: 10.6 })
      return
    }

    if (pins.length === 1) {
      const only = pins[0]
      map.flyTo({
        center: [only.pin.lon, only.pin.lat],
        zoom: 13,
        essential: true,
      })
      return
    }

    const bounds = new mapLib.LngLatBounds()
    for (const garage of pins) bounds.extend([garage.pin.lon, garage.pin.lat])
    map.fitBounds(bounds, {
      padding: 56,
      maxZoom: 13,
      duration: reduce ? 0 : 700,
    })
  }, [boundsKey, isLoaded, map, mapLib, selectedId, visible])

  return null
}
