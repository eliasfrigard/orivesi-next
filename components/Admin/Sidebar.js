import SidebarLink from './SidebarLink'

export default function Sidebar() {
  return (
    <div className='fixed flex flex-col gap-8 py-8 h-full w-[300px] border-r-2 border-secondary-200 border-opacity-50 shadow-xl'>
      <h3 className='text-3xl text-center'>Orivesi Admin</h3>
      <div id='example-link-group' className='px-2'>
        <h3 className='pl-4 font-sketch uppercase font-bold text-2xl tracking-wide'>Hallinta</h3>
        <SidebarLink title='Uutiset' url='/admin/news'></SidebarLink>
        <SidebarLink></SidebarLink>
        <SidebarLink></SidebarLink>
      </div>
    </div>
  )
}
