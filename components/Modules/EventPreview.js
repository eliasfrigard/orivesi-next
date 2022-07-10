import { GoLocation } from 'react-icons/go'
import { GiEarthAfricaEurope } from 'react-icons/gi'

import Link from 'next/link'
import Moment from 'react-moment'
import 'moment/locale/fi'

export default function EventPreview({
  date,
  title,
  location = 'Oodin Kirjasto',
  city = 'Helsinki',
  country = 'FI',
  link,
  startTime,
  endTime,
}) {
  return (
    <Link href={'/events/' + link}>
      <div className='flex flex-col w-[300px] items-center text-secondary-800  border-4 border-secondary-500 hover:border-accent-300 py-9 px-4 rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-xl duration-200 cursor-pointer active:scale-95 tracking-wide'>
        {/* Date */}
        <div className='date font-sketch font-bold flex gap-2 justify-center text-left items-center text-secondary-800'>
          <Moment className='text-[4.2rem] leading-[10px] font-light' format='DD'>
            {date}
          </Moment>
          <div className='flex flex-col pb-[4px] ml-[2px]'>
            <Moment className='text-2xl' locale='fi' format='YYYY'>
              {date}
            </Moment>
            <Moment className='uppercase' locale='fi' format='MMM'>
              {date}
            </Moment>
          </div>
        </div>

        {/* Time */}
        {endTime ? (
          <div>
            <p className='flex gap-1 uppercase font-bold text-4xl mt-4'>
              <Moment locale='fi' format='kk:mm'>
                {startTime}
              </Moment>
              -
              <Moment locale='fi' format='kk:mm'>
                {endTime}
              </Moment>
            </p>
          </div>
        ) : (
          <Moment className='uppercase font-bold text-5xl mt-4' locale='fi' format='kk:mm'>
            {date}
          </Moment>
        )}

        {/* Title */}
        <h3 className='text-xl text-center leading-relaxed tracking-wide my-5'>{title}</h3>

        {/* Metadata */}
        <div className='meta flex flex-col justify-center items-center font-medium gap-2 text-secondary-500	'>
          <div className='flex flex-row justify-center items-center gap-2'>
            <GiEarthAfricaEurope></GiEarthAfricaEurope>
            <p>
              {city}, {country}
            </p>
          </div>
          <div className='flex flex-row justify-center items-center gap-2'>
            <GoLocation></GoLocation>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
