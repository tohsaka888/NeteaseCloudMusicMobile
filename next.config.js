/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const withImages = require('next-images')

const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);

module.exports = withTM(withImages({
  images: {
    domains: ['p1.music.126.net', 'p2.music.126.net', 'p3.music.126.net', 'p4.music.126.net'],
  },
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}));
