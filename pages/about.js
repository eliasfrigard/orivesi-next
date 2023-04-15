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
      <div distance={0} className='md:w-[90vw] xl:w-full h-screen md:aspect-79/52 mb-8 img shadow relative -mt-[135px]'>
        <Image
          loader={myLoader}
          src={about.Images.data[0].attributes.url}
          alt={about.Images.data[0].attributes.alternativeText}
          layout='fill'
          objectFit='cover'
        />
        <div>
          <h1 className='block absolute text-white font-bold font-sketch opacity-80 text-4xl md:text-6xl xl:text-8xl text-center top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2'>
            Suomen suurin pelimanniorkesteri!
          </h1>
        </div>
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
