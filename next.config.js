// const {
//   createVanillaExtractPlugin
// } = require('@vanilla-extract/next-plugin');
// const withVanillaExtract = createVanillaExtractPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['image.tmdb.org', 'upload.wikimedia.org', 'www.movienewz.com', 'user-images.githubusercontent.com'],
//   },
// };

// module.exports = withVanillaExtract(nextConfig);


// const withMDX = require('@next/mdx')({
//   extension: /\.mdx$/
// })
// module.exports = withMDX({
//   pageExtensions: ['ts', 'tsx', 'mdx']
// })



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

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})


module.exports = withVanillaExtract(withMDX(nextConfig));

// module.exports = {
//   aaa: withVanillaExtract(),
//   bbb: nextConfig(),
//   ccc: withMDX({
//     pageExtensions: ['ts', 'tsx', 'mdx']
//   })
// }


// var MyMethods = require('./myModule.js');
// var aaa = MyMethods.aaa;
// var bbb = MyMethods.bbb;
// var ccc = MyMethods.ccc;