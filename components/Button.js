import Link from 'next/link'

export default function Button({
  children,
  url,
  openInTab = true,
  color = 'bg-accent-600',
  hoverColor = 'hover:bg-accent-500',
  rounded = 'rounded-full',
  width = 'min-w-[200px]',
  externalUrl = false,
  height,
  disabled = false,
}) {
  return url ? (
    externalUrl ? (
      <a target='_blank' href={url} rel='noopener noreferrer'>
        <button
          className={`${width} ${color} ${hoverColor} text-white font-medium py-4 px-6 ${rounded} tracking-wider hover:scale-105 duration-150 active:scale-100 active:${color} uppercase font-work font-bold shadow-lg hover:shadow-xl`}
        >
          {children}
        </button>
      </a>
    ) : (
      <Link href={url}>
        <button
          className={`${color} ${hoverColor} text-white font-medium py-4 px-6 ${rounded} tracking-wider hover:scale-105 duration-150 active:scale-100 active:${color} uppercase font-work font-bold shadow hover:shadow-md`}
        >
          {children}
        </button>
      </Link>
    )
  ) : (
    <button
      className={`${width} ${color} ${hoverColor} text-white font-medium py-4 px-6 ${rounded} tracking-wider  duration-150 active:scale-100 active:${color} uppercase font-work font-bold shadow-md  ${
        disabled ? 'opacity-70 cursor-default' : 'hover:shadow-lg hover:scale-105 cursor-pointer'
      }`}
    >
      {children}
    </button>
  )
}
