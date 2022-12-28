const path                      = require('path'),
      // webpack                   = require('webpack'),
      HtmlWebpackPlugin         = require('html-webpack-plugin'),
      { CleanWebpackPlugin }    = require('clean-webpack-plugin'),
      CaseSensitivePathsPlugin  = require('case-sensitive-paths-webpack-plugin'),
      { VueLoaderPlugin }       = require('vue-loader'),
      // StyleLintPlugin           = require('stylelint-webpack-plugin'),
      // CopyPlugin                = require('copy-webpack-plugin'),
      MiniCssExtractPlugin      = require('mini-css-extract-plugin'),
      config                    = require('../../config.json'),
      fs                        = require('fs');

const PATHS = {
  src: path.join(__dirname, '../../src'),
};

const PAGES_DIR = `${PATHS.src}/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName) => fileName.endsWith('.pug'));

module.exports = function (env) {
  return {
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../../dist')],
        root: process.cwd(),
      }),
      new CaseSensitivePathsPlugin(),
      ...PAGES.map((page) => new HtmlWebpackPlugin({
        filename: `./${page.replace(/\.pug/, '.html')}`,
        template: `${PAGES_DIR}/${page}`,
        chunks: [
          'main',
        ],
        config,
        env,
      })),
      new VueLoaderPlugin(),
      // new CopyPlugin([
      //   {
      //     from: path.resolve(__dirname, '../../public'),
      //     to: path.resolve(__dirname, '../../dist'),
      //   },
      // ]),
      new MiniCssExtractPlugin({
        filename: 'assets/styles/style.css',
      }),
    ],
  };
};
