module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.pug$/,
          oneOf: [
            {
              resourceQuery: /^\?vue/,
              use: ['pug-plain-loader']
            },
            {
              use: ['pug-loader'],
            },
          ],
        },
      ],
    },
  };
};
