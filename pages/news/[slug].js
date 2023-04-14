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
import { FiChevronRight } from 'react-icons/fi'
import { MdOutlineArticle } from 'react-icons/md'

export default function NewsPage({ id, post }) {
  const myLoader = () => {
    return post.Images.data[0].attributes.url
  }

  return (
    <Layout
      pageTitle={post.Title}
      pageDescription={post.Text.substring(0, 100)}
      pageImage={post.Images.data[0].attributes.url}
      pageUrl={`/news/${id}`}
    >
      <div className='container flex my-12 pt-[53px] flex-col items-center'>
        <div className='md:container max-w-full flex flex-col gap-4 md:gap-5'>
          <div className='flex items-center gap-3 text-md mt-[-3rem] text-grey-300'>
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

          <Title version='v3'>{post.Title}</Title>

          <div className='meta flex flex-col lg:flex-row gap-4 lg:gap-6 items-start text-accent-600'>
            <div className='flex gap-4 lg:gap-2 items-center justify-center text-accent-600'>
              <BiTimeFive className='text-xl text-secondary-600' />
              <Moment className='font-work text-lg' format={'LL '}>
                {post.createdAt}
              </Moment>
            </div>
            <div className='flex gap-4 lg:gap-2 items-center justify-center'>
              <BsPerson className='text-xl text-secondary-600' />
              <p className='font-work text-lg'>{post.Author}</p>
            </div>
          </div>
        </div>

        {post.Youtube ? (
          <div className='w-full my-10 aspect-video overflow-hidden rounded-xl shadow-xl'>
            <iframe
              className='w-full aspect-video'
              src={`https://www.youtube.com/embed/${post.Youtube}`}
              title='YouTube video player'
              frameBorder={0}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              loading='lazy'
            ></iframe>
          </div>
        ) : (
          <div className='container w-full my-10 aspect-79/52 img relative shadow-md'>
            <Image
              className='rounded-lg'
              loader={myLoader}
              src={post.Images.data[0].attributes.url}
              alt={post.Images.data[0].attributes.alternativeText}
              layout='fill'
              objectFit='cover'
            />
          </div>
        )}
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-16 justify-center items-center md:border border-secondary-500 border-opacity-40 rounded-xl md:shadow md:px-8 lg:px-12 md:py-12 lg:py-12'>
          <div
            className='prose max-w-4xl leading-[2.1rem]'
            dangerouslySetInnerHTML={{ __html: md().render(post.Text) }}
          />
        </div>
      </div>

      {/* Associated Scores */}
      {post.music_scores.data.length > 0 && (
        <div className='container my-16 md:my-24'>
          <Title version='v2'>Liittyviä nuotteja.</Title>

          <div className='container flex flex-col gap-3 md:gap-4 my-8 px-0'>
            {post.music_scores.data.map((score) => (
              <Score
                key={score.id}
                link={score.id}
                title={score.attributes.Title}
                type={score.attributes.Type}
                composer={score.attributes.Composer}
              ></Score>
            ))}
          </div>
        </div>
      )}

      {/* Associated Events */}
      {post.events.data.length > 0 && (
        <div className='container my-12 lg:mb-24'>
          <div className='max-w-[1400px] flex flex-wrap gap-10 justify-center items-center my-8 lg:my-16'>
            {post.events.data.map((event) => (
              <EventPreview
                link={event.id}
                date={event.attributes.Start}
                title={event.attributes.Title}
                location={event.attributes.Location}
                city={event.attributes.City}
                country={event.attributes.Country}
                key={event.attributes.id}
              />
            ))}
          </div>
        </div>
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
      id: response.data.data.id,
      post: response.data.data.attributes,
    },
  }
}
