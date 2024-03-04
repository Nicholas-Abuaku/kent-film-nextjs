/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kentfilm.up.railway.app",
      },
    ],
  },
};

export default nextConfig;
