/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images:{
    domains: ['localhost'],
  },
  swcMinify: true,
}

module.exports = nextConfig
