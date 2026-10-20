function initials(name: string) {
  const words = name
    .split(/[\s\-–—/]+/)
    .map((word) => word.replace(/[^A-Za-z0-9]/g, ""))
    .filter(Boolean)
  if (words.length >= 2) {
    return `${words[0][0]}${words[1][0]}`.toUpperCase()
  }
  return (words[0] ?? "G").slice(0, 2).toUpperCase()
}

export function garageFacts(id: number) {
  const tail = String(1000 + id * 17).slice(-4)
  return {
    established: 1998 + (id % 20),
    bays: 2 + (id % 5),
    phone: `+974 5550 ${tail}`,
    tel: `tel:+9745550${tail}`,
    whatsapp: `https://wa.me/9745550${tail}`,
  }
}

export function GarageLogo({
  name,
  className = "size-[5.5rem] sm:size-28",
}: {
  name: string
  className?: string
}) {
  return (
    <span
      className={`flex flex-col items-center justify-center gap-1.5 rounded-[1.6rem] border-[5px] border-paper bg-white shadow-[0_18px_40px_-22px_rgba(17,19,24,0.55)] ${className}`}
      aria-hidden="true"
    >
      <span className="text-2xl font-extrabold tracking-[-0.04em] text-charcoal sm:text-3xl">
        {initials(name)}
      </span>
      <span className="h-1 w-7 rounded-full bg-garago" />
    </span>
  )
}

export function GarageBanner({ name, area }: { name: string; area: string }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-charcoal">
      <div
        className="pointer-events-none absolute end-[-4rem] -top-24 size-[22rem] rounded-full bg-garago/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute start-[-3rem] bottom-[-4rem] size-56 rounded-full bg-white/5"
        aria-hidden="true"
      />
      <div className="relative px-6 pt-8 pb-24 sm:px-10 sm:pt-10 sm:pb-20">
        <p className="text-sm font-semibold text-garago">{area}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-[-0.045em] text-balance text-white sm:text-6xl">
          {name}
        </h1>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-1.5 bg-garago"
        aria-hidden="true"
      />
    </div>
  )
}
