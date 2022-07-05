const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org', 'upload.wikimedia.org', 'www.movienewz.com', 'user-images.githubusercontent.com'],
  },
};

module.exports = withVanillaExtract(nextConfig);