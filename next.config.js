/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Add this if you're using GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-website/' : '',
}

module.exports = nextConfig