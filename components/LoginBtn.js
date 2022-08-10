import { useSession, signIn, signOut } from 'next-auth/react'

export default function LoginBtn({ classes }) {
  const styling = `${classes} hidden text-white font-bold py-3 px-6 tracking-widest text-md hover:scale-105 duration-150 active:scale-100 uppercase font-sketch hover:shadow-md rounded-xl`

  const { data: session } = useSession()

  if (session) {
    return (
      <button id='logout' className={styling} onClick={() => signOut()}>
        Kirjaudu Ulos
      </button>
    )
  }
  return (
    <button id='login' className={styling} onClick={() => signIn()}>
      Kirjaudu Sisään
    </button>
  )
}
