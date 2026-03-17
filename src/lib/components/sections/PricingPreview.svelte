<script lang="ts">
	import Section from './Section.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import Check from '@lucide/svelte/icons/check';
	import Tablet from '@lucide/svelte/icons/tablet';
	import Shield from '@lucide/svelte/icons/shield';
	import Smartphone from '@lucide/svelte/icons/smartphone';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';
</script>

<Section variant="default" padding="normal">
	<div class="w-full">
		<Reveal>
			<div class="text-center mb-12 -mt-18">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.pricing_title()}
				</h2>
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
					{m.pricing_subtitle()}
				</p>
			</div>
		</Reveal>

		<!-- Free features highlight -->
		<Reveal delay={100}>
		<div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 mb-12 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-102 hover:brightness-105">
			<div class="grid md:grid-cols-2 gap-6">
				<div class="flex items-start gap-3">
					<svg class="w-6 h-6 text-[#ff7038] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<rect x="4" y="4" width="6" height="6" rx="1"/>
						<rect x="14" y="4" width="6" height="6" rx="1"/>
						<rect x="4" y="14" width="6" height="6" rx="1"/>
						<rect x="14" y="14" width="6" height="6" rx="1"/>
					</svg>
					<div>
						<h4 class="font-semibold text-neutral-900 mb-1">{m.pricing_marketplace_title()}</h4>
						<p class="text-sm text-neutral-600"><span class="font-semibold text-base text-neutral-700">{m.pricing_marketplace_desc()}</span> {m.pricing_marketplace_detail()}</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<Check class="w-6 h-6 text-accent-green flex-shrink-0 mt-0.5" />
					<div>
						<h4 class="font-semibold text-neutral-900 mb-1">{m.pricing_selfhost_title()}</h4>
						<p class="text-sm text-neutral-600"><span class="font-semibold text-base text-neutral-700">{m.pricing_selfhost_desc()}</span> {m.pricing_selfhost_detail()}</p>
					</div>
				</div>
			</div>
		</div>
		</Reveal>

		<div class="grid md:grid-cols-2 gap-8 mb-12">
			<!-- Tablet Pricing Card -->
			<Reveal delay={200}>
			<div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-102 hover:brightness-105 pricing-card">
				<div class="flex items-center gap-3 mb-6">
					<div
						class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg"
					>
						<Tablet class="w-6 h-6 text-white" />
					</div>
					<div>
						<h3 class="text-xl font-display font-bold text-neutral-900">{m.pricing_tablets_title()}</h3>
						<p class="text-sm text-neutral-500">{m.pricing_tablets_subtitle()}</p>
					</div>
				</div>

				<div class="space-y-4 mb-6">
					<div class="flex justify-between items-center py-3 border-b border-neutral-100">
						<span class="text-neutral-600">{m.pricing_tablets_single()}</span>
						<span class="text-2xl font-bold text-neutral-900">€199</span>
					</div>
					<div class="flex justify-between items-center py-3 border-b border-neutral-100">
						<span class="text-neutral-600">{m.pricing_tablets_bundle()}</span>
						<span class="text-2xl font-bold text-neutral-900">€7,500</span>
					</div>
				</div>

				<div class="flex items-start gap-2 text-sm text-neutral-500">
					<Check class="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
					<span>{m.pricing_tablets_byod()}</span>
				</div>
			</div>
			</Reveal>

			<!-- MDM Pricing Card -->
			<Reveal delay={350}>
			<div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-102 hover:brightness-105">
				<div class="flex items-center gap-3 mb-6">
					<div
						class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-green to-primary-greenLight flex items-center justify-center flex-shrink-0"
					>
						<svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
							<line x1="8" y1="21" x2="16" y2="21"/>
							<line x1="12" y1="17" x2="12" y2="21"/>
						</svg>
					</div>
					<div>
						<h3 class="text-xl font-display font-bold text-neutral-900">{m.pricing_portal_title()}</h3>
						<p class="text-sm text-neutral-500">{m.pricing_portal_subtitle()}</p>
					</div>
				</div>

				<div class="space-y-3 mb-6">
					<div class="flex justify-between items-center py-2 border-b border-neutral-100">
						<span class="text-neutral-600">{m.pricing_tier_1()}</span>
						<div class="text-right">
							<span class="text-2xl font-bold text-neutral-900">€2.00</span>
							<span class="text-sm text-neutral-500">{m.pricing_per_device_mo()}</span>
						</div>
					</div>
					<div class="flex justify-between items-center py-2 border-b border-neutral-100">
						<span class="text-neutral-600">{m.pricing_tier_2()}</span>
						<div class="text-right">
							<span class="text-2xl font-bold text-neutral-900">€1.75</span>
							<span class="text-sm text-neutral-500">{m.pricing_per_device_mo()}</span>
						</div>
					</div>
					<div class="flex justify-between items-center py-2 border-b border-neutral-100">
						<span class="text-neutral-600">{m.pricing_tier_3()}</span>
						<div class="text-right">
							<span class="text-2xl font-bold text-neutral-900">€1.50</span>
							<span class="text-sm text-neutral-500">{m.pricing_per_device_mo()}</span>
						</div>
					</div>
					<div class="flex justify-between items-center py-2 border-b border-neutral-100">
						<span class="text-neutral-600 font-semibold">{m.pricing_tier_4()}</span>
						<div class="text-right">
							<span class="text-2xl font-bold text-primary-green">€1.25</span>
							<span class="text-sm text-neutral-500">{m.pricing_per_device_mo()}</span>
						</div>
					</div>
				</div>

				<div class="flex items-start gap-2 text-sm text-neutral-500">
					<Check class="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
					<span>{m.pricing_volume_note()}</span>
				</div>
			</div>
			</Reveal>
		</div>

		<!-- CTA Button -->
		<Reveal delay={500}>
		<div class="text-center">
			<Button
				href={localizeHref('/pricing')}
				size="fluid"
				class="bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white shadow-lg font-semibold rounded-xl"
			>
				<span>{m.pricing_cta()}</span>
				<ArrowRight class="w-5 h-5" />
			</Button>
			<p class="text-sm text-neutral-500 mt-4">{m.pricing_trial_note()}</p>
		</div>
		</Reveal>
	</div>
</Section>

<style>
	/* Reduce left padding on pricing cards for 320-389px viewport */
	@media (max-width: 389px) {
		.pricing-card {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}
</style>
