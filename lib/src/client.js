import { API_URL, BODY } from './dev.consts';

const CONFIG = (options) => ({
	body: JSON.stringify(options),
	credentials: 'same-origin',
	method: 'post',
	headers: new Headers({
		'Content-Type': 'application/json'
	})
});

const fetcher = async (options) => {
	console.log({ options });
	const response = await fetch(API_URL, CONFIG(options));
	return await response.json();
};

export const client = async (options) => {
	NODE_ENV === 'development' && (options = BODY);

	!options && (throw new Error('gorgeous invoked with no options. Please provide some code to make gorgeous.'))

	const { pretty } = await fetcher(options);
	console.log({ pretty });
};
