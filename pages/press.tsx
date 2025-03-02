import axios from 'axios'
import Layout from '../components/Layouts/Default'
import Image from 'next/image'

const ImageItem = ({ image }) => {
  // You can optionally generate or fetch a blurred low-quality image URL here
  const blurDataURL = image.url + '?w=10&h=10&fit=cover' // Adjust this to suit your use case for a low-res image

  return (
    <div className='group relative w-full shadow rounded aspect-square'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={image.url}
        download={image.alt || 'Orivesi All Stars'}
        className='w-full h-full block'
      >
        <Image
          src={image.url}
          alt={image.alt}
          fill
          placeholder='blur' // This tells Next.js to use the blurred version as a placeholder
          blurDataURL={blurDataURL} // This is the low-quality image URL
          className='object-cover w-full shadow rounded aspect-square'
        />
        <div className='w-full h-full bg-black absolute rounded opacity-0 group-hover:opacity-20 duration-100 cursor-pointer' />
      </a>
    </div>
  )
}

export default function Press({ press }) {
  return (
    <Layout
      pageTitle='Pressi'
      pageDescription='Pressi Page'
      pageImage={press.Images.data[0].attributes.url}
      pageUrl='/press'
    >
      <div className='w-full container my-8 md:my-16'>
        <div className='grid grid-cols-3 gap-4'>
          {press.Images.data.map((image, index) => (
            <ImageItem
              key={index}
              image={image.attributes}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get(`${process.env.API_ADDRESS}/pressi?populate=Images`)

  return {
    props: {
      press: response.data.data.attributes,
    },
  }
}
