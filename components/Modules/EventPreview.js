import { GoLocation } from 'react-icons/go'
import { GiEarthAfricaEurope } from 'react-icons/gi'

export default function EventPreview({ date, title, location, city, country }) {
  return (
    <div className='flex flex-col w-[335px] items-center gap-1  bg-primary-600 hover:bg-secondary-600 p-12 rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-xl duration-300 cursor-pointer'>
      <div className='date flex gap-3 justify-center items-center'>
        <p className='text-7xl'>14</p>
        <div>
          <p className='text-3xl '>2023</p>
          <p className=' text-lg'>MARRAS</p>
        </div>
      </div>
      <h4 className='text-6xl font-bold'>17:30</h4>
      <h3 className='text-2xl mt-4 text-center leading-relaxed'>{title}</h3>
      <div className='meta flex flex-col justify-center items-center gap-2 mt-3 opacity-80	'>
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
