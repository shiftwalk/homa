module.exports = {
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: ["file-loader"],
    });

    return config;
  },
};
