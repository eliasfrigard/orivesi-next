/**
 * This script is used to upload music scores from file directories to Strapi.
 * @author Elias Frigård
 */

import fs from 'fs'
import axios from 'axios'
import FormData from 'form-data'

const uploadFiles = async (directory) => {
  const files = fs.readdirSync(directory)

  const uploads = []

  for (let i = 0; i < files.length; i++) {
    const form = new FormData()

    form.append('files', fs.createReadStream(directory + files[i]), files[i])

    try {
      const response = await axios.post(`${process.env.STRAPI_URL}/api/upload`, form, {
        headers: {
          Authorization: process.env.STRAPI_TOKEN,
        },
      })

      uploads.push(response.data[0].id)
    } catch (error) {
      console.log(error.response)
    }
  }

  return uploads
}

const main = async () => {
  let scores = fs.readFileSync('scores.json')
  scores = JSON.parse(scores)

  for (let i = 0; i < 1; i++) {
    const score = scores[i]
    const fileDirectory = `scores/${score.title}/`

    const uploads = await uploadFiles(fileDirectory)

    let youtubes = ''

    for (let i = 0; i < score.youtube.length; i++) {
      const video = score.youtube[i]

      if (i > 0) {
        youtubes += '\n' + video
      } else {
        youtubes += video
      }
    }

    try {
      await axios.post(
        `${process.env.STRAPI_URL}/api/music-scores`,
        {
          data: {
            Title: score.title,
            Youtube: youtubes,
            Scores: uploads,
          },
        },
        {
          headers: {
            Authorization: process.env.STRAPI_TOKEN,
          },
        }
      )
    } catch (error) {
      console.log(error.response)
    }
  }
}

main()