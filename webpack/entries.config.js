const path = require('path');

module.exports = function () {
  return {
    entry: {
      main: './src/assets/js/main.js',
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
      filename: 'assets/js/[name].js',
    },
  };
};
