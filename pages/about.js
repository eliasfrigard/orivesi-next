import styles from "../styles/Home.module.css"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className="text-3xl font-bold underline">About</h1>
      </div>
    </Layout>
  )
}
