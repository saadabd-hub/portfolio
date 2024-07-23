/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        hostname: "kjuapojjaqnevopw.public.blob.vercel-storage.com"
      }
    ]
  },
  compress: true
}
