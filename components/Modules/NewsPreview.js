import Image from 'next/image'
import Moment from 'react-moment'
import Link from 'next/link'

import { BsPerson } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import { useState } from 'react'

export default function NewsPreview({ title, post, image, author, date, link, isFull = false }) {
  const [hover, setHover] = useState(false)
  const onMouseEnter = () => setHover(true)
  const onMouseLeave = () => setHover(false)

  const myLoader = ({ src, width, quality }) => {
    return image.url
  }

  return (
    <Link href={'/news/' + link}>
      <div
        className={`w-90 ${isFull ? '' : 'lg:w-[474px] xl:w-[525px]'}  cursor-pointer p-2 rounded-lg`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className={`aspect-79/50 img relative shadow-lg ${
            hover ? '-translate-y-1 shadow-xl' : ''
          } duration-300`}
        >
          <Image
            className={`rounded ${hover ? 'rounded-xl' : ''} duration-300`}
            loader={myLoader}
            src={image.url}
            alt='Picture of the author'
            layout='fill'
          />
        </div>
        <div className='meta flex gap-3 items-center mt-5 '>
          <BiTimeFive className='text-lg' />
          <Moment format={'LL '}>{date}</Moment>
          <BsPerson className='text-lg' />
          <p>{author}</p>
        </div>
        <h2 className='text-2xl my-3 leading-[2.3rem]'>{title}</h2>
        <p className={`leading-7 opacity-80 ${hover ? 'opacity-100' : ''} duration-300`}>
          {post.length > 480 ? post.substr(0, 480) + '...' : post}
        </p>
      </div>
    </Link>
  )
}

NewsPreview.defaultProps = {
  title: '',
  post: '',
  image: { url: 'https://orivesi-strapi-bucket.s3.eu-north-1.amazonaws.com/oas1_a89bda9a50.jpg' },
  author: '',
  date: '',
  link: '',
  isEmpty: false,
}
