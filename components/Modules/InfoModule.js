import { useState } from 'react'

export default function InfoModule({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {!isOpen ? (
        <div
          className='fixed text-2xl text-primary-500 font-medium bg-secondary-500 w-[40px] h-[40px] bottom-4 right-7 rounded-md flex justify-center items-center  hover:w-[47px] hover:h-[47px] hover:text-3xl duration-200 cursor-pointer border-2 border-primary-500 z-20'
          onClick={handleClick}
        >
          <p className=''>?</p>
        </div>
      ) : (
        <div
          className='fixed text-2xl text-primary-500 font-medium bg-accent-500 w-[40px] h-[40px] bottom-4 right-7 rounded-md flex justify-center items-center  hover:w-[47px] hover:h-[47px] hover:text-3xl duration-200 cursor-pointer border-2 border-primary-500 z-20'
          onClick={handleClick}
        >
          <p className=''>X</p>
        </div>
      )}

      {isOpen && (
        <div className='fixed w-full max-w-[330px] sm:max-w-[350px] right-6 bottom-[75px] rounded-lg bg-primary-500 z-20 border-4 border-accent-500 shadow-lg p-6 py-10'>
          {children}
        </div>
      )}
    </>
  )
}
