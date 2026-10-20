import type { SVGProps } from "react"

function Icon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function CarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M3.5 14 5.2 9.4A2 2 0 0 1 7 8h10a2 2 0 0 1 1.8 1.4L20.5 14" />
      <path d="M4 14h16v3.2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V14Z" />
      <path d="M7.5 18.2V20M16.5 18.2V20" />
      <path d="M7 16.2h.01M17 16.2h.01" />
    </Icon>
  )
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M12 21s6.2-5.2 6.2-9.2A6.2 6.2 0 0 0 5.8 11.8C5.8 15.8 12 21 12 21Z" />
      <circle cx="12" cy="11.6" r="2.1" />
    </Icon>
  )
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M8 3.5V7M16 3.5V7M3.5 10h17" />
    </Icon>
  )
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M12 3.5 19 6.2v5.4c0 4-2.8 6.8-7 8.4-4.2-1.6-7-4.4-7-8.4V6.2L12 3.5Z" />
      <path d="m8.8 12 2.1 2.1 4.3-4.4" />
    </Icon>
  )
}

export function TruckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M3 7.5h11v8H3z" />
      <path d="M14 10.5h3.2L20 13v2.5h-6" />
      <circle cx="7" cy="17.2" r="1.5" />
      <circle cx="16.5" cy="17.2" r="1.5" />
    </Icon>
  )
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  )
}
