const path                      = require('path'),
      webpack                   = require('webpack'),
      HtmlWebpackPlugin         = require('html-webpack-plugin'),
      CaseSensitivePathsPlugin  = require('case-sensitive-paths-webpack-plugin'),
      { VueLoaderPlugin }       = require('vue-loader'),
      StyleLintPlugin           = require('stylelint-webpack-plugin'),
      // CopyPlugin                = require('copy-webpack-plugin'),
      config                    = require('../config.json'),
      fs                        = require('fs');

const PATHS = {
  src: path.join(__dirname, '../src'),
};

const PAGES_DIR = `${PATHS.src}/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

module.exports = function(env) {
  return {
    plugins: [
      ...PAGES.map(
        page =>
          new HtmlWebpackPlugin({
            filename: `./${page.replace(/\.pug/, '.html')}`,
            template: `${PAGES_DIR}/${page}`,
            chunks: ['main'],
            config,
            env,
          }),
      ),
      new CaseSensitivePathsPlugin(),
      new VueLoaderPlugin(),
      new StyleLintPlugin(),
      // new CopyPlugin([
      //   {
      //     from: 'public',
      //     to: '',
      //   },
      // ]),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};
