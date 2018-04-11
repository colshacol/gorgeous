const gorgeous = require('../service');

const { WITH_CONFIG, WITHOUT_CONFIG } = require('./consts');

describe('with json', () => {
	test('it handles JSON data correctly', async (done) => {
		const result = await gorgeous(WITH_CONFIG.REQUEST);
		expect(result.pretty).toEqual(WITH_CONFIG.EXPECTED);
		done();
	});

	test('it works without a provided config', async (done) => {
		const result = await gorgeous(WITHOUT_CONFIG.REQUEST);
		expect(result.pretty).toEqual(WITHOUT_CONFIG.EXPECTED);
		done();
	});
});
