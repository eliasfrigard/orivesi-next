import axios from "axios"
import Image from "next/image"
import Moment from "react-moment"
import "moment/locale/fi"
import md from "markdown-it"

import Button from "../../components/Button"
import Score from "../../components/Modules/ScorePreview"

import Layout from "../../components/Layout"

import { FiChevronRight } from "react-icons/fi"
import Link from "next/link"
import { BiTimeFive } from "react-icons/bi"
import { GiEarthAfricaEurope } from "react-icons/gi"
import { GoLocation } from "react-icons/go"
import { BsFacebook, BsFillPinMapFill, BsCalendar2Date } from "react-icons/bs"

import { BsCalendar3 } from "react-icons/bs"
import { AiOutlineMail, AiOutlineFacebook, AiOutlineLink, AiOutlinePrinter } from "react-icons/ai"
import { MdOutlineArticle } from "react-icons/md"

export default function NewsPage({ event }) {
  const myLoader = ({ src, width, quality }) => {
    return post.Image.url
  }

  return (
    <Layout>
      <div className="container flex my-16 flex-col items-start">
        <div className="">
          <div className="absolute flex items-center gap-3 text-md mt-[-3rem] opacity-60 hover:opacity-100">
            <BiTimeFive />
            <Link href="/events">Tapahtumat</Link>
            <FiChevronRight></FiChevronRight>
            <p>{event.Title}</p>
          </div>

          <h1 className="mb-8 ">{event.Title}</h1>
        </div>

        {/* CONTENT */}
        <div className="flex w-full flex-wrap gap-14 xl:gap-24 items-start">
          {/* DESCRIPTION */}
          {event.Description ? (
            <div
              className="prose leading-[2rem]"
              dangerouslySetInnerHTML={{ __html: md().render(event.Description) }}
            />
          ) : null}

          {/* INFO CONTAINER */}
          <div className="flex flex-col flex-1 w-full text-xl p-9 gap-6 border-secondary-500 border-4 rounded-2xl shadow-lg">
            <p className="text-6xl font-cursive">Tiedot</p>
            <div className="flex gap-3 items-center">
              <BiTimeFive className="text-3xl" />
              {/* TODO: Implement duration! */}
              <Moment format="kk:mm" locale="fi" className="capistalize text-3xl font-bold">
                {event.Date}
              </Moment>
            </div>
            <div className="flex gap-3 items-center">
              <BsCalendar3 className="text-3xl" />
              <Moment format="DD MMM YYYY" locale="fi" className="capitalize text-2xl font-bold">
                {event.Date}
              </Moment>
            </div>
            <div className="flex gap-3 items-center mt-2 opacity-70">
              <GiEarthAfricaEurope className="text-xl" />
              <p>Helsinki, FI</p>
            </div>
            <div className="flex gap-3 items-center mb-2 opacity-70">
              <GoLocation className="text-xl" />
              <p>Oodin Kirjasto</p>
            </div>
            <Button
              url={"/scores"}
              color="bg-secondary-500"
              hoverColor="bg-secondary-400"
              rounded="rounded-xl"
            >
              Tapahtuman Sivulle
            </Button>
            <div className="flex gap-5 mt-1 text-3xl text-secondary-600 items-center ml-2">
              <BsFacebook className="text-[1.7rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-secondary-500 duration-150 active:scale-110 cursor-pointer" />
              <AiOutlineLink className="opacity-80 hover:opacity-100 hover:scale-125 duration-150 hover:text-secondary-500 active:scale-110 cursor-pointer" />
              <AiOutlineMail className="opacity-80 hover:opacity-100 hover:scale-125 duration-150 hover:text-secondary-500 active:scale-110 cursor-pointer" />
              <BsFillPinMapFill className="text-[1.7rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-secondary-500 duration-150 active:scale-110 cursor-pointer" />
            </div>
          </div>
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
