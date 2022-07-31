import { useState } from 'react'
import axios from 'axios'

import Title from '../Title'
import Button from '../Button'

export default function HighlightText({ title, subtitle }) {
  const [submitWasAttempted, setSubmitWasAttempted] = useState(false)
  const [submitWasSuccess, setSubmitWasSuccess] = useState()
  const [formData, setFormData] = useState({
    body: '',
    // Honeypot
    rating: '',
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    let formattedData = {
      data: {
        Body: formData.body,
      },
    }

    formattedData = JSON.stringify(formattedData)

    const sendData = async () => {
      if (!submitWasSuccess) {
        const response = await axios.post(`${process.env.API_ADDRESS}/feedbacks`, formattedData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })

        setSubmitWasSuccess(response.status === 200)

        if (submitWasSuccess) {
          setFormData({
            body: '',
          })
        }

        setSubmitWasAttempted(true)
      }
    }

    sendData()
  }

  return (
    <div className='w-full flex flex-col gap-4 mt-16 lg:mb-16'>
      <Title version='v2' color='text-primary-500'>
        ANNA PALAUTETTA NETTISIVUSTA
      </Title>
      <form
        action=''
        method='post'
        className='sm:lg:container lg:max-w-[800px] flex flex-col items-center gap-16 rounded-lg mt-6'
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <textarea
          className='w-full lg:w-[750px] h-[400px] p-6 tracking-wider text-xl outline-none focus:rounded-xl mt-4 focus:border-accent-500 bg-transparent rounded-lg border-4 border-secondary-500 resize-none duration-300'
          name='body'
          value={formData.body}
          placeholder='Kerro mitä mieltä olet nettisivusta ja mitä voisimme vielä parantaa!'
          required
        ></textarea>
        <Button type='submit' width='w-full md:w-2/3'>
          Lähetä Palaute
        </Button>
      </form>
    </div>
  )
}
