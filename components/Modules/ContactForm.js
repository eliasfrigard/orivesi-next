import { useState } from 'react'
import axios from 'axios'

import Button from '../Button'
import Title from '../Title'

export default function ContactForm({ contacts }) {
  const [submitWasAttempted, setSubmitWasAttempted] = useState(false)
  const [submitWasSuccess, setSubmitWasSuccess] = useState()

  const [formData, setFormData] = useState({
    title: '',
    body: '',
    phone: '',
    email: '',
    reciever: '',
    // Honeypot
    room: '',
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    let formattedData = {
      data: {
        Title: formData.title,
        Body: formData.body,
        Phone: formData.phone,
        Sender: formData.email,
        Reciever: formData.reciever,
        // Honeypot
        Room: formData.room,
      },
    }

    formattedData = JSON.stringify(formattedData)

    const sendData = async () => {
      if (!submitWasSuccess) {
        const response = await axios.post(`${process.env.API_ADDRESS}/emails`, formattedData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })

        setSubmitWasSuccess(response.status === 200)

        if (submitWasSuccess) {
          setFormData({
            title: '',
            body: '',
            phone: '',
            email: '',
            reciever: '',
            room: '',
          })
        }

        setSubmitWasAttempted(true)
      }
    }

    sendData()
  }

  return (
    <div className='w-[100vw] bg-secondary-500 py-16 lg:py-32 text-primary-500 selection:bg-accent-500 my-16'>
      <Title version='v2' color='text-primary-500'>
        LÄHETÄ MEILLE VIESTI
      </Title>
      <form
        action=''
        method='post'
        className='container lg:max-w-[800px] flex flex-col items-center gap-8 p-6 rounded-lg mt-6'
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col w-full'>
          <label
            htmlFor='title'
            className='drop-shadow-lg px-2 text-2xl uppercase tracking-wider font-sketch font-bold mt-4'
          >
            Otsikko *
          </label>
          <input
            className='h-[50px] rounded-sm py-8 px-2 outline-none tracking-wide bg-transparent border-b-2 placeholder-slate-400'
            type='text'
            name='title'
            value={formData.title}
            placeholder='Mistä asiasta on kyse?'
            required
          />
        </div>

        <div className='flex flex-col w-full'>
          <label
            htmlFor='reciever'
            className='drop-shadow-lg px-2 text-2xl uppercase tracking-wider font-sketch font-bold mt-4 '
          >
            Kenelle? *
          </label>
          <select
            name='reciever'
            className='block h-[50px] rounded-sm outline-none tracking-wide bg-transparent border-b-2 placeholder-slate-400 py-3 px-2'
            required
          >
            <option value='orivesiallstars@gmail.com' className='bg-secondary-500'>
              Orivesi All Stars
            </option>
            <option value='oasnuotit@gmail.com' className='bg-secondary-500'>
              Orivesi All Stars Nuotit
            </option>
            {contacts.map((contact) => (
              <option key={contact.id} value={contact.attributes.Email} className='bg-secondary-500'>
                {contact.attributes.Name} ({contact.attributes.Role})
              </option>
            ))}{' '}
          </select>
        </div>

        <div className='flex flex-col w-full'>
          <label
            htmlFor='body'
            className='drop-shadow-lg px-2 text-2xl uppercase tracking-wider font-sketch font-bold mt-4'
          >
            Viesti *
          </label>
          <textarea
            className='h-[75px] rounded-sm py-8 px-2 outline-none tracking-wide bg-transparent border-b-2 placeholder-slate-400 scrollbar-hide'
            name='body'
            value={formData.body}
            placeholder='Minkälaista asiaa sinulla olisi?'
            required
          ></textarea>
        </div>

        <div className='flex flex-col w-full'>
          <label
            htmlFor='title'
            className='drop-shadow-lg px-2 text-2xl uppercase tracking-wider font-sketch font-bold mt-4 '
          >
            Sähköposti *
          </label>
          <input
            className='h-[50px] rounded-sm py-8 px-2 outline-none tracking-wide bg-transparent border-b-2 placeholder-slate-400'
            type='email'
            name='email'
            value={formData.email}
            placeholder='sähköposti@gmail ...'
            required
          />
        </div>

        <div className='flex flex-col w-full mb-8'>
          <label
            htmlFor='title'
            className='drop-shadow-lg px-2 text-2xl uppercase tracking-wider font-sketch font-bold mt-4'
          >
            Puhelinnumero{' '}
            <p className='inline-block opacity-80 text-[12px] ml-1 font-medium lowercase'>(ei pakollinen)</p>
          </label>
          <input
            className='h-[50px] rounded-sm py-8 px-2 outline-none tracking-wide bg-transparent  border-b-2 placeholder-slate-400'
            type='tel'
            name='phone'
            value={formData.phone}
            placeholder='+358 040 ...'
          />
        </div>

        {/* Honeypot for bots. */}
        <div className='absolute top-[-100px] flex flex-col w-full mb-8'>
          <label
            htmlFor='room'
            className='drop-shadow-lg px-2 text-2xl uppercase tracking-wider font-sketch font-bold mt-4'
          >
            Room Number
          </label>
          <input
            className='h-[50px] rounded-sm py-8 px-2 outline-none tracking-wide bg-transparent  border-b-2 placeholder-slate-400'
            type='text'
            name='room'
            value={formData.phone}
            placeholder='1 2 3 ...'
          />
        </div>

        {submitWasAttempted ? (
          <div className='text-center font-bold text-2xl tracking-wider'>
            {submitWasSuccess ? (
              <p className='text-green-500 font-round'>Viesti lähetettiin onnistuneesti!</p>
            ) : (
              <p className='text-red-500 font-round'>Viestin lähettäminen epäonnistui.</p>
            )}
          </div>
        ) : (
          ''
        )}

        <Button type='submit' width='w-full md:w-2/3' disabled={submitWasSuccess}>
          Lähetä Viesti
        </Button>
      </form>
    </div>
  )
}
