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
       .map((post) => {
         return `
       <url>
           <loc>${`https://orivesiallstars.net/news/${post.id}`}</loc>
           <lastmod>${new Date(post.attributes.updatedAt).toLocaleDateString('se')}</lastmod>
       </url>
     `
       })
       .join('')}
     ${scores
       .map((score) => {
         return `
       <url>
           <loc>${`https://orivesiallstars.net/scores/${score.id}`}</loc>
           <lastmod>${new Date(score.attributes.updatedAt).toLocaleDateString('se')}</lastmod>
       </url>
     `
       })
       .join('')}
     ${events
       .map((event) => {
         return `
       <url>
           <loc>${`https://orivesiallstars.net/events/${event.id}`}</loc>
           <lastmod>${new Date(event.attributes.updatedAt).toLocaleDateString('se')}</lastmod>
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

  const data = {
    scores: scores.data.data,
    news: news.data.data,
    events: events.data.data,
  }

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(data)

  console.log(new Date(data.scores[0].attributes.updatedAt).toLocaleDateString('se'))

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
