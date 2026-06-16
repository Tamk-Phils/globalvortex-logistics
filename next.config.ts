import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable Next.js image optimization (important for mobile performance)
    // Set to false to let Next.js handle resizing, compression, and caching.
    unoptimized: false,
    // Allow external image domains used in the site (e.g., Unsplash)
    domains: ['images.unsplash.com'],
  },
    unoptimized: true,
  },
  transpilePackages: ["leaflet", "react-leaflet"],
  serverExternalPackages: ["nodemailer"],
};

export default nextConfig;
