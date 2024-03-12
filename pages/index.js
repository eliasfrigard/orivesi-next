import axios from 'axios'
import Image from 'next/image'
import Layout from '../components/Layouts/Default'
import HighlightText from '../components/Modules/HighlightText'
import NewsHighlights from '../components/Modules/NewsHighlights'
import EventHighlights from '../components/Modules/EventHighlights'
import ShortPresentation from '../components/Modules/ShortPresentation'
import AnimateIn from '../components/AnimateIn'
import TiltedImages from '../components/Modules/TiltedImages'

export default function Home({ welcome, news, events }) {
  function isPrevious(date) {
    return new Date(date).getTime() < Date.now()
  }

  // Remove previous and take the next three events with the earliest date.
  let nextEvents = events.filter((event) => !isPrevious(event.attributes.End || event.attributes.Start))

  nextEvents = nextEvents.slice(0, 3)

  // Take the 4 newest news.
  let latestNews = news.slice(0, 4)

  return (
    <Layout
      pageTitle="Home"
      pageDescription="Home Page"
      pageImage="https://orivesiadmin.net/oas_image.jpg"
      pageUrl="/"
    >
      <AnimateIn opacityDuration={1000} delay={1000}>
        <div className='container lg:hidden mb-7 drop-shadow rounded-lg -mt-2'>
          <Image
            className='rounded-xl'
            src='/kaustinen.jpg'
            alt='Orivesi All Stars'
            width='6581'
            height='3900'
            layout='responsive'
            objectFit='cover'
          />
        </div>
      </AnimateIn>
      <HighlightText title='ORIVESI ALL STARS' subtitle='Suomen Suurin Pelimanniorkesteri'></HighlightText>

      <TiltedImages></TiltedImages>


      <div className='flex flex-col justify-center items-center gap-16'>
        <ShortPresentation
          title={welcome.Title}
          text={welcome.Text}
          linkText={welcome.Link_Text}
          linkUrl={welcome.Link_URL}
        />

        <NewsHighlights news={latestNews}></NewsHighlights>
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

  const eventRes = await axios.get(`${process.env.API_ADDRESS}/events?sort=Start:asc&pagination[pageSize]=100`)

  const newsWithSlug = postRes.data.data.map((post) => {
    return {
      slug: post.id,
      ...post,
    }
  })

  //
  const eventsWithSlug = eventRes.data.data.map((event) => {
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
