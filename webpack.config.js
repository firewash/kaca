var path = require('path');

var config = {
  entry: path.resolve(__dirname, 'src/www/public/js/task/realtime-queue-view.jsx'),
  output: {
    path:path.resolve(__dirname, 'build/www/public/js/task'),
    filename: 'realtime-queue-view.js'
  },
  module:{
    loaders:[
      {
        test:/\.jsx?$/,
        loader: 'babel-loader',
        query  :{
          presets:['react','es2015']
        }
      }
    ]
  },
  external:{
    //'react':'React'
  }

};

module.exports = config;
