import Link from "next/link"
import { useRouter } from "next/router"

export default function Navbar() {
  const router = useRouter()

  const links = [
    { title: "Home", page: "/" },
    { title: "All Stars", page: "/about" },
    { title: "Uutiset", page: "/news" },
    { title: "Tapahtumat", page: "/events" },
    { title: "Nuotit", page: "/scores" },
    { title: "Media", page: "/media" },
    { title: "Yhteystiedot", page: "/yhteys" },
  ]

  return (
    <div className="lg:flex hidden fixed w-full justify-center py-[10px] bg-opacity-90 backdrop-blur z-50 bg-primary-500">
      <div className="container flex justify-center items-center h-[75px]">
        <ul className="flex align-middle gap-3">
          {links.map((link) => (
            <li key={link.title}>
              <Link href={link.page}>
                <a
                  className={`
                  ${
                    router.pathname === link.page ||
                    (link.page.includes(router.pathname.split("/")[1]) && router.pathname !== "/")
                      ? "bg-secondary-500 hover:bg-secondary-400 text-white"
                      : ""
                  }
                  py-[13px] px-[20px] hover:bg-secondary-500 active:hover:bg-accent:500 duration-100 hover:text-white rounded font-sans tracking-wide font-medium`}
                >
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
