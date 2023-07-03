const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    library: "jsPDFInvoiceTemplate",
    libraryTarget: 'umd',
    globalObject: 'this',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};

module.exports = {
  mode: 'production',
  entry: './src/RFQ/index.js',
  output: {
    path: path.resolve('dist/RFQ'),
    filename: 'index.js',
    library: "jsPDFRfqTemplate",
    libraryTarget: 'umd',
    globalObject: 'this',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};