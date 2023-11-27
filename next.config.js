/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "example.com", "placement.astuceseconomies.com"],

    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "placement.astuceseconomies.com",
        port: "",
        pathname: "/",
      },
    ],
  },
};

module.exports = nextConfig;
