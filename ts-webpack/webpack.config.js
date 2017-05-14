'use strict';

const _path = require('path');
const webpack = require('webpack');

let slashRE = /\//g;

module.exports = {
	context: resolve(__dirname, 'src'),
	entry: {
		'es5-modules': './es5-modules/entry.ts',
		'es6-modules': './es6-modules/entry.ts',
		'commonjs': './commonjs/entry.ts',
	},
	output: {
		path: resolve(__dirname, 'build'),
		filename: '[name].bundle.js',
	},
	resolve: {
		extensions: ['.js', '.ts']
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				oneOf: [
					{
						test: function(input){
							// Verbose `test` definition to make debugging easier.
							let re = new RegExp(slashes('commonjs/.*\\.ts$', '\\\\'))
							let result = re.test(input);
							return result;
						},
						loader: 'ts-loader',
						options: {
							instance: 'ts1'
						}
					},
					{
						test: function(input){
							let re = new RegExp(slashes('es5-modules/.*\\.ts$', '\\\\'))
							let result = re.test(input);
							return result;
						},
						loader: 'ts-loader',
						options: {
							instance: 'ts2'
						}
					},
					{
						test: function(input){
							let re = new RegExp(slashes('es6-modules/.*\\.ts$', '\\\\'))
							let result = re.test(input);
							return result;
						},
						loader: 'ts-loader',
						options: {
							instance: 'ts3'
						}
					}
				]
			}
			
			// Try out with TS and Babel
			// ,{
			// 	test: /\.js$/,
			// 	loader: 'babel-loader',
			// 	exclude: /node_modules/,
			// 	query: {
			// 		presets: ['es2015']
			// 	}
			// }
			// END OF TEST
		]
	},
};


/**
 * Normalise slashes on Windows.
 */
function slashes(str, replace = '\\'){
	var result = str;
	if (_path === _path.win32){
		result = str.replace(slashRE, replace);
	}
	return result;
}
function resolve(/*...args*/){
	var result = _path.resolve.apply(_path, arguments);
	if (_path === _path.win32){
		result = result.replace(slashRE, '\\');
	}
	return result;
}
