import axios from 'axios'
import Moment from 'react-moment'
import 'moment/locale/fi'
import md from 'markdown-it'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from '../../components/Layout'
import Button from '../../components/Button'
import Score from '../../components/Modules/ScorePreview'
import Title from '../../components/Title'

import { FiChevronRight } from 'react-icons/fi'
import { BiTimeFive, BiCalendarCheck, BiCalendarX } from 'react-icons/bi'
import { GiEarthAfricaEurope, GiHouse } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { BsFacebook, BsFillPinMapFill } from 'react-icons/bs'
import { AiOutlineMail, AiOutlineLink } from 'react-icons/ai'

export default function EventPage({ event }) {
  const router = useRouter()

  const copyLink = () => {
    navigator.clipboard.writeText('https://orivesiallstars.net' + router.asPath)
  }

  return (
    <Layout
      pageTitle={event.Title}
      pageDescription={event.Description?.substring(0, 100)}
      pageUrl={router.asPath}
    >
      <div className='container flex mt-8 lg:mt-28 flex-col items-start text-grey-500'>
        <div>
          <div className='absolute flex items-center gap-3 text-md mt-[-3rem] text-grey-300'>
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
        <div className='flex w-full flex-wrap gap-14 xl:gap-14 items-start justify-center lg:justify-start mt-10'>
          {/* DESCRIPTION */}
          {event.Description ? (
            <div
              className='prose leading-[2rem] order-2'
              dangerouslySetInnerHTML={{ __html: md().render(event.Description) }}
            />
          ) : null}

          {/* INFO CONTAINER */}
          <div className='order-1 flex flex-col flex-1 gap-6 w-full text-xl p-9 border-secondary-800 text-secondary-800 border rounded-2xl shadow'>
            <div className='flex gap-6 flex-wrap'>
              <div className='flex flex-col grow gap-4 mt-2 border-b border-accent-400 border-opacity-30 pb-7'>
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
                <div className='flex flex-col grow gap-4 mt-2 border-b border-accent-400 border-opacity-30 pb-8'>
                  <h3 className='text-xl font-medium font-work'>Loppuu:</h3>
                  <div className='flex capitalize gap-4 items-center'>
                    <BiTimeFive className='text-2xl' />
                    {/* TODO: Implement duration! */}
                    <Moment format='dd kk:mm' locale='fi' className='capistalize text-xl font-bold font-work'>
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
            <div className='flex flex-col gap-4 text-lg font-medium text-secondary-800'>
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
              <div className='flex gap-3 items-center mb-2'>
                <GiEarthAfricaEurope />
                <p>
                  {event.City}, {event.Country}
                </p>
              </div>
            </div>

            <iframe
              className='my-2 aspect-3/4 max-w-[500px] rounded-lg shadow-md'
              src={`https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=${event.Address ? event.Address : event.Location
                }+${event.City}+${event.Country}&z=14&output=embed`}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>

            <div className='flex flex-col md:flex-row gap-6 md:gap-4'>
              {event.Link ? (
                <div className='my-2 width-full'>
                  <Button
                    externalUrl
                    url={event.Link}
                    color='bg-accent-500'
                    hoverColor='hover:bg-accent-400'
                    rounded='rounded-xl'
                    width='w-full max-w-[500px]'
                  >
                    Tapahtuman Sivulle
                  </Button>
                </div>
              ) : (
                ''
              )}

              <div className='flex gap-5 text-3xl text-secondary-800 items-center ml-2 mt-1'>
                {event.Facebook ? (
                  <BsFacebook className='text-[1.6rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-accent-500 duration-150 active:scale-110 cursor-pointer' />
                ) : (
                  ''
                )}
                <AiOutlineLink
                  onClick={copyLink}
                  className='opacity-80 hover:opacity-100 hover:scale-125 duration-150 hover:text-accent-500 active:scale-110 cursor-pointer'
                />

                <a
                  href={`mailto:?subject=OAS Tapahtuma: ${event.Title}&body=Linkki tapahtuman sivulle: ${'https://orivesiallstars.net' + router.asPath
                    }`}
                >
                  <AiOutlineMail className='opacity-80 hover:opacity-100 hover:scale-125 duration-150 hover:text-accent-500 active:scale-110 cursor-pointer' />
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${event.Location}+${event.City}+${event.Country}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  <BsFillPinMapFill className='text-[1.5rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-accent-500 duration-150 active:scale-110 cursor-pointer' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connected Scores */}
      {event.music_scores.data.length > 0 ? (
        <div className='container my-12 md:my-24'>
          <Title version='v2'>Liittyviä nuotteja.</Title>

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
