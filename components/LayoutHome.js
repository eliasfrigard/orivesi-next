import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className='bg-primary-500'>
      {/* <Navbar /> */}
      <main className='min-h-[90vh]'>{children}</main>
      <Footer />
    </div>
  )
}
