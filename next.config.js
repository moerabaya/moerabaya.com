/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'en.gravatar.com',
      },
    ],
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
};

module.exports = withNextIntl(nextConfig);;
