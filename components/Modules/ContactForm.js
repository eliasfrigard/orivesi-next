import { useState } from 'react'
import Button from '../Button'
import Title from '../Title'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    phone: '',
    email: '',
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    console.log(formData)
    // Router.push(`/scores/search?query=${formData.query}`)
  }

  return (
    <div className='w-[100vw] bg-secondary-500 py-16 text-primary-500 selection:bg-accent-500 my-16'>
      <Title version='v2' color='text-primary-500'>
        OTA YHTEYTTÄ
      </Title>
      <form
        action=''
        method='post'
        className='container lg:max-w-[800px] flex flex-col items-center gap-6 p-6 rounded-lg mt-6'
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col w-full'>
          <label
            htmlFor='title'
            className='drop-shadow-lg px-2 text-2xl uppercase tracking-wider font-sketch font-bold mt-4'
          >
            Otsikko
          </label>
          <input
            className='h-[50px] rounded-sm py-8 px-2 outline-none tracking-wide bg-transparent border-b-2 placeholder-slate-300'
            type='text'
            name='title'
            value={formData.title}
            placeholder='Kirjoita sinun viesti tähän'
          />
        </div>

        <div className='flex flex-col w-full'>
          <label
            htmlFor='body'
            className='drop-shadow-lg px-2 text-2xl uppercase tracking-wider font-sketch font-bold mt-4'
          >
            Viesti
          </label>
          <textarea
            className='h-[100px] rounded-sm py-8 px-2 outline-none tracking-wide bg-transparent border-b-2 placeholder-slate-300 scrollbar-hide'
            name='body'
            value={formData.body}
            placeholder='Minkälaista asiaa sinulla olisi?'
          ></textarea>
        </div>

        <div className='flex flex-col w-full'>
          <label
            htmlFor='title'
            className='drop-shadow-lg px-2 text-2xl uppercase tracking-wider font-sketch font-bold mt-4 '
          >
            Sähköposti
          </label>
          <input
            className='h-[50px] rounded-sm py-8 px-2 outline-none tracking-wide bg-transparent border-b-2 placeholder-slate-300'
            type='email'
            name='email'
            value={formData.email}
            placeholder='sähköposti@gmail ...'
          />
        </div>

        <div className='flex flex-col mb-8 w-full'>
          <label
            htmlFor='title'
            className='drop-shadow-lg px-2 text-2xl uppercase tracking-wider font-sketch font-bold mt-4'
          >
            Puhelinnumero
          </label>
          <input
            className='h-[50px] rounded-sm py-8 px-2 outline-none tracking-wide bg-transparent  border-b-2 placeholder-slate-300'
            type='tel'
            name='phone'
            value={formData.phone}
            placeholder='+358 040 ...'
          />
        </div>

        <Button type='submit' width='w-full md:w-2/3'>
          Lähetä Viesti
        </Button>
      </form>
    </div>
  )
}
