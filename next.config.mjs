/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "as1.ftcdn.net"
      },
      {
        protocol: "https",
        hostname: "as2.ftcdn.net"
      },
    ]
  }
};

export default nextConfig;
