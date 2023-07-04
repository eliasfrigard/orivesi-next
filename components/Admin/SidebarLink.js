import Link from 'next/link'

export default function SidebarLink({ children, href, active = false }) {
  const linkStyle = 'p-3 w-full flex items-center hover:bg-secondary-200 hover:text-primary-500 bg-opacity-50 cursor-pointer rounded gap-2'

  return (
    <Link href={href}>
      <div className={linkStyle}>
        {children}
      </div>
    </Link>
  )
}
