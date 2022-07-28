import axios from 'axios'
import Layout from '../components/Layout'
import ContactInfo from '../components/Modules/ContactInfo'
import ContactForm from '../components/Modules/ContactForm'
import Title from '../components/Title'

export default function Contact({ contacts }) {
  return (
    <Layout>
      <div className='container flex flex-col my-3 md:my-16 items-center'>
        <Title>Yhteystiedot</Title>

        <ContactForm contacts={contacts}></ContactForm>
        <div className='flex flex-wrap gap-8 justify-center md:my-16'>
          {contacts.map((contact) => (
            <ContactInfo
              key={contact.id}
              name={contact.attributes.Name}
              role={contact.attributes.Role}
              email={contact.attributes.Email}
              phone={contact.attributes.Phone}
            ></ContactInfo>
          ))}
        </div>
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
