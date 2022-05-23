import axios from 'axios'
import Image from 'next/image'
import Moment from 'react-moment'
import md from 'markdown-it'

import Layout from '../../components/Layout'

import { BsPerson } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineMail, AiOutlineFacebook, AiOutlineLink, AiOutlinePrinter } from 'react-icons/ai'

export default function NewsPage({ post }) {
  const myLoader = ({ src, width, quality }) => {
    return post.Image.url
  }

  return (
    <Layout>
      <div className='container flex my-16 flex-col items-center'>
        <div className='w-[925px]'>
          <h1 className='mb-8 '>{post.Title}</h1>
          <div className='meta flex gap-3 items-center mt-5'>
            <BiTimeFive className='text-2xl' />
            <Moment format={'LL '}>{post.created_at}</Moment>
            <BsPerson className='text-2xl' />
            <p>{post.Author}</p>
          </div>
        </div>
        <div className='w-full m-16 aspect-79/50 img relative drop-shadow'>
          <Image
            className=' rounded'
            loader={myLoader}
            src={post.Image.url}
            alt='Picture of the author'
            layout='fill'
          />
        </div>
        <div className='flex gap-16'>
          <div className='flex flex-col gap-5 mt-[5px]'>
            <AiOutlineLink className='text-3xl' />
            <AiOutlineMail className='text-3xl' />
            <AiOutlinePrinter className='text-3xl' />
            <AiOutlineFacebook className='text-3xl' />
          </div>
          <div
            className='prose max-w-3xl leading-[2rem]'
            dangerouslySetInnerHTML={{ __html: md().render(post.Post) }}
          />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const response = await axios.get('https://orivesiadmin.net/posts')

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
  console.log(slug)

  const response = await axios.get(`https://orivesiadmin.net/posts/${slug}`)

  return {
    props: {
      post: response.data,
    },
  }
}