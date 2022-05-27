/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const nextConfig = {
  reactStrictMode: true,
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.(svg|png|jpe?g|gif|mp4)$/i,
  //     use: [
  //       {
  //         loader: 'file-loader',
  //         options: {
  //           publicPath: '/_next',
  //           name: 'static/media/[name].[hash].[ext]'
  //         }
  //       }
  //     ]
  //   })
  //   return config
  // }
}
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//     providerImportSource: '@mdx-js/react',
//     // If you use `MDXProvider`, uncomment the following line.
//     // providerImportSource: "@mdx-js/react",
//   },
// })

module.exports = nextConfig;

