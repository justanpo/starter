module.exports = function(pathToSpriteIcons) {
  return {
    module: {
      rules: [
        {
          test: /(\.(jpe?g|png|webp|gif)|\.svg)$/,
          exclude: [pathToSpriteIcons],
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'src/',
              esModule: false,
            },
          },
        },
      ],
    },
  };
};
