export default function HighlightText({ title, subtitle }) {
  return (
    <div className='pt-24 pb-32 text-center w-full'>
      {subtitle ? (
        <h2 className='text-4xl lg:text-4xl leading-tight my-4 font-work font-medium text-grey-400 uppercase'>
          {subtitle}
        </h2>
      ) : null}
      {/* <p className='text-8xl font-sketch tracking-widest'></p> */}
      <h1 className='lg:text-[9rem] leading-[10rem] font-bold font-sketch text-accent-500'>
        ORIVESI ALL STARS
      </h1>
    </div>
  )
}
