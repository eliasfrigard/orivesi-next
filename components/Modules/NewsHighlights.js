import NewsPreview from './NewsPreview'
import Button from '../Button'

export default function NewsHighlights({ news }) {
  return (
    <div className='flex flex-col	items-center'>
      <h3 className='text-5xl tracking-wider'>TUOREIMMAT UUTISET</h3>
      <div className='flex flex-wrap flex-row justify-between md:justify-center gap-10 xl:gap-y-14 mt-16 mb-20'>
        {news.map((item) => (
          <NewsPreview
            key={item.id}
            title={item.Title}
            image={item.Image}
            post={item.Post}
            author={item.Author}
            date={item.created_at}
            link={item.slug}
            isFull={news.length === 1 ? true : false}
          ></NewsPreview>
        ))}

        {news.length % 2 === 0 ? '' : <div className='w-90 lg:w-[474px] xl:w-[525px]'></div>}
      </div>
      <Button url='/news'>Lisää Uutisia</Button>
    </div>
  )
}
