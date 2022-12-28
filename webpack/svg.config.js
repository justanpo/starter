module.exports = function(pathToSpriteIcons) {
  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: [
            pathToSpriteIcons,
          ],
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {

              },
            },
            'svg-transform-loader',
            {
              loader: 'svgo-loader',
              options: {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                  {
                    removeDimensions: true,
                  },
                  {
                    removeAttrs: {
                      attrs: '(stroke|fill)',
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  };
};