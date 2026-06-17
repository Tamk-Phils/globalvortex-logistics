import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  transpilePackages: ["leaflet", "react-leaflet"],
  serverExternalPackages: ["nodemailer"],
};

export default nextConfig;
