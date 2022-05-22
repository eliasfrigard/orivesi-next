import axios from 'axios'
import Layout from '../../components/Layout'
import NewsPreview from '../../components/Modules/NewsPreview'

export default function News({ news }) {
  return (
    <Layout>
      <div className='flex flex-col	container my-16'>
        <div className='flex flex-wrap flex-row justify-between md:justify-center gap-10 xl:gap-y-14'>
          {news.map((item) => (
            <NewsPreview
              key={item.id}
              title={item.Title}
              image={item.Image}
              post={item.Post}
              author={item.Author}
              date={item.created_at}
              link={item.slug}
              isFull={news.length === 1 ? true : false}
            ></NewsPreview>
          ))}

          {news.length % 2 === 0 ? '' : <div className='w-90 lg:w-[474px] xl:w-[525px]'></div>}
        </div>
      </div>{' '}
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get('https://orivesiadmin.net/posts?_sort=created_at:DESC')

  const newsWithSlug = response.data.map((post) => {
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
