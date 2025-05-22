/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placekitten.com', 'via.placeholder.com'],
    unoptimized: true,
  },
  // Only use export in production
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    distDir: 'out',
  } : {}),
  // Base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/nockscan' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nockscan' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
