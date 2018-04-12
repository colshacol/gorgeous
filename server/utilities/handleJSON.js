import prettier from 'prettier';
import { json } from 'micro';
import { mergedConfig } from './mergedConfig';

export const isJSON = (type) => {
	return type === 'application/json';
};

export const handleJSON = async (req, res) => {
	const { code, config } = await json(req);
	// TODO: body validation.

	return {
		pretty: prettier.format(code, mergedConfig(config)),
		error: null
	};
};
