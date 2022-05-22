export default function HighlightText({ title, subtitle }) {
  return (
    <div className='py-24 text-center'>
      <p className='lg:text-8xl font-medium'>{title}</p>
      {subtitle ? (
        <h2 className='text-4xl lg:text-5xl leading-tight mt-10 font-cursive'>{subtitle}</h2>
      ) : null}
    </div>
  )
}
