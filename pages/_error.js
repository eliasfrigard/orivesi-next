import Layout from '../components/Layouts/Default'

function Error({ statusCode }) {
  let errorMessage = ''

  switch (statusCode) {
    case 404:
      errorMessage = 'Sivua ei valitettavasti löydy.'
      break
    default:
      errorMessage = 'Pahoittelut, joku meni pieleen...'
      break
  }

  return (
    <Layout>
      <div className='h-[calc(70vh)] w-full flex flex-col justify-center items-center gap-8 lg:gap-16'>
        <h1 className='text-[8rem] lg:text-[14rem] font-sketch font-bold text-accent-500'>{statusCode}</h1>

        <p className='uppercase text-2xl font-round tracking-wider'>{errorMessage}</p>
      </div>
    </Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
