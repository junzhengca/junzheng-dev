/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      new URL('https://tryhackme-badges.s3.amazonaws.com/Antin0de.png'),
      new URL('https://www.htbbadge.tech/api/badge?user=1099089'),
    ],
  },
}

module.exports = nextConfig

