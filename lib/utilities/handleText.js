const prettier = require('prettier');
const { text } = require('micro');

// NOTE: Not currently supported.

// TODO: Determine if 'text/plain' support is necessary and,
// if so, how to do it!

const { DEFAULT_CONFIG } = require('../consts');

module.exports.isText = (type) => {
	return type === 'text/plain';
};

module.exports.handleText = async (req, res) => {
	return {
		pretty: prettier.format(await text(req), DEFAULT_CONFIG)
	};
};
