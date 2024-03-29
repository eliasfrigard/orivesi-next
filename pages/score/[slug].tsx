import axios from 'axios'
import Moment from 'react-moment'
import { useRouter } from 'next/router'
import md from 'markdown-it'

import Layout from '../../components/Layouts/Default'
import Player from '../../components/Player'
import Title from '../../components/Title'

import { BiTimeFive } from 'react-icons/bi'
import { GiHighHeel } from 'react-icons/gi'
import { FiChevronRight } from 'react-icons/fi'
import { BsMusicNoteList } from 'react-icons/bs'
import { FaPencilAlt } from 'react-icons/fa'

export default function ScorePage({ score, slug }) {
  const router = useRouter()

  let youtubeVideos = score?.Youtube

  if (youtubeVideos) {
    youtubeVideos = youtubeVideos.split('\n')
  } else {
    youtubeVideos = []
  }

  return (
    <Layout
      pageImage="https://orivesiadmin.net/oas_image.jpg"
      pageTitle={score.Title} 
      pageDescription={score.Description} 
      pageUrl={`/score/${slug}`}
    >
      <div className='container flex pt-10 flex-col items-center my-8 md:my-16'>
        <div className='w-full flex flex-col gap-10 lg:gap-6'>
          <div className='lg:mb-8 lg:mt-2 text-accent-600 flex flex-col gap-4 md:gap-5'>
            <div className='flex items-center gap-3 text-md mt-[-3rem] text-grey-300'>
              <div className='flex items-center gap-3 duration-75'>
                <BsMusicNoteList />
                <span
                  className='cursor-pointer hover:text-grey-800 hover:font-medium'
                  onClick={() => router.back()}
                >
                  Nuotit
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <FiChevronRight></FiChevronRight>
                <p>{score.Title}</p>
              </div>
            </div>

            <Title version='v3'>{score.Title}</Title>

            <div className='meta flex flex-col md:flex-row gap-4 lg:gap-6 items-start md:items-center'>
              <div className='flex gap-3'>
                <BiTimeFive className='text-xl mt-[4px] text-secondary-600' />
                <div className='gap-1.5 tracking-wider text-lg'>
                  Päivitetty{' '}
                  <Moment locale='fi' fromNow>
                    {score.updatedAt ? score.updatedAt : score.createdAt}
                  </Moment>
                </div>
              </div>
              <div className='flex items-center gap-3 text-lg'>
                <FaPencilAlt className='text-secondary-600'></FaPencilAlt>
                <p>{score.Composer}</p>
              </div>
              <div className='flex items-center gap-3 text-lg'>
                <GiHighHeel className='text-secondary-600'></GiHighHeel>
                <p>{score.Type}</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-10 lg:gap-16'>
            <div className='flex flex-col lg:flex-row gap-10'>
              {score.Scores.data && score.Scores.data.length > 0 && (
                <div
                  className={`flex flex-col w-full ${score.Audio.data ? 'lg:w-3/5' : 'lg:w-full'
                    } gap-3 md:gap-4`}
                >
                  {score.Scores.data.map((file) => (
                    <a href={file.attributes.url} key={file.id} target='_blank' rel='noreferrer'>
                      <div className='selection:bg-accent-500 flex gap-4 items-center w-full bg-secondary-500 text-white shadow-lg cursor-pointer hover:shadow-xl hover:bg-accent-500 duration-150 rounded-lg py-4 px-6'>
                        <BsMusicNoteList className='text-2xl'></BsMusicNoteList>
                        <p className='font-medium tracking-wide break-all	'>{file.attributes.name}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {score.Audio.data && (
                <div className={`flex flex-col w-full ${score.Audio.data ? 'lg:w-2/5' : 'lg:w-full'} gap-6`}>
                  {score.Audio.data.map((file) => (
                    <Player
                      key={file.id}
                      url={file.attributes.url}
                      title={file.attributes.name.split('.')[0]}
                    ></Player>
                  ))}
                </div>
              )}
            </div>

            {youtubeVideos && youtubeVideos.length > 0 && (
              <div>
                <div className='w-full flex flex-col md:flex-row flex-wrap gap-6'>
                  {youtubeVideos.map((video) => (
                    <div
                      className='flex-1 overflow-hidden shadow-xl w-full md:min-w-[300px] md:max-w-[calc(50%)] aspect-16/9 bg-black rounded-lg'
                      key={video}
                    >
                      <iframe
                        className='w-full aspect-16/9'
                        src={`https://www.youtube.com/embed/${video}`}
                        title='YouTube video player'
                        frameBorder={0}
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        loading='lazy'
                      ></iframe>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {score.Description && (
              <div className='flex justify-center items-center lg:my-6'>
                <div>
                  <h3 className='text-4xl font-cursive font-bold mb-6'>Esittely</h3>
                  <div
                    className='prose max-w-3xl xl:prose-md leading-[2.1rem]'
                    dangerouslySetInnerHTML={{ __html: md().render(score.Description) }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const response = await axios.get(`${process.env.API_ADDRESS}/music-scores`)

  const paths = []

  for (let i = 0; i < response.data.meta.pagination.pageCount; i++) {
    const res = await axios.get(`${process.env.API_ADDRESS}/music-scores?pagination[page]=${i + 1}&sort=Title`)

    res.data.data.forEach((score) => {
      paths.push({
        params: {
          slug: score.id.toString(),
        },
      })
    })
  }

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const response = await axios.get(`${process.env.API_ADDRESS}/music-scores/${slug}?populate=*`)

  return {
    props: {
      slug,
      score: response.data.data.attributes,
    },
  }
}
