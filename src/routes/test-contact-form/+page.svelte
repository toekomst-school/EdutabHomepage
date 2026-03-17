<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Section from '$lib/components/sections/Section.svelte';
	import { onMount } from 'svelte';
	import Mail from '@lucide/svelte/icons/mail';
	import { browser } from '$app/environment';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	let pageTitle = 'Contact Form Test';
	let pageDescription = 'Testing the ContactForm component with validation and submit states';
</script>

<svelte:head>
	<title>{pageTitle} - EduTab</title>
	<meta name="description" content={pageDescription} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="min-h-screen bg-cream">
	<Section variant="default" padding="spacious">
		<div class="mx-auto max-w-2xl">
			<!-- Page Header -->
			<div class="mb-8 text-center">
				<div
					class="mb-4 inline-flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-yellow to-primary-coral"
				>
					<Mail class="size-8 text-white" />
				</div>
				<h1 class="mb-4 font-display text-3xl font-bold text-neutral-900 md:text-4xl">
					Contact Us
				</h1>
				<p class="text-lg text-neutral-600">
					Have questions? We'd love to hear from you. Send us a message and we'll respond as soon
					as possible.
				</p>
			</div>

			<!-- Contact Form -->
			<div class="rounded-2xl bg-white p-6 shadow-lg md:p-8">
				<ContactForm />
			</div>
		</div>
	</Section>
</div>

<style>
	:global(body) {
		background-color: #fafaf9;
	}
</style>
