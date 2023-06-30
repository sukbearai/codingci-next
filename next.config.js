/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@douyinfe/semi-ui',
    '@douyinfe/semi-icons',
    '@douyinfe/semi-illustrations',
  ],
  trailingSlash: true,
  async rewrites() {
    return [
      // {
      //   source: '/attachments/:path*',
      //   destination: 'https://cdn.discordapp.com/attachments/:path*',
      // },
    ]
  },
}

module.exports = nextConfig
