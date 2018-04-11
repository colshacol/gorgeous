const prettier = require('prettier');
const { json } = require('micro');

const { mergedConfig } = require('./mergedConfig');

module.exports.isJSON = (type) => {
	return type === 'application/json';
};

module.exports.handleJSON = async (req, res) => {
	const { code, config } = await json(req);

	return {
		pretty: prettier.format(code, mergedConfig(config))
	};
};
