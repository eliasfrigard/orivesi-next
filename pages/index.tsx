import Image from 'next/image'
import Layout from '../components/Layouts/Default'
import api from '../utils/api'
import NewsHighlights from '../components/Modules/NewsHighlights'
import EventHighlights from '../components/Modules/EventHighlights'
import ShortPresentation from '../components/Modules/ShortPresentation'
import AnimateIn from '../components/AnimateIn'

import Hero from '../components/Modules/Hero'
import Button from '../components/Button'

export default function Home({ welcome, news, events }) {
  function isPrevious(date) {
    return new Date(date).getTime() < Date.now()
  }

  // Remove previous and take the next three events with the earliest date.
  let nextEvents = events.filter(
    (event) => !isPrevious(event.attributes.End || event.attributes.Start),
  )

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
        imagePosition="top"
        overlayClasses="bg-gradient-to-b from-transparent to-custom-opacity backdrop-filter backdrop-blur"
      >
        <AnimateIn
          delay={1000}
          className="container text-center flex flex-col justify-center items-center gap-6"
        >
          <h1 className="text-7xl lg:text-8xl font-sketch uppercase font-bold text-accent-500 opacity-90 -mb-3 drop-shadow-2xl tracking-wide">
            Orivesi All Stars
          </h1>

          {/* DIVIDER */}
          <div className="w-2/3 h-[2px] bg-opacity-30 bg-accent-500 z-10 rounded-full" />

          <h2 className="text-2xl lg:text-5xl font-sketch text-primary-500 opacity-90 lowercase drop-shadow-2xl tracking-wide">
            Suomen Suurin Pelimanniorkesteri
          </h2>

          <div className="md:mt-3 flex flex-col gap-3">
            <Button
              color="bg-accent-500"
              url="https://forms.gle/FSXQmBPHeyuRWH8x5"
              externalUrl={true}
            >
              <div className="flex flex-col md:flex-row">
                <p>Musta se vares -&nbsp;</p>
                <p>Levyn ennakkotilaus</p>
              </div>
            </Button>
            <Button
              color="bg-accent-500"
              url="https://forms.gle/7pRrHjKAwKhZvKDq6"
              externalUrl={true}
            >
              <div className="flex flex-col md:flex-row">
                <p>Yrityksille:&nbsp;</p>
                <p>Yhteistyökumppaniksi levylle</p>
              </div>
            </Button>
          </div>
        </AnimateIn>
      </Hero>

      <div className="mb-16">
        <div className="flex flex-col justify-center items-center gap-16">
          <ShortPresentation
            title={welcome.Title}
            text={welcome.Text}
            linkText={welcome.Link_Text}
            linkUrl={welcome.Link_URL}
          />

          <AnimateIn className="flex flex-col items-center text-center gap-6 px-4">
            <h2 className="text-3xl md:text-4xl font-sketch text-accent-500 tracking-wide">
              Musta se vares — Levyn Ennakkotilaus
            </h2>
            <p className="text-secondary-600 font-semibold font-work max-w-xl text-lg leading-relaxed">
              Orivesi All Starsin uuden levyn ennakkotilaus on nyt avoinna!
              Tilaa omasi alla olevan linkin kautta.
            </p>
            <Button
              color="bg-accent-500"
              url="https://forms.gle/FSXQmBPHeyuRWH8x5"
              externalUrl={true}
            >
              Tilaa Ennakkoon
            </Button>
          </AnimateIn>

          <NewsHighlights news={latestNews}></NewsHighlights>
          <EventHighlights events={nextEvents}></EventHighlights>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const welcomeRes = await api.get('/welcome')

  const postRes = await api.get('/posts?_limit=4&sort=createdAt:desc&populate=Images')

  const eventRes = await api.get('/events?sort=Start:asc&pagination[pageSize]=100')

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
