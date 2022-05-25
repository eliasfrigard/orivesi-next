import { useState } from 'react'
import Link from 'next/link'

export default function Score({ title, type, composer, link, isHeader = false }) {
  const [open, setOpen] = useState(false)
  const onMouseClick = () => setOpen(!open)

  return (
    <Link href={'/scores/' + link}>
      {isHeader ? (
        <div className='w-full h-14 px-10 flex gap-20 justify-between items-center'>
          <h3 className='flex-1 font-medium tracking-wider'>{title}</h3>

          <div className='flex flex-1 font-light md:flex items-center gap-14'>
            <h3 className='flex-1 tracking-wider'>{type}</h3>
            <h3 className='flex-1 tracking-wider'>{composer}</h3>
          </div>
        </div>
      ) : (
        <div
          onClick={onMouseClick}
          className='w-full h-14 px-10 bg-hover backdrop-blur-lg rounded-lg shadow cursor-pointer hover:scale-100 hover:shadow-md hover:bg-hoverDark duration-300 flex gap-20 justify-between items-center'
        >
          <p className='flex-1 font-medium tracking-wide'>{title}</p>
          <div className='flex flex-1 font-light md:flex items-center gap-14'>
            <p className='flex-1 tracking-wide'>{type}</p>
            <p className='flex-1 tracking-wide'>{composer}</p>
          </div>
        </div>
      )}
    </Link>
  )
}
