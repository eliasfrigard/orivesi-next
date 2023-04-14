import axios from 'axios'
import Image from 'next/image'
import md from 'markdown-it'

import AnimateIn from '../components/AnimateIn'
import Layout from '../components/Layout'

export default function About({ about }) {
  const myLoader = () => {
    return about.Images.data[0].attributes.url
  }

  return (
    <Layout>
      <div distance={0} className='w-[90vw] xl:w-full aspect-79/52 img shadow relative -mt-[135px]'>
        <Image
          loader={myLoader}
          src={about.Images.data[0].attributes.url}
          alt={about.Images.data[0].attributes.alternativeText}
          layout='fill'
          objectFit='cover'
        />
        <AnimateIn>
          <h1 className='hidden lg:block absolute text-white font-bold font-sketch opacity-80 text-6xl xl:text-8xl text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            Suomen suurin pelimanniorkesteri!
          </h1>
        </AnimateIn>
      </div>
      <div
        className='container mb-24 mt-2 lg:mt-16 items-center prose max-w-4xl leading-loose prose-img:roundedShadow font-work'
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
