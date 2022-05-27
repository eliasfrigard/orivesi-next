import Link from "next/link"

export default function HighlightText({ children, url, color = "accent", rounded = "full" }) {
  return (
    <Link href={url}>
      <button
        className={`w-[230px] bg-${color}-500 hover:bg-${color}-400 text-white font-medium py-3 px-4 rounded-${rounded} tracking-wide text-lg hover:scale-105 duration-150 active:scale-100 active:bg-${color}-500`}
      >
        {children}
      </button>
    </Link>
  )
}
