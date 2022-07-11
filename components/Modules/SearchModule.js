import Button from '../Button'
import Title from '../Title'
import { useState } from 'react'

import Router from 'next/router'

export default function SearchModule({ title = 'Hae meidän nuottiarkistosta' }) {
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
    <div className=' selection:bg-accent-500 w-full flex flex-col justify-center items-center py-24 bg-secondary-500 text-primary-500 shadow-xl'>
      <Title version='v2'>{title}</Title>

      <form
        onSubmit={handleSubmit}
        method='get'
        className='w-full lg:w-[900px] gap-6 sm:gap-4 container flex flex-col lg:flex-row justify-center items-center pt-10'
      >
        <input
          value={searchInfo.query}
          onChange={handleChange}
          type='text'
          name='query'
          className='rounded-full p-4 w-full lg:w-3/5 text-grey-500 outline-none px-8 tracking-wider shadow-lg'
          placeholder='Hae nuottiarkistosta ...'
        />
        <Button type='submit' className='w-full mt-6 lg:mt-0 md:w-1/2 lg:w-2/5'>
          Hae
        </Button>
      </form>
    </div>
  )
}
