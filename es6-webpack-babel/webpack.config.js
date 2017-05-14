'use strict';

const _path = require('path');
const webpack = require('webpack');

module.exports = {
	context: resolve(__dirname, 'src'),
	entry: {
		'es-modules': './es-modules/entry.js',
		'commonjs': './commonjs/entry.js',
	},
	output: {
		path: resolve(__dirname, 'build'),
		filename: '[name].bundle.js',
	},
	resolve: {
		extensions: ['.js']
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			}
		]
	},
};


/**
 * Normalise slashes on Windows.
 */
var slashRE = /\//g;
function resolve(){
	var result = _path.resolve.apply(_path, arguments).replace(slashRE, '\\');
	return result;
}
