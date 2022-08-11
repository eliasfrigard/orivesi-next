import AdminLayout from '../../../components/Admin/AdminLayout'
import Layout from '../../../components/Layout'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import Moment from 'react-moment'

export default function Posts({ events }) {
  const { data: session } = useSession()

  if (session) {
    return (
      <AdminLayout>
        <table className='w-full text-left table-auto font-work tracking-wide'>
          <thead className='h-[60px]'>
            <tr>
              <th className='pl-8 w-32'>ID</th>
              <th>Title</th>
              <th>Location</th>
              <th>Created</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {events.map((item) => (
              <tr
                key={item.id}
                className=' h-[60px] border-b-2 hover:bg-secondary-200 hover:text-primary-500 hover:border-primary-500 cursor-pointer duration-100'
              >
                <td className='pl-8'>#{item.slug}</td>
                <td>{item.attributes.Title}</td>
                <td>
                  {item.attributes.Location}{' '}
                  <p className='inline text-xs font-medium opacity-70'>
                    ({item.attributes.City}, {item.attributes.Country})
                  </p>
                </td>
                <td>
                  <Moment format={'DD.MM.YYYY'}>{item.attributes.createdAt}</Moment>
                </td>
                <td>
                  <Moment format={'DD.MM.YYYY'}>{item.attributes.updatedAt}</Moment>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
  const response = await axios.get(`${process.env.API_ADDRESS}/events`)

  const eventsWithSlug = response.data.data.map((event) => {
    return {
      slug: event.id,
      ...event,
    }
  })

  return {
    props: {
      events: eventsWithSlug,
    },
  }
}
