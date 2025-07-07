/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["en.gravatar.com"],
  },
  i18n: {
    locales: ["en-US", "ar"],
    defaultLocale: "en-US",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/google-certificate",
        destination:
          "https://coursera.org/share/1ebf02b39984eab2802e74286134250a",
        permanent: false,
      },
      {
        source: "/product-resume-2022.pdf",
        destination: "/resume.pdf",
        permanent: false,
      },
      {
        source: "/engineering-resume-2022.pdf",
        destination: "/resume.pdf",
        permanent: false,
      },
      {
        source: "/design-resume-2022.pdf",
        destination: "/resume.pdf",
        permanent: false,
      },
    ];
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Fixes npm packages that depend on `fs` module
    config.resolve.fallback = { fs: false };

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
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
};
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
