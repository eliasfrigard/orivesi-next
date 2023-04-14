import AnimateIn from '../AnimateIn'

export default function HighlightText({ title, subtitle }) {
  return (
    <AnimateIn delay={1000} opacityDuration={1000} className='hidden md:block'>
      <div className='pb-16 sm:pt-4 lg:pt-24 lg:pb-24 text-center w-full px-4'>
        {subtitle ? (
          <h2 className='text-2xl sm:text-3xl font-medium leading-10 sm:leading-loose mb-6 font-work text-secondary-600 uppercase drop-shadow-sm'>
            {subtitle}
          </h2>
        ) : null}
        <h1 className='text-7xl lg:text-9xl font-bold font-sketch text-accent-600 drop-shadow-lg'>{title}</h1>
      </div>
    </AnimateIn>
  )
}
