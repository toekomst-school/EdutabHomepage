<script lang="ts">
	import Section from './Section.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Quote from '@lucide/svelte/icons/quote';
	import * as m from '$lib/paraglide/messages.js';

	let { id = 'testimonials' }: { id?: string } = $props();

	let testimonials = $derived([
		{
			quote: m.testimonial_1_quote(),
			author: m.testimonial_1_author(),
			school: m.testimonial_1_school()
		},
		{
			quote: m.testimonial_2_quote(),
			author: m.testimonial_2_author(),
			school: m.testimonial_2_school()
		}
	]);
</script>

<Section {id} variant="default" padding="normal">
	<Reveal>
		<div class="mx-auto max-w-3xl text-center mb-12 -mt-18">
			<h2 class="font-display text-3xl font-bold text-neutral-900 sm:text-4xl mb-4">
				{m.testimonials_title()}
			</h2>
			<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
				{m.testimonials_subtitle()}
			</p>
		</div>
	</Reveal>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
		{#each testimonials as testimonial, index}
			<Reveal delay={100 + index * 150}>
			<div
				class="relative bg-white rounded-2xl shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:scale-102 hover:brightness-105 p-8"
			>
				<!-- Decorative Quote Icon -->
				<div class="absolute -top-4 -left-2">
					<div
						class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-green to-primary-greenLight flex items-center justify-center shadow-lg"
					>
						<Quote class="w-6 h-6 text-white" />
					</div>
				</div>

				<!-- Quote Text -->
				<blockquote class="pt-4 mb-6">
					<p class="text-neutral-700 text-lg leading-relaxed italic">
						"{testimonial.quote}"
					</p>
				</blockquote>

				<!-- Author Info -->
				<div class="flex items-center gap-3 border-t border-neutral-200 pt-6">
					<div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-green/20 to-primary-greenLight/20 flex items-center justify-center">
						<span class="font-display font-bold text-neutral-900 text-lg">
							{testimonial.author.charAt(0)}
						</span>
					</div>
					<div>
						<p class="font-display font-semibold text-neutral-900">
							{testimonial.author}
						</p>
						<p class="text-sm text-neutral-500">
							{testimonial.school}
						</p>
					</div>
				</div>
			</div>
			</Reveal>
		{/each}
	</div>
</Section>
