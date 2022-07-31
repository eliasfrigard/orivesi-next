import Image from 'next/image'

export default function NewsPreview({ image }) {
  const myLoader = () => {
    if (image.formats.medium) {
      return image.formats.medium.url
    }

    return image.url
  }

  return (
    <a href={image.url} target='_blank' rel='noreferrer'>
      <Image
        loader={myLoader}
        src={image.formats.medium ? image.formats.medium.url : image.url}
        blurDataURL={image.formats.thumbnail.url}
        alt={image.alternativeText}
        placeholder='blur'
        width='100%'
        height='100%'
        layout='fill'
        objectFit='cover'
      />

      <div className='absolute flex flex-col text-center gap-4 justify-center items-center w-full h-full bg-grey-500 bg-opacity-0 hover:bg-opacity-50 hover:backdrop-blur-sm duration-200 text-transparent hover:text-primary-500 break-all p-8'>
        <p className='tracking-wide font-medium text-md'>{image.name}</p>
        <p className='tracking-wide font-medium text-sm'>{image.mime}</p>
      </div>
    </a>
  )
}
