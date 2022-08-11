import AdminLayout from '../../components/Admin/AdminLayout'
import Layout from '../../components/Layout'
import { useSession } from 'next-auth/react'
import axios from 'axios'

export default function About({ about }) {
  const { data: session } = useSession()

  if (session) {
    return (
      <AdminLayout>
        <h1>text</h1>
      </AdminLayout>
    )
  }

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
