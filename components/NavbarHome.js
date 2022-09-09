import Link from 'next/link'
import Dropdown from './Dropdown'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const router = useRouter()

  const links = [
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
    //     { title: 'Äänitteet', page: '/media/audio' },
    //   ],
    // },
    { title: 'Jäsenyys', page: '/membership' },
    { title: 'Yhteystiedot', page: '/contact' },
  ]

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setScrollPosition(window.scrollY)
    }
  })

  return (
    <div className={`hidden lg:flex w-full justify-center pt-16 backdrop-blur z-20`}>
      <div className='container hidden lg:flex justify-center items-center h-[75px] w-3/5'>
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
                  ></Dropdown>
                </>
              ) : (
                <Link href={link.page}>
                  <a
                    className={`
                    ${
                      router.pathname === link.page ||
                      (link.page.includes(router.pathname.split('/')[1]) && router.pathname !== '/')
                        ? 'bg-secondary-500 hover:bg-secondary-400 text-white shadow-sm'
                        : ''
                    }
                    py-[13px] px-[16px] whitespace-nowrap	 active:hover:bg-accent:500 duration-100 hover:text-white rounded font-sans tracking-wide font-medium hover:bg-secondary-500 hover:shadow-sm'`}
                  >
                    {link.title}
                  </a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
