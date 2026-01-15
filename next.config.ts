import { NextConfig } from "next";

// Extended type to include eslint.ignoreDuringBuilds
interface ExtendedNextConfig extends NextConfig {
  eslint?: {
    ignoreDuringBuilds: boolean;
  };
}

const nextConfig: ExtendedNextConfig = {
  images: {
    domains: ["images.unsplash.com"], 
  },
  eslint: {
    ignoreDuringBuilds: true, // Build will not fail due to lint errors
  },
};

export default nextConfig;
