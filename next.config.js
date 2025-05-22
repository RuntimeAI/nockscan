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
  // Base path for GitHub Pages - nockscan is the repo name
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
