import AdminLayout from '../../components/Admin/AdminLayout'
import Layout from '../../components/Layouts/Default'
import { useSession } from 'next-auth/react'
import axios from 'axios'

export default function About({ about }) {
  const { data: session } = useSession()

  // if (session) {
  return (
    <AdminLayout>
      <p>This is a text from the admin page.</p>
    </AdminLayout>
  )
  // }

  return (
    <Layout>
      <h1>Access Denied</h1>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get(`${process.env.API_ADDRESS}/about?populate=Images`)

  return {
    props: {
      about: response.data.data.attributes,
    },
  }
}
