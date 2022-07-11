import Image from 'next/image'

export default function NewsPreview({ image }) {
  const myLoader = ({ src, width, quality }) => {
    if (image.formats.medium) {
      return image.formats.medium.url
    }

    return image.url
  }

  return (
    <Image
      loader={myLoader}
      className='hover:scale-110 hover:opacity-80 duration-200'
      src={image.formats.medium ? image.formats.medium.url : image.url}
      blurDataURL={image.formats.thumbnail.url}
      alt={image.alternativeText}
      placeholder='blur'
      width='100%'
      height='100%'
      layout='fill'
      objectFit='cover'
    />
  )
}
