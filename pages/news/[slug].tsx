import axios from 'axios'
import Image from 'next/image'
import Moment from 'react-moment'
import Link from 'next/link'
import md from 'markdown-it'

import Layout from '../../components/Layouts/Default'
import Score from '../../components/Modules/ScorePreview'
import EventPreview from '../../components/Modules/EventPreview'

import { HiArrowLeft } from 'react-icons/hi'

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
      <article className='max-w-3xl mx-auto px-5 pt-12 pb-20'>
        {/* Back link */}
        <Link
          href='/news'
          className='inline-flex items-center gap-1.5 text-sm font-work text-gray-400 hover:text-gray-600 transition-colors no-underline mb-10'
        >
          <HiArrowLeft className='text-sm' />
          <span>Uutiset</span>
        </Link>

        {/* Header */}
        <header className='mb-10'>
          <h1 className='font-round text-3xl md:text-4xl lg:text-[2.75rem] leading-tight tracking-wide text-secondary-700 mb-5'>
            {post.Title}
          </h1>
          <div className='flex items-center gap-3 font-work text-sm text-gray-400'>
            <Moment format='LL'>{post.createdAt}</Moment>
            {post.Author && (
              <>
                <span className='text-gray-300'>·</span>
                <span>{post.Author}</span>
              </>
            )}
          </div>
        </header>

        {/* Featured media */}
        {post.Youtube ? (
          <div className='aspect-video overflow-hidden rounded-lg mb-12'>
            <iframe
              className='w-full h-full'
              src={`https://www.youtube.com/embed/${post.Youtube}`}
              title='YouTube video player'
              frameBorder={0}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              loading='lazy'
            />
          </div>
        ) : (
          <div className='aspect-79/52 relative rounded-lg overflow-hidden mb-12'>
            <Image
              loader={myLoader}
              src={post.Images.data[0].attributes.url}
              alt={post.Images.data[0].attributes.alternativeText}
              layout='fill'
              objectFit='cover'
              priority
            />
          </div>
        )}

        {/* Article body */}
        <div
          className='prose prose-lg max-w-none
            prose-headings:font-round prose-headings:text-secondary-700 prose-headings:tracking-wide
            prose-p:text-gray-600 prose-p:leading-relaxed
            prose-a:text-secondary-500 prose-a:underline-offset-2
            prose-strong:text-gray-700
            prose-li:text-gray-600
            prose-img:rounded-lg'
          dangerouslySetInnerHTML={{ __html: md().render(post.Text) }}
        />
      </article>

      {/* Associated Scores */}
      {post.music_scores.data.length > 0 && (
        <section className='border-t border-gray-200'>
          <div className='max-w-3xl mx-auto px-5 py-16'>
            <h2 className='font-round text-2xl tracking-wide text-secondary-700 mb-6'>Liittyvät nuotit</h2>
            <div className='flex flex-col gap-3'>
              {post.music_scores.data.map((score) => (
                <Score
                  key={score.id}
                  link={score.id}
                  title={score.attributes.Title}
                  type={score.attributes.Type}
                  composer={score.attributes.Composer}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Associated Events */}
      {post.events.data.length > 0 && (
        <section className='border-t border-gray-200'>
          <div className='max-w-3xl mx-auto px-5 py-16'>
            <h2 className='font-round text-2xl tracking-wide text-secondary-700 mb-6'>Liittyvät tapahtumat</h2>
            <div className='flex flex-wrap gap-8 justify-center'>
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
        </section>
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
