import { useState } from 'react'

export default function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(true)

  const close = (event) => {
    if (event.target.id !== 'wrapper') return

    setIsOpen(false)
  }

  return (
    <>
      {isOpen ? (
        <div
          id='wrapper'
          className='fixed w-full h-full top-0 left-0 flex justify-center items-center z-40 bg-grey-500 bg-opacity-50'
          onClick={close}
        >
          <div
            id='content'
            className='fixed md:max-w-[50vw] max-h-[90vh] bg-red-500 bg-opacity-95 rounded-lg border-4 border-secondary-500 z-40 overflow-y-auto overflow-x-hidden'
          >
            {children}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
