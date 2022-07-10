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
        className={`w-90 ${
          isFull ? '' : 'lg:w-[474px] xl:w-[525px]'
        }  cursor-pointer p-2 rounded-lg text-grey-500`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className={`aspect-79/52 shadow-lg relative ${
            hover ? '-translate-y-1 shadow-xl' : ''
          } duration-300`}
        >
          <Image
            className={`rounded ${hover ? 'rounded-xl' : ''} duration-300`}
            loader={myLoader}
            src={image.url}
            alt={image.alternativeText}
            width='100%'
            height='70%'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='meta flex wrap gap-3 items-center mt-6 '>
          <BiTimeFive className='text-lg' />
          <Moment format={'LL '}>{date}</Moment>
          <BsPerson className='text-lg' />
          <p>{author}</p>
        </div>
        <h2 className='text-2xl my-3 leading-[2.3rem]'>{title}</h2>
        <p className={`leading-7 ${hover ? 'opacity-100' : 'opacity-70'} duration-200`}>
          {post.length > 480 ? post.substr(0, 480) + '...' : post}
        </p>
      </div>
    </Link>
  )
}

NewsPreview.defaultProps = {
  title: '',
  post: '',
  image: {
    url: 'https://orivesi-strapi-bucket.s3.eu-north-1.amazonaws.com/oas1_a89bda9a50.jpg',
    alternativeText: 'fallback image',
  },
  author: '',
  date: '',
  link: '',
  isEmpty: false,
}
