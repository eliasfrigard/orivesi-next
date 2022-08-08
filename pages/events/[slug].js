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

export default function NewsPage({ event }) {
  const router = useRouter()

  const copyLink = () => {
    navigator.clipboard.writeText('https://orivesiallstars.net' + router.asPath)
  }

  return (
    <Layout>
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
        <div className='flex w-full flex-wrap gap-14 xl:gap-24 items-start justify-center lg:justify-start mt-8'>
          {/* DESCRIPTION */}
          {event.Description ? (
            <div
              className='prose leading-[2rem] order-2 lg:order-1'
              dangerouslySetInnerHTML={{ __html: md().render(event.Description) }}
            />
          ) : null}

          {/* INFO CONTAINER */}
          <div className='order-1 lg:order-2 flex flex-col flex-1 gap-6 w-full text-xl p-9  border-secondary-800 text-secondary-800 border-4 rounded-2xl shadow-lg'>
            <p className='text-6xl font-cursive'>Tiedot</p>
            <div className='flex gap-6 flex-wrap'>
              <div className='flex flex-col grow gap-4 mt-2 border-b-2 pb-6'>
                <h3 className='text-2xl font-medium font-work'>Alkaa:</h3>
                <div className='flex capitalize gap-4 items-center'>
                  <BiTimeFive className='text-3xl' />
                  <Moment format='dd kk:mm' locale='fi' className='capistalize text-2xl font-bold font-work'>
                    {event.Start}
                  </Moment>
                </div>
                <div className='flex gap-4 items-center'>
                  <BiCalendarCheck className='text-3xl' />
                  <Moment
                    format='DD MMM YYYY'
                    locale='fi'
                    className='capitalize text-2xl font-bold font-work'
                  >
                    {event.Start}
                  </Moment>
                </div>
              </div>
              {event.End ? (
                <div className='flex flex-col grow gap-4 mt-2 border-b-2 pb-6'>
                  <h3 className='text-2xl font-medium font-work'>Loppuu:</h3>
                  <div className='flex capitalize gap-4 items-center'>
                    <BiTimeFive className='text-3xl' />
                    {/* TODO: Implement duration! */}
                    <Moment
                      format='dd kk:mm'
                      locale='fi'
                      className='capistalize text-2xl font-bold font-work'
                    >
                      {event.End}
                    </Moment>
                  </div>
                  <div className='flex gap-4 items-center'>
                    <BiCalendarX className='text-3xl' />
                    <Moment
                      format='DD MMM YYYY'
                      locale='fi'
                      className='capitalize text-2xl font-bold font-work'
                    >
                      {event.End}
                    </Moment>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
            <div className='flex flex-col gap-4 font-medium text-secondary-800'>
              <div className='flex gap-3 items-center mt-2'>
                <GoLocation className='text-xl' />
                <p>{event.Location}</p>
              </div>
              {event.Address ? (
                <div className='flex gap-3 items-center my-2'>
                  <GiHouse className='text-xl' />
                  <p>{event.Address}</p>
                </div>
              ) : (
                ''
              )}
              <div className='flex gap-3 items-center mb-2'>
                <GiEarthAfricaEurope className='text-xl' />
                <p>
                  {event.City}, {event.Country}
                </p>
              </div>
            </div>

            <iframe
              className='my-2 aspect-3/4 max-w-[500px] border-4 border-secondary-800 rounded-lg'
              src={`https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=${
                event.Address ? event.Address : event.Location
              }+${event.City}+${event.Country}&z=14&output=embed`}
              allowFullScreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>

            {event.Link ? (
              <Button
                url={'/scores'}
                color='bg-accent-500'
                hoverColor='hover:bg-accent-400'
                rounded='rounded-xl'
              >
                Tapahtuman Sivulle
              </Button>
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
                href={`mailto:?subject=OAS Tapahtuma: ${event.Title}&body=Linkki tapahtuman sivulle: ${
                  'https://orivesiallstars.net' + router.asPath
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

      {/* Connected Scores */}
      {event.music_scores.data.length > 0 ? (
        <div className='container my-12 md:my-32'>
          <Title version='v2'>Liittyviä nuotteja.</Title>

          <div className='flex flex-col gap-8 my-8'>
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
