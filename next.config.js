/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/teddy.js",
  //       destination: "https://cdn.panelbear.com/analytics.js",
  //     },
  //   ];
  // },
  reactStrictMode: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
