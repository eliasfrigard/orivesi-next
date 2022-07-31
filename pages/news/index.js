import axios from 'axios'
import AnimateIn from '../../components/AnimateIn'
import Layout from '../../components/Layout'
import NewsPreview from '../../components/Modules/NewsPreview'
import Title from '../../components/Title'

export default function News({ news }) {
  return (
    <Layout>
      <div className='flex flex-col	container lg:my-16 gap-12 md:gap-16'>
        <AnimateIn distance={0}>
          <Title>Uutiset</Title>
        </AnimateIn>
        <div className='flex flex-wrap flex-row justify-between md:justify-center gap-8 xl:gap-y-16 mb-8'>
          {news.map((item) => (
            <AnimateIn
              key={item.id}
              classes='flex flex-wrap flex-row justify-between md:justify-center gap-8 xl:gap-y-16'
            >
              <NewsPreview
                link={item.slug}
                title={item.attributes.Title}
                image={item.attributes.Images.data[0].attributes}
                post={item.attributes.Text}
                author={item.attributes.Author}
                date={item.attributes.createdAt}
                isFull={news.length === 1 ? true : false}
              ></NewsPreview>
            </AnimateIn>
          ))}

          {news.length % 2 === 0 ? '' : <div className='w-90 lg:w-[474px] xl:w-[525px]'></div>}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get(`${process.env.API_ADDRESS}/posts?sort=createdAt:desc&populate=Images`)

  const newsWithSlug = response.data.data.map((post) => {
    return {
      slug: post.id,
      ...post,
    }
  })

  return {
    props: {
      news: newsWithSlug,
    },
  }
}
