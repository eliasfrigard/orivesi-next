import axios from 'axios'

import Layout from '../../components/Layout'
import Title from '../../components/Title'
import Player from '../../components/Player'

export default function Images({ audio }) {
  console.log(audio)
  return (
    <Layout>
      <div className='sm:my-16'>
        <Title>Äänitteet</Title>
        <div className='container flex flex-wrap my-16 gap-6 items-center justify-center w-full'>
          {audio.map((track) => (
            <Player key={track.id} title={track.name} url={track.url}></Player>
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
