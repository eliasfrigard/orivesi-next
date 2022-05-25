import axios from "axios"
import EventPreview from "../../components/Modules/EventPreview"
import Layout from "../../components/Layout"

export default function Events({ events }) {
  console.log(events)
  return (
    <Layout>
      <div className="flex flex-col">
        {/* Upcoming */}
        <div className="container flex flex-col items-center gap-16 my-16">
          <h3 className="text-5xl tracking-wider">Tulevat Tapahtumat</h3>
          <div className="flex flex-wrap gap-10 justify-center">
            {events.map((item) => (
              <>
                <EventPreview title="Jamit Oodin Kirjastossa Kirjastossa" key={item.id}></EventPreview>
                <EventPreview title="Jamit Oodin Kirjastossa Kirjastossa" key={item.id + 1}></EventPreview>
                <EventPreview title="Jamit Oodin Kirjastossa" key={item.id + 2}></EventPreview>
              </>
            ))}
          </div>
        </div>
        {/* Upcoming */}
        <div className="container flex flex-col items-center gap-16 my-16">
          <h3 className="text-5xl tracking-wider">Menneet Tapahtumat</h3>
          <div className="flex flex-wrap gap-10 justify-center">
            {events.map((item) => (
              <>
                <EventPreview title="Jamit Oodin Kirjastossa Kirjastossa" key={item.id}></EventPreview>
                <EventPreview title="Jamit Oodin Kirjastossa Kirjastossa" key={item.id + 1}></EventPreview>
                <EventPreview title="Jamit Oodin Kirjastossa" key={item.id + 2}></EventPreview>
              </>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get("https://orivesiadmin.net/events")

  return {
    props: {
      events: response.data,
    },
  }
}
