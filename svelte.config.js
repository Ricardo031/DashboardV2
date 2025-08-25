import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: 'index.html' // para manejar rutas SPA
		}),
		paths: {
			// 👇 importante: aquí pones el nombre exacto de tu repo
			base: process.env.NODE_ENV === 'production' ? '/DashboardV2' : ''
		}
	}
};

export default config;
