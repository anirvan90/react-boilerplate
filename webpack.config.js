const path = require('path')

module.exports = {
  entry: path.join(__dirname, './client/index.jsx'),
  output: {
    path: path.join(`${__dirname}/dist`),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: [
          {loader: 'babel-loader'}
        ]
      }
    ]
  }
}
