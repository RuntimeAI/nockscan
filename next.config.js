/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placekitten.com', 'via.placeholder.com']
  },
  output: 'export',
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/nockscan' : '',
  // 仅在生产环境使用assetPrefix
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nockscan' : '',
  images: {
    unoptimized: true,
  },
  // Disable server features since we're doing static export
  trailingSlash: true,
};

module.exports = nextConfig;
