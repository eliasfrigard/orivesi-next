export default function paginationItem({ children, highlighted, clickable = true }) {
  if (!clickable) {
    return (
      <span className='relative inline-flex items-center border border-gray-300 bg-primary px-4 py-2 text-sm font-medium text-gray-700'>
        {children}
      </span>
    )
  }

  if (highlighted) {
    return (
      <a
        href='#'
        className='relative z-10 inline-flex items-center border border-secondary-200 bg-secondary-200 px-4 py-2 text-sm font-medium text-primary-600 focus:z-20'
      >
        {children}
      </a>
    )
  }

  return (
    <a
      href='#'
      className='relative inline-flex items-center border border-gray-300 bg-primary px-4 py-2 text-sm font-medium text-secondary-500 hover:bg-gray-50 focus:z-20'
    >
      {children}
    </a>
  )
}
