import axios from "axios"
import Image from "next/image"
import md from "markdown-it"

import Layout from "../components/Layout"
import { AiOutlineMail, AiOutlineFacebook, AiOutlineLink, AiOutlinePrinter } from "react-icons/ai"
import Title from "../components/Title"

export default function NewsPage({ post }) {
  const myLoader = ({ src, width, quality }) => {
    return post.Image.url
  }

  return (
    <Layout>
      <div className="container flex flex-col my-16 items-center">
        <h3 className="text-6xl font-sketch uppercase font-bold tracking-wider text-center mb-4">MIKÄ ON</h3>
        <Title>ORIVESI ALL STARS?</Title>

        <div className="w-full my-16 aspect-79/50 img relative shadow-xl">
          <Image
            className="rounded"
            loader={myLoader}
            src={post.Image.url}
            alt="Picture of the author"
            layout="fill"
          />
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-5 mt-[5px]">
            <AiOutlineLink className="text-3xl" />
            <AiOutlineMail className="text-3xl" />
            <AiOutlinePrinter className="text-3xl" />
            <AiOutlineFacebook className="text-3xl" />
          </div>

          <div
            className="prose max-w-3xl leading-[2rem]"
            dangerouslySetInnerHTML={{ __html: md().render(post.Post) }}
          />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get(`https://orivesiadmin.net/posts/1`)

  return {
    props: {
      post: response.data,
    },
  }
}
