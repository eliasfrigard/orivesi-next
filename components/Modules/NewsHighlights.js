import NewsPreview from "./NewsPreview"
import Button from "../Button"
import Title from "../Title"

export default function NewsHighlights({ news }) {
  return (
    <div className="container flex flex-col	items-center">
      <Title version="v1">TUOREIMMAT UUTISET</Title>
      <div className="flex flex-row flex-wrap justify-between md:justify-center gap-10 xl:gap-y-14 my-12 sm:my-16">
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

        {/* Enable left-aligned wrapped items. */}
        {news.length % 2 === 0 ? "" : <div className="w-90 lg:w-[474px] xl:w-[525px]"></div>}
      </div>
      <Button url="/news">Lisää Uutisia</Button>
    </div>
  )
}
