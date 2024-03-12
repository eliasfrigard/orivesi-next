import EventPreview from './EventPreview'
import Button from '../Button'
import Title from '../Title'

export default function EventHighlights({ events }) {
  return (
    <div className='flex flex-col gap-16 items-center text-grey-500'>
      <Title version='v1'>SEURAAVAT TAPAHTUMAT</Title>

      {events.length <= 0 ? (
        <Title version='v2'>Ei tulevia tapahtumia.</Title>
      ) : (
        <div className='w-full grid grid-flow-row xl:grid-cols-3 lg:grid-cols-2 w-full gap-8 md:gap-10 items-center justify-center'>
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
        </div>
      )}

      <Button url='/events'>Katso Kaikki Tapahtumat</Button>
    </div>
  )
}
