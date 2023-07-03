import { useSession, signIn, signOut } from 'next-auth/react'

import { CgProfile } from 'react-icons/cg'

import { Fragment } from 'react'
import { Menu } from '@headlessui/react'


export default function LoginBtn({ classes }) {
  const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
  ]

  const btnStyle = `${classes} px-6`

  const iconStyle = `text-primary-500 opacity-80`

  const { data: session } = useSession()

  if (session) {
    return (
      <button className={btnStyle} id='logout' onClick={() => signOut()}>
        <CgProfile className={iconStyle} />
      </button>
    )
  }
  return (
    <Menu>
      <Menu.Button className="flex justify-center items-center">
        <button className={btnStyle} id='login' onClick={() => signIn()}>
          <CgProfile className={iconStyle} />
        </button>
      </Menu.Button>
      <Menu.Items className="absolute flex flex-col bg-secondary-500 text-base p-4 gap-2 rounded shadow top-[83px]">
        {links.map((link) => (
          <Menu.Item
            as="a"
            key={link.href}
            href={link.href}
            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
          >
            {link.label}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu >



  )
}
