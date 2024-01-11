import Image from 'next/image'
import AnimateIn from '../AnimateIn'

export default function TiltedImages() {
  const renderTiltedImage = (src, delay, tilt) => (
    <AnimateIn delay={delay} opacityDuration={1000}>
      <div
        className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl ${
          tilt === 'left' ? 'rotate-2' : '-rotate-2'
        } shadow-md`}
      >
        <Image alt='top-slice' src={src} fill className={`object-cover`} />
      </div>
    </AnimateIn>
  )

  return (
    <div className='hidden lg:block mb-32'>
      <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
        {renderTiltedImage('/tilted-images/2.webp', 0, 'left')}
        {renderTiltedImage('/tilted-images/1.webp', 200, 'right')}
        {renderTiltedImage('/tilted-images/4.webp', 400, 'left')}
        {renderTiltedImage('/tilted-images/3.webp', 600, 'right')}
        {renderTiltedImage('/tilted-images/5.webp', 800, 'left')}
      </div>
    </div>
  )
}
