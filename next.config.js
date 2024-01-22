/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['lh3.googleusercontent.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com'
            }
          ]
        },
}

module.exports = nextConfig
