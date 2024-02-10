import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaHeart, FaStar } from 'react-icons/fa'
import Layout from '../../components/Layouts/Default'
import Score from '../../components/Modules/ScorePreview'
import SearchModule from '../../components/Modules/SearchModule'
import Title from '../../components/Title'
import InfoModule from '../../components/Modules/InfoModule'
import Pagination from '../../components/Pagination'

export default function Home({ scores, page, pageCount, pageSize, totalScores }) {
  const [filteredScores, setFilteredScores] = useState(scores)
  const [filteredBy, setFilteredBy] = useState('title')

  useEffect(() => {
    const sortedArray = filteredScores.sort((a, b) => {
      if (a[filteredBy] > b[filteredBy]) {
        return -1
      }
      if (b[filteredBy] > a[filteredBy]) {
        return 1
      }
      return 0
    })

    setFilteredScores(sortedArray)
  }, [filteredBy, filteredScores])

  const onChangeFilter = (event) => {
    const capitalized = event.target.id.charAt(0).toUpperCase() + event.target.id.slice(1)

    setFilteredBy(capitalized)
  }

  return (
    <Layout
      pageTitle={`Scores ${page}`}
      pageDescription={`Page ${page} of Orivesi All Stars music scores`}
      pageUrl={`/scores/${page}`}
    >
      <InfoModule>
        <div className='flex flex-col gap-6'>
          <FaHeart className='text-xl text-red-500' />
          <p className='inline'>
            Yhdellä sydämellä merkityt kappaleet ovat aktiivisoitossa tällä hetkellä. Niistä on siis hyvä
            aloittaa, jos olet uusi materiaalin parissa.
          </p>
          <div className='flex gap-2'>
            <FaHeart className='text-xl text-red-500' />
            <FaHeart className='text-xl text-red-500' />
          </div>
          <p>
            Kahdella sydämellä merkityt ovat monelle vanhaa tuttua ohjelmistoa, joilla tarvittaessa
            täydennnetään esimerkiksi keikkasettiä.
          </p>
          <FaStar className='text-xl text-yellow-500' />
          <p>Tähdellä merkityt ovat uusimpia tuttavuuksia!</p>
        </div>
      </InfoModule>

      <div className='flex flex-col gap-16'>
        <Title>Nuotit</Title>
        <div>
          <SearchModule />
          <div className='container flex flex-col gap-3 md:gap-4 mt-16 mb-0 md:mt-16'>
            <Score
              onChangeFilter={onChangeFilter}
              title='Nimi'
              type='Tanssilaji'
              composer='Säveltäjä'
              isHeader={true}
            ></Score>
            {filteredScores.map((score) => (
              <div
                key={score.id}
                className='flex flex-wrap flex-row justify-between md:justify-center gap-6 xl:gap-y-16'
              >
                <Score
                  key={score.slug}
                  link={score.slug}
                  title={score.attributes.Title}
                  type={score.attributes.Type}
                  composer={score.attributes.Composer}
                  status={score.attributes.Status}
                ></Score>
              </div>
            ))}
            <Pagination
              currentPage={page}
              pageCount={pageCount}
              pageSize={pageSize}
              total={totalScores}
              elementsOnPage={scores.length}
            ></Pagination>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const response = await axios.get(`${process.env.API_ADDRESS}/music-scores`)

  const paths = []

  for (let i = 0; i < response.data.meta.pagination.pageCount; i++) {
    paths.push({
      params: { page: (i + 1).toString() },
    })
  }

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { page } }) {
  const response = await axios.get(
    `${process.env.API_ADDRESS}/music-scores?pagination[page]=${page}&sort=Title`
  )

  let scoreWithSlug = response.data.data.map((score) => {
    return {
      slug: score.id,
      ...score,
    }
  })

  return {
    props: {
      page: response.data.meta.pagination.page,
      pageCount: response.data.meta.pagination.pageCount,
      totalScores: response.data.meta.pagination.total,
      pageSize: response.data.meta.pagination.pageSize,
      scores: scoreWithSlug,
    },
  }
}
