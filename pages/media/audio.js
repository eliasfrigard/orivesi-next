import axios from 'axios'

import Layout from '../../components/Layout'
import Title from '../../components/Title'
import Player from '../../components/Player'
import AnimateIn from '../../components/AnimateIn'

export default function Images({ audio }) {
  return (
    <Layout>
      <div className='sm:my-16'>
        <AnimateIn distance={0}>
          <Title>Äänitteet</Title>
        </AnimateIn>
        <div className='container flex flex-wrap my-16 gap-6 items-center justify-center w-full'>
          {audio.map((track) => (
            <AnimateIn key={track.id} opacityDuration={200} classes='w-full'>
              <Player title={track.name} url={track.url}></Player>
            </AnimateIn>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get(`${process.env.API_ADDRESS}/upload/files?populate=*&sort=name:asc`)

  const filteredFiles = response.data.filter((file) => file.mime.includes('audio'))

  return {
    props: {
      audio: filteredFiles,
    },
  }
}
