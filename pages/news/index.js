import axios from 'axios'
import Layout from '../../components/Layouts/Default'
import NewsPreview from '../../components/Modules/NewsPreview'

export default function News({ news }) {
  return (
    <Layout pageTitle='News' pageDescription='Orivesi All Stars latest news' pageUrl='/news'>
      <div className='flex flex-col	container gap-12 md:gap-16'>
        <div className='flex flex-wrap flex-row justify-between md:justify-center gap-8 xl:gap-y-16 mb-8'>
          {news.map((item) => (
            <div
              key={item.id}
              className='flex flex-wrap flex-row justify-between md:justify-center gap-8 xl:gap-y-16'
            >
              <NewsPreview
                link={item.slug}
                title={item.attributes.Title}
                image={item.attributes.Images.data[0].attributes}
                youtube={item.attributes.Youtube}
                post={item.attributes.Text}
                author={item.attributes.Author}
                date={item.attributes.createdAt}
                isFull={news.length === 1 ? true : false}
              ></NewsPreview>
            </div>
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
