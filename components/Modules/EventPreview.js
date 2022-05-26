import { GoLocation } from 'react-icons/go'
import { GiEarthAfricaEurope } from 'react-icons/gi'

export default function EventPreview({ date, title, location, city, country }) {
  return (
    <div className='flex flex-col w-[300px] items-center text-primary-500 bg-accent-500 hover:bg-accent-600 py-9 px-4 rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-xl duration-300 cursor-pointer active:-translate-y-1 tracking-wide'>
      {/* Date */}
      <div className='date flex gap-2 justify-center text-left items-center'>
        <p className='text-6xl font-light'>14</p>
        <div>
          <p className='text-2xl'>2023</p>
          <p className=' text'>MARRAS</p>
        </div>
      </div>

      {/* Time */}
      <h4 className='text-5xl font-bold mt-2'>17:30</h4>

      {/* Title */}
      <h3 className='text-xl text-center leading-relaxed my-5'>{title}</h3>

      {/* Metadata */}
      <div className='meta flex flex-col justify-center items-center text gap-2 opacity-80	'>
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
  )
}
