import axios from "axios"
import Layout from "../components/Layout"
import HighlightText from "../components/Modules/HighlightText"
import NewsHighlights from "../components/Modules/NewsHighlights"
import EventHighlights from "../components/Modules/EventHighlights"

export default function Home({ news, events }) {
  return (
    <Layout>
      <div className="h-[3000px] container">
        <HighlightText title="ORIVESI ALL STARS" subtitle="The Great Happy Orchestra"></HighlightText>
        <div className="h-[50px]"></div>
        <NewsHighlights news={news}></NewsHighlights>
        <EventHighlights events={events}></EventHighlights>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const postRes = await axios.get("https://orivesiadmin.net/posts?_limit=4&_sort=created_at:DESC")
  const eventRes = await axios.get("https://orivesiadmin.net/events?_limit=4&_sort=created_at:DESC")

  let newsWithSlug = postRes.data.map((post) => {
    return {
      slug: post.id,
      ...post,
    }
  })

  let eventsWithSlug = eventRes.data.map((event) => {
    return {
      slug: event.id,
      ...event,
    }
  })

  // newsWithSlug = newsWithSlug.length === 3 ? newsWithSlug.slice(0, 2) : newsWithSlug

  return {
    props: {
      news: newsWithSlug,
      events: eventsWithSlug,
    },
  }
}
