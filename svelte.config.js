import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()

	},
	package: {
		dir: 'package',
		emitTypes: true,
		// excludes all .d.ts and files starting with _ as the name
		exports: (filepath) => !/^_|\/_|\.d\.ts$/.test(filepath),
		files: () => true
	},
	floc: false,
	serviceWorker: {
		register: true,
		files: (filepath) => !/\.DS_STORE/.test(filepath)
	},
	vite: () => {
	}
};

// noinspection JSUnusedGlobalSymbols
export default config;
