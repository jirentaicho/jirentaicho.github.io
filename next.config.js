/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images:{
    domains: ['localhost'],
  },
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'p',
            value: '4'
          },
        ],
        destination: '/posts/p1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
