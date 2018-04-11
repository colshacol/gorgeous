module.exports = {
	entry: ['./src/client/index.js'],

	output: {
		path: __dirname + '/lib/client.js',
		filename: 'client.js',
		library: 'gorgeous',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},

	resolve: {
		// root: require('path').resolve('./src'),
		extensions: ['.js']
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							// presets: ['./.babelrc']
						}
					}
				]
			}
		]
	}
};
