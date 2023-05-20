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
}) {
  return (
    <Link href={'/events/' + link}>
      <div
        className={`flex flex-col w-[380px] items-center text-secondary-600 border border-secondary-600 hover:border-opacity-60 border-opacity-40 py-10 px-10 rounded-xl shadow-sm hover:shadow-md duration-200 cursor-pointer active:scale-98 tracking-wide`}
      >
        {/* Date */}
        <div className='date font-work flex gap-3 justify-center text-left items-center text-secondary-800 border-b pb-5 border-accent-600 border-opacity-30'>
          <Moment className='text-[4.15rem] leading-[10px] font-medium' format='DD'>
            {date}
          </Moment>
          <div className='flex flex-col pb-[0px] font-medium'>
            <Moment className='uppercase' locale='fi' format='MMMM'>
              {date}
            </Moment>
            <Moment className='text-2xl' locale='fi' format='YYYY'>
              {date}
            </Moment>
          </div>
        </div>

        {/* Title */}
        <h3 className='text-lg font-work font-medium text-center leading-relaxed tracking-wide my-5'>
          {title}
        </h3>

        {/* Metadata */}
        <div className='text-[15px] meta flex -mt-1 flex-col justify-center items-center font gap-2 text-accent-600	'>
          <div className='flex flex-row justify-center items-center gap-3'>
            <GoLocation className='text-secondary-500'></GoLocation>
            <p>{location.length > 25 ? location.substring(0, 22) + '...' : location}</p>
          </div>
          <div className='flex flex-row justify-center items-center gap-3'>
            <GiEarthAfricaEurope className='text-secondary-500'></GiEarthAfricaEurope>
            <p>
              {city}, {country}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
