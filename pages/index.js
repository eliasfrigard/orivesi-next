import axios from 'axios'
import Layout from '../components/Layout'
import HighlightText from '../components/Modules/HighlightText'
import NewsHighlights from '../components/Modules/NewsHighlights'
import EventHighlights from '../components/Modules/EventHighlights'
import ShortPresentation from '../components/Modules/ShortPresentation'
import SearchModule from '../components/Modules/SearchModule'

export default function Home({ welcome, news, events }) {
  return (
    <Layout>
      <HighlightText title='ORIVESI ALL STARS' subtitle='The Great Happy Orchestra'></HighlightText>
      <ShortPresentation
        title={welcome.Title}
        text={welcome.Text}
        linkText={welcome.Link_Text}
        linkUrl={welcome.Link_URL}
      ></ShortPresentation>

      <div className='flex flex-col justify-center items-center'>
        <NewsHighlights news={news}></NewsHighlights>
        <div className='h-32'></div>
        <SearchModule></SearchModule>
        <EventHighlights events={events}></EventHighlights>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const welcomeRes = await axios.get(`${process.env.API_ADDRESS}/welcome`)
  const postRes = await axios.get(
    `${process.env.API_ADDRESS}/posts?_limit=4&_sort=created_at:DESC&populate=Images`
  )
  const eventRes = await axios.get(`${process.env.API_ADDRESS}/events?_limit=3&_sort=created_at:DESC`)

  let newsWithSlug = postRes.data.data.map((post) => {
    return {
      slug: post.id,
      ...post,
    }
  })

  let eventsWithSlug = eventRes.data.data.map((event) => {
    return {
      slug: event.id,
      ...event,
    }
  })

  return {
    props: {
      welcome: welcomeRes.data.data.attributes,
      news: newsWithSlug,
      events: eventsWithSlug,
    },
  }
}
