import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],

	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			layout: {
				_: './src/lib/layouts/mdsvex.svelte'
			},
			rehypePlugins: [rehypeSlug],
			remarkPlugins: [remarkGfm]
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$lib: path.resolve('./src/lib'),
			$libComponents: path.resolve('./src/lib/components'),
			$libUtils: path.resolve('./src/lib/utils')
		}
	}
};

export default config;
