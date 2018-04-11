import { DEFAULT_CONFIG } from '../consts';

export const mergedConfig = (config = {}) => {
	return {
		...DEFAULT_CONFIG,
		...config
	};
};
