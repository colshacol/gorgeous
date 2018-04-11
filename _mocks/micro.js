module.exports = {
	json(res) {
		return res;
	},
	text(res) {
		return res.body;
	}
};
