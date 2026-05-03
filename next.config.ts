import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Barcha rasmlarga ruxsat berish uchun
      },
    ],
  },
};

export default nextConfig;