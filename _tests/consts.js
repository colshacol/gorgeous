module.exports.MOCK_REQUEST_BODY = {
	code:
		"const playWithFire = \n\t(cat) => {\n\twhile(true) {\n\t\t\t\t\t\nconsole.log('it is true....')\n\t}\n}\n\nplayWithFire()",
	config: {
		arrowParens: 'avoid'
	}
};

module.exports.EXPECTED_CODE =
	"const playWithFire = cat => {\n\twhile (true) {\n\t\tconsole.log('it is true....')\n\t}\n}\n\nplayWithFire()\n";
