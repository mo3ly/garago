import { cn } from "cn"

export function VerifiedBadge({
  label,
  size = "sm",
}: {
  label: string
  size?: "sm" | "md"
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-[#e8f6ee] font-semibold text-[#0d7a45]",
        size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs"
      )}
    >
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        className={size === "sm" ? "size-3.5" : "size-4"}
      >
        <circle cx="8" cy="8" r="8" fill="#12a150" />
        <path
          d="M4.6 8.2 6.8 10.4 11.4 5.6"
          fill="none"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </span>
  )
}
