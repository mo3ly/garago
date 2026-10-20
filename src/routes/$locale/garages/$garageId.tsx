import { createFileRoute, notFound } from "@tanstack/react-router"
import { GaragePage } from "@/components/garage-page"
import { garageById } from "@/data/garages"
import { copyFor } from "@/i18n"

export const Route = createFileRoute("/$locale/garages/$garageId")({
  beforeLoad: ({ params }) => {
    const id = Number(params.garageId)
    if (!Number.isInteger(id) || !garageById(id)) {
      throw notFound()
    }
  },
  head: ({ params }) => {
    const garage = garageById(Number(params.garageId))
    const copy = copyFor(params.locale)
    const title = garage ? `${garage.name} — Garago` : copy.metaTitle
    return {
      meta: [
        { title },
        {
          name: "description",
          content: garage?.summary ?? copy.metaDescription,
        },
      ],
    }
  },
  component: GarageRoute,
})

function GarageRoute() {
  const { garageId } = Route.useParams()
  const garage = garageById(Number(garageId))
  if (!garage) throw notFound()
  return <GaragePage key={garage.id} garage={garage} />
}
