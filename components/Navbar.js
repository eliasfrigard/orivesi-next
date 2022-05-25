import Link from 'next/link'

export default function Navbar() {
  const links = [
    { title: 'Home', page: '/' },
    { title: 'Allstars', page: '/about' },
    { title: 'Uutiset', page: '/news' },
    { title: 'Tapahtumat', page: '/about' },
    { title: 'Nuotit', page: '/scores' },
    { title: 'Media', page: '/scores' },
    { title: 'Yhteystiedot', page: '/about' },
  ]

  return (
    <div className='lg:flex hidden fixed w-full justify-center py-[10px] bg-opacity-95 backdrop-blur z-50 bg-background'>
      <div className='container flex justify-center items-center h-[75px]'>
        <ul className='flex align-middle gap-3'>
          {links.map((link) => (
            <li key={link.title}>
              <Link href={link.page}>
                <a className='py-[13px] px-[20px] hover:bg-accent-500 active:bg-accent-600  hover:text-white rounded font-sans tracking-wide font-medium'>
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
