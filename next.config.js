/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
        {
        protocol:"https",
        hostname:"fakestoreapi.com"
        },
        {
          protocol:"http",
          hostname:"fakestoreapi.com"
          }
    ]
  }
  }

module.exports = nextConfig
