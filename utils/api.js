import axios from 'axios'

// Standalone client for server-side data fetching (getStaticProps/getStaticPaths).
// Do not rely on the axios defaults set in pages/_app.js — that module-level side
// effect is not guaranteed to run before these functions in serverless/ISR contexts.
const api = axios.create({
  baseURL: process.env.API_ADDRESS,
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
})

export default api
