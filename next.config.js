/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Vercel will auto-optimize these settings
  experimental: {
    optimizeCss: true,
  }
}

module.exports = nextConfig