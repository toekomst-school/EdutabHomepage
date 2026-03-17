<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.url.pathname === '/' ? 'EduTab - The Complete Education Platform for European Schools' : 'EduTab'}</title>
</svelte:head>

<article class="prose prose-slate max-w-none">
	<slot />
</article>

<style>
	.prose {
		padding: 2rem 0;
		line-height: 1.75;
	}

	.prose :global(h1),
	.prose :global(h2),
	.prose :global(h3),
	.prose :global(h4) {
		font-weight: 600;
		line-height: 1.25;
		margin-bottom: 1rem;
	}

	.prose :global(h1) {
		font-size: 2.25rem;
	}

	.prose :global(h2) {
		font-size: 1.875rem;
	}

	.prose :global(h3) {
		font-size: 1.5rem;
	}

	.prose :global(p) {
		margin-bottom: 1.25rem;
	}

	.prose :global(a) {
		color: #FF6B35;
		text-decoration: underline;
	}

	.prose :global(a:hover) {
		color: #FFD23F;
	}

	.prose :global(ul),
	.prose :global(ol) {
		padding-left: 1.5rem;
		margin-bottom: 1.25rem;
	}

	.prose :global(li) {
		margin-bottom: 0.5rem;
	}

	.prose :global(code) {
		background-color: #f1f5f9;
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-family: monospace;
	}

	.prose :global(pre) {
		background-color: #1e293b;
		color: #e2e8f0;
		padding: 1rem;
		border-radius: 8px;
		overflow-x: auto;
		margin-bottom: 1.25rem;
	}

	.prose :global(pre code) {
		background-color: transparent;
		padding: 0;
	}
</style>
