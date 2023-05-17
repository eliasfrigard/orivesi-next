import EventPreview from './EventPreview'
import Button from '../Button'
import Title from '../Title'

export default function EventHighlights({ events }) {
  console.log(events);
  return (
    <div className='flex flex-col	items-center mt-16 md:mt-32 md:mb-16 text-grey-500'>
      <Title version='v1'>SEURAAVAT TAPAHTUMAT</Title>
      <div className='max-w-full grid grid-flow-row xl:grid-cols-3 lg:grid-cols-2 w-full gap-8 md:gap-10 items-center justify-center my-16 sm:mb-20 '>
        {events.map((event) => (
          <EventPreview
            key={event.id}
            link={event.slug}
            date={event.attributes.Start}
            title={event.attributes.Title}
            location={event.attributes.Location}
            city={event.attributes.City}
            country={event.attributes.Country}
          ></EventPreview>
        ))}
        {events.length <= 0 && (
          <div className='-mt-2'>
            <Title version='v2'>Ei tulevia tapahtumia.</Title>
          </div>
        )}
      </div>

      <Button url='/events'>Katso Kaikki Tapahtumat</Button>
    </div>
  )
}
