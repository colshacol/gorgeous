const { isText, handleText } = require('./utilities/handleText');
const { isJSON, handleJSON } = require('./utilities/handleJSON');
// https://gorgeous-nstsbufukz.now.sh/
module.exports = async (req, res) => {
	const type = req.headers['content-type'];

	return (
		(isText(type) && (await handleText(req, res))) ||
		(isJSON(type) && (await handleJSON(req, res)))
	);
};
