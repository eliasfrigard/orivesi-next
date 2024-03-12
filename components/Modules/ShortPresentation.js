import Button from '../Button'
import Title from '../Title'

export default function ShortPresentation({ title, text, linkText, linkUrl }) {
  return (
    <div className='selection:bg-accent-500 w-full md:px-4 flex flex-col justify-center gap-10 md:gap-14 items-center bg-secondary-500 text-primary-500 py-12 md:py-24 shadow'>
      <Title version='v2'>{title}</Title>

      <div
        className='container items-center prose max-w-3xl leading-loose prose-img:roundedShadow font-work text-primary-500 text-center'
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
      <div>
        <Button url={linkUrl}>{linkText}</Button>
      </div>
    </div>
  )
}
