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
        className={`w-[230px] ${color} ${hoverColor} text-white font-medium py-4 px-6 ${rounded} tracking-wider text-lg hover:scale-105 duration-150 active:scale-100 active:${color} uppercase font-sketch font-bold`}
      >
        {children}
      </button>
    </Link>
  )
}
