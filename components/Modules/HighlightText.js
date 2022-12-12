import AnimateIn from '../AnimateIn'

export default function HighlightText({ title, subtitle }) {
  return (
    <AnimateIn delay={1000} opacityDuration={1000} className='hidden md:block'>
      <div className='pb-16 sm:pt-4 lg:pt-24 lg:pb-24 text-center w-full px-4'>
        {subtitle ? (
          <h2 className='text-2xl sm:text-4xl leading-10 sm:leading-tight my-4 font-work font-medium text-grey-400 uppercase drop-shadow-md'>
            {subtitle}
          </h2>
        ) : null}
        <h1 className='text-7xl lg:text-[9rem] lg:leading-[10rem] font-bold font-sketch text-accent-500 drop-shadow-lg'>
          {title}
        </h1>
      </div>
    </AnimateIn>
  )
}
