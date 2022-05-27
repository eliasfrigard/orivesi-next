import axios from "axios"
import Image from "next/image"
import Moment from "react-moment"
import md from "markdown-it"
import Score from "../../components/Modules/Score"

import Layout from "../../components/Layout"

import { FiChevronRight } from "react-icons/fi"
import Link from "next/link"
import { BiTimeFive } from "react-icons/bi"

export default function NewsPage({ event }) {
  console.log(event)

  const myLoader = ({ src, width, quality }) => {
    return post.Image.url
  }

  return (
    <Layout>
      <div className="container flex my-16 flex-col items-center">
        <div className="w-[925px]">
          <div className="absolute flex items-center gap-3 text-md mt-[-3rem] opacity-60 hover:opacity-100">
            <BiTimeFive />
            <Link href="/events">Tapahtumat</Link>
            <FiChevronRight></FiChevronRight>
            <p>{event.Title}</p>
          </div>

          <h1 className="mb-8 ">{event.Title}</h1>
        </div>
      </div>

      {/* Connected Scores */}
      {event.music_scores.length > 0 ? (
        <div className="container flex flex-col gap-3 my-16">
          <h3 className="text-5xl tracking-wider text-left font-cursive">Nuotit</h3>
          <div className="flex flex-col gap-6 mt-6">
            {/* <Score title="Title" type="Dance Type" composer="Composer" isHeader={true}></Score> */}
            {event.music_scores.map((score) => (
              <Score
                key={score.id}
                link={score.slug}
                title={score.Title}
                type={score.Dancetype}
                composer={score.Composer}
              ></Score>
            ))}
          </div>
        </div>
      ) : null}
    </Layout>
  )
}

export async function getStaticPaths() {
  const response = await axios.get("https://orivesiadmin.net/events")

  const paths = response.data.map((event) => ({
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
  const response = await axios.get(`https://orivesiadmin.net/events/${slug}`)

  return {
    props: {
      event: response.data,
    },
  }
}
