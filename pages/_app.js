import '../styles/globals.css'
import axios from 'axios'

axios.defaults.headers.common = {
  Authorization: `Bearer ${process.env.API_TOKEN}`,
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
