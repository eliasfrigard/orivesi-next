import Link from 'next/link'

export default function HighlightText({
  children,
  url,
  color = 'bg-accent-500',
  hoverColor = 'hover:bg-accent-500',
  rounded = 'rounded-full',
  width = 'w-[230px]',
  disabled = false,
}) {
  return url ? (
    <Link href={url}>
      <button
        className={`${width} ${color} ${hoverColor} text-white font-medium py-4 px-6 ${rounded} tracking-wider text-lg hover:scale-105 duration-150 active:scale-100 active:${color} uppercase font-sketch font-bold shadow-lg hover:shadow-xl`}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      className={`${width} ${color} ${hoverColor} text-white font-medium py-4 px-6 ${rounded} tracking-wider text-lg  duration-150 active:scale-100 active:${color} uppercase font-sketch font-bold shadow-md  ${
        disabled ? 'opacity-70 cursor-default' : 'hover:shadow-lg hover:scale-105 cursor-pointer'
      }`}
    >
      {children}
    </button>
  )
}
