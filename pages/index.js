import axios from 'axios'
import Layout from '../components/Layout'
import HighlightText from '../components/Modules/HighlightText'
import NewsHighlights from '../components/Modules/NewsHighlights'
import EventHighlights from '../components/Modules/EventHighlights'

export default function Home({ news }) {
  return (
    <Layout>
      <div className='h-[3000px] container'>
        <HighlightText title='ORIVESI ALLSTARS' subtitle='The Great Happy Orchestra'></HighlightText>
        <div className='h-[50px]'></div>
        <NewsHighlights news={news}></NewsHighlights>
        <EventHighlights news={news}></EventHighlights>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get('https://orivesiadmin.net/posts?_limit=4&_sort=created_at:DESC')

  let newsWithSlug = response.data.map((post) => {
    return {
      slug: post.id,
      ...post,
    }
  })

  // newsWithSlug = newsWithSlug.length === 3 ? newsWithSlug.slice(0, 2) : newsWithSlug

  return {
    props: {
      news: newsWithSlug,
    },
  }
}
