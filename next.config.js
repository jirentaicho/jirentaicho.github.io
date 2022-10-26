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
            value: '492'
          },
        ],
        destination: '/posts/p492',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '2691'},],
        destination: '/posts/p2691',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '1460'},],
        destination: '/posts/p1460',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '535'},],
        destination: '/posts/p535',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '2727'},],
        destination: '/posts/p2727',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '1720'},],
        destination: '/posts/p1720',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '511'},],
        destination: '/posts/p511',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '64'},],
        destination: '/posts/p64',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '1254'},],
        destination: '/posts/p1254',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '679'},],
        destination: '/posts/p679',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '2101'},],
        destination: '/posts/p2101',
        permanent: true,
      },        
      {
        source: '/',has: [{type: 'query',key: 'p',value: '2761'},],
        destination: '/posts/p2761',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '3424'},],
        destination: '/posts/p3424',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '904'},],
        destination: '/posts/p904',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '3521'},],
        destination: '/posts/p3521',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '2817'},],
        destination: '/posts/p2817',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '665'},],
        destination: '/posts/p665',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '3448'},],
        destination: '/posts/p3448',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '986'},],
        destination: '/posts/p986',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '3398'},],
        destination: '/posts/p3398',
        permanent: true,
      },
      {
        source: '/',has: [{type: 'query',key: 'p',value: '1396'},],
        destination: '/posts/p1396',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
