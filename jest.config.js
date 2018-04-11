module.exports = {
	moduleNameMapper: { micro: '<rootDir>/_mocks/micro' },
	// setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',
	automock: false,
	// browser: true,
	verbose: true,
	silent: false,
	testMatch: ['**/_tests/*\\.t\\.js']
	// setupFiles: ['./jest/index.js'],
	// moduleNameMapper: {
	// 	'\\.(css|svg)': 'identity-obj-proxy',
	// 	'^react$': '<rootDir>/node_modules/react'
	// },
	// transform: {
	// 	'^.+\\.jsx?$': 'babel-jest'
	// }
};
