import Sidebar from './Sidebar'

export default function AdminLayout({ children }) {
  return (
    <div className='bg-primary-500 w-full'>
      <Sidebar></Sidebar>
      <main className='ml-[300px] min-h-screen p-16'>{children}</main>
    </div>
  )
}
