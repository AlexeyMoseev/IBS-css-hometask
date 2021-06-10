let path = require('path')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')

let conf = {
	entry: { main: './src/main.js', detailed: './src/detailed.js' },
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: `[name].js`,
		publicPath: '/dist/',
	},
	devServer: {
		overlay: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node-modules/',
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'main.css',
		}),
	],
}

module.exports = (env, options) => {
	let isProd = options.mode === 'production'
	conf.devtool = isProd ? false : 'eval-cheap-module-source-map'
	conf.target = isProd ? 'browserslist' : 'web'
	return conf
}
