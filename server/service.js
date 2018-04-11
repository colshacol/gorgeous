import { isJSON, handleJSON } from './utilities/handleJSON';

export const service = async (req, res) => {
	const type = req.headers['content-type'];
	type == 'undefined' && (req.headers['content-type'] = 'application/json');

	return isJSON(type) && (await handleJSON(req, res));
};
