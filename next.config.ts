import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/Portfolio",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
