import NewsPreview from './NewsPreview'

export default function NewsHighlights({ data }) {
  return (
    <div className='flex justify-between md:justify-center gap-10 xl:gap-y-14 flex-wrap'>
      <NewsPreview></NewsPreview>
      <NewsPreview></NewsPreview>
      <NewsPreview></NewsPreview>
      <NewsPreview></NewsPreview>
    </div>
  )
}
