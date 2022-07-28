import NewsPreview from './NewsPreview'
import Button from '../Button'
import Title from '../Title'

export default function NewsHighlights({ news }) {
  return (
    <div className='container flex flex-col	items-center'>
      <Title version='v1'>TUOREIMMAT UUTISET</Title>
      <div className='flex flex-row flex-wrap justify-between md:justify-center gap-10 xl:gap-y-20 xl:mb-24 mt-12 sm:my-16'>
        {news.map((item) => (
          <NewsPreview
            key={item.id}
            link={item.slug}
            title={item.attributes.Title}
            image={item.attributes.Images.data[0].attributes}
            post={item.attributes.Text}
            author={item.attributes.Author}
            date={item.attributes.createdAt}
            isFull={news.length === 1 ? true : false}
          ></NewsPreview>
        ))}

        {/* Enable left-aligned wrapped items. */}
        {news.length % 2 === 0 ? '' : <div className='w-90 lg:w-[474px] xl:w-[525px]'></div>}
      </div>
      <Button url='/news'>Lisää Uutisia</Button>
    </div>
  )
}
