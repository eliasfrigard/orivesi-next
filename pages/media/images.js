import axios from 'axios'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import ImagePreview from '../../components/Modules/ImagePreview'
import AnimateIn from '../../components/AnimateIn'

export default function Images({ images }) {
  return (
    <Layout>
      <div className='sm:my-16'>
        <AnimateIn distance={0}>
          <Title>Kuvat</Title>
        </AnimateIn>
        <div className='flex flex-wrap my-16 gap-8 md:gap-12 items-center justify-center w-full'>
          {images.map((image) => (
            <AnimateIn key={image.id} opacityDuration={200}>
              <div className='aspect-79/52 relative md:w-[20vw] min-w-[300px] overflow-hidden rounded-lg shadow-xl hover:shadow-lg duration-200 cursor-pointer'>
                <ImagePreview image={image} />
              </div>
            </AnimateIn>
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
