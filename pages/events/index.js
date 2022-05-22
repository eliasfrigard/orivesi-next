import axios from 'axios'
import Layout from '../../components/Layout'

export default function News({}) {
  return (
    <Layout>
      <div className='flex flex-col	container'></div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get('https://orivesiadmin.net/posts')

  return {
    props: {
      events,
    },
  }
}
