/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nockscan',
  // Required to make GitHub Pages work with client-side routing
  assetPrefix: '/nockscan',
  images: {
    unoptimized: true,
  },
  // Disable server features since we're doing static export
  trailingSlash: true,
};

module.exports = nextConfig;
