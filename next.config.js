const redirects = require('./helpers/dynamic-redirects.js');

module.exports = {
  async redirects() {
    const sanityRedirects = await redirects();
    return sanityRedirects;
  },
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};