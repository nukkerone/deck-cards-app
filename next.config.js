/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/decks/1/cards/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
