/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kentfilm.up.railway.app",
      },
      {
        protocol: "https",
        hostname: "img.evbuc.com",
      },
    ],
  },
};

export default nextConfig;
