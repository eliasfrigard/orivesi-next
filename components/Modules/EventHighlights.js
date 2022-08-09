import EventPreview from './EventPreview'
import Button from '../Button'
import Title from '../Title'

export default function EventHighlights({ events }) {
  return (
    <div className='container flex flex-col	items-center mt-16 md:mt-32 md:mb-16 text-grey-500'>
      <Title version='v1'>SEURAAVAT TAPAHTUMAT</Title>
      <div className='flex w-full flex-wrap flex-column justify-center gap-10 items-center my-16 sm:mb-20'>
        {events.map((event) => (
          <EventPreview
            key={event.id}
            link={event.slug}
            title={event.attributes.Title}
            date={event.attributes.Start}
            location={event.attributes.Location}
            city={event.attributes.City}
            country={event.attributes.Country}
            startTime={event.attributes.Start}
            // endTime={event.attributes.End}
          ></EventPreview>
        ))}
        {events.length <= 0 ? (
          <div className=''>
            <Title version='v2'>Ei tulevia tapahtumia.</Title>
          </div>
        ) : (
          ''
        )}
      </div>

      <Button url='/events'>Lisää Tapahtumia</Button>
    </div>
  )
}
