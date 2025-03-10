import React from 'react'
import Link from 'next/link'
import Hamburger from './Modules/Hamburger'

import { useState } from 'react'
import { useRouter } from 'next/router'

import { BsFacebook } from 'react-icons/bs'
import { AiFillMail, AiFillInstagram, AiFillYoutube, AiOutlineClose } from 'react-icons/ai'

export default function Navbar({ transparent = false }) {
  const router = useRouter()

  const [scrolled, setScrolled] = React.useState(false)

  const links = [
    { title: 'Koti', page: '/', type: 'all' },
    { title: 'All Stars', page: '/about', type: 'all' },
    { title: 'Uutiset', page: '/news', type: 'all' },
    { title: 'Tapahtumat', page: '/events', type: 'all' },
    { title: 'Nuotit', page: '/scores/1', type: 'desktop' },
    { title: 'Nuotit', page: '/scores', type: 'mobile' },
    { title: 'Jäsenyys', page: '/membership', type: 'all' },
    { title: 'Pressi', page: '/press', type: 'all' },
    { title: 'Yhteystiedot', page: '/contact', type: 'all' },
  ]

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const handleHamburgerClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* DESKTOP NAV BELOW */}
      <div
        className={`hidden lg:grid grid-cols-[1fr_2fr_1fr] items-center fixed h-[83px] w-full z-50 ${
          !transparent || scrolled ? 'bg-secondary-500 bg-opacity-90 shadow-lg backdrop-blur-lg' : 'bg-opacity-0'
        } duration-500`}
      >
        <Link href='/'>
          <div
            className={`hidden xl:flex leading-4 cursor-pointer md:flex-col gap-2 md:gap-0 justify-center items-center text-center text-secondary-500 hover:text-secondary-800 duration-150 tracking-wider scale-90`}
          >
            <p className='font-work font-bold text-2xl md:text-[28px] text-accent-600 leading-none'>ORIVESI</p>
            <p className={`font-work font-bold text-2xl md:text-xl duration-300 leading-none text-primary-500`}>
              ALL STARS
            </p>
          </div>
        </Link>
        <div className='container hidden lg:flex justify-center items-center'>
          <ul className='flex align-middle justify-center items-center gap-1'>
            {links
              .filter((link) => link.type !== 'mobile')
              .map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.page}
                    legacyBehavior
                  >
                    <a
                      className={`
            ${
              router.pathname === link.page ||
              (link.page.includes(router.pathname.split('/')[1]) && router.pathname !== '/')
                ? 'bg-accent-600 hover:bg-accent-400 text-white shadow-sm'
                : ''
            }
          py-[12px] px-[14px] whitespace-nowrap active:hover:bg-accent:500 duration-100 hover:text-white rounded font-sans tracking-wide text-[15px] text-primary-500 hover:bg-accent-600 hover:shadow-sm`}
                    >
                      {link.title}
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div
          className={`hidden xl:flex gap-4 2xl:gap-6 text-[1.8rem] justify-center items-center text-primary-500 scale-90 duration-500`}
        >
          <a
            target='_blank'
            href='https://www.facebook.com/orivesiallstars/'
            rel='noopener noreferrer'
          >
            <BsFacebook className='text-[1.5rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-accent-600 duration-150 active:scale-110 cursor-pointer drop-shadow' />
          </a>
          <a
            href='https://www.instagram.com/orivesiallstars/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillInstagram className='opacity-80 hover:opacity-100 hover:scale-125 duration-150 hover:text-accent-600 active:scale-110 cursor-pointer drop-shadow' />
          </a>
          <a
            href='https://www.youtube.com/channel/UChPwmZQ3JgHSd21qpv4JfqQ'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillYoutube
              className='text-[2rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-accent-600 duration-150
            active:scale-110 cursor-pointer drop-shadow'
            />
          </a>
          <a href='mailto:orivesiallstars@gmail.com'>
            <AiFillMail className='opacity-80 hover:opacity-100 hover:scale-125 duration-150 hover:text-accent-600 active:scale-110 cursor-pointer drop-shadow' />
          </a>
        </div>
      </div>
      {/* MOBILE NAV BELOW */}
      <div
        className={`
          lg:hidden
          flex
          justify-between
          items-center
          h-[85px]
          w-full
          tracking-wide
          ${!transparent || scrolled || isMobileNavOpen ? 'backdrop-blur bg-secondary-500 shadow-xl' : ''}
          text-primary-300
          container
          px-8
          duration-300
          fixed
          z-50
        `}
      >
        <div>
          <Link href='/'>
            <div
              className={`leading-4 cursor-pointer flex flex-col justify-center items-center text-center text-secondary-500 hover:text-secondary-800 duration-150 sm:mt-[-4px] tracking-wider mb-1`}
            >
              <p className='font-work font-bold text-2xl md:text-3xl text-accent-600 drop-shadow-md'>ORIVESI</p>
              <p
                className={`font-work font-bold text-[17px] md:text-[21px] duration-300 drop-shadow-md text-primary-500`}
              >
                ALL STARS
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Hamburger
            handleClick={handleHamburgerClick}
            active={isMobileNavOpen}
          ></Hamburger>
        </div>
      </div>
      {isMobileNavOpen && (
        <div
          className={`w-full min-h-[calc(100vh-75px)] flex-col gap-20 bg-secondary-500 fixed top-[75px] py-8 z-50 ${
            isMobileNavOpen ? 'flex' : 'hidden'
          } duration-300`}
        >
          <div>
            <ul className='flex align-middle justify-center flex-col items-center gap-8'>
              {links
                .filter((link) => link.type !== 'desktop')
                .map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.page}
                      legacyBehavior
                    >
                      <a
                        className={`
                    ${
                      router.pathname === link.page ||
                      (link.page.includes(router.pathname.split('/')[1]) && router.pathname !== '/')
                        ? 'text-accent-600 font-bold'
                        : 'text-primary-500'
                    }
                    py-[13px] px-[20px] active:hover:bg-accent:500 text-2xl duration-100 hover:text-white rounded font-sans tracking-wide font-medium`}
                      >
                        {link.title}
                      </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div
            id='right'
            className='flex flex-col gap-4 text-primary-500 items-center'
          >
            <div className='flex gap-6 text-[2rem] duration-500 items-center text-primary-500'>
              <a
                target='_blank'
                href='https://www.facebook.com/orivesiallstars/'
                rel='noopener noreferrer'
              >
                <BsFacebook className='text-[1.7rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-accent-600 duration-150 active:scale-110 cursor-pointer drop-shadow' />
              </a>
              <a
                href='https://www.instagram.com/orivesiallstars/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillInstagram className='opacity-80 hover:opacity-100 hover:scale-125 duration-150 hover:text-accent-600 active:scale-110 cursor-pointer drop-shadow' />
              </a>
              <a
                href='https://www.youtube.com/channel/UChPwmZQ3JgHSd21qpv4JfqQ'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillYoutube className='text-[2.2rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-accent-600 duration-150 active:scale-110 cursor-pointer drop-shadow' />
              </a>
              <a href='mailto:orivesiallstars@gmail.com'>
                <AiFillMail className='opacity-80 hover:opacity-100 hover:scale-125 duration-150 hover:text-accent-600 active:scale-110 cursor-pointer drop-shadow' />
              </a>
            </div>

            <p>Copyright © 2022 Orivesi All Stars</p>
            <p className='text-sm'>
              Website by{' '}
              <a
                className='text-accent-600 font-bold underline text-md'
                href='mailto:elias_frigard@hotmail.com'
              >
                Elias Frigård
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
