const webpack=require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool:'source-map',
   module: {       
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader"                
            }]
        },
        {
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
                 options: {
                    presets: ['es2015']
                }
            }]
        }
        
        ]
    },
     plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
};