import axios from 'axios'
import Layout from '../components/Layout'
import ContactInfo from '../components/Modules/ContactInfo'
import Title from '../components/Title'

export default function Contact({ contacts }) {
  return (
    <Layout>
      <div className='container flex flex-col my-16 items-center'>
        <Title>Yhteystiedot</Title>
        <div className='flex flex-wrap gap-8 justify-center my-16'>
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

  console.log(response.data.data)

  return {
    props: {
      contacts: response.data.data,
    },
  }
}
