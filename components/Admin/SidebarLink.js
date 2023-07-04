import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SidebarLink({ children, href }) {
  const router = useRouter()

  const [isActive, setIsActive] = React.useState(false)

  React.useEffect(() => {
    const hrefPath = href.split('/').pop()
    const currentPath = router.pathname.split('/').pop()

    setIsActive(hrefPath === currentPath && router.pathname !== '/')
  }, [setIsActive, router.pathname, href])

  const linkStyle = `my-1 p-3 w-full flex items-center hover:bg-secondary-200 hover:text-primary-500 bg-opacity-50 cursor-pointer rounded gap-2 ${isActive && 'bg-accent-500 text-primary-500'}`

  return (
    <Link href={href}>
      <div className={linkStyle}>
        {children}
      </div>
    </Link>
  )
}
