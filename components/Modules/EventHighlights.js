import EventPreview from "./EventPreview"
import Button from "../Button"
import Title from "../Title"

export default function EventHighlights({ events }) {
  return (
    <div className="container flex flex-col	items-center mt-32 mb-16 text-grey-500">
      <Title version="v1">SEURAAVAT TAPAHTUMAT</Title>

      <div className="flex w-full flex-wrap flex-column justify-center gap-10 items-center my-16 sm:mb-20">
        {events.map((item) => (
          <EventPreview key={item.id} title={item.Title} date={item.Date} link={item.slug}></EventPreview>
        ))}
      </div>

      <Button url="/events">Lisää Tapahtumia</Button>
    </div>
  )
}
