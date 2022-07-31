import qs from 'qs'
import axios from 'axios'
import Image from 'next/image'
import Layout from '../components/Layout'
import HighlightText from '../components/Modules/HighlightText'
import NewsHighlights from '../components/Modules/NewsHighlights'
import EventHighlights from '../components/Modules/EventHighlights'
import ShortPresentation from '../components/Modules/ShortPresentation'
import SearchModule from '../components/Modules/SearchModule'

// Test
import Modal from '../components/Modules/Modal'

export default function Home({ welcome, news, events }) {
  function isPrevious(date) {
    return new Date(date).getTime() < Date.now()
  }

  // Remove previous and take the next three events with the earliest date.
  let nextEvents = events.filter((event) => !isPrevious(event.attributes.Start))
  nextEvents = nextEvents.slice(0, 3)

  return (
    <Layout>
      <Modal></Modal>

      <div className='container lg:hidden mb-7 drop-shadow rounded-xl'>
        <Image
          className='rounded'
          src='/qVHC0VqQ.jpeg'
          alt='Orivesi All Stars'
          width='6581'
          height='3060'
          layout='responsive'
          objectFit='cover'
        />
      </div>
      <HighlightText title='ORIVESI ALL STARS' subtitle='The Great Happy Orchestra'></HighlightText>
      <ShortPresentation
        title={welcome.Title}
        text={welcome.Text}
        linkText={welcome.Link_Text}
        linkUrl={welcome.Link_URL}
      ></ShortPresentation>

      <div className='flex flex-col justify-center items-center'>
        <NewsHighlights news={news}></NewsHighlights>
        <div className='h-16 sm:h-32'></div>
        <SearchModule></SearchModule>
        <EventHighlights events={nextEvents}></EventHighlights>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const welcomeRes = await axios.get(`${process.env.API_ADDRESS}/welcome`)

  const postRes = await axios.get(
    `${process.env.API_ADDRESS}/posts?_limit=4&sort=createdAt:desc&populate=Images`
  )

  const eventRes = await axios.get(`${process.env.API_ADDRESS}/events?sort=Start:asc`)

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
