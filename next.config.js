/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require("next-intl/plugin");
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

// next-intl
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// vanilla-extract
const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: process.env.NODE_ENV === "production" ? "short" : "debug",
});

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "en.gravatar.com",
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
    // --- SVG handling ---
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ["@svgr/webpack"],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    // fs fallback
    config.resolve.fallback = { fs: false };

    return config;
  },
  compiler: {
    styledComponents: true,
  },
};

// ✅ plugin composition order matters
module.exports = withVanillaExtract(withNextIntl(nextConfig));
