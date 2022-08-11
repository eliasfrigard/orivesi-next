import SidebarLink from './SidebarLink'

export default function Sidebar() {
  return (
    <div className='fixed flex flex-col gap-8 pt-8 h-full w-[300px] border-r-2 border-secondary-200 border-opacity-50 shadow-xl'>
      <h3 className='text-3xl text-center'>Orivesi Admin</h3>
      <div id='example-link-group' className='px-4'>
        <h3 className='pl-4 mb-2 uppercase text-[16px] font-bold font-work tracking-wider'>Hallinta</h3>
        <SidebarLink title='Nuotit' url='/admin/scores'></SidebarLink>
        <SidebarLink title='Uutiset' url='/admin/news'></SidebarLink>
        <SidebarLink title='Tapahtumat' url='/admin/events'></SidebarLink>
      </div>
    </div>
  )
}
