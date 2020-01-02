const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
});

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        use: 'react-svg-loader'
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    inline: true,
    overlay: {
      warnings: true,
      errors: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    contentBase: path.join(__dirname, "public"),
    port: 8080,
    host: '0.0.0.0',
  },
  plugins: [HTMLWebpackPluginConfig]
};
