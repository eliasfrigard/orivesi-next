import { GoLocation } from 'react-icons/go'
import { GiEarthAfricaEurope } from 'react-icons/gi'

import Link from 'next/link'
import Moment from 'react-moment'
import 'moment/locale/fi'

export default function EventPreview({ date, title, location, city, country, link }) {
  return (
    <Link href={'/events/' + link}>
      <div className='flex flex-col w-[300px] items-center text-grey-500  border-4 border-grey-500 hover:border-grey-300 py-9 px-4 rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-xl duration-200 cursor-pointer active:scale-95 tracking-wide'>
        {/* Date */}
        <div className='date flex gap-2 justify-center text-left items-center text-grey-800'>
          <Moment className='text-6xl font-light pb-[4px]' format='DD'>
            {date}
          </Moment>
          <div className='flex flex-col'>
            <Moment className='text-2xl' locale='fi' format='YYYY'>
              {date}
            </Moment>
            <Moment className='uppercase' locale='fi' format='MMM'>
              {date}
            </Moment>
          </div>
        </div>

        {/* Time */}
        <Moment className='uppercase font-bold text-5xl mt-4' locale='fi' format='kk:mm'>
          {date}
        </Moment>

        {/* Title */}
        <h3 className='text-xl text-center leading-relaxed tracking-wide my-5'>{title}</h3>

        {/* Metadata */}
        <div className='meta flex flex-col justify-center items-center font-medium gap-2 text-grey-300	'>
          <div className='flex flex-row justify-center items-center gap-2'>
            <GiEarthAfricaEurope></GiEarthAfricaEurope>
            <p>Helsinki, FI</p>
          </div>
          <div className='flex flex-row justify-center items-center gap-2'>
            <GoLocation></GoLocation>
            <p>Oodin Kirjasto</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
