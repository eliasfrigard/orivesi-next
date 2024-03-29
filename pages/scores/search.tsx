import Layout from '../../components/Layouts/Default'
import Score from '../../components/Modules/ScorePreview'
import SearchModule from '../../components/Modules/SearchModule'
import Title from '../../components/Title'
import axios from 'axios'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ScoreSearch() {
  const router = useRouter()
  const query = router.query.query

  const [scores, setScores] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${process.env.API_ADDRESS}/music-scores/search?query=${query}`)

      setScores(response.data)
    }

    fetchData()
  }, [query])

  return (
    <Layout
      pageTitle="Search"
      pageDescription={`Orivesi All Stars score search and results`}
      pageImage="https://orivesiadmin.net/oas_image.jpg"
      pageUrl="/scores/search"
    >
      <div className='flex flex-col gap-16 my-16'>
        <Title>Hakutulokset</Title>
        <div>
          <SearchModule title='Etsitkö jotain muuta?' />
          {scores.length > 0 ? (
            <div className='container flex flex-col gap-4 mt-16 mb-8 md:my-16'>
              <p className='text-center font-work font-medium text-lg tracking-wide sm:hidden mt-[-30px]'>
                Hakuehdoilla löytyi <b>{scores.length}</b> nuottia.
              </p>
              <Score title='Nimi' type='Tanssilaji' composer='Säveltäjä' isHeader={true} />
              {scores.map((score) => (
                <div
                  key={score.id}
                  className='flex flex-wrap flex-row justify-between md:justify-center gap-6 xl:gap-y-16'
                >
                  <Score
                    key={score.id}
                    link={score.id}
                    title={score.Title}
                    type={score.Type}
                    composer={score.Composer}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className='container flex mt-32 mb-16 justify-center items-center'>
              <Title version='v2'>Valitettavasti nuotteja ei löytynyt.</Title>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
