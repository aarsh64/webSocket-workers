// // import css from 'file.css';
// module.exports = {
//     entry:"./src/main.js",
//     output: {
//         filename: 'bundle.js'
//     },
//     // module:{
//     //     rules:[
//     //         {
//     //             test: /\.css$/i,
//     //             use: ['style-loader','css-loader'],
//     //         },
//     //     ]
//     // }
// }
 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.html',
  output: {
    filename: 'main.js',
    path: __dirname + 'dist',
  },
  module:{
      rules:[
       
          {
              test:/\.(html)$/,
              use:'html-loader'
          }
      ]
  },
  plugins:[
        new HtmlWebpackPlugin()
  ]
};