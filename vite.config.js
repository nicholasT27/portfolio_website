import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
    rollupOptions: {
      input: {
        main: 'src/main.js',
        vendor: 'node_modules/preline/dist/preline.js'
      }
    }
  }
});
