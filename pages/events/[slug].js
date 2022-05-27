import axios from "axios"
import Image from "next/image"
import Moment from "react-moment"
import md from "markdown-it"

import Layout from "../../components/Layout"

import { FiChevronRight } from "react-icons/fi"
import Link from "next/link"
import { BiTimeFive } from "react-icons/bi"

export default function NewsPage({ event }) {
  const myLoader = ({ src, width, quality }) => {
    return post.Image.url
  }

  return (
    <Layout>
      <div className="container flex my-16 flex-col items-center">
        <div className="w-[925px]">
          <div className="absolute flex items-center gap-3 text-md mt-[-3rem] opacity-60 hover:opacity-100">
            <BiTimeFive />
            <Link href="/scores">Tapahtumat</Link>
            <FiChevronRight></FiChevronRight>
            <p>{event.Title}</p>
          </div>

          <h1 className="mb-8 ">{event.Title}</h1>
        </div>
      </div>
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
