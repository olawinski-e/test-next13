/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: ['api.slingacademy.com']
  }
}

module.exports = nextConfig
