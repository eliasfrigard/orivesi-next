import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import PaginationItem from './PaginationItem'

export default function Pagination({ pages, pageLength = 50, total = 163, currentPage = 1 }) {
  return (
    <div className='flex items-center justify-between bg-primary px-4 py-3 sm:px-6'>
      <div className='flex flex-1 justify-between sm:hidden'>
        <a
          href='#'
          className='relative inline-flex items-center rounded-md border border-gray-300 bg-primary px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
        >
          Previous
        </a>
        <a
          href='#'
          className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-primary px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
        >
          Next
        </a>
      </div>
      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm text-gray-700'>
            Showing <span className='font-medium'>{(currentPage - 1) * pageLength + 1}</span> to{' '}
            <span className='font-medium'>{currentPage * pageLength}</span> of{' '}
            <span className='font-medium'>{total}</span> results
          </p>
        </div>
        <div>
          <nav className='isolate inline-flex -space-x-px rounded-md shadow-sm' aria-label='Pagination'>
            <PaginationItem>
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
            </PaginationItem>
            <PaginationItem>
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
            </PaginationItem>
          </nav>
        </div>
      </div>
    </div>
  )
}
