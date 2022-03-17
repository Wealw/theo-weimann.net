import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

// noinspection JSValidateTypes
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		less: true,
		postcss: {
			plugins:
				[autoprefixer]
		}
	}),

	kit: {
		adapter: adapter()

	},
	floc: false
};

// noinspection JSUnusedGlobalSymbols
export default config;
