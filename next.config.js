/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    API_ADDRESS: process.env.API_ADDRESS,
    API_TOKEN: process.env.API_TOKEN,
    API_DEV_ADDRESS: process.env.API_ADDRESS,
    API_DEV_TOKEN: process.env.API_TOKEN,
  },
  images: {
    domains: ['orivesi-strapi-bucket.s3.eu-north-1.amazonaws.com'],
  },
  // i18n: {
  //   locales: ['fi'],
  //   defaultLocale: 'fi',
  // },
}

module.exports = nextConfig
