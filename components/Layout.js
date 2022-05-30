import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className='bg-primary-500'>
      <Navbar />
      <main className='pt-[135px] min-h-[calc(90vh)]'>{children}</main>
      <Footer />
    </div>
  )
}
