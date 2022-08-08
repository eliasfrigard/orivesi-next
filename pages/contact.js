import axios from 'axios'
import Layout from '../components/Layout'
import ContactCard from '../components/Modules/ContactCard'
import ContactForm from '../components/Modules/ContactForm'
import FeedbackForm from '../components/Modules/FeedbackForm'
import Title from '../components/Title'
import AnimateIn from '../components/AnimateIn'

export default function Contact({ contacts }) {
  return (
    <Layout>
      <div className='container flex flex-col mb-24 mt-3 lg:mt-16 items-center'>
        <AnimateIn distance={0}>
          <Title>Yhteystiedot</Title>
        </AnimateIn>

        <AnimateIn distance={0} opacityDuration={1000}>
          <ContactForm contacts={contacts}></ContactForm>
        </AnimateIn>

        <div className='flex flex-wrap gap-8 justify-center md:my-16'>
          {contacts.map((contact) => (
            <AnimateIn key={contact.id} classes='flex flex-wrap gap-8 justify-center'>
              <ContactCard
                name={contact.attributes.Name}
                role={contact.attributes.Role}
                email={contact.attributes.Email}
                phone={contact.attributes.Phone}
              ></ContactCard>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn distance={0} threshold={0.5} opacityDuration={1000}>
          <FeedbackForm></FeedbackForm>
        </AnimateIn>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get(`${process.env.API_ADDRESS}/contacts`)

  return {
    props: {
      contacts: response.data.data,
    },
  }
}
