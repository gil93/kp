const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const autoprefixer = require( 'autoprefixer' );

const dev = process.env.NODE_ENV !== 'production' ? true : false;

const env = dev ? 'development' : 'production';

module.exports = {
	target: 'web',
	mode: env,
	devtool: dev ? 'eval-source-map' : 'none',
	watch: dev,
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					'html-loader'
				]
			}, {
				test: /\.scss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: loader => [autoprefixer]
						}
					},
					'sass-loader'
				]
			}, {
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						babelrc: true
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin()
	]
};