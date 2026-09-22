import adapter from '@sveltejs/adapter-static';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// The portfolio has no server-only routes, so a single-page fallback keeps
		// every direct URL working on static hosting.
		adapter: adapter({ fallback: 'index.html' })
	},
	preprocess: vitePreprocess()
};

export default config;
