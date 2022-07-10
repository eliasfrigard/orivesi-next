import axios from 'axios'
import Image from 'next/image'
import Moment from 'react-moment'
import Link from 'next/link'
import md from 'markdown-it'

import Layout from '../../components/Layout'
import Title from '../../components/Title'
import Score from '../../components/Modules/ScorePreview'
import EventPreview from '../../components/Modules/EventPreview'

import { BsPerson } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineMail, AiOutlineFacebook, AiOutlineLink, AiOutlinePrinter } from 'react-icons/ai'
import { FiChevronRight } from 'react-icons/fi'
import { MdOutlineArticle } from 'react-icons/md'

export default function NewsPage({ post }) {
  const myLoader = ({ src, width, quality }) => {
    return post.Images.data[0].attributes.url
  }

  return (
    <Layout>
      <div className='container flex my-28 flex-col items-center'>
        <div className='w-[925px]'>
          <div className='absolute flex items-center gap-3 text-md mt-[-3rem] text-grey-300'>
            <div className='flex items-center gap-2 hover:text-grey-800 hover:font-medium duration-75'>
              <MdOutlineArticle />
              <Link href='/news'>Uutiset</Link>
            </div>
            <div className='flex items-center gap-2'>
              <FiChevronRight></FiChevronRight>
              <p>{post.Title}</p>
            </div>
          </div>

          <h1 className='mb-8 '>{post.Title}</h1>
          <div className='meta flex gap-3 items-center mt-5'>
            <BiTimeFive className='text-2xl' />
            <Moment format={'LL '}>{post.created_at}</Moment>
            <BsPerson className='text-2xl' />
            <p>{post.Author}</p>
          </div>
        </div>
        <div className='w-[90vw] xl:w-[60vw] m-16 aspect-79/52 img relative shadow-xl'>
          <Image
            className='rounded'
            loader={myLoader}
            src={post.Images.data[0].attributes.url}
            alt={post.Images.data[0].attributes.alternativeText}
            width='100%'
            height='100%'
            layout='fill'
            objectFit='cover'
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
            className='prose max-w-3xl xl:prose-lg leading-[2.1rem]'
            dangerouslySetInnerHTML={{ __html: md().render(post.Text) }}
          />
        </div>
      </div>
      {/* Associated Scores */}
      {post.music_scores.data.length > 0 ? (
        <div className='container my-32'>
          <Title version='v2'>Littyviä nuotteja.</Title>

          <div className='flex flex-col gap-8 my-16'>
            {post.music_scores.data.map((score) => (
              <Score
                key={score.slug}
                link={score.id}
                title={score.attributes.Title}
                type={score.attributes.Type}
                composer={score.attributes.Composer}
              ></Score>
            ))}
          </div>
        </div>
      ) : (
        ''
      )}
      {/* Associated Events */}
      {post.events.data.length > 0 ? (
        <div className='container my-32'>
          <Title version='v2'>Littyviä tapahtumia.</Title>

          <div className='max-w-[1400px] flex flex-wrap gap-10 justify-center items-center my-16'>
            {post.events.data.map((event) => (
              <EventPreview
                link={event.id}
                date={event.attributes.Start}
                title={event.attributes.Title}
                key={event.attributes.id}
              />
            ))}
          </div>
        </div>
      ) : (
        ''
      )}
    </Layout>
  )
}

export async function getStaticPaths() {
  const response = await axios.get(`${process.env.API_ADDRESS}/posts`)

  const paths = response.data.data.map((post) => ({
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
  const response = await axios.get(`${process.env.API_ADDRESS}/posts/${slug}?populate=*`)

  return {
    props: {
      post: response.data.data.attributes,
    },
  }
}
