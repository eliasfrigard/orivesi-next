import Navbar from './Navbar'
import Footer from './Footer'

import Head from 'next/head'

export default function Layout({
  children,
  pageTitle,
  pageDescription,
  pageImage = 'https://orivesiadmin.net/oas_image.jpg',
  pageUrl
}) {
  return (
    <div className='bg-primary-500'>
      <Head>
        <title>{pageTitle} | Orivesi All Stars</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="Finnish, Finland, Suomi, Kansanmusiikki, Folk Music, Antti Järvelä" />
        <meta name="author" content="Elias Frigård" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={pageTitle} key="title" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={`https://orivesiallstars.com${pageUrl}`} />
      </Head>
      <Navbar />
      <main className='pt-[135px] min-h-[calc(90vh)]'>{children}</main>
      <Footer />
    </div>
  )
}
