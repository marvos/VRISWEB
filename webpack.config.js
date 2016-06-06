module.exports = {
  entry: './components/App.js',
  output: {
  	path: './build',
    filename: 'bundle.js'       
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
};