import { useState } from 'react'
import Link from 'next/link'

export default function Title({ title, items, active, scrollPosition }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <a
        onClick={handleClick}
        className={`
        ${isOpen ? 'bg-accent-500 text-primary-500' : ''}
          ${
            active
              ? scrollPosition > 20
                ? 'bg-accent-500 hover:bg-accent-400 text-white shadow-md'
                : 'bg-secondary-500 hover:bg-secondary-400 text-white shadow-md'
              : ''
          }
            py-[13px] px-[20px] cursor-pointer  active:hover:bg-accent:500 duration-100 hover:text-white rounded font-sans tracking-wide font-medium ${
              scrollPosition > 20
                ? 'text-primary-500 hover:bg-accent-500 hover:shadow-md'
                : 'hover:bg-secondary-500 hover:shadow-md'
            }`}
      >
        {title}
      </a>
      {isOpen ? (
        <div
          className={`absolute flex flex-col gap-3 mt-6 translate-x-[-3.9rem] w-[220px] p-4 rounded-lg duration-300 bg-secondary-600 ${
            scrollPosition > 20 ? 'mt-12' : ''
          }`}
        >
          {items.map((item) => (
            <Link href={item.page} key={item.title}>
              <div
                className={`bg-accent-500 hover:bg-accent-700 duration-100 rounded py-[13px] px-[20px] font-sans tracking-wide font-medium text-primary-500 cursor-pointer `}
              >
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
