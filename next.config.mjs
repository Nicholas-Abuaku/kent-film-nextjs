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
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "posters.movieposterdb.com",
      },
    ],
  },
};

export default nextConfig;
