// /** @type {import('next').NextConfig} */ 
// const nextConfig = {
//   output: 'export', // Enables static export
//   trailingSlash: false, // Adds trailing slashes to URLs
//   images: {
//     unoptimized: true, // Required for next/image in static export
//   },
//   assetPrefix: '/', // Ensures assets (CSS, JS) use relative paths
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */ 
const nextConfig = {
  output: 'export', // Enables static export
  trailingSlash: false, // Adds trailing slashes to URLs
  images: {
    unoptimized: true, // Required for next/image in static export
  },
  assetPrefix: '/', // Ensures assets (CSS, JS) use relative paths
  
  // Custom headers for controlling crawler access
  async headers() {
    return [
      {
        source: '/_next/static/(.*)', // Pattern to match all static files including chunks
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow', // Prevent crawling of chunk URLs
          },
        ],
      },
    ];
  },
};

export default nextConfig;
