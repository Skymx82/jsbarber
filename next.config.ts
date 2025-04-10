import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Désactive les vérifications ESLint pendant le build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
