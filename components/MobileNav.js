import Link from 'next/link'
import Dropdown from './Dropdown'

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
    {
      title: 'Media',
      page: '/media',
      type: 'dropdown',
      links: [
        { title: 'Kuvat', page: '/media/images' },
        { title: 'Äänitykset', page: '/media/audio' },
      ],
    },
    { title: 'Yhteystiedot', page: '/contact' },
  ]

  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setScrollPosition(window.scrollY)
    }
  })

  return <div className={`w-full h-[75px] bg-red-500`}></div>
}
