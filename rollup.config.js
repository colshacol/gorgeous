import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
	input: 'client/src/index.js',
	format: 'umd',
	output: {
		file: 'client/dist/client.js',
		name: 'gorgeous',
		format: 'umd'
	},

	plugins: [
		resolve(),
		commonjs(),
		babel({
			exclude: 'node_modules/**',
			babelrc: true
		})
	]
};
