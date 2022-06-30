import axios from "axios"
import EventPreview from "../../components/Modules/EventPreview"
import Layout from "../../components/Layout"
import Title from "../../components/Title"

export default function Events({ events }) {
  return (
    <Layout>
      <div className="flex flex-col">
        {/* Upcoming */}
        <div className="flex flex-col items-center gap-16 sm:my-16">
          <Title>Tulevat Tapahtumat</Title>
          <div className="max-w-full flex flex-wrap gap-10 justify-center mx-8">
            {events.map((item) => (
              <EventPreview
                link={item.slug}
                date={item.Date}
                title="Jamit Oodin Kirjastossa Kirjastossa"
                key={item.id}
              />
            ))}
          </div>
        </div>
        {/* Previous */}
        <div className="flex flex-col items-center gap-16 my-16">
          <Title>Aikaisempia Tapahtumia</Title>
          <div className="max-w-[1400px] flex flex-wrap gap-10 justify-center">
            {events.map((item) => (
              <EventPreview
                link={item.slug}
                date={item.Date}
                title="Jamit Oodin Kirjastossa Kirjastossa"
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get("https://orivesiadmin.net/events")

  const eventsWithSlug = response.data.map((event) => {
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
