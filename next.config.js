/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nockscan',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
