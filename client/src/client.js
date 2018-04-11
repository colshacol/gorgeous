// const API_URL = 'https://gorgeous-mtubtcsrfw.now.sh/';
// const API_URL = 'http://192.168.1.8:3000';
const API_URL = 'http://localhost:3000/';

const seek = (url, stuff) => {
	return new Promise(async (res, rej) => {
		const response = await fetch(url, stuff);
		try {
			resolve(await response.json());
		} catch (error) {
			console.log('ERROR', error);
			reject(error);
		}
	});
};

export default (body) => {
	console.log({ body });
	fetch(API_URL, {
		body: JSON.stringify(body),
		credentials: 'same-origin',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		method: 'post'
	})
		.then((res) => res.json())
		.then(console.warn)
		.catch(console.error);
};
