/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_ADDRESS: process.env.API_ADDRESS,
    API_TOKEN: process.env.API_TOKEN,
  },
}

module.exports = nextConfig
