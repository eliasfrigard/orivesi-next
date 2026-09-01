import md from 'markdown-it'

import Layout from '../components/Layouts/Default'
import api from '../utils/api'

export default function About({ about }) {
  return (
    <Layout
      pageTitle='About'
      pageDescription='About Page'
      pageImage={about.Images.data[0].attributes.url}
      pageUrl='/about'
    >
      <div
        className='container my-8 md:my-16 items-center prose max-w-5xl leading-loose prose-img:roundedShadow font-work'
        dangerouslySetInnerHTML={{ __html: md().render(about.Text) }}
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await api.get('/about?populate=Images')

  return {
    props: {
      about: response.data.data.attributes,
    },
  }
}
