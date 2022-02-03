import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

// noinspection JSValidateTypes,SpellCheckingInspection
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter()
	},
	files: {
		assets: 'static',
		hooks: 'src/hooks/*',
		lib: 'src/lib',
		routes: 'src/routes',
		serviceWorker: 'src/service-worker',
		template: 'src/app.html'
	}
};

// noinspection JSUnusedGlobalSymbols
export default config;
