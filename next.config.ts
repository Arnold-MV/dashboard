import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "**",
      },
    ],
    domains: ["lk1kborl36.ufs.sh"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
