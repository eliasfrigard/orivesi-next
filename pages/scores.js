import axios from "axios"
import Layout from "../components/Layout"
import Score from "../components/Modules/Score"

export default function Home({ scores }) {
  return (
    <Layout>
      <div className="container mt-4 flex text-left flex-col gap-4">
        <Score title="Title" type="Dance Type" composer="Composer" isHeader={true}></Score>
        {scores.map((score) => (
          <Score
            key={score.id}
            title={score.Title}
            type={score.Dancetype}
            composer={score.Composer}
            youtubeVideos={score.Youtube}
          ></Score>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await axios.get("https://orivesiadmin.net/music-scores")

  let scoreWithSlug = response.data.map((score) => {
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
