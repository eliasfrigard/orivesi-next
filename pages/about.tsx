import md from 'markdown-it'
import axios from 'axios'

import Layout from '../components/Layouts/Default'

export default function About({ about }) {
  return (
    <Layout
      pageTitle='About'
      pageDescription='About Page'
      pageImage={about.Images.data[0].attributes.url}
      pageUrl='/about'
    >
      <div
        className='container my-16 items-center prose max-w-5xl leading-loose prose-img:roundedShadow font-work'
        dangerouslySetInnerHTML={{ __html: md().render(about.Text) }}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get(`${process.env.API_ADDRESS}/about?populate=Images`)

  return {
    props: {
      about: response.data.data.attributes,
    },
  }
}
