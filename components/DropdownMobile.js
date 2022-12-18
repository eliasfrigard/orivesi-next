import Link from 'next/link'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Title({ title, links }) {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  const handleCLick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (router.pathname.includes(title.toLowerCase())) setIsOpen(true)
  }, [router.pathname, title])

  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <div className='flex items-center gap-2 text-primary-500 pl-8' onClick={handleCLick}>
        <p
          className={`text-primary-500 text-2xl font-medium                     ${router.pathname.includes(title.toLowerCase()) ? 'text-accent-500 font-bold' : 'text-primary-500'
            }`}
        >
          {title}
        </p>

        {isOpen ? (
          <HiChevronUp className='right-24 text-2xl' />
        ) : (
          <HiChevronDown className='right-24 text-2xl' />
        )}
      </div>

      {isOpen ? (
        <div className='flex flex-col gap-4 text-lg tracking-wide text-center'>
          {links.map((link) => (
            <Link key={link.title} href={link.page}>
              <p
                className={`${router.pathname === link.page ? 'text-accent-500' : 'text-primary-500'
                  } font-medium`}
              >
                {link.page}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
