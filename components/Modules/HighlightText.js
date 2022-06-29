export default function HighlightText({ title, subtitle }) {
  return (
    <div className='pt-24 pb-32 text-center'>
      {subtitle ? (
        <h2 className='text-4xl lg:text-4xl leading-tight my-4 font-work font-medium text-grey-400 uppercase'>
          {subtitle}
        </h2>
      ) : null}
      {/* <p className='text-8xl font-sketch tracking-widest'></p> */}
      <p className='lg:text-9xl font-bold font-sketch text-accent-500'>ORIVESI ALL STARS</p>
    </div>
  )
}
