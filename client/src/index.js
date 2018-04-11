import regeneratorRuntime from '@babel/polyfill';

import client from './client';

const BODY = {
	code:
		"const playWithFire = \n\t(cat) => {\n\twhile(true) {\n\t\t\t\t\t\nconsole.log('it is true....')\n\t}\n}\n\nplayWithFire()",
	config: null
};

export default (body) => {
	return client(BODY);
};
