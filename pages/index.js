import Layout from '../components/Layout'
import NewsHighlights from '../components/Modules/NewsHighlights'
import NewsPreview from '../components/Modules/NewsPreview'
import HighlightText from '../components/Modules/HighlightText'

export default function Home() {
  return (
    <Layout>
      <div className='h-[3000px] container'>
        <HighlightText title='ORIVESI ALLSTARS' subtitle='The Great Happy Orchestra'></HighlightText>
        {/* <NewsHighlights></NewsHighlights> */}

        <NewsHighlights></NewsHighlights>
      </div>
    </Layout>
  )
}
