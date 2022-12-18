import PaginationItem from './PaginationItem'

export default function Pagination({ pageCount, pageSize, total, currentPage, elementsOnPage }) {
  console.log(typeof pageSize)
  const paginationItems = () => {
    const items = []

    for (let i = 0; i < pageCount; i++) {
      items.push(
        <PaginationItem link={`/scores/${i + 1}`} highlighted={i + 1 === currentPage}>
          {i + 1}
        </PaginationItem>
      )
    }

    return items
  }

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
            Showing <span className='font-medium'>{(currentPage - 1) * pageSize + 1}</span> to{' '}
            <span className='font-medium'>{(currentPage - 1) * pageSize + elementsOnPage}</span> of{' '}
            <span className='font-medium'>{total}</span> results
          </p>
        </div>
        <div>
          <nav className='isolate inline-flex -space-x-px rounded-md shadow-sm' aria-label='Pagination'>
            <PaginationItem link={`/scores/${currentPage - 1}`} arrowLeft></PaginationItem>
            {paginationItems()}
            <PaginationItem link={`/scores/${currentPage + 1}`} arrowRight></PaginationItem>
          </nav>
        </div>
      </div>
    </div>
  )
}
