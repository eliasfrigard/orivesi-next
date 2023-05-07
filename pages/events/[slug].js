import axios from 'axios'
import Moment from 'react-moment'
import 'moment/locale/fi'
import md from 'markdown-it'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from '../../components/Layout'
import Score from '../../components/Modules/ScorePreview'
import Title from '../../components/Title'

import { FiChevronRight } from 'react-icons/fi'
import { BiTimeFive, BiCalendarCheck, BiCalendarX } from 'react-icons/bi'
import { GiEarthAfricaEurope, GiHouse } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'

export default function EventPage({ event }) {
  const router = useRouter()

  return (
    <Layout
      pageTitle={event.Title}
      pageDescription={event.Description?.substring(0, 100)}
      pageUrl={router.asPath}
    >
      <div className='container flex pt-10 flex-col items-start text-grey-500'>
        <div className='flex flex-col gap-4 md:gap-5'>
          <div className=' flex items-center gap-3 text-md mt-[-3rem] text-grey-300'>
            <div className='flex items-center gap-2 hover:text-grey-800 hover:font-medium duration-75'>
              <BiTimeFive />
              <Link href='/events'>Tapahtumat</Link>
            </div>
            <div className='flex items-center gap-2'>
              <FiChevronRight></FiChevronRight>
              <p>{event.Title}</p>
            </div>
          </div>
          <Title version='v3'>{event.Title}</Title>
        </div>

        {/* CONTENT */}
        <div className='flex flex-col w-full gap-12 xl:gap-12 items-start justify-center lg:justify-start mt-10 p-8 md:p-12 border-secondary-500 text-secondary-800 border-opacity-30 border rounded-2xl shadow'>
          {/* DESCRIPTION */}
          {event.Description && (
            <div
              className='md:px-10 prose max-w-5xl leading-loose order-2'
              dangerouslySetInnerHTML={{ __html: md().render(event.Description) }}
            />
          )}

          {/* INFO */}
          <div
            className={`order-1 flex flex-col xl:flex-row gap-12 w-full text-xl ${event.Description && 'border-b border-secondary-600 border-opacity-30 pb-14'
              }`}
          >
            <div className='order-2 md:order-1 w-full xl:w-1/2'>
              <iframe
                className='aspect-3/4 w-full h-full rounded-lg'
                src={`https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=${event.Address ? event.Address : event.Location
                  }+${event.City}+${event.Country}&z=14&output=embed`}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
            <div className='order-1 md:order-2 w-full xl:w-1/2'>
              <div className='flex flex-col gap-6 flex-wrap'>
                <div className='flex flex-col grow gap-4 mt-2 border-b border-accent-600 border-opacity-30 pb-7'>
                  <h3 className='text-xl font-medium font-work'>Alkaa:</h3>
                  <div className='flex capitalize gap-4 items-center'>
                    <BiTimeFive className='text-2xl' />
                    <Moment format='dd kk:mm' locale='fi' className='capistalize text-xl font-bold font-work'>
                      {event.Start}
                    </Moment>
                  </div>
                  <div className='flex gap-4 items-center'>
                    <BiCalendarCheck className='text-2xl' />
                    <Moment
                      format='DD MMMM YYYY'
                      locale='fi'
                      className='capitalize text-xl font-bold font-work'
                    >
                      {event.Start}
                    </Moment>
                  </div>
                </div>

                {event.End ? (
                  <div className='flex flex-col grow gap-4 mt-2 border-b border-accent-600 border-opacity-30 pb-8'>
                    <h3 className='text-xl font-medium font-work'>Loppuu:</h3>
                    <div className='flex capitalize gap-4 items-center'>
                      <BiTimeFive className='text-2xl' />
                      {/* TODO: Implement duration! */}
                      <Moment
                        format='dd kk:mm'
                        locale='fi'
                        className='capistalize text-xl font-bold font-work'
                      >
                        {event.End}
                      </Moment>
                    </div>
                    <div className='flex gap-4 items-center'>
                      <BiCalendarX className='text-2xl' />
                      <Moment
                        format='DD MMMM YYYY'
                        locale='fi'
                        className='capitalize text-xl font-bold font-work'
                      >
                        {event.End}
                      </Moment>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className='flex flex-col gap-4 text-lg font-medium text-secondary-800 mt-6'>
                <div className='flex gap-3 items-center mt-2'>
                  <GoLocation />
                  <p>{event.Location}</p>
                </div>
                {event.Address ? (
                  <div className='flex gap-3 items-center my-2'>
                    <GiHouse />
                    <p>{event.Address}</p>
                  </div>
                ) : (
                  ''
                )}
                <div className='flex gap-3 items-center'>
                  <GiEarthAfricaEurope />
                  <p>
                    {event.City}, {event.Country}
                  </p>
                </div>
              </div>

              <div className='flex flex-col flex-wrap md:flex-row gap-6 md:gap-4'>
                {event.Link ? (
                  <div className='my-2 w-full'>
                    <button className='border border-accent-500 w-full py-4 rounded-lg shadow'>
                      Tapahtuman Sivulle
                    </button>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connected Scores */}
      {event.music_scores.data.length > 0 ? (
        <div className='container my-12 md:my-16'>
          <div className='container flex flex-col gap-3 md:gap-4 my-8 px-0'>
            {event.music_scores.data.map((score) => (
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
      ) : null}
    </Layout>
  )
}

export async function getStaticPaths() {
  const response = await axios.get(`${process.env.API_ADDRESS}/events`)

  const paths = response.data.data.map((event) => ({
    params: {
      slug: event.id.toString(),
    },
  }))

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const response = await axios.get(`${process.env.API_ADDRESS}/events/${slug}?populate=*`)

  return {
    props: {
      event: response.data.data.attributes,
    },
  }
}
