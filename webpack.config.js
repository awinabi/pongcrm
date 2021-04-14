const path = require('path');

module.exports = {
  entry: './assets/js/index.js',  // path to our input file
  output: {
    filename: 'main-bundle.js',  // output bundle file name
    path: path.resolve(__dirname, './assets/build/js'),  // path to our Django static directory
  },
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}

};


