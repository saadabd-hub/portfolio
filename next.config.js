/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: true
  },
  output: 'standalone',
  compress: true
}
