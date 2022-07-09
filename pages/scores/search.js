import Layout from '../../components/Layout'
import Score from '../../components/Modules/ScorePreview'
import SearchModule from '../../components/Modules/SearchModule'
import Title from '../../components/Title'

import { useRouter } from 'next/router'

const ScoreSearch = () => {
  const router = useRouter()
  const { query } = router.query

  return (
    <Layout>
      <div className='flex flex-col gap-16 sm:my-16'>
        <Title>Hakutulokset</Title>
        <div>
          <div className='container flex flex-col gap-6 my-16'>
            <Score title='Nimi' type='Tanssilaji' composer='Säveltäjä' isHeader={true}></Score>
            {/* {filteredScores.map((score) => (
              <Score
              key={score.id}
              link={score.slug}
              title={score.Title}
              type={score.Dancetype}
              composer={score.Composer}
              ></Score>
            ))} */}
          </div>
          <SearchModule></SearchModule>
        </div>
      </div>
    </Layout>
  )
}

export default ScoreSearch
