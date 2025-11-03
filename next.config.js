/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['print-for-figma.com'],
  },
  async redirects() {
    return [
      {
        source: '/plugin',
        destination: 'https://www.figma.com/community/plugin/1419316259939080556/printify-print-for-figma-print-ready-pdfs-with-bleed-crop-marks-cmyk-export-spot-colors',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
