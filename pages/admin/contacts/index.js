// import AdminLayout from '../../../components/Admin/AdminLayout'
// import Layout from '../../../components/Layout'
// import { useSession } from 'next-auth/react'
// import axios from 'axios'
// import Moment from 'react-moment'

// export default function Posts({ contacts }) {
//   const { data: session } = useSession()

//   console.log(contacts);

//   if (session) {
//     return (
//       <AdminLayout>
//         <table className='w-full text-left table-auto font-work tracking-wide'>
//           <thead className='h-[60px]'>
//             <tr>
//               <th className='pl-8 w-32'>ID</th>
//               <th>Name</th>
//               <th>Role</th>
//               <th>Admin</th>
//               <th>Last Updated</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contacts.map((item) => (
//               <tr
//                 key={item.id}
//                 className=' h-[60px] border-b-2 hover:bg-secondary-200 hover:text-primary-500 hover:border-primary-500 cursor-pointer duration-100'
//               >
//                 <td className='pl-8'>#{item.slug}</td>
//                 <td>{item.attributes.Name}</td>
//                 <td>{item.attributes.Role}</td>
//                 <td>Yes</td>
//                 <td>
//                   <Moment format={'DD.MM.YYYY'}>{item.attributes.updatedAt}</Moment>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </AdminLayout>
//     )
//   }

//   return (
//     <Layout>
//       <h1>Access Denied</h1>
//     </Layout>
//   )
// }

// export async function getStaticProps() {
//   const response = await axios.get(`${process.env.API_ADDRESS}/contacts`)

//   const contacts = response.data.data.map((contact) => {
//     return {
//       slug: contact.id,
//       ...contact,
//     }
//   })

//   return {
//     props: {
//       contacts: contacts,
//     },
//   }
// }
