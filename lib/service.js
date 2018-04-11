// const { isText, handleText } = require('./utilities/handleText');
const { isJSON, handleJSON } = require('./utilities/handleJSON');

module.exports = async (req, res) => {
	const type = req.headers['content-type'];

	// TODO: content-type validation.

	return (
		// (isText(type) && (await handleText(req, res))) ||
		isJSON(type) && (await handleJSON(req, res))
	);
};
