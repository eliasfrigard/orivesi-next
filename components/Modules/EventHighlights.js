import EventPreview from "./EventPreview"
import Button from "../Button"

export default function EventHighlights({ events }) {
  console.log(events)
  return (
    <div className="container flex flex-col	items-center my-32 text-grey-500">
      <h3 className="text-5xl text-center leading-[4rem] tracking-wider text-grey-400">
        SEURAAVAT TAPAHTUMAT
      </h3>

      {/* <h3 className='text-4xl font-medium text-center'>Seuraavat Tapahtumat</h3> */}
      <div className="flex w-full flex-wrap flex-column justify-center gap-10 items-center my-16 sm:mt-16 sm:mb-20">
        {/* {news.map((item) => (
          ))} */}
        {events.map((item) => (
          <EventPreview key={item.id} title={item.Title} date={item.Date} link={item.slug}></EventPreview>
        ))}
        {/* {events.length % 2 === 0 ? "" : <div className="w-90 lg:w-[474px] xl:w-[525px]"></div>} */}
      </div>
      <Button url="/events">Lisää Tapahtumia</Button>
    </div>
  )
}
