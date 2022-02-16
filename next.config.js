/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/teddy.js",
        destination: "https://cdn.panelbear.com/analytics.js",
      },
    ];
  },
  reactStrictMode: true,
  poweredByHeader: false,
};
