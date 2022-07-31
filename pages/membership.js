import axios from 'axios'
import md from 'markdown-it'

import Title from '../components/Title'
import Layout from '../components/Layout'
import AnimateIn from '../components/AnimateIn'

export default function Membership({ membership }) {
  return (
    <Layout>
      <div className='container flex flex-col mb-24 mt-2 lg:mt-16 items-center gap-16'>
        <AnimateIn distance={0}>
          <Title>Liity Jäseneksi</Title>
        </AnimateIn>
        <div className='flex gap-16'>
          <AnimateIn distance={0} threshold={0.1}>
            <div
              className='prose max-w-3xl xl:prose-lg leading-[2.1rem]'
              dangerouslySetInnerHTML={{ __html: md().render(membership.Text) }}
            />
          </AnimateIn>
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
