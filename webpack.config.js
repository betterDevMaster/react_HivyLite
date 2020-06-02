'use strict'
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
module.exports = {
 context: path.join(__dirname, 'app'),
 entry: ['./ressources/js/index.jsx'],
 output: {
  filename: 'app.js',
  path: path.join(__dirname, 'dist/ressources/js/'),
  
 },


module: {
  loaders: [
  	{
		  test: /\.jsx?$/,
		  exclude: /node_modules/,
		  loader: 'babel-loader',
		  query: {
		          presets: [['es2015', 'react']]
		        }
 	 }
  ],
  resolve: {
      extensions: ['', '.js','.jsx']
    }
 },

 plugins: [
        new CopyWebpackPlugin([
        
            
            // {output}/to/file.txt 
            { from: './ressources/css/*', to: __dirname+'/dist'},
            { from: './ressources/assets/*', to: __dirname+'/dist'},
	{ from: './controllers/*', to: __dirname+'/dist'},
	{ from: './models/*', to: __dirname+'/dist'},
	{ from: './views/*', to: __dirname+'/dist'},
	{ from: './server.js*', to: __dirname+'/dist'},
   
        ], {
           
 
            // By default, we only copy modified files during 
            // a watch or webpack-dev-server build. Setting this 
            // to `true` copies all files. 
            copyUnmodified: true
        })
    ]
}