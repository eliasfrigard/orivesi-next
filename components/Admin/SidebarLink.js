import Link from 'next/link'

export default function Sidebar({ title = 'Link Item', url = '/admin' }) {
  return (
    <Link href={url}>
      <div className='h-16 w-full px-4 border-b-2 border-secondary-200 border-opacity-50 flex items-center hover:bg-secondary-200 hover:text-primary-500 bg-opacity-50 cursor-pointer'>
        <p className='text-lg '>{title}</p>
      </div>
    </Link>
  )
}
