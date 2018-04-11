// const { isText, handleText } = require('./utilities/handleText');
import { isJSON, handleJSON } from './utilities/handleJSON';

export const service = async (req, res) => {
	const type = req.headers['content-type'];

	// TODO: content-type validation.

	return (
		// (isText(type) && (await handleText(req, res))) ||
		isJSON(type) && (await handleJSON(req, res))
	);
};
