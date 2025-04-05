/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 21600,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picayune-belief-production.up.railway.app",
      },
      {
        protocol: "https",
        hostname: "kentfilm2025-production.up.railway.app",
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
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
