import type { Reroute } from '@sveltejs/kit';
import { deLocalizeUrl } from '$lib/paraglide/runtime.js';

export const reroute: Reroute = ({ url }) => {
	// Strip locale prefix from URL so SvelteKit routes to the correct page
	// e.g., /nl/about -> /about
	return deLocalizeUrl(url).pathname;
};
