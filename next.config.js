/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            pathname: '/**',
          },
        ],
      },
      async rewrites() {
        return [
          {
            source: '/studio/:path*',
            destination: '/cms/studio/:path*',
          },
        ]
      },
}

module.exports = nextConfig