/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 仅在生产环境使用basePath
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
