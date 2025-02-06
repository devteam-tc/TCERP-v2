/** @type {import('next').NextConfig} */ 
const nextConfig = {
  output: 'export', // Enables static export
  trailingSlash: false, // Adds trailing slashes to URLs
  images: {
    unoptimized: true, // Required for next/image in static export
  },
  assetPrefix: '/', // Ensures assets (CSS, JS) use relative paths
};

export default nextConfig;

