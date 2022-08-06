/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_ADDRESS: process.env.API_ADDRESS,
    API_TOKEN: process.env.API_TOKEN,
    API_DEV_ADDRESS: process.env.API_ADDRESS,
    API_DEV_TOKEN: process.env.API_TOKEN,
  },
  i18n: {
    locales: ['fi'],
    defaultLocale: 'fi',
  },
}

module.exports = nextConfig
