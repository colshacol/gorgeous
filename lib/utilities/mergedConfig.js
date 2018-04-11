const { DEFAULT_CONFIG } = require('../consts');

module.exports.mergedConfig = (config = {}) => {
	return {
		...DEFAULT_CONFIG,
		...config
	};
};
