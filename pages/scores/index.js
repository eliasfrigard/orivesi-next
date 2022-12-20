import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaHeart, FaStar } from 'react-icons/fa'
import Layout from '../../components/Layout'
import Score from '../../components/Modules/ScorePreview'
import SearchModule from '../../components/Modules/SearchModule'
import Title from '../../components/Title'
import InfoModule from '../../components/Modules/InfoModule'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Home({ scores }) {
  const [filteredScores, setFilteredScores] = useState(scores)
  const [filteredBy, setFilteredBy] = useState('title')

  const [hasMore, setHasMore] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(24)
  const [scoreSublist, setScoreSublist] = useState(scores.slice(0, 24))

  const fetchMore = () => {
    if (scoreSublist.length >= scores.length) {
      setHasMore(false)
    } else {
      const nextIndex = currentIndex + 25

      setScoreSublist(scoreSublist.concat(scores.slice(currentIndex, nextIndex)))
      setCurrentIndex(nextIndex)
    }
  }

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

      <div className='flex flex-col gap-16 lg:my-16'>
        <Title>Nuotit</Title>
        <div>
          <SearchModule handleSubmit={handleSubmit}></SearchModule>
          <InfiniteScroll dataLength={scoreSublist.length} next={fetchMore} hasMore={hasMore}>
            <div className='container flex flex-col gap-4 mt-16 mb-8 md:my-16'>
              {scoreSublist.map((score) => (
                <div
                  key={score.id}
                  className='flex flex-wrap flex-row justify-between md:justify-center gap-6 xl:gap-16'
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
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  let page = 0
  let hasNextPage = true
  let scores = []

  while (hasNextPage) {
    page += 1

    const res = await axios.get(
      `${process.env.API_ADDRESS}/music-scores?fields=Title,Composer,Type,Status&sort=Title:asc&pagination[page]=${page}`
    )

    scores = [...scores, ...res.data.data]
    hasNextPage = page < res.data.meta.pagination.pageCount
  }

  let scoreWithSlug = scores.map((score) => {
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
