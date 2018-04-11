const prettier = require('prettier');
const { json } = require('micro');

const { mergedConfig } = require('./mergedConfig');

module.exports.isJSON = (type) => {
	return type === 'application/json';
};

module.exports.handleJSON = async (req, res) => {
	const { code, config } = await json(req);

	// TODO: body validation.

	return {
		pretty: prettier.format(code, mergedConfig(config)),
		error: null
	};
};
