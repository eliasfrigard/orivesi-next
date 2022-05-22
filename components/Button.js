import Link from 'next/link'

export default function HighlightText({ children, url }) {
  return (
    <Link href={url}>
      <button className='w-[230px] bg-orange hover:bg-orange text-white font-medium py-3 px-4 rounded-full tracking-wide text-lg'>
        {children}
      </button>
    </Link>
  )
}
