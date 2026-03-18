<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Mail from '@lucide/svelte/icons/mail';
	import Section from './Section.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { openChatwoot } from '$lib/utils/chatwoot';
</script>

<Section variant="accent" padding="spacious">
	<div class="mx-auto max-w-3xl text-center -mt-18">
		<Reveal>
			<!-- Headline -->
			<h2 class="font-display text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
				{m.final_cta_title()}
			</h2>

			<!-- Subheadline -->
			<p
				class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700 sm:text-xl"
			>
				{m.final_cta_subtitle()}
			</p>
		</Reveal>

		<!-- CTA Buttons -->
		<Reveal delay={150}>
		<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
			<Button
				href={'https://portal.edutab.eu/register'}
				variant="default"
				size="fluid"
				class="group w-full sm:w-auto bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white"
			>
				{m.final_cta_primary()}
				<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
			</Button>

			<Button
				onclick={openChatwoot}
				variant="outline"
				size="fluid"
				class="group w-full sm:w-auto"
			>
				<Mail class="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
				{m.final_cta_secondary()}
			</Button>
		</div>
		</Reveal>

		<!-- Trust Badge - wraps on mobile for better readability -->
		<Reveal delay={300}>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-sm text-neutral-600">
			<div class="flex items-center gap-1.5">
				<svg
					class="h-5 w-5 shrink-0 text-accent-green"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					viewBox="0 0 24 24"
				>
					<path
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span>{m.final_cta_badge_1()}</span>
			</div>
			<span class="hidden sm:block mx-1 text-neutral-400">•</span>
			<div class="flex items-center gap-1.5">
				<svg
					class="h-5 w-5 shrink-0 text-accent-green"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					viewBox="0 0 24 24"
				>
					<path
						d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span>{m.final_cta_badge_2()}</span>
			</div>
			<span class="hidden sm:block mx-1 text-neutral-400">•</span>
			<div class="flex items-center gap-1.5">
				<svg
					class="h-5 w-5 shrink-0 text-accent-green"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					viewBox="0 0 24 24"
				>
					<path
						d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span>{m.final_cta_badge_3()}</span>
			</div>
		</div>
		</Reveal>
	</div>
</Section>
