import axios from 'axios'
import Image from 'next/image'
import Layout from '../components/Layouts/Default'
import NewsHighlights from '../components/Modules/NewsHighlights'
import EventHighlights from '../components/Modules/EventHighlights'
import ShortPresentation from '../components/Modules/ShortPresentation'
import AnimateIn from '../components/AnimateIn'

import Hero from '../components/Modules/Hero'

export default function Home({ welcome, news, events }) {
  function isPrevious(date) {
    return new Date(date).getTime() < Date.now()
  }

  // Remove previous and take the next three events with the earliest date.
  let nextEvents = events.filter((event) => !isPrevious(event.attributes.End || event.attributes.Start))

  nextEvents = nextEvents.slice(0, 3)

  // Take the 4 newest news.
  let latestNews = news.slice(0, 4)

  const image = {
    url: '/kaustinen.jpg',
    altText: 'Orivesi All Stars',
  }

  return (
    <Layout
      pageTitle="Home"
      pageDescription="Home Page"
      pageImage="https://orivesiadmin.net/oas_image.jpg"
      pageUrl="/"
      transparentHeader={true}
    >
      <Hero
        spaced={false}
        Image={Image}
        desktopImg={image}
        mobileImg={image}
        overlay={true}
        imagePosition='top'
        overlayClasses='bg-gradient-to-b from-transparent to-custom-opacity backdrop-filter backdrop-blur'
      >
        <AnimateIn delay={1000} className='container text-center flex flex-col justify-center items-center gap-6'>
          <h1 className='text-7xl lg:text-8xl font-sketch uppercase font-bold text-accent-500 opacity-90 -mb-3 drop-shadow-2xl tracking-wide'>Orivesi All Stars</h1>

          {/* DIVIDER */}
          <div className='w-2/3 h-[2px] bg-opacity-30 bg-accent-500 z-10 rounded-full' />

          <h2 className='text-2xl lg:text-5xl font-sketch text-primary-500 opacity-90 lowercase drop-shadow-2xl tracking-wide'>Suomen Suurin Pelimanniorkesteri</h2>
        </AnimateIn>
      </Hero>

      <div className='mb-16'>
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
