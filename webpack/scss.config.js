module.exports = function () {
  return {
    // devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              // options: {
              //   sourceMap: true
              // }
            },
            {
              loader: 'sass-loader',
              // options: {
              //   sourceMap: true
              // }
            },
          ],
        },
      ],
    },
  };
};
