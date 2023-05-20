/**
 * This script is used to download music scores from orivesiallstars.fi.
 * @author Elias Frigård
 */

import fs from 'fs'
import puppeteer from 'puppeteer'
import axios from 'axios'
import getYouTubeID from 'get-youtube-id'

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const downloadFile = async (link, directory, extension) => {
  const filename = `${directory}/${link.title}.${extension}`

  fs.writeFileSync(filename, 'Learn Node FS module', function (err) {
    if (err) throw err
    console.log('File is created successfully.')
  })

  const writer = fs.createWriteStream(filename)

  const response = await axios({
    url: link.href,
    method: 'GET',
    responseType: 'stream',
  })

  response.data.pipe(writer)

  writer.on('finish', () => {
    writer.close()
  })
}

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('https://orivesiallstars.fi/?page_id=1106')

  let scores = await page.evaluate(() => {
    let list = document.querySelectorAll('.entry-content ul li')

    list = Array.from(list)

    let processed = []

    for (let i = 0; i < list.length; i++) {
      const element = list[i]

      // Split by semicolon.
      let title = element.textContent.split(';')[0]

      // Split also those with colon.
      title = title.split(':')[0]

      // Remove hearts.
      title = title.replaceAll('♥', '')
      // Remove stars.
      title = title.replaceAll('★', '')

      // Replace slashes in name.
      title = title.replaceAll('/', ', ')

      if (!title) continue

      // Get links.
      let links = Array.from(element.querySelectorAll('a'))

      links = links.map((a) => {
        const transformed = {
          title: a.textContent,
          href: a.href,
        }

        return transformed
      })

      processed.push({
        title,
        links,
        youtube: [],
      })
    }

    return processed
  })

  await browser.close()

  scores.forEach((score) => {
    score.links.forEach((link) => {
      const youtubeId = getYouTubeID(link.href)
      if (youtubeId) score.youtube.push(youtubeId)
    })

    score.links = score.links.filter(
      (link) => !link.href.includes('youtu.be') && !link.href.includes('youtube')
    )
  })

  var scoresJson = JSON.stringify(scores)

  fs.writeFileSync('./scores.json', scoresJson, 'utf8')

  // For each score, create directory and download files.
  for (const score of scores) {
    await sleep(100)

    const directory = `./scores/${score.title}`

    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory)
    }

    score.links.forEach((link) => {
      const extension = link.href.split('.').pop()

      if (extension === 'pdf' || extension === 'jpg') {
        downloadFile(link, directory, extension)
      }
    })
  }
}

main()