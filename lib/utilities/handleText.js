const prettier = require('prettier');
const { text } = require('micro');

const { DEFAULT_CONFIG } = require('../consts');

module.exports.isText = (type) => {
	return type === 'text/plain';
};

module.exports.handleText = async (req, res) => {
	const code = await text(req);

	return {
		pretty: prettier.format(code, DEFAULT_CONFIG)
	};
};
