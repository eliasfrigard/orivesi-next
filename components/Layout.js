import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="pt-[95px]">{children}</main>
      <Footer />
    </div>
  )
}
