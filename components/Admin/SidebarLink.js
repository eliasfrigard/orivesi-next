import Link from 'next/link'

export default function Sidebar({ title = 'Link Item', url = '/admin' }) {
  return (
    <Link href={url}>
      <div className='h-14 w-full px-4 border-b-[1px] border-secondary-200 border-opacity-30 flex items-center hover:bg-secondary-200 hover:text-primary-500 bg-opacity-50 cursor-pointer'>
        <p className='text-[16px] tracking-wide'>{title}</p>
      </div>
    </Link>
  )
}
