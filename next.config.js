/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/tables/1/',
  //       permanent: true,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
