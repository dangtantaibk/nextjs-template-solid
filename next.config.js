const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  i18n: {
    defaultLocale: 'vn',
    locales: ['vn', 'UA', 'PT'],
  },
};

module.exports = nextConfig;


 
module.exports = withMDX(nextConfig)
