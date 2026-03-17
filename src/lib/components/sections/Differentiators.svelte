<script lang="ts">
	import Section from './Section.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { cn } from '$lib/utils';
	import Code from '@lucide/svelte/icons/code';
	import Globe from '@lucide/svelte/icons/globe';
	import GraduationCap from '@lucide/svelte/icons/graduation-cap';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';

	let { id = 'differentiators' }: { id?: string } = $props();

	let cards = $derived([
		{
			icon: Globe,
			iconGradient: 'from-blue-500 to-cyan-500',
			title: m.differentiators_european_title(),
			description: m.differentiators_european_desc(),
			linkText: m.differentiators_european_link(),
			linkHref: localizeHref('/open-source')
		},
		{
			icon: Code,
			iconGradient: 'from-purple-500 to-pink-500',
			title: m.differentiators_opensource_title(),
			description: m.differentiators_opensource_desc(),
			linkText: m.differentiators_opensource_link(),
			linkHref: localizeHref('/open-source')
		},
		{
			icon: GraduationCap,
			iconGradient: 'from-primary-greenLight to-primary-green',
			title: m.differentiators_teacher_title(),
			description: m.differentiators_teacher_desc(),
			linkText: m.differentiators_teacher_link(),
			linkHref: localizeHref('/about')
		}
	]);
</script>

<Section {id} variant="default" padding="normal">
	<Reveal>
		<div class="mx-auto max-w-3xl text-center mb-12 -mt-18">
			<h2 class="font-display text-3xl font-bold text-neutral-900 sm:text-4xl mb-4">
				{m.differentiators_title()}
			</h2>
			<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
				{m.differentiators_subtitle()}
			</p>
		</div>
	</Reveal>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
		{#each cards as card, index}
			{@const Icon = card.icon}
			<Reveal delay={100 + index * 150}>
			<div
				class="group relative bg-white rounded-2xl shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-102 hover:brightness-105 p-8 flex flex-col"
			>
				<!-- Icon Badge -->
				<div class="mb-6">
					<div
						class="w-14 h-14 rounded-xl bg-gradient-to-br {card.iconGradient} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 mx-auto"
					>
						<Icon class="w-7 h-7 text-white" />
					</div>
				</div>

				<!-- Title -->
				<h3 class="font-display text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-green transition-all duration-200">
					{card.title}
				</h3>

				<!-- Description -->
				<p class="text-neutral-600 leading-relaxed mb-6 flex-grow">
					{card.description}
				</p>

				<!-- Link -->
				<a
					href={card.linkHref}
					class="inline-flex items-center gap-2 text-primary-green font-semibold group-hover:gap-3 transition-all duration-200"
				>
					<span>{card.linkText}</span>
					<ChevronRight class="w-4 h-4" />
				</a>
			</div>
			</Reveal>
		{/each}
	</div>
</Section>
