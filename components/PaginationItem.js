import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export default function paginationItem({
  children,
  highlighted,
  clickable = true,
  link,
  arrowLeft,
  arrowRight,
}) {
  if (arrowLeft) {
    return (
      <Link href={'/scores/[page]'} as={`/scores/${link}`} passHref>
        <a className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-primary-500 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-accent-500 hover:text-primary-500 hover:border-accent-500 focus:z-20'>
          <span className='sr-only'>Previous</span>
          <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
        </a>
      </Link>
    )
  }

  if (arrowRight) {
    return (
      <Link href={'/scores/[page]'} as={`/scores/${link}`} passHref>
        <a className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-primary-500 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-accent-500 hover:text-primary-500 hover:border-accent-500 focus:z-20'>
          <span className='sr-only'>Next</span>
          <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
        </a>
      </Link>
    )
  }

  if (!clickable) {
    return (
      <span className='relative inline-flex items-center border border-gray-300 bg-primary px-4 py-2 text-sm font-medium text-gray-700'>
        {children}
      </span>
    )
  }

  if (highlighted) {
    return (
      <Link href={'/scores/[page]'} as={`/scores/${link}`} passHref>
        <a className='relative z-10 inline-flex items-center border border-secondary-200 bg-secondary-200 px-4 py-2 text-sm font-medium text-primary-600 focus:z-20'>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <Link href={'/scores/[page]'} as={`/scores/${link}`} passHref>
      <a className='relative inline-flex items-center border border-gray-300 bg-primary px-4 py-2 text-sm font-medium hover:bg-accent-500 hover:text-primary-500 hover:border-accent-500 focus:z-20'>
        {children}
      </a>
    </Link>
  )
}
