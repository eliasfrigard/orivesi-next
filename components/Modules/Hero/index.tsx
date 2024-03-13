import React from 'react'
import AnimateIn from '../../AnimateIn'
import HeroImage from './HeroImage'
import HeroImageParallax from './HeroImageParallax'
import { useParallax } from "react-scroll-parallax"

const Hero = ({
  Image,
  children,
  className,
  desktopImg,
  mobileImg,
  overlay = true,
  spaced = false,
  parallaxSpeed,
  imagePosition = 'center',
  overlayClasses
} : {
  Image: any
  children?: React.ReactNode
  className?: string
  desktopImg: {
    url: string
    altText: string
    blur?: string
  }
  mobileImg: {
    url: string
    altText: string
    blur?: string
  }
  overlay?: boolean
  spaced: boolean
  parallaxSpeed?: number
  imagePosition?: string
  overlayClasses?: string
}) => {
  const parallax = useParallax({ speed: 15 })
  const mobileParallax = useParallax({ speed: 15 })

  const overlayElement = () => {
    if (!overlay) return null

    // Use fragment because AnimateIn requires children.
    return <AnimateIn delay={1000} className={`absolute w-full h-full ${overlayClasses}`}><></></AnimateIn>
  }

  // Spaced and default classes.
  const defaultClasses = `h-screen w-full -mt-[83px] flex justify-center items-center shadow-lg overflow-hidden object-${imagePosition}`
  const spacedClasses = `relative w-full aspect-[9/16] md:aspect-video hidden md:block object-${imagePosition}`

  // Desktop and mobile classes.
  const desktopClasses = `relative hidden md:block ${spaced ? spacedClasses : defaultClasses}`
  const mobileClasses = `relative block md:hidden ${spaced ? spacedClasses : defaultClasses}`

  const renderImage = (isMobile: boolean) => {
    if (spaced) {
      return (
        <HeroImage
          imageClasses={`object-${imagePosition}`}
          Image={Image}
          image={isMobile ? mobileImg : desktopImg}
          isMobile={isMobile}
        />
      )
    } else {
      return (
        <HeroImageParallax
          imageClasses={`object-${imagePosition}`}
          Image={Image}
          image={isMobile ? mobileImg : desktopImg}
          isMobile={isMobile}
          parallaxSpeed={parallaxSpeed}
        />
      )
    }
  }

  return (
    <>
      {
        desktopImg.url && (
          <AnimateIn className={desktopClasses}>
            {renderImage(false)}

            {overlayElement()}

            {/* @ts-ignore */}
            <div ref={parallax.ref} className='z-10 mt-85 centerContent px-4 w-full h-full'>
              {children}
            </div>
          </AnimateIn>
        )
      }

      {
        mobileImg.url && (
          <AnimateIn className={mobileClasses}>
            {renderImage(true)}

            {overlayElement()}

            {/* @ts-ignore */}
            <div ref={mobileParallax.ref} className='z-10 mt-85 centerContent px-4 w-full h-full'>
              {children}
            </div>
          </AnimateIn>
        )
      }
    </>
  )
}

export default Hero
