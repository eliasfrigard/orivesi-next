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
      <div className='container flex my-8 lg:my-24 flex-col items-center'>
        <div className='md:container lg:w-[925px] max-w-full'>
          <div className='absolute flex items-center gap-3 text-md mt-[-3rem] text-grey-300'>
            <div className='flex items-center gap-2 hover:text-grey-800 hover:font-medium duration-75'>
              <MdOutlineArticle />
              <Link href='/news'>Uutiset</Link>
            </div>
            <div className='flex items-center gap-2'>
              <FiChevronRight></FiChevronRight>
              <p className='hidden sm:inline whitespace-nowrap'>{post.Title}</p>
              <p className='sm:hidden whitespace-nowrap'>{post.Title.substring(0, 15)}...</p>
            </div>
          </div>

          <Title className='mb-8' version='v3'>
            {post.Title}
          </Title>
          <div className='meta flex flex-col lg:flex-row gap-4 lg:gap-6 items-start mt-8'>
            <div className='flex gap-4 lg:gap-2 items-center justify-center'>
              <BiTimeFive className='text-2xl' />
              <Moment className='font-work text-lg' format={'LL '}>
                {post.created_at}
              </Moment>
            </div>
            <div className='flex gap-4 lg:gap-2 items-center justify-center'>
              <BsPerson className='text-2xl' />
              <p className='font-work text-lg'>{post.Author}</p>
            </div>
          </div>
        </div>
        <div className='w-[90vw] xl:w-[60vw] mb-10 lg:mb-16 m-10 lg:m-16 aspect-79/52 img relative shadow-xl'>
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
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-16'>
          {/* SIDEBAR IS DISABLED FOR NOW UNTIL BETTER CONTENT. */}
          {/* <div className='flex lg:flex-col gap-5 lg:mt-[5px] my-2 lg:my-0'>
            <AiOutlineLink className='text-3xl' />
            <AiOutlineMail className='text-3xl' />
            <AiOutlinePrinter className='text-3xl' />
            <AiOutlineFacebook className='text-3xl' />
          </div> */}
          <div
            className='prose max-w-3xl xl:prose-lg leading-[2.1rem]'
            dangerouslySetInnerHTML={{ __html: md().render(post.Text) }}
          />
        </div>
      </div>
      {/* Associated Scores */}
      {post.music_scores.data.length > 0 ? (
        <div className='container my-12 lg:my-32'>
          <Title version='v2'>Littyviä nuotteja.</Title>

          <div className='flex flex-col gap-8 my-8 lg:my-16'>
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
        <div className='container my-12 lg:my-32'>
          <Title version='v2'>Littyviä tapahtumia.</Title>

          <div className='max-w-[1400px] flex flex-wrap gap-10 justify-center items-center my-8 lg:my-16'>
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
