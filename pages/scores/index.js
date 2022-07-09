import axios from 'axios'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Score from '../../components/Modules/ScorePreview'
import Search from '../../components/Search'

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
    console.log(values)
  }

  return (
    <Layout>
      <div className='flex flex-col container gap-16 my-16'>
        <h3 className='text-5xl tracking-wider text-center'>Nuotit</h3>
        <div>
          <Search handleSubmit={handleSubmit}></Search>
          <div className='flex flex-col gap-6 mt-16'>
            <Score
              onChangeFilter={onChangeFilter}
              title='Title'
              type='Dance Type'
              composer='Composer'
              isHeader={true}
            ></Score>
            {filteredScores.map((score) => (
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
