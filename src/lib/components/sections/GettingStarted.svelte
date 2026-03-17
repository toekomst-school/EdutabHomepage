<script lang="ts">
	import Section from './Section.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import User from '@lucide/svelte/icons/user';
	import Tablet from '@lucide/svelte/icons/tablet';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';
</script>

<Section variant="accent" padding="normal">
	<div class="w-full">
		<Reveal>
			<div class="text-center mb-12 -mt-18">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.getting_started_title()}
				</h2>
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
					{m.getting_started_subtitle()}
				</p>
			</div>
		</Reveal>

		<!-- Step Cards -->
		<div class="grid md:grid-cols-3 gap-8 mb-12 pl-4 sm:pl-0">
			<!-- Step 1 -->
			<Reveal delay={100}>
			<div class="relative bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-102 hover:brightness-105">
				<div
					class="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-[#F0FFF4] flex items-center justify-center text-[#9457FF] font-display font-bold text-lg shadow-xl ring-4 ring-[#9457FF]"
				>
					1
				</div>
				<div
					class="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg mx-auto"
				>
					<User class="w-7 h-7 text-white" />
				</div>
				<h3 class="text-xl font-display font-bold text-neutral-900 mb-3">{m.getting_started_step1_title()}</h3>
				<p class="text-neutral-600 leading-relaxed">
					{m.getting_started_step1_desc()}
				</p>
			</div>
			</Reveal>

			<!-- Step 2 -->
			<Reveal delay={250}>
			<div class="relative bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-102 hover:brightness-105">
				<div
					class="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-[#F0FFF4] flex items-center justify-center text-[#15B1E8] font-display font-bold text-lg shadow-xl ring-4 ring-[#15B1E8]"
				>
					2
				</div>
				<div
					class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg mx-auto"
				>
					<Tablet class="w-7 h-7 text-white" />
				</div>
				<h3 class="text-xl font-display font-bold text-neutral-900 mb-3">{m.getting_started_step2_title()}</h3>
				<p class="text-neutral-600 leading-relaxed">
					{m.getting_started_step2_desc()}
				</p>
			</div>
			</Reveal>

			<!-- Step 3 -->
			<Reveal delay={400}>
			<div class="relative bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-102 hover:brightness-105">
				<div
					class="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-[#F0FFF4] flex items-center justify-center text-[#FB4991] font-display font-bold text-lg shadow-xl ring-4 ring-[#FB4991]"
				>
					3
				</div>
				<div
					class="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-6 shadow-lg mx-auto"
				>
					<Sparkles class="w-7 h-7 text-white" />
				</div>
				<h3 class="text-xl font-display font-bold text-neutral-900 mb-3">{m.getting_started_step3_title()}</h3>
				<p class="text-neutral-600 leading-relaxed">
					{m.getting_started_step3_desc()}
				</p>
			</div>
			</Reveal>
		</div>

		<!-- CTA Button -->
		<Reveal delay={550}>
		<div class="text-center">
			<Button href={localizeHref('#signup')} size="fluid" class="bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white shadow-lg font-semibold rounded-xl">
				<span>{m.getting_started_cta()}</span>
				<ChevronRight class="w-5 h-5" />
			</Button>
			<p class="text-sm text-neutral-500 mt-4">{m.getting_started_trial_info()}</p>
		</div>
		</Reveal>
	</div>
</Section>
