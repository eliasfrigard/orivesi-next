import Image from 'next/image'
import AnimateIn from '../AnimateIn'

export default function ShortPresentation() {
  const myLoader = () => {
    if (image.formats.medium) {
      return image.formats.medium.url
    }

    return image.url
  }

  return (
    <div className='hidden lg:block mb-32'>
      <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
        <AnimateIn opacityDuration={1000}>
          <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl rotate-2'>
            <Image
              alt='top-slice'
              src='/tilted-images/2.webp'
              height='100%'
              width='100%'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </AnimateIn>
        <AnimateIn delay={200} opacityDuration={1000}>
          <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl -rotate-2'>
            <Image
              alt='top-slice'
              src='/tilted-images/1.webp'
              height='100%'
              width='100%'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </AnimateIn>
        <AnimateIn delay={400} opacityDuration={1000}>
          <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl rotate-2'>
            <Image
              alt='top-slice'
              src='/tilted-images/4.webp'
              height='100%'
              width='100%'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </AnimateIn>
        <AnimateIn delay={600} opacityDuration={1000}>
          <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl rotate-2'>
            <Image
              alt='top-slice'
              src='/tilted-images/3.webp'
              height='100%'
              width='100%'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </AnimateIn>
        <AnimateIn delay={800} opacityDuration={1000}>
          <div className='relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl -rotate-2'>
            <Image
              alt='top-slice'
              src='/tilted-images/5.webp'
              height='100%'
              width='100%'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </AnimateIn>
      </div>
    </div>
  )
}
