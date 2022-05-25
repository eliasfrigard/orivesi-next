import axios from 'axios'
import Layout from '../../components/Layout'
import Score from '../../components/Modules/Score'
import Search from '../../components/Search'

export default function Home({ scores }) {
  return (
    <Layout>
      <div className='flex flex-col container gap-16 my-16'>
        <h3 className='text-5xl tracking-wider text-center'>Nuotit</h3>
        <Search></Search>
        <div className='flex flex-col gap-4'>
          <Score title='Title' type='Dance Type' composer='Composer' isHeader={true}></Score>
          {scores.map((score) => (
            <Score
              key={score.id}
              link={score.slug}
              title={score.Title}
              type={score.Dancetype}
              composer={score.Composer}
            ></Score>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get('https://orivesiadmin.net/music-scores')

  let scoreWithSlug = response.data.map((score) => {
    return {
      slug: score.id,
      ...score,
    }
  })

  return {
    props: {
      scores: scoreWithSlug,
    },
  }
}
