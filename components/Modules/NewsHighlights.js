import NewsPreview from './NewsPreview'
import Button from '../Button'
import Title from '../Title'

export default function NewsHighlights({ news }) {
  return (
    <div className='container flex flex-col	items-center'>
      <h3 className='text-5xl text-center leading-[4rem] tracking-wider text-grey-400'>TUOREIMMAT UUTISET</h3>
      {/* // Change back to mt-12 / mt-24 when more news. */}
      <div className='flex flex-row flex-wrap justify-between md:justify-center gap-8 xl:mb-14 my-12 sm:my-16'>
        {news.map((item) => (
          <div
            key={item.id}
            className='flex flex-wrap flex-row justify-between md:justify-center gap-8 xl:gap-y-16'
          >
            <NewsPreview
              key={item.id}
              link={item.slug}
              title={item.attributes.Title}
              image={item.attributes.Images.data[0].attributes}
              post={item.attributes.Text}
              youtube={item.attributes.Youtube}
              author={item.attributes.Author}
              date={item.attributes.createdAt}
              isFull={news.length === 1 ? true : false}
            ></NewsPreview>
          </div>
        ))}

        {/* Enable left-aligned wrapped items. */}
        {news.length % 2 === 0 ? '' : <div className='w-90 lg:w-[474px] xl:w-[525px]'></div>}
      </div>
      <Button url='/news'>Lisää Uutisia</Button>
    </div>
  )
}
