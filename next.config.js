const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: ['yts.mx'],
    formats: ['image/avif', 'image/webp'],
  },
  swcMinify: true,
});
