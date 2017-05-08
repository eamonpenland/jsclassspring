module.exports = {
  entry: {
    app: './src/javascript'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: [
      './node_modules',
      './src'
    ]
  },
  watch: true
}
