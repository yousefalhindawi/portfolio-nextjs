/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.licdn.com",
      "cdn.jsdelivr.net",
      "www.ideco.com.jo",
      "www.jpmc.com.jo",
      "upload.wikimedia.org", 
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
