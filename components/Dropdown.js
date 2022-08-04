import { useState } from 'react'
import Link from 'next/link'

export default function Title({ title, items, active, scrollPosition }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <div onMouseEnter={open} onMouseLeave={close}>
      <a
        className={`
        ${isOpen ? 'bg-accent-500 text-primary-500' : ''}
          ${
            active
              ? scrollPosition > 20
                ? 'bg-accent-500 hover:bg-accent-400 text-white shadow-sm'
                : 'bg-secondary-500 hover:bg-secondary-400 text-white shadow-sm'
              : ''
          }
            py-[13px] px-[16px] cursor-pointer  active:hover:bg-accent:500 duration-100 hover:text-white rounded font-sans tracking-wide font-medium ${
              scrollPosition > 20
                ? 'text-primary-500 hover:bg-accent-500 hover:shadow-sm'
                : 'hover:bg-secondary-500 hover:shadow-sm'
            }`}
      >
        {title}
      </a>
      {isOpen ? (
        <div
          className={`absolute flex flex-col gap-1 mt-2 translate-x-[-3.9rem] w-[220px] p-4 rounded-lg duration-300  ${
            scrollPosition > 20 ? 'pt-8' : ''
          }`}
        >
          {items.map((item) => (
            <Link href={item.page} key={item.title}>
              <div
                className={`bg-secondary-500 hover:bg-accent-500 duration-100 rounded-lg py-[13px] px-[20px] font-sans tracking-wide font-medium text-primary-500 cursor-pointer border-4 border-primary-500 shadow-lg`}
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
