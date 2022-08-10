import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from '../api/auth/[...nextauth]'
import { useSession } from 'next-auth/react'
import Layout from '../../components/Layout'

export async function getServerSideProps(context) {
  return {
    props: {
      session: await unstable_getServerSession(context.req, context.res, authOptions),
    },
  }
}

export default function Admin() {
  const { data: session } = useSession()

  if (typeof window === 'undefined') return null

  if (session) {
    return (
      <Layout>
        <div className='w-full h-[60vh] flex justify-center items-center'>
          <h1 className='uppercase text-green-500'>Secret Admin Page</h1>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className='w-full h-[60vh] flex justify-center items-center'>
        <h1 className='uppercase text-red-500'>Access Denied</h1>
      </div>
    </Layout>
  )
}
