import Image from 'next/image'
import Moment from 'react-moment'
import Link from 'next/link'

import { BsPerson, BsPersonFill } from 'react-icons/bs'
import { BiTimeFive, BiSolidTimeFive } from 'react-icons/bi'
import { HiArrowRight } from 'react-icons/hi'
import { useState } from 'react'

export default function NewsPreview({ title, post, image, author, date, link, youtube, isFull = false }) {
  const [hover, setHover] = useState(false)
  const onMouseEnter = () => setHover(true)
  const onMouseLeave = () => setHover(false)

  const myLoader = ({ src, width, quality }) => {
    return image.url
  }

  return (
    <Link href={'/news/' + link}>
      <div
        className={`group w-90 ${isFull ? '' : 'lg:w-[474px] xl:w-[525px]'
          } cursor-pointer relative transition-all duration-500 ease-out
          ${hover ? 'translate-y-[-4px]' : ''}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Card Container with Modern Shadow */}
        <div className={`
          rounded-2xl overflow-hidden bg-white/10 border border-secondary-500/10
          transition-all duration-500
          ${hover
            ? 'shadow-2xl shadow-accent-400/20'
            : 'shadow-lg shadow-gray-200/50'
          }
        `}>

          {/* Media Section with Overlay */}
          <div className="relative overflow-hidden aspect-79/52">
            {youtube ? (
              <div className="w-full h-full">
                <iframe
                  className='w-full h-full'
                  src={`https://www.youtube.com/embed/${youtube}`}
                  title='YouTube video player'
                  frameBorder={0}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  loading='lazy'
                ></iframe>
              </div>
            ) : (
              <>
                <div className={`
                  w-full h-full transition-transform duration-500 ease-out
                  ${hover ? 'scale-110' : 'scale-100'}
                `}>
                  <Image
                    className="object-cover"
                    loader={myLoader}
                    src={image.url}
                    alt={image.alternativeText}
                    fill
                  />
                </div>
                {/* Gradient Overlay */}
                <div className={`
                  absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent
                  transition-opacity duration-500
                  ${hover ? 'opacity-70' : 'opacity-40'}
                `} />
              </>
            )}
          </div>

          {/* Content Section */}
          <div className="p-6 pb-7">
            {/* Meta Information as Modern Badges */}
            <div className='flex flex-wrap gap-3 mb-4'>
              <div className={`
                flex items-center gap-2 px-3 py-1.5 rounded-full
                transition-all duration-500
                ${hover
                  ? 'bg-accent-500 text-white'
                  : 'bg-gray-100 text-gray-600'
                }
              `}>
                {hover ? <BiSolidTimeFive className='text-base' /> : <BiTimeFive className='text-base' />}
                <Moment className='font-work text-sm font-medium' format={'MMM DD, YYYY'}>
                  {date}
                </Moment>
              </div>
              <div className={`
                flex items-center gap-2 px-3 py-1.5 rounded-full
                transition-all duration-500
                ${hover
                  ? 'bg-accent-500 text-white'
                  : 'bg-gray-100 text-gray-600'
                }
              `}>
                {hover ? <BsPersonFill className='text-base' /> : <BsPerson className='text-base' />}
                <p className='font-work text-sm font-medium'>{author}</p>
              </div>
            </div>

            {/* Title with Modern Typography */}
            <h2 className={`
              text-2xl md:text-3xl font-bold leading-tight mb-3
              transition-all duration-500
              ${hover ? 'text-accent-600' : 'text-gray-900'}
            `}>
              {title}
            </h2>

            {/* Post Excerpt */}
            <p className={`
              text-gray-600 leading-relaxed line-clamp-3 mb-4
              transition-all duration-500
              ${hover ? 'text-gray-700' : ''}
            `}>
              {post}
            </p>

            {/* Read More Indicator */}
            <div className={`
              flex items-center gap-2 font-semibold
              transition-all duration-500
              ${hover
                ? 'text-accent-600 translate-x-2'
                : 'text-gray-400 translate-x-0'
              }
            `}>
              <span className="text-sm uppercase tracking-wide">Lue Lisää</span>
              <HiArrowRight className="text-lg" />
            </div>
          </div>
        </div>
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
