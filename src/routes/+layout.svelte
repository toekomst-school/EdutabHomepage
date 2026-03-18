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
	<!-- Preconnect for Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<!-- Load fonts asynchronously to prevent render blocking -->
	<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" />
	<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" media="print" onload="this.media='all'" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" media="print" onload="this.media='all'" />
	<noscript>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" />
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" />
	</noscript>
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
