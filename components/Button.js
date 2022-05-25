import Link from 'next/link'

export default function HighlightText({ children, url }) {
  return (
    <Link href={url}>
      <button className='w-[230px] bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-4 rounded-full tracking-wide text-lg hover:scale-105 duration-150 active:scale-100 active:bg-accent-500'>
        {children}
      </button>
    </Link>
  )
}
