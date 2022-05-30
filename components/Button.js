import Link from "next/link"

export default function HighlightText({
  children,
  url,
  color = "bg-accent-500",
  hoverColor = "hover:bg-accent-400",
  rounded = "rounded-full",
}) {
  return (
    <Link href={url}>
      <button
        className={`w-[230px] ${color} ${hoverColor} text-white font-medium py-3 px-4 ${rounded} tracking-wide text-lg hover:scale-105 duration-150 active:scale-100 active:${color}`}
      >
        {children}
      </button>
    </Link>
  )
}
