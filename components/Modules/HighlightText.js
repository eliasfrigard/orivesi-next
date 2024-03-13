import AnimateIn from '../AnimateIn'

export default function HighlightText({ title, subtitle }) {
  return (
    <AnimateIn delay={1000} opacityDuration={1000} className='hidden md:block'>
      <div className='container text-center flex flex-col justify-center items-center gap-4'>
        <h1 className='text-7xl lg:text-9xl font-bold font-sketch text-accent-600 drop-shadow-lg uppercase'>Orivesi</h1>
        <h1 className='text-7xl lg:text-9xl font-bold font-sketch text-accent-600 drop-shadow-lg uppercase'>all stars</h1>
        <div className='w-full h-1 bg-white' />
        <h2 className='text-2xl sm:text-5xl font-bold tracking-wider font-sketch leading-10 sm:leading-loose uppercase drop-shadow-sm text-white opacity-80'>
          {subtitle}
        </h2>
      </div>
    </AnimateIn>
  )
}
