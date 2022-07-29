import Link from 'next/link'
import Dropdown from './Dropdown'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { BsFacebook } from 'react-icons/bs'
import { AiFillMail, AiFillInstagram, AiFillYoutube, AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
  const router = useRouter()

  const links = [
    { title: 'Home', page: '/' },
    { title: 'All Stars', page: '/about' },
    { title: 'Uutiset', page: '/news' },
    { title: 'Tapahtumat', page: '/events' },
    { title: 'Nuotit', page: '/scores' },
    // {
    //   title: 'Media',
    //   page: '/media',
    //   type: 'dropdown',
    //   links: [
    //     { title: 'Kuvat', page: '/media/images' },
    //     { title: 'Äänitykset', page: '/media/audio' },
    //   ],
    // },
    { title: 'Jäsenyydet', page: '/membership' },
    { title: 'Yhteystiedot', page: '/contact' },
  ]

  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const handleHamburgerClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  useEffect(() => {
    window.onscroll = () => {
      setScrollPosition(window.scrollY)
    }
  })

  return (
    <>
      <div
        className={`hidden md:flex fixed w-full justify-center py-[10px]  backdrop-blur z-50  pt-10 ${
          scrollPosition > 20 ? 'shadow-xl pt-[10px] bg-secondary-500' : 'bg-primary-500'
        } duration-500`}
      >
        <Link href='/'>
          <div
            className={`leading-4 cursor-pointer flex md:flex-col gap-2 md:gap-0 justify-center items-center text-center md:w-1/5 text-secondary-500 hover:text-secondary-800 duration-150 sm:mt-[-4px] tracking-wider ${
              scrollPosition > 20 ? 'scale-90' : ''
            }`}
          >
            <p className='font-work font-medium text-2xl md:text-3xl text-accent-500 drop-shadow-md'>
              ORIVESI
            </p>
            <p
              className={`font-work font-bold text-2xl md:text-[21px] duration-300 drop-shadow-md ${
                scrollPosition > 20 ? 'text-primary-500' : ''
              }`}
            >
              ALL STARS
            </p>
          </div>
        </Link>
        <div className='container hidden md:flex justify-center items-center h-[75px] w-3/5'>
          <ul className='flex align-middle justify-center items-center gap-2'>
            {links.map((link) => (
              <li key={link.title}>
                {link.type === 'dropdown' ? (
                  <>
                    <Dropdown
                      title={link.title}
                      items={link.links}
                      active={
                        router.pathname === link.page ||
                        (link.page.includes(router.pathname.split('/')[1]) && router.pathname !== '/')
                      }
                      scrollPosition={scrollPosition}
                    ></Dropdown>
                  </>
                ) : (
                  <Link href={link.page}>
                    <a
                      className={`
                    ${
                      router.pathname === link.page ||
                      (link.page.includes(router.pathname.split('/')[1]) && router.pathname !== '/')
                        ? scrollPosition > 20
                          ? 'bg-accent-500 hover:bg-accent-400 text-white shadow-md'
                          : 'bg-secondary-500 hover:bg-secondary-400 text-white shadow-md'
                        : ''
                    }
                    py-[13px] px-[20px]  active:hover:bg-accent:500 duration-100 hover:text-white rounded font-sans tracking-wide font-medium ${
                      scrollPosition > 20
                        ? 'text-primary-500 hover:bg-accent-500 hover:shadow-md'
                        : 'hover:bg-secondary-500 hover:shadow-md'
                    }`}
                    >
                      {link.title}
                    </a>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`hidden md:flex w-1/5 gap-6 text-[2rem] justify-center items-center duration-500 ${
            scrollPosition > 20 ? 'text-primary-500 scale-90' : 'text-secondary-500'
          }`}
        >
          <a target='_blank' href='https://www.facebook.com/orivesiallstars/' rel='noopener noreferrer'>
            <BsFacebook className='text-[1.7rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-accent-500 duration-150 active:scale-110 cursor-pointer drop-shadow' />
          </a>
          <a href='https://www.instagram.com/orivesiallstars/' target='_blank' rel='noopener noreferrer'>
            <AiFillInstagram className='opacity-80 hover:opacity-100 hover:scale-125 duration-150 hover:text-accent-500 active:scale-110 cursor-pointer drop-shadow' />
          </a>
          <a
            href='https://www.youtube.com/results?search_query=orivesi+all+stars'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillYoutube
              className='text-[2.2rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-accent-500 duration-150 
            active:scale-110 cursor-pointer drop-shadow'
            />
          </a>
          <a href='mailto:orivesiallstars@gmail.com'>
            <AiFillMail className='opacity-80 hover:opacity-100 hover:scale-125 duration-150 hover:text-accent-500 active:scale-110 cursor-pointer drop-shadow' />
          </a>
        </div>
      </div>
      <div
        className={`w-full h-[75px] px-8 flex justify-between items-center fixed z-30 bg-secondary-500 md:hidden, ${
          isMobileNavOpen ? '' : 'shadow-lg'
        }`}
      >
        <Link href='/'>
          <div
            className={`leading-4 cursor-pointer flex flex-col justify-center items-center text-center md:w-1/5 text-secondary-500 hover:text-secondary-800 duration-150 sm:mt-[-4px] tracking-wider mb-1`}
          >
            <p className='font-work font-bold text-2xl md:text-3xl text-accent-500 drop-shadow-md'>ORIVESI</p>
            <p
              className={`font-work font-bold text-[17px] md:text-[21px] duration-300 drop-shadow-md text-primary-500`}
            >
              ALL STARS
            </p>
          </div>
        </Link>
        <div className='Hamburger' onClick={handleHamburgerClick}>
          {!isMobileNavOpen ? (
            <div className='space-y-2'>
              <span className='block w-8 h-0.5 bg-primary-500'></span>
              <span className='block w-8 h-0.5 bg-primary-500'></span>
              <span className='block w-8 h-0.5 bg-primary-500'></span>
            </div>
          ) : (
            <AiOutlineClose className='text-4xl text-primary-500' />
          )}
        </div>
      </div>
      {isMobileNavOpen ? (
        <div
          className={`w-full min-h-[calc(100vh-75px)] flex-col gap-20 bg-secondary-500 fixed top-[75px] py-8 z-20 ${
            isMobileNavOpen ? 'flex' : 'hidden'
          } duration-300`}
        >
          <div>
            <ul className='flex align-middle justify-center flex-col items-center gap-8'>
              {links.map((link) => (
                <li key={link.title}>
                  {link.type === 'dropdown' ? (
                    <p className='text-primary-500 text-2xl font-medium'>{link.title}</p>
                  ) : (
                    <Link href={link.page}>
                      <a
                        className={`text-primary-500
                    ${
                      router.pathname === link.page ||
                      (link.page.includes(router.pathname.split('/')[1]) && router.pathname !== '/')
                        ? 'text-accent-500 font-bold'
                        : 'text-primary-500'
                    }
                    py-[13px] px-[20px] active:hover:bg-accent:500 text-2xl duration-100 hover:text-white rounded font-sans tracking-wide font-medium`}
                      >
                        {link.title}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div id='right' className='flex flex-col gap-4 text-primary-500 items-center'>
            <div className='flex gap-6 text-[2rem] duration-500 items-center text-primary-500'>
              <a target='_blank' href='https://www.facebook.com/orivesiallstars/' rel='noopener noreferrer'>
                <BsFacebook className='text-[1.7rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-accent-500 duration-150 active:scale-110 cursor-pointer drop-shadow' />
              </a>
              <a href='https://www.instagram.com/orivesiallstars/' target='_blank' rel='noopener noreferrer'>
                <AiFillInstagram className='opacity-80 hover:opacity-100 hover:scale-125 duration-150 hover:text-accent-500 active:scale-110 cursor-pointer drop-shadow' />
              </a>
              <a
                href='https://www.youtube.com/results?search_query=orivesi+all+stars'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillYoutube className='text-[2.2rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-accent-500 duration-150 active:scale-110 cursor-pointer drop-shadow' />
              </a>
              <a href='mailto:orivesiallstars@gmail.com'>
                <AiFillMail className='opacity-80 hover:opacity-100 hover:scale-125 duration-150 hover:text-accent-500 active:scale-110 cursor-pointer drop-shadow' />
              </a>
            </div>

            <p>Copyright © 2022 Orivesi All Stars</p>
            <p>Website created by Elias Frigård</p>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
