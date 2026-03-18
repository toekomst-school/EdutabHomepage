import { sveltekit } from '@sveltejs/kit/vite';
import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'baseLocale']
		})
	],
	server: {
		allowedHosts: ['dev.toekomst.org']
	},
	build: {
		// Performance optimizations
		chunkSizeWarningLimit: 600,
		// Enable CSS code splitting
		cssCodeSplit: true,
		// Optimize module preloading
		modulePreload: {
			polyfill: false
		},
		// Better minification
		minify: 'esbuild',
		target: 'es2020'
	}
});
