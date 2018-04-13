const path = require('path');

console.log('\n\n\n\n\n', process.env.NODE_ENV, '\n\n\n\n\n');

module.exports = {
	entry: './index.js',
	devtool: 'source-map',
	mode: process.env.NODE_ENV,

	entry: ['./lib/src/index.js'],

	output: {
		path: path.resolve(__dirname, 'lib/dist'),
		filename: 'index.js',
		library: 'gorgeous',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},

	node: {
		process: false
	},

	resolve: {
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
						options: {}
					},
					{
						loader: 'string-replace-loader',
						options: {
							multiple: [
								{
									search: 'NODE_ENV',
									replace: JSON.stringify(process.env.NODE_ENV)
								},
								{ search: '{SOME_ENV}', replace: '/* foo bar */' }
							]
						}
					}
				]
			}
		]
	}
};
