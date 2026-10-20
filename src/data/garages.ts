import rawData from "./garages.json"

type RawGarage = {
  id: number
  name: string
  services_en: string[]
  services_ar: string[]
  car_origins_en: string[]
  car_origins_ar: string[]
  area_en: string
  area_ar: string
  zone: string
  lat: number | string
  lon: number | string
  hours: string
  summary: string
}

export type LocaleText = { en: string; ar: string }

export type DemoGarage = {
  id: number
  name: string
  services: LocaleText[]
  origins: LocaleText[]
  area: LocaleText
  zone: string
  hours: string
  summary: string
  pin: { lat: number; lon: number } | null
  approximate: boolean
  search: string
}

export const serviceOptions: LocaleText[] = [
  { en: "Mechanical", ar: "ميكانيكا" },
  { en: "Body Work", ar: "سمكرة ودهان" },
  { en: "Electrical", ar: "كهرباء" },
]

export const originOptions: LocaleText[] = [
  { en: "Japanese", ar: "ياباني" },
  { en: "German", ar: "ألماني" },
  { en: "American", ar: "أمريكي" },
  { en: "Korean", ar: "كوري" },
  { en: "British", ar: "بريطاني" },
  { en: "French", ar: "فرنسي" },
  { en: "Italian", ar: "إيطالي" },
  { en: "Chinese", ar: "صيني" },
]

function numberOrNull(value: number | string) {
  if (typeof value === "number" && Number.isFinite(value)) return value
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value)
    return Number.isFinite(parsed) ? parsed : null
  }
  return null
}

function pair(en: string[], ar: string[]): LocaleText[] {
  return en.map((label, index) => ({ en: label, ar: ar[index] ?? label }))
}

function spreadPins(
  rows: Array<{ lat: number | null; lon: number | null }>
): Array<{ pin: { lat: number; lon: number } | null; approximate: boolean }> {
  const groups = new Map<string, number[]>()
  rows.forEach((row, index) => {
    if (row.lat == null || row.lon == null) return
    const key = `${row.lat.toFixed(5)}|${row.lon.toFixed(5)}`
    const list = groups.get(key) ?? []
    list.push(index)
    groups.set(key, list)
  })

  return rows.map((row, index) => {
    if (row.lat == null || row.lon == null) {
      return { pin: null, approximate: false }
    }
    const key = `${row.lat.toFixed(5)}|${row.lon.toFixed(5)}`
    const group = groups.get(key) ?? [index]
    if (group.length === 1) {
      return { pin: { lat: row.lat, lon: row.lon }, approximate: false }
    }
    const slot = group.indexOf(index)
    const ring = Math.floor(slot / 12)
    const indexInRing = slot % 12
    const count = Math.min(12, group.length - ring * 12)
    const angle = (indexInRing / count) * Math.PI * 2 - Math.PI / 2
    const radius = 0.0032 + ring * 0.0028
    return {
      pin: {
        lat: row.lat + Math.sin(angle) * radius,
        lon: row.lon + Math.cos(angle) * radius,
      },
      approximate: true,
    }
  })
}

const raw = rawData as RawGarage[]
const placed = spreadPins(
  raw.map((garage) => ({
    lat: numberOrNull(garage.lat),
    lon: numberOrNull(garage.lon),
  }))
)

export const garages: DemoGarage[] = raw.map((garage, index) => {
  const services = pair(garage.services_en, garage.services_ar)
  const origins = pair(garage.car_origins_en, garage.car_origins_ar)
  const area = {
    en: garage.area_en || "Doha",
    ar: garage.area_ar || "الدوحة",
  }
  const search = [
    garage.name,
    area.en,
    area.ar,
    garage.summary,
    garage.zone,
    ...services.flatMap((item) => [item.en, item.ar]),
    ...origins.flatMap((item) => [item.en, item.ar]),
  ]
    .join(" ")
    .toLowerCase()

  return {
    id: garage.id,
    name: garage.name,
    services,
    origins,
    area,
    zone: garage.zone,
    hours: garage.hours,
    summary: garage.summary,
    pin: placed[index]?.pin ?? null,
    approximate: placed[index]?.approximate ?? false,
    search,
  }
})

export function textFor(item: LocaleText, locale: "en" | "ar") {
  return locale === "ar" ? item.ar : item.en
}
