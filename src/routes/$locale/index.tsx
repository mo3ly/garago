import { createFileRoute } from "@tanstack/react-router"
import { LandingPage } from "@/components/landing-page"

export const Route = createFileRoute("/$locale/")({
  component: LocalizedHome,
})

function LocalizedHome() {
  const { locale } = Route.useParams()
  return <LandingPage key={locale} />
}
