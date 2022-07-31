import axios from 'axios'
import Image from 'next/image'
import md from 'markdown-it'

import Title from '../components/Title'
import Layout from '../components/Layout'
import AnimateIn from '../components/AnimateIn'

export default function About({ about }) {
  const myLoader = ({ src, width, quality }) => {
    return about.Images.data[0].attributes.url
  }

  return (
    <Layout>
      <div className='container flex flex-col mb-24 mt-2 lg:mt-16 items-center'>
        <div className='hidden lg:block'>
          <AnimateIn distance={0}>
            <h3 className='text-6xl font-sketch uppercase font-bold tracking-wider text-center mb-4'>
              {about.Supertitle}
            </h3>
            <Title>{about.Title}</Title>
          </AnimateIn>
        </div>

        <div className='lg:hidden'>
          <Title>{about.Supertitle + ' ' + about.Title}</Title>
        </div>

        <AnimateIn distance={0} classes='w-[90vw] xl:w-[60vw] my-16 aspect-79/52 img relative shadow-xl'>
          <Image
            className='rounded'
            loader={myLoader}
            src={about.Images.data[0].attributes.url}
            alt={about.Images.data[0].attributes.alternativeText}
            width='100%'
            height='100%'
            layout='fill'
            objectFit='cover'
          />
        </AnimateIn>

        <div className='flex gap-16'>
          <AnimateIn distance={0} threshold={0.1}>
            <div
              className='prose max-w-3xl xl:prose-lg leading-[2.1rem]'
              dangerouslySetInnerHTML={{ __html: md().render(about.Text) }}
            />
          </AnimateIn>
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
