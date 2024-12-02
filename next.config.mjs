/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "profici.co.uk",
      },
      {
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
