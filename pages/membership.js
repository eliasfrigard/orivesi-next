import axios from 'axios'
import md from 'markdown-it'

import Title from '../components/Title'
import Layout from '../components/Layout'

export default function Membership({ membership }) {
  return (
    <Layout>
      <div className='container flex flex-col mb-24 mt-2 lg:mt-16 items-center gap-16'>
        <Title>Liity Jäseneksi</Title>

        <div className='flex gap-16'>
          <div
            className='prose max-w-3xl xl:prose-lg leading-[2.1rem]'
            dangerouslySetInnerHTML={{ __html: md().render(membership.Text) }}
          />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get(`${process.env.API_ADDRESS}/membership`)

  return {
    props: {
      membership: response.data.data.attributes,
    },
  }
}
