import NewsPreview from './NewsPreview'
import Button from '../Button'
import Title from '../Title'
import AnimateIn from '../AnimateIn'

export default function NewsHighlights({ news }) {
  return (
    <div className='container flex flex-col	items-center'>
      <AnimateIn distance={0}>
        <Title version='v1'>TUOREIMMAT UUTISET</Title>
      </AnimateIn>
      {/* // Change back to mt-12 / mt-24 when more news. */}
      <div className='flex flex-row flex-wrap justify-between md:justify-center gap-8 mb-6 xl:gap-y-16 xl:mb-12 mt-12 sm:my-16'>
        {news.map((item) => (
          <AnimateIn key={item.id} classes='flex flex-row flex-wrap justify-between md:justify-centers'>
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
          </AnimateIn>
        ))}

        {/* Enable left-aligned wrapped items. */}
        {news.length % 2 === 0 ? '' : <div className='w-90 lg:w-[474px] xl:w-[525px]'></div>}
      </div>
      <AnimateIn distance={0}>
        <Button url='/news'>Lisää Uutisia</Button>
      </AnimateIn>{' '}
    </div>
  )
}
