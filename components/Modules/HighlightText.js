import Image from 'next/image'
import Navbar from '../NavbarHome'

export default function HighlightText({ title, subtitle }) {
  return (
    <div className='w-[100vw] overflow-hidden'>
      <Image
        style={{ position: 'unset !important' }}
        className='object-top'
        alt='top-slice'
        src='/top-slice.svg'
        height='22%'
        width='100vw'
        layout='responsive'
        objectFit='contain'
      />
      <Navbar></Navbar>
      <div className='py-10 sm:pt-4 lg:pt-6 lg:pb-32 text-center w-full px-4'>
        <h1 className='text-4xl lg:text-[8rem] lg:leading-[8rem] font-medium font-work tracking-normal text-accent-500 drop-shadow'>
          {title}
        </h1>
        {subtitle ? (
          <h2 className='font-cursive text-[1.8rem] pt-1 lg:text-[5.5rem] sm:text-4xl sm:leading-tight my-4 text-grey-400 drop-shadow lowercase'>
            {subtitle}
          </h2>
        ) : null}
      </div>
      <div className='relative h-[100%] w-[100vw]'>
        <Image
          className='object-bottom'
          alt='top-slice'
          src='/bottom-slice.svg'
          height='56%'
          width='100vw'
          layout='responsive'
          objectFit='contain'
        />
      </div>
    </div>
  )
}
