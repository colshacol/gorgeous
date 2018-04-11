const gorgeous = require('../index');

const { MOCK_REQUEST_BODY, EXPECTED_CODE } = require('./consts');

test('works?', async (done) => {
	const result = await gorgeous(MOCK_REQUEST_BODY);
	expect(result.pretty).toEqual(EXPECTED_CODE);
	done();
});
