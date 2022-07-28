export default function Title({ children, version, color }) {
  return (
    <>
      {version === 'v1' && (
        <h3 className='text-5xl text-center leading-[4rem] tracking-wider text-grey-400'>{children}</h3>
      )}

      {version === 'v2' && (
        <h3 className='text-center text-4xl md:text-6xl tracking-wider font-sketch font-bold drop-shadow-lg'>
          {children}
        </h3>
      )}

      {version === 'v3' && <h1 className='text-6xl tracking-wider break-all leading-tight'>{children}</h1>}

      {(!version || version === '') && (
        <div className='flex justify-center items-center'>
          <h3
            className={`w-[90vw] text-5xl md:text-8xl font-sketch uppercase font-bold tracking-wider text-center break-words drop-shadow-lg`}
          >
            {children}
          </h3>
        </div>
      )}
    </>
  )
}
