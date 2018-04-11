export const WITHOUT_CONFIG = {
	REQUEST: {
		headers: {
			'content-type': 'application/json'
		},
		code:
			"const playWithFire = \n\t(cat) => {\n\twhile(true) {\n\t\t\t\t\t\nconsole.log('it is true....')\n\t}\n}\n\nplayWithFire()",
		config: null
	},
	EXPECTED:
		"const playWithFire = (cat) => {\n\twhile (true) {\n\t\tconsole.log('it is true....')\n\t}\n}\n\nplayWithFire()\n"
};

export const WITH_CONFIG = {
	REQUEST: {
		headers: {
			'content-type': 'application/json'
		},
		code:
			"const playWithFire = \n\t(cat) => {\n\twhile(true) {\n\t\t\t\t\t\nconsole.log('it is true....')\n\t}\n}\n\nplayWithFire()",
		config: {
			arrowParens: 'avoid'
		}
	},
	EXPECTED:
		"const playWithFire = cat => {\n\twhile (true) {\n\t\tconsole.log('it is true....')\n\t}\n}\n\nplayWithFire()\n"
};
