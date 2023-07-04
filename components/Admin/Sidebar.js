import SidebarLink from './SidebarLink'

import { MdDashboard } from 'react-icons/md'

export default function Sidebar() {
  const sidebarStyle = 'fixed flex flex-col gap-4 pt-[calc(83px+2rem)] h-full w-[300px] border-r border-secondary-500 border-opacity-10 shadow-lg px-6'

  return (
    <div className={sidebarStyle}>
      <h3 className='text-3xl pl-3'>Admin Panel</h3>
      <div>
        <SidebarLink href="/admin" active={false}>
          <MdDashboard className='text-2xl' />
          <p>Dashboard</p>
        </SidebarLink>
        <SidebarLink href="/admin/scores" active={false}>
          <p>Nuotit</p>
        </SidebarLink>
        <SidebarLink href="/admin/news" active={false}>
          <p>Uutiset</p>
        </SidebarLink >
        <SidebarLink href="/admin/events" active={false}>
          <p>Tapahtumat</p>
        </SidebarLink >
      </div>
    </div>
  )
}
