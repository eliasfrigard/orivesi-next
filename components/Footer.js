import Link from 'next/link'
import Router from 'next/router'

import { BsFacebook } from 'react-icons/bs'
import { AiFillMail, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

import { useState } from 'react'

export default function Footer() {
  const [searchInfo, setSearchInfo] = useState({
    query: '',
  })

  const handleChange = (event) => {
    setSearchInfo({ ...searchInfo, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    Router.push(`/scores/search?query=${searchInfo.query}`)
  }

  return (
    <div
      className='w-full mt-16 bg-secondary-500 text-primary-500 flex justify-center items-center
    '
    >
      <div className='container h-full flex flex-col lg:flex-row gap-16 lg:gap-3 py-16 tracking-wider justify-between'>
        <div id='left' className='h-full sm:w-2/5'>
          <Link href='/'>
            <div
              className={`leading-4 cursor-pointer flex gap-2 text-secondary-500 hover:text-secondary-800 duration-150 mt-[-4px]  mb-7`}
            >
              <p className='font-work font-bold text-3xl text-accent-500'>ORIVESI</p>
              <p className={`font-bold font-sketch text-3xl duration-300 text-primary-500`}>ALL STARS</p>
            </div>
          </Link>
          <h4 className='text-2xl font-sketch font-bold tracking-wider'>Hae nuottiarkistosta</h4>
          <form
            onSubmit={handleSubmit}
            action=''
            method='get'
            className='gap-6 sm:gap-4 w-full lg:w-80 flex flex-col pt-6'
          >
            <input
              value={searchInfo.query}
              onChange={handleChange}
              type='text'
              name='query'
              className='rounded-full p-4 w-full text-grey-500 outline-none px-8 tracking-wider shadow-lg'
              placeholder='Hae nuottiarkistosta ...'
            />
          </form>
        </div>
        <div id='mid' className='h-full grow flex flex-col'>
          <h4 className='text-2xl font-sketch font-bold tracking-wider'>Linkit</h4>
          <div className='flex flex-col gap-3 text-md mt-3'>
            <Link href='/'>
              <p className='hover:text-accent-500 cursor-pointer'>Home</p>
            </Link>
            <Link href='/'>
              <p className='hover:text-accent-500 cursor-pointer'>All Stars</p>
            </Link>
            <Link href='/'>
              <p className='hover:text-accent-500 cursor-pointer'>Uutiset</p>
            </Link>
            <Link href='/'>
              <p className='hover:text-accent-500 cursor-pointer'>Tapahtumat</p>
            </Link>
            <Link href='/'>
              <p className='hover:text-accent-500 cursor-pointer'>Nuotit</p>
            </Link>
            <Link href='/'>
              <p className='hover:text-accent-500 cursor-pointer'>Media</p>
            </Link>
            <Link href='/'>
              <p className='hover:text-accent-500 cursor-pointer'>Yhteystiedot</p>
            </Link>
          </div>
        </div>
        <div id='right' className='h-full grow flex flex-col gap-4'>
          <div className='flex gap-6 text-[2rem] duration-500 items-center text-primary-500'>
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
              <AiFillYoutube className='text-[2.2rem] opacity-80 hover:opacity-100 hover:scale-125 hover:text-accent-500 duration-150 active:scale-110 cursor-pointer drop-shadow-lg' />
            </a>
            <a href='mailto:orivesiallstars@gmail.com'>
              <AiFillMail className='opacity-80 hover:opacity-100 hover:scale-125 duration-150 hover:text-accent-500 active:scale-110 cursor-pointer drop-shadow-lg' />
            </a>
          </div>

          <p>Copyright © 2022 Orivesi All Stars</p>
          <p>Website created by Elias Frigård</p>
        </div>
      </div>
    </div>
  )
}
