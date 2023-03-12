import axios from 'axios'
import md from 'markdown-it'

import Title from '../components/Title'
import Layout from '../components/Layout'

export default function Membership({ membership }) {
  return (
    <Layout
      pageTitle="Membership"
      pageDescription="Orivesi All Stars membership information"
      pageUrl="/membership"
    >
      <div className='container flex flex-col mb-24 mt-2 lg:mt-16 items-center gap-16'>
        <Title>Liity Jäseneksi</Title>
        <div className='flex gap-16'>
          <div
            className='prose max-w-3xl xl:prose-lg leading-[2.1rem] prose-hr:border-secondary-400 prose-hr:border-opacity-40'
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
