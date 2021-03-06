const HtmlWebpackPlugin          = require('html-webpack-plugin');
const MiniCssExtractPlugin       = require('mini-css-extract-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const env = process.env.NODE_ENV;

module.exports = {
  mode: process.env.NODE_ENV,

  entry: './src/ts/main.ts',

  output: {
    publicPath: '/',
    filename: env === 'development' ? 'js/bundle.js' : 'js/bundle.[contenthash].min.js',
    chunkFilename: env === 'development' ? 'js/[name].js' : 'js/[name].[contenthash].min.js'
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    }
  },

  module: {
    rules: [

      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader'
      //   }
      // },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 2, sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { implementation: require('sass'), sourceMap: true } },
        ]
      },

      // {
      //   test: /\.(jpg|jpeg|png|gif)$/,
      //   loader: "url-loader",
      // },

      {
				test: /\.(svg|png|jpg|jpeg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'imgs'
					}
				}
			},
    ],
  },

  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },

  plugins: [
    new WebpackBuildNotifierPlugin(),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].min.css'
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/html/index.html'
    }),
  ],
}
