import AdminLayout from '../../../components/Admin/AdminLayout'
import Layout from '../../../components/Layout'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import Moment from 'react-moment'

export default function Posts({ scores }) {
  const { data: session } = useSession()

  if (session) {
    return (
      <AdminLayout>
        <table className='w-full text-left table-auto font-work tracking-wide'>
          <thead className='h-[60px]'>
            <tr>
              <th className='pl-8 w-32'>ID</th>
              <th>Title</th>
              <th>Dancetype</th>
              <th className='pl-16'>Composer</th>
              <th>Created</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((item) => (
              <tr
                key={item.id}
                className=' h-[60px] border-b-2 hover:bg-secondary-200 hover:text-primary-500 hover:border-primary-500 cursor-pointer duration-100'
              >
                <td className='pl-8'>#{item.slug}</td>
                <td>{item.attributes.Title}</td>
                <td>{item.attributes.Type}</td>
                <td className='pl-16'>{item.attributes.Composer}</td>
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
  const response = await axios.get(`${process.env.API_ADDRESS}/music-scores`)

  const scoreWithSlug = response.data.data.map((score) => {
    return {
      slug: score.id,
      ...score,
    }
  })

  return {
    props: {
      scores: scoreWithSlug,
    },
  }
}
