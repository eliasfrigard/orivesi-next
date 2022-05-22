import Image from 'next/image'
import { BsPerson, BsCalendar2Date } from 'react-icons/bs'

export default function NewsPreview({ data }) {
  const myLoader = ({ src, width, quality }) => {
    return `/levy.jpg`
  }

  return (
    <div className='w-90 lg:w-[474px] xl:w-[525px] cursor-pointer'>
      <div className='aspect-79/50  img relative drop-shadow'>
        <Image
          className='rounded-sm'
          // loader={myLoader}
          src='/levy.jpg'
          alt='Picture of the author'
          layout='fill'
          width='100%'
          height='100%'
        />
      </div>
      <div className='meta flex gap-3 items-center my-3 '>
        <BsCalendar2Date />
        <p>Dec 5, 2021</p>
        <BsPerson />
        <p>Antti Järvelä</p>
      </div>
      <h2 className='text-2xl my-3'>The AGI hype train is running out of steam.</h2>
      <p className='leading-7'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eaque illo dolores saepe blanditiis
        nisi a ipsam, sapiente cumque tempore molestias dolor pariatur voluptas excepturi vel, nobis ea optio
        consequatur.
      </p>
    </div>
  )
}

BsPerson
