import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { BsFacebook, BsFillPinMapFill } from 'react-icons/bs'
import { AiFillMail, AiOutlineLink, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

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
      className={`lg:flex hidden fixed w-full justify-center py-[10px] bg-opacity-90 backdrop-blur z-50 bg-primary-500 pt-10 ${
        scrollPosition > 20 ? 'shadow-xl pt-[10px]' : ''
      } duration-500`}
    >
      <Link href='/'>
        <div className='leading-6 cursor-pointer flex flex-col justify-center text-center w-1/5 text-secondary-500 hover:text-secondary-800 duration-150'>
          <p className='font-work font-bold text-4xl '>ORIVESI</p>
          <p className='font-work text-[27px] '>ALL STARS</p>
        </div>
      </Link>
      <div className='container flex justify-center items-center h-[75px] w-3/5'>
        <ul className='flex align-middle gap-3'>
          {links.map((link) => (
            <li key={link.title}>
              <Link href={link.page}>
                <a
                  className={`
                  ${
                    router.pathname === link.page ||
                    (link.page.includes(router.pathname.split('/')[1]) && router.pathname !== '/')
                      ? 'bg-secondary-500 hover:bg-secondary-400 text-white'
                      : ''
                  }
                  py-[13px] px-[20px] hover:bg-secondary-500 active:hover:bg-accent:500 duration-100 hover:text-white rounded font-sans tracking-wide font-medium`}
                >
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-1/5 flex gap-6 text-[2rem] justify-center items-center text-secondary-500'>
        <BsFacebook className='text-[1.7rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-secondary-800 duration-300 active:scale-110 cursor-pointer' />
        <AiFillInstagram className='opacity-80 hover:opacity-100 hover:scale-125 duration-300 hover:text-secondary-800 active:scale-110 cursor-pointer' />
        <AiFillYoutube className='text-[2.2rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-secondary-800 duration-300 active:scale-110 cursor-pointer' />
        <AiFillMail className='opacity-80 hover:opacity-100 hover:scale-125 duration-300 hover:text-secondary-800 active:scale-110 cursor-pointer' />
      </div>
    </div>
  )
}
