import Navbar from '../Navbar'
import Sidebar from './Sidebar'

export default function AdminLayout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <main className='ml-[300px] min-h-screen pt-[calc(83px)] bg-primary-500'>
        <div className='w-full h-full p-10'>
          <div className='w-full h-full bg-primary-600 p-6 rounded-md shadow'>
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
