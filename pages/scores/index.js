import axios from 'axios'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Score from '../../components/Modules/ScorePreview'
import SearchModule from '../../components/Modules/SearchModule'
import Title from '../../components/Title'
import InfoModule from '../../components/Modules/InfoModule'
import { FaHeart, FaStar } from 'react-icons/fa'

export default function Home({ scores }) {
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

  const handleSubmit = (values) => {
    //
  }

  return (
    <Layout>
      <InfoModule>
        <div className='flex flex-col gap-6'>
          <FaHeart className='text-xl text-secondary-500' />
          <p className='inline'>
            Yhdellä sydämellä merkityt kappaleet ovat aktiivisoitossa tällä hetkellä. Niistä on siis hyvä
            aloittaa, jos olet uusi materiaalin parissa.
          </p>
          <div className='flex gap-2'>
            <FaHeart className='text-xl text-secondary-500' />
            <FaHeart className='text-xl text-secondary-500' />
          </div>
          <p>
            Kahdella sydämellä merkityt ovat monelle vanhaa tuttua ohjelmistoa, joilla tarvittaessa
            täydennnetään esimerkiksi keikkasettiä.
          </p>
          <FaStar className='text-xl text-accent-500' />
          <p>Tähdellä merkityt ovat uusimpia tuttavuuksia!</p>
        </div>
      </InfoModule>

      <div className='flex flex-col gap-16 lg:my-16'>
        <Title>Nuotit</Title>
        <div>
          <SearchModule handleSubmit={handleSubmit}></SearchModule>
          <div className='container flex flex-col gap-8 mt-16 mb-8 md:my-16'>
            <p className='text-center font-work font-medium text-lg tracking-wide sm:hidden mt-[-30px]'>
              Arkistosta löydät <b>{filteredScores.length}</b> nuottia.
            </p>
            <Score
              onChangeFilter={onChangeFilter}
              title='Nimi'
              type='Tanssilaji'
              composer='Säveltäjä'
              isHeader={true}
            ></Score>
            {filteredScores.map((score) => (
              <Score
                key={score.slug}
                link={score.slug}
                title={score.attributes.Title}
                type={score.attributes.Type}
                composer={score.attributes.Composer}
                status={score.attributes.Status}
              ></Score>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.API_ADDRESS}/music-scores?fields=Title,Composer,Type,Status&sort=Title:asc`
  )

  let scoreWithSlug = response.data.data.map((score) => {
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
