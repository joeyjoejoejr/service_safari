module.exports = {
  entry: './src',
  output: {
    path: 'dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      },
      {
        test: /\.scss/,
        loader: 'style!css!sass',
      },
    ],
  },
};
