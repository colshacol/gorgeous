import prettier from 'prettier';
import { text } from 'micro';
const { DEFAULT_CONFIG } = require('../consts');
// NOTE: Not currently supported.

// TODO: Determine if 'text/plain' support is necessary and,
// if so, how to do it!

export const isText = (type) => {
	return type === 'text/plain';
};

export const handleText = async (req, res) => {
	return {
		pretty: prettier.format(await text(req), DEFAULT_CONFIG)
	};
};
