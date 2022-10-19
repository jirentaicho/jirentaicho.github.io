/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images:{
    domains: ['localhost'],
  },
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS,
  trailingSlash: true,
}

module.exports = nextConfig
