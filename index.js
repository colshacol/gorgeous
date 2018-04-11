const prettier = require('prettier');
const { json } = require('micro');

const DEFAULT_CONFIG = {
	parser: 'babylon',
	tabWidth: 2,
	trailingComma: 'none',
	printWidth: 80,
	singleQuote: true,
	semi: false,
	arrowParens: 'always',
	jsxBracketSameLine: false,
	bracketSpacing: true,
	useTabs: true
};

const mergedConfig = (config = {}) => {
	return {
		...DEFAULT_CONFIG,
		...config
	};
};

module.exports = async (req, res) => {
	const { code, config } = await json(req);

	return {
		pretty: prettier.format(code, mergedConfig(config))
	};
};
