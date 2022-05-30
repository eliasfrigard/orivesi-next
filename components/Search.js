import { useState } from 'react'

export default function Search({ input, handleSubmit }) {
  const [sorting, setSorting] = useState('Title')
  const [direction, setDirection] = useState('asc')
  const [searchValue, setsearchValue] = useState('')
  const [disableDirection, setDisableDirection] = useState(true)

  const filteringOptions = ['Title', 'Composer', 'Dancetype', 'Date']

  const handleSortingChange = (event) => {
    if (filteringOptions.includes(event.target.value)) setDisableDirection(false)
    else setDisableDirection(true)
  }

  const handleDirectionChange = (event) => {
    setDirection(event.target.value)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault

    handleSubmit({
      searchValue,
      sorting,
      direction,
    })
  }

  return (
    <form className='flex justify-center' onSubmit={handleOnSubmit({ searchValue, sorting, direction })}>
      <div className='mb-3 xl:w-2/3'>
        <div className='input-group relative flex flex-wrap items-stretch w-full mb-4 rounded'>
          <input
            type='search'
            className='form-control relative flex-auto min-w-0 block px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-accent-500 focus:outline-none'
            placeholder='Search'
            aria-label='Search'
            aria-describedby='button-addon2'
          />
          <span
            className='input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded'
            id='basic-addon2'
          >
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='search'
              className='w-4 cursor-pointer hover:scale-125 duration-300'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'
              ></path>
            </svg>
          </span>
        </div>
        <div className='w-[calc(100%-2.5rem)] px-12 flex gap-4'>
          <select
            onChange={handleSortingChange}
            className='tracking-wide w-3/5 px-4 py-2 text-base font-normal bg-clip-padding border border-solid focus:border-gray-300 rounded transition ease-in-out duration-400 m-0 focus:outline-none'
          >
            {filteringOptions.map((option, index) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            value={direction}
            onChange={handleDirectionChange}
            className={`tracking-wide w-2/5 px-4 py-2 text-base font-normal bg-clip-padding border border-solid focus:border-gray-300 rounded transition ease-in-out duration-400 m-0   focus:outline-none disabled:opacity-80 `}
          >
            <option defaultValue value='asc'>
              A - Ö
            </option>
            <option value='desc'>Ö - A</option>
          </select>
        </div>
      </div>
    </form>
  )
}
