import Link from 'next/link'

export default function Sidebar({ title = 'Link Item', url = '/admin' }) {
  return (
    <div className='w-full flex items-center h-[80px] border-b-2 mb-8 px-6 py-3'>
      <div className='bg-secondary-500 w-32 h-full flex justify-center items-center rounded-lg text-primary-500 font-work font-medium tracking-wider uppercase hover:bg-secondary-400 cursor-pointer'><p>Create</p></div>
    </div>
  )
}
