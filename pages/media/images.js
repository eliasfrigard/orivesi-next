import axios from 'axios'
import Image from 'next/image'
import md from 'markdown-it'

import Layout from '../../components/Layout'
import Title from '../../components/Title'
import ImagePreview from '../../components/Modules/ImagePreview'

export default function Images({ images }) {
  return (
    <Layout>
      <div className='sm:my-16'>
        <Title>Kuvat</Title>
        <div className='flex flex-wrap my-16 gap-6 items-center justify-center w-full'>
          {images.map((image) => (
            <div
              key={image.id}
              className='aspect-79/52 relative w-[20vw] overflow-hidden rounded-lg shadow-md'
            >
              <ImagePreview image={image} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get(`${process.env.API_ADDRESS}/upload/files?populate=*`)

  const filteredFiles = response.data.filter((file) => file.mime.includes('image'))

  return {
    props: {
      images: filteredFiles,
    },
  }
}
