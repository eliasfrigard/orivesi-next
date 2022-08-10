import { SessionProvider } from "next-auth/react"

import '../styles/globals.css'
import axios from 'axios'

axios.defaults.headers.common = {
  Authorization: `Bearer ${process.env.API_TOKEN}`,
}

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
