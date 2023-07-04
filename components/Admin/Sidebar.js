import SidebarLink from './SidebarLink'

import { MdDashboard } from 'react-icons/md'

export default function Sidebar() {
  const sidebarStyle = 'fixed flex flex-col gap-4 pt-[calc(83px+2rem)] h-full w-[300px] border-r border-secondary-500 border-opacity-10 shadow-lg px-6'

  return (
    <div className={sidebarStyle}>
      <h3 className='text-2xl pl-3 tracking-wide'>Dashboard</h3>
      <div>
        <SidebarLink href="/admin">
          <MdDashboard className='text-2xl' />
          <p>Dashboard</p>
        </SidebarLink>
        <SidebarLink href="/admin/scores">
          <MdDashboard className='text-2xl' />
          <p>Nuotit</p>
        </SidebarLink>
        <SidebarLink href="/admin/news">
          <MdDashboard className='text-2xl' />
          <p>Uutiset</p>
        </SidebarLink >
        <SidebarLink href="/admin/events">
          <MdDashboard className='text-2xl' />
          <p>Tapahtumat</p>
        </SidebarLink >
      </div>
    </div>
  )
}
