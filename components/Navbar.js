import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { BsFacebook } from 'react-icons/bs'
import { AiFillMail, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

export default function Navbar() {
  const router = useRouter()

  const links = [
    { title: 'Home', page: '/' },
    { title: 'All Stars', page: '/about' },
    { title: 'Uutiset', page: '/news' },
    { title: 'Tapahtumat', page: '/events' },
    { title: 'Nuotit', page: '/scores' },
    { title: 'Media', page: '/media' },
    { title: 'Yhteystiedot', page: '/yhteys' },
  ]

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setScrollPosition(window.scrollY)
    }
  })

  return (
    <div
      className={`flex fixed w-full justify-center py-[10px]  backdrop-blur z-50  pt-10 ${
        scrollPosition > 20 ? 'shadow-xl pt-[10px] bg-secondary-500' : 'bg-primary-500'
      } duration-500`}
    >
      <Link href='/'>
        <div
          className={`leading-4 cursor-pointer flex md:flex-col gap-2 md:gap-0 justify-center items-center text-center md:w-1/5 text-secondary-500 hover:text-secondary-800 duration-150 sm:mt-[-4px] tracking-wider ${
            scrollPosition > 20 ? 'scale-90' : ''
          }`}
        >
          <p className='font-work font-medium text-2xl md:text-3xl text-accent-500 drop-shadow-md'>ORIVESI</p>
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
        <ul className='flex align-middle gap-2'>
          {links.map((link) => (
            <li key={link.title}>
              <Link href={link.page}>
                <a
                  className={`
                  ${
                    router.pathname === link.page ||
                    (link.page.includes(router.pathname.split('/')[1]) && router.pathname !== '/')
                      ? scrollPosition > 20
                        ? 'bg-accent-500 hover:bg-accent-400 text-white shadow-lg'
                        : 'bg-secondary-500 hover:bg-secondary-400 text-white shadow-lg'
                      : ''
                  }
                  py-[13px] px-[20px]  active:hover:bg-accent:500 duration-100 hover:text-white rounded font-sans tracking-wide font-medium ${
                    scrollPosition > 20
                      ? 'text-primary-500 hover:bg-accent-500 hover:shadow-lg'
                      : 'hover:bg-secondary-500 hover:shadow-lg'
                  }`}
                >
                  {link.title}
                </a>
              </Link>
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
          <BsFacebook className='text-[1.7rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-accent-500 duration-150 active:scale-110 cursor-pointer drop-shadow-lg' />
        </a>
        <a href='https://www.instagram.com/orivesiallstars/' target='_blank' rel='noopener noreferrer'>
          <AiFillInstagram className='opacity-80 hover:opacity-100 hover:scale-125 duration-150 hover:text-accent-500 active:scale-110 cursor-pointer drop-shadow-lg' />
        </a>
        <a
          href='https://www.youtube.com/results?search_query=orivesi+all+stars'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillYoutube
            className='text-[2.2rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-accent-500 duration-150 
        active:scale-110 cursor-pointer drop-shadow-lg'
          />
        </a>
        <a href='mailto:info@orivesiadmin.net'>
          <AiFillMail className='opacity-80 hover:opacity-100 hover:scale-125 duration-150 hover:text-accent-500 active:scale-110 cursor-pointer drop-shadow-lg' />
        </a>
      </div>
    </div>
  )
}
