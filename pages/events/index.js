import axios from 'axios'
import EventPreview from '../../components/Modules/EventPreview'
import Layout from '../../components/Layout'
import Title from '../../components/Title'

export default function Events({ events }) {
  function isPrevious(date) {
    return new Date(date).getTime() < Date.now()
  }

  const upcomingEvents = events.filter((event) => !isPrevious(event.attributes.Start))
  const previousEvents = events.filter((event) => isPrevious(event.attributes.Start))

  return (
    <Layout>
      <div className='flex flex-col'>
        {/* Upcoming */}
        <div className='flex flex-col items-center gap-16 lg:my-16'>
          <Title>Tulevat Tapahtumat</Title>
          <div className='max-w-full flex flex-wrap gap-10 justify-center items-center mx-8'>
            {upcomingEvents.map((event) => (
              <EventPreview
                link={event.slug}
                date={event.attributes.Start}
                title={event.attributes.Title}
                key={event.attributes.id}
              />
            ))}
          </div>
        </div>

        {/* Previous */}
        <div className='flex flex-col items-center gap-16 my-16'>
          <Title>Aikaisempia Tapahtumia</Title>
          <div className='max-w-[1400px] flex flex-wrap gap-10 justify-center items-center'>
            {previousEvents.map((event) => (
              <EventPreview
                link={event.slug}
                date={event.attributes.Start}
                title={event.attributes.Title}
                key={event.attributes.id}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get(`${process.env.API_ADDRESS}/events`)

  const eventsWithSlug = response.data.data.map((event) => {
    return {
      slug: event.id,
      ...event,
    }
  })

  return {
    props: {
      events: eventsWithSlug,
    },
  }
}
