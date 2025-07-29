/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // disables Turbopack, fallback to Webpack
  },
};

export default nextConfig;
