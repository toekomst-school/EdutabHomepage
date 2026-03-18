<script lang="ts">
	import { onMount } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';
	import '../lib/styles/app.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { setLocale } from '$lib/paraglide/runtime.js';
	import * as m from '$lib/paraglide/messages.js';

	let { children, data } = $props();

	// Initialize locale from server (without reload to prevent navigation loops)
	$effect(() => {
		if (data.locale) {
			setLocale(data.locale, { reload: false });
		}
	});

	onMount(() => {
		// Defer Chatwoot chat widget - load after page is idle
		const loadChatwoot = () => {
			(window as any).chatwootSettings = {
				position: 'right',
				type: 'standard',
				launcherTitle: m.chatwoot_title()
			};

			const BASE_URL = 'https://chat.toekomst.org';
			const g = document.createElement('script');
			g.src = BASE_URL + '/packs/js/sdk.js';
			g.async = true;
			g.defer = true;
			document.body.appendChild(g);
			g.onload = function () {
				(window as any).chatwootSDK.run({
					websiteToken: 'Dw2AfEZsD4t9LPyMUjf6ysVu',
					baseUrl: BASE_URL
				});
			};
		};

		// Use requestIdleCallback if available, otherwise setTimeout
		if ('requestIdleCallback' in window) {
			(window as any).requestIdleCallback(loadChatwoot, { timeout: 5000 });
		} else {
			setTimeout(loadChatwoot, 4000);
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col overflow-x-hidden">
	<!-- Header -->
	<Header />

	<!-- Main Content -->
	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Footer -->
	<Footer />
</div>
