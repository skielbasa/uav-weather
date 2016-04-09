var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var	HtmlWebpackPluginConfig = new HtmlWebpackPlugin( {
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
} );

var precss = require( 'precss' );
var autoprefixer = require( 'autoprefixer' );

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: __dirname + '/app',
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!postcss-loader!sass'
			}
		]
	},
	postcss: function() {

		return [ precss, autoprefixer ];

	},
	plugins: [
		HtmlWebpackPluginConfig
	]
};
