import { useState } from 'react'
import Link from 'next/link'

export default function Score({ title, type, composer, link, isHeader = false, onChangeFilter }) {
  const [open, setOpen] = useState(false)
  const onMouseClick = () => setOpen(!open)

  return (
    <>
      {isHeader ? (
        <div
          className='hidden md:flex w-full h-14 px-10 gap-20 justify-between items-center'
          onClick={onChangeFilter}
        >
          <h3 id='title' className='flex-1 text-2xl font-sketch uppercase font-bold tracking-widest'>
            {title}
          </h3>

          <div className='flex flex-1 font-light md:flex items-center gap-14'>
            <h3 id='dancetype' className='flex-1 text-2xl font-sketch uppercase font-bold tracking-widest'>
              {type}
            </h3>

            <h3 id='composer' className='flex-1 text-2xl font-sketch uppercase font-bold tracking-widest'>
              {composer}
            </h3>
          </div>
        </div>
      ) : (
        <Link href={'/scores/' + link}>
          <div
            onClick={onMouseClick}
            className='w-full md:h-14 px-10 py-6 bg-secondary-500 text-white backdrop-blur-lg rounded-lg shadow-lg cursor-pointer hover:scale-100 hover:shadow-xl hover:bg-accent-500 duration-200 flex flex-col md:flex-row gap-2 md:gap-20 justify-between items-center'
          >
            <p className='flex-1 font-bold text-[1.15rem] md:text-[1.1rem] tracking-wider text-center md:text-left leading-relaxed'>
              {title}
            </p>
            <div className='flex flex-col md:flex-row flex-1 items-center gap-2 md:gap-14'>
              <p className='flex-1 tracking-wide'>{type}</p>
              <p className='flex-1 tracking-wide'>{composer}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  )
}
