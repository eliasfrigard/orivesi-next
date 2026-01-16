import axios from 'axios'
import Layout from '../components/Layouts/Default'
import ContactCard from '../components/Modules/ContactCard'
import Title from '../components/Title'

export default function Contact({ contacts }) {
  return (
    <Layout
      pageTitle='Contact'
      pageDescription='Orivesi All Stars contact information'
      pageImage="https://orivesiadmin.net/oas_image.jpg"
      pageUrl='/contact'
    >
      <div className='container flex flex-col mt-3 items-center my-8 lg:my-16'>
        <Title>Yhteystiedot</Title>

        <div className='flex flex-wrap gap-8 justify-center md:mt-16'>
          {contacts.map((contact) => (
            <div key={contact.id} className='flex flex-wrap gap-8 justify-center'>
              <ContactCard
                name={contact.attributes.Name}
                role={contact.attributes.Role}
                email={contact.attributes.Email}
                phone={contact.attributes.Phone}
              ></ContactCard>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get(`${process.env.API_ADDRESS}/contacts`)

  const contacts = response.data.data

  return {
    props: {
      contacts,
    },
  }
}
