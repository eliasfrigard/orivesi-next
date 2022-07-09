import Layout from '../../components/Layout'
import Score from '../../components/Modules/ScorePreview'
import Search from '../../components/Search'

import { useRouter } from 'next/router'

const ScoreSearch = () => {
  const router = useRouter()
  const { query } = router.query

  return (
    <Layout>
      <></>
    </Layout>
  )
}

export default ScoreSearch
