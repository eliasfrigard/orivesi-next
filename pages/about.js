import axios from 'axios'
import Image from 'next/image'
import md from 'markdown-it'

import Title from '../components/Title'
import Layout from '../components/Layout'

export default function About({ about }) {
  const myLoader = () => {
    return about.Images.data[0].attributes.url
  }

  return (
    <Layout
      pageTitle="About"
      pageDescription="Orivesi All Stars biography and information"
      pageUrl="/about"
    >
      <div className='container flex flex-col mb-24 mt-2 lg:mt-16 items-center'>
        <div className='hidden lg:block'>
          <h3 className='text-6xl font-sketch uppercase font-bold tracking-wider text-center mb-4'>
            {about.Supertitle}
          </h3>
          <Title>{about.Title}</Title>
        </div>

        <div className='lg:hidden'>
          <Title>{about.Supertitle + ' ' + about.Title}</Title>
        </div>

        <div distance={0} className='w-[90vw] xl:w-[60vw] my-16 aspect-79/52 img relative shadow-xl'>
          <Image
            className='rounded-lg'
            loader={myLoader}
            src={about.Images.data[0].attributes.url}
            alt={about.Images.data[0].attributes.alternativeText}
            width='100%'
            height='100%'
            layout='fill'
            objectFit='cover'
          />
        </div>

        <div className='flex gap-16'>
          <div
            className='prose max-w-3xl xl:prose-lg leading-[2.1rem]'
            dangerouslySetInnerHTML={{ __html: md().render(about.Text) }}
          />
        </div>
      </div>
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
