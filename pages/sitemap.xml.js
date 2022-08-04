import axios from 'axios'

function generateSiteMap({ news, events, scores }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://orivesiallstars.net/</loc>
     </url>
     <url>
       <loc>https://orivesiallstars.net/news</loc>
     </url>
     <url>
       <loc>https://orivesiallstars.net/about</loc>
     </url>
     <url>
       <loc>https://orivesiallstars.net/events</loc>
     </url>
     <url>
       <loc>https://orivesiallstars.net/scores</loc>
     </url>
     <url>
       <loc>https://orivesiallstars.net/media/images</loc>
     </url>
     <url>
       <loc>https://orivesiallstars.net/media/audio</loc>
     </url>
     <url>
       <loc>https://orivesiallstars.net/membership</loc>
     </url>
     <url>
       <loc>https://orivesiallstars.net/contact</loc>
     </url>
     ${news
       .map(({ id }) => {
         return `
       <url>
           <loc>${`https://orivesiallstars.net/news/${id}`}</loc>
       </url>
     `
       })
       .join('')}
     ${scores
       .map(({ id }) => {
         return `
       <url>
           <loc>${`https://orivesiallstars.net/scores/${id}`}</loc>
       </url>
     `
       })
       .join('')}
     ${events
       .map(({ id }) => {
         return `
       <url>
           <loc>${`https://orivesiallstars.net/events/${id}`}</loc>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // Get all posts.
  const news = await axios.get(`${process.env.API_ADDRESS}/posts`)
  const scores = await axios.get(`${process.env.API_ADDRESS}/music-scores`)
  const events = await axios.get(`${process.env.API_ADDRESS}/events`)

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap({
    scores: scores.data.data,
    news: news.data.data,
    events: events.data.data,
  })

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
