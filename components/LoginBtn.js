import { useSession, signIn, signOut } from 'next-auth/react'

import { CgProfile } from 'react-icons/cg'
import { MdLogout, MdDashboard } from 'react-icons/md'
import { Menu } from '@headlessui/react'


export default function LoginBtn({ classes }) {
  const btnStyle = `${classes} px-6`

  const iconStyle = `opacity-80`

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
      <div className='flex justify-center'>
        <Menu.Button className="flex justify-center items-center text-base uppercase tracking-widest">
          <CgProfile className="text-2xl" />
        </Menu.Button>
        <Menu.Items className="absolute flex flex-col bg-primary-500 text-base p-5 gap-4 rounded shadow mt-10 text-secondary-500">
          <div className="flex items-center gap-2">
            <MdDashboard />
            <Menu.Item
              as="a"
              href="dashboard"
              className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
            >
              Dashboard
            </Menu.Item>
          </div>
          <hr />
          <div className='flex items-center gap-2'>
            <MdLogout className={iconStyle} />
            <Menu.Item
              as="a"
              href="sign-out"
            >
              Kirjaudu ulos
            </Menu.Item>
          </div>
        </Menu.Items>
      </div>
    </Menu >



  )
}
