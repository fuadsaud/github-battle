var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    './app/index.js',
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' }
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist',
  },
  plugins: [HTMLWebpackPluginConfig],
  resolve: {
    alias: {
      components: __dirname + '/app/components',
      containers: __dirname + '/app/containers',
      styles: __dirname + '/app/styles',
      utils: __dirname + '/app/utils',
    }
  }
}
