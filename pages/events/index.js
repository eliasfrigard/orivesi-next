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
              <div
                key={event.id}
                className='flex flex-wrap flex-row justify-between md:justify-center gap-8 xl:gap-y-16'
              >
                <EventPreview
                  link={event.slug}
                  date={event.attributes.Start}
                  title={event.attributes.Title}
                  location={event.attributes.Location}
                  city={event.attributes.City}
                  country={event.attributes.Country}
                  key={event.attributes.id}
                />
              </div>
            ))}
          </div>
          {upcomingEvents.length <= 0 ? (
            <div className='mb-4 mt-[-50px] sm:mt-0'>
              <Title version='v2'>Ei tulevia tapahtumia.</Title>
            </div>
          ) : (
            ''
          )}
        </div>

        {/* Previous */}
        <div className='flex flex-col items-center gap-16 my-16'>
          <Title>Aikaisempia Tapahtumia</Title>
          <div className='max-w-[1400px] flex flex-wrap gap-10 justify-center items-center'>
            {previousEvents.map((event) => (
              <div
                key={event.id}
                className='flex flex-wrap flex-row justify-between md:justify-center gap-8 xl:gap-y-16'
              >
                <EventPreview
                  link={event.slug}
                  date={event.attributes.Start}
                  title={event.attributes.Title}
                  location={event.attributes.Location}
                  city={event.attributes.City}
                  country={event.attributes.Country}
                  key={event.attributes.id}
                />
              </div>
            ))}
          </div>
          {previousEvents.length <= 0 ? (
            <div className='mb-4 mt-[-50px] sm:mt-0'>
              <Title version='v2'>Ei aikaisempia tapahtumia.</Title>
            </div>
          ) : (
            ''
          )}{' '}
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
