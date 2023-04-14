import { useState } from 'react'
import Link from 'next/link'
import { FaHeart, FaStar } from 'react-icons/fa'

export default function Score({
  title,
  type,
  composer,
  link,
  isHeader = false,
  onChangeFilter,
  status = null,
}) {
  const [open, setOpen] = useState(false)
  const onMouseClick = () => setOpen(!open)

  return (
    <>
      {isHeader ? (
        <div
          className='hidden lg:flex w-full h-14 px-8 gap-20 justify-between items-center'
          onClick={onChangeFilter}
        >
          <h3 id='title' className='flex-1 text-2xl font-sketch uppercase font-bold tracking-widest'>
            {title}
          </h3>

          <div className='flex flex-1 font-light lg:flex items-center gap-14'>
            <h3 id='dancetype' className='flex-1 text-2xl font-sketch uppercase font-bold tracking-widest'>
              {type}
            </h3>

            <h3 id='composer' className='flex-1 text-2xl font-sketch uppercase font-bold tracking-widest'>
              {composer}
            </h3>
          </div>
        </div>
      ) : (
        <Link href={'/score/' + link}>
          <div
            onClick={onMouseClick}
            className='selection:bg-accent-500 w-full lg:h-14 px-4 lg:px-8 py-3 lg:py-8 bg-secondary-500 text-white backdrop-blur-lg rounded-lg shadow-lg cursor-pointer hover:shadow-xl hover:bg-accent-500 duration-100 flex flex-col lg:flex-row gap-2 lg:gap-20 justify-between items-center'
          >
            {status === 'Aktiivisoitossa' ? (
              <div
                data-tooltip-target='tooltip-default'
                className='absolute left-[-40px] text-black flex gap-1'
              >
                <FaHeart className='text-sm text-red-500 drop-shadow' />
              </div>
            ) : (
              ''
            )}
            {status === 'Vanhaa Tuttua Ohjelmistoa' ? (
              <div className='absolute left-[-55px] text-black flex gap-1'>
                <FaHeart className='text-sm text-red-500 drop-shadow' />
                <FaHeart className='text-sm text-red-500 drop-shadow' />
              </div>
            ) : (
              ''
            )}
            {status === 'Uusi Biisi' ? (
              <div className='absolute left-[-40px] text-black flex gap-1'>
                <FaStar className='text-sm text-yellow-500 drop-shadow' />
              </div>
            ) : (
              ''
            )}
            <p className='flex-1 font-bold text-[1.15rem] lg:text-[1.1rem] tracking-wider text-center lg:text-left leading-relaxed'>
              {title}
            </p>
            <div className='hidden lg:flex flex-col lg:flex-row flex-1 items-center gap-2 lg:gap-14'>
              <p className='flex-1 tracking-wide'>{type}</p>
              <p className='flex-1 tracking-wide leading-relaxed'>{composer}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  )
}
