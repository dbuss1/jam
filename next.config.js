const webpack = require('webpack');

const isProd = (process.env.NODE_ENV || 'production') === 'production';
const assetPrefix = isProd ? '/happy-little-sound-clouds' : ''

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    );

    return config;
  },
  // exportPathMap: () => ({
  //   '/': { page: '/' },
  //   '/about': { page: '/about' }
  // }),
  assetPrefix,
};
