import Image from 'next/image'

export default function HighlightText({ title, subtitle }) {
  return (
    <div className='min-h-[100vh] w-[100vw] overflow-hidden'>
      <div className='relative h-[100%] w-[100vw]'>
        <Image
          className='object-bottom'
          alt='top-slice'
          src='/top-slice.svg'
          height='100%'
          width='100vw'
          layout='responsive'
          objectFit='contain'
        />
      </div>
      <div className='py-10 sm:pt-4 lg:pt-24 lg:pb-32 text-center w-full px-4'>
        <h1 className='text-4xl lg:text-[9rem] lg:leading-[10rem] font-bold font-sketch text-accent-500 drop-shadow-lg'>
          {title}
        </h1>
        {subtitle ? (
          <h2 className='font-cursive text-[1.8rem] sm:text-4xl sm:leading-tight my-4 font-medium text-accent-400 drop-shadow-md'>
            {subtitle}
          </h2>
        ) : null}
      </div>
      <div className='relative h-[100%] w-[100vw]'>
        <Image
          className='object-top'
          alt='top-slice'
          src='/bottom-slice.svg'
          height='100%'
          width='100vw'
          layout='responsive'
          objectFit='contain'
        />
      </div>
    </div>
  )
}
