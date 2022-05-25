import axios from 'axios'
import Image from 'next/image'
import Moment from 'react-moment'
import md from 'markdown-it'

import Layout from '../../components/Layout'

import { BsPerson } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineMail, AiOutlineFacebook, AiOutlineLink, AiOutlinePrinter } from 'react-icons/ai'

export default function ScorePage({ post: score }) {
  const myLoader = ({ src, width, quality }) => {
    return score.Image.url
  }

  return (
    <Layout>
      <div className='container flex my-16 flex-col items-center'>
        <div className='w-[925px] flex flex-col '>
          <h1 className='mb-8 break-words'>{score.Title}</h1>
          <div className='meta flex gap-3 items-center mt-5'>
            <BiTimeFive className='text-2xl' />
            <div className='flex gap-1.5'>
              Last updated
              <Moment locale='fi' fromNow>
                {score.updated_at}
              </Moment>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const response = await axios.get('https://orivesiadmin.net/music-scores')

  const paths = response.data.map((post) => ({
    params: {
      slug: post.id.toString(),
    },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const response = await axios.get(`https://orivesiadmin.net/music-scores/${slug}`)

  return {
    props: {
      post: response.data,
    },
  }
}
