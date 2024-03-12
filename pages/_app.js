import useScrollRestoration from '../utils/hooks/useScrollRestoration'
import React from 'react'
import Script from 'next/script'
import { Montserrat } from 'next/font/google'
import { ParallaxProvider } from 'react-scroll-parallax'
import '../styles/globals.css'

import '../styles/globals.css'
import axios from 'axios'

axios.defaults.headers.common = {
  Authorization: `Bearer ${process.env.API_TOKEN}`,
}

// Define Montserrat font
const mont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mont',
})

function MyApp({ Component, pageProps: { session, ...pageProps }, router }) {
  useScrollRestoration(router)

  return (
    <ParallaxProvider>
      <div id="__next" className={`${mont.className} font-mont`}>
        <Script src="/static/script.js" />
        <Component {...pageProps} />
      </div>
    </ParallaxProvider>
  );
};

export default MyApp;
