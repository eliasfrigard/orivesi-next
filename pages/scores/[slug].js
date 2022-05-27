import axios from "axios"
import Moment from "react-moment"
import md from "markdown-it"
import Link from "next/link"

import Layout from "../../components/Layout"
import Player from "../../components/Player"

import { BiTimeFive } from "react-icons/bi"
import { GiHighHeel } from "react-icons/gi"
import { FiChevronRight } from "react-icons/fi"
import { BsMusicNoteList } from "react-icons/bs"
import { FaPencilAlt } from "react-icons/fa"

export default function ScorePage({ score }) {
  let youtubeVideos = score?.Youtube

  if (youtubeVideos) {
    youtubeVideos = youtubeVideos.split("\n")
  } else {
    youtubeVideos = []
  }

  return (
    <Layout>
      <div className="container flex my-16 flex-col items-center">
        <div className="w-full flex flex-col gap-10">
          <div className="absolute flex items-center gap-3 text-md mt-[-3rem] opacity-60 hover:opacity-100">
            <BsMusicNoteList />
            <Link href="/scores">Nuotit</Link>
            <FiChevronRight></FiChevronRight>
            <p>{score.Title}</p>
          </div>

          <div className="lg:mb-8">
            <h1 className=" break-words">{score.Title}</h1>
            <div className="meta flex flex-col md:flex-row gap-8 items-start md:items-center mt-5">
              <div className="flex gap-3">
                <BiTimeFive className="text-2xl" />
                <div className="flex items-center gap-1.5">
                  Last updated
                  <Moment locale="fi" fromNow>
                    {score.updated_at}
                  </Moment>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPencilAlt></FaPencilAlt>
                <p>{score.Composer}</p>
              </div>
              <div className="flex items-center gap-3">
                <GiHighHeel></GiHighHeel>
                <p>{score.Dancetype}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row gap-10">
              {score.Scores.length > 0 ? (
                <div
                  className={`flex flex-col w-full ${
                    score.Audio.length > 0 ? "lg:w-3/5" : "lg:w-full"
                  } gap-6`}
                >
                  <h3 className="text-4xl font-cursive">Nuotit</h3>
                  {score.Scores.map((file) => (
                    <a href={file.url} key={file.id}>
                      <div className="flex gap-4 items-center w-full bg-accent-500 text-white shadow-lg cursor-pointer hover:scale-100 hover:shadow-xl hover:bg-accent-600 duration-200 rounded-lg py-4 px-6">
                        <BsMusicNoteList className="text-2xl"></BsMusicNoteList>
                        <p className="font-medium tracking-wide break-all	">{file.name}</p>
                      </div>
                    </a>
                  ))}
                </div>
              ) : null}

              {score.Audio.length > 0 ? (
                <div
                  className={`flex flex-col w-full ${
                    score.Audio.length > 0 ? "lg:w-2/5" : "lg:w-full"
                  } gap-6`}
                >
                  <h3 className="text-4xl font-cursive">Äänitykset</h3>
                  {score.Audio.map((file) => (
                    <Player key={file.id} url={file.url} title={file.name.split(".")[0]}></Player>
                  ))}
                </div>
              ) : null}
            </div>

            {youtubeVideos.length > 0 ? (
              <>
                <h3 className="text-4xl font-cursive mb-[-1rem]">Videot</h3>
                <div className="w-full flex flex-col md:flex-row flex-wrap gap-6">
                  {youtubeVideos.map((video) => (
                    <div
                      className="flex-1 overflow-hidden shadow-xl w-full md:min-w-[300px] md:max-w-[calc(50%)] aspect-16/9 bg-black rounded-lg"
                      key={video}
                    >
                      <iframe
                        className="w-full aspect-16/9"
                        src={`https://www.youtube.com/embed/${video}`}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const response = await axios.get("https://orivesiadmin.net/music-scores")

  const paths = response.data.map((score) => ({
    params: {
      slug: score.id.toString(),
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
      score: response.data,
    },
  }
}
