import { wordpressUrl } from "./lib/config.js";

const wpHostname = wordpressUrl ? new URL(wordpressUrl).hostname : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: wpHostname,
      },
    ],
  },
};

export default nextConfig;