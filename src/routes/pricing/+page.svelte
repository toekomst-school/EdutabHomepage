<script lang="ts">
	import ProductHero from '$lib/components/sections/ProductHero.svelte';
	import Section from '$lib/components/sections/Section.svelte';
	import PricingTable from '$lib/components/PricingTable.svelte';
	import ComparisonTable from '$lib/components/ComparisonTable.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Check from '@lucide/svelte/icons/check';
	import Github from '@lucide/svelte/icons/github';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';
	import { openChatwoot } from '$lib/utils/chatwoot';

	let includedFeatures = $derived([
		m.pricing_included_feature_1(),
		m.pricing_included_feature_2(),
		m.pricing_included_feature_3(),
		m.pricing_included_feature_4(),
		m.pricing_included_feature_5(),
		m.pricing_included_feature_6(),
		m.pricing_included_feature_7(),
		m.pricing_included_feature_8()
	]);

	let hiddenFees = $derived([
		m.pricing_no_hidden_fee_1(),
		m.pricing_no_hidden_fee_2(),
		m.pricing_no_hidden_fee_3(),
		m.pricing_no_hidden_fee_4()
	]);

	let marketplaceItems = $derived([
		m.pricing_marketplace_item_1(),
		m.pricing_marketplace_item_2(),
		m.pricing_marketplace_item_3(),
		m.pricing_marketplace_item_4()
	]);

	let selfHostedItems = $derived([
		m.pricing_selfhost_software(),
		m.pricing_selfhost_all_features(),
		m.pricing_selfhost_unlimited_devices(),
		m.pricing_selfhost_unlimited_users()
	]);

	let youProvideItems = $derived([
		m.pricing_selfhost_server(),
		m.pricing_selfhost_maintenance(),
		m.pricing_selfhost_expertise()
	]);

	let bestForItems = $derived([
		m.pricing_selfhost_best_1(),
		m.pricing_selfhost_best_2(),
		m.pricing_selfhost_best_3(),
		m.pricing_selfhost_best_4()
	]);

	let billingSchoolsItems = $derived([
		m.pricing_billing_monthly_annual(),
		m.pricing_billing_annual_save(),
		m.pricing_billing_cancel(),
		m.pricing_billing_invoice(),
		m.pricing_billing_multi_school()
	]);

	let paymentMethods = $derived([
		m.pricing_billing_credit_card(),
		m.pricing_billing_bank(),
		m.pricing_billing_purchase_order()
	]);
</script>

<svelte:head>
	<title>{m.pricing_page_title()}</title>
	<meta name="description" content={m.pricing_page_description()} />
	<meta name="keywords" content={m.pricing_page_keywords()} />

	<!-- Open Graph tags -->
	<meta property="og:title" content={m.pricing_og_title()} />
	<meta property="og:description" content={m.pricing_og_description()} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://edutab.eu/pricing-school-tablet-management" />
	<meta property="og:image" content="https://edutab.eu/og-image.jpg" />

	<!-- Twitter Card tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={m.pricing_og_title()} />
	<meta name="twitter:description" content={m.pricing_og_description()} />
	<meta name="twitter:image" content="https://edutab.eu/twitter-image.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://edutab.eu/pricing-school-tablet-management" />
</svelte:head>

<!-- 1. Hero Section -->
<ProductHero
	title={m.pricing_hero_title()}
	subtitle={m.pricing_hero_subtitle()}
	backgroundImage="/pricing.webp"
	backgroundAlt={m.aria_hero_pricing()}
	primaryCta={{ label: m.pricing_hero_cta_primary(), href: "https://portal.edutab.eu/register" }}
	secondaryCta={{ label: m.pricing_hero_cta_secondary(), href: "#compare" }}
	trialInfo={m.pricing_hero_trial_info()}
	blur={1}
	overlayIntensity="dark"
/>

<!-- 2. What's Always Included Section -->
<Reveal>
	<Section id="compare" variant="accent" padding="compact">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4 text-center">
				{m.pricing_included_title()}
			</h2>
			<p class="text-lg text-neutral-600 text-center mb-12">
				{m.pricing_included_subtitle()}
			</p>

			<div class="grid md:grid-cols-2 gap-5 mb-12">
				<div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-5">
					<h3 class="text-xl font-semibold text-neutral-900 mb-6">
						{m.pricing_included_features_title()}
					</h3>
					<ul class="space-y-3 text-neutral-600">
						{#each includedFeatures as feature}
							<li class="flex items-start gap-3">
								<Check class="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				<div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-5">
					<h3 class="text-xl font-semibold text-neutral-900 mb-6">{m.pricing_no_per_feature_title()}</h3>
					<p class="text-neutral-600 mb-6">
						{m.pricing_no_per_feature_desc()}
					</p>

					<h3 class="text-xl font-semibold text-neutral-900 mb-6">{m.pricing_no_hidden_fees_title()}</h3>
					<ul class="space-y-3 text-neutral-600">
						{#each hiddenFees as fee}
							<li class="flex items-start gap-3">
								<Check class="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
								{fee}
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<!-- Trial CTA -->
			<div class="bg-gradient-to-br from-primary-green/10 to-primary-greenLight/10 rounded-2xl p-5 border-2 border-primary-green/20">
				<h3 class="text-2xl font-display font-bold text-neutral-900 mb-4 text-center">
					{m.pricing_try_before_title()}
				</h3>
				<div class="grid md:grid-cols-3 gap-6 mb-8">
					<div class="text-center">
						<div class="text-3xl font-bold text-primary-green mb-1">{m.pricing_trial_days()}</div>
						<p class="text-neutral-600">{m.pricing_trial_days_desc()}</p>
					</div>
					<div class="text-center">
						<div class="text-3xl font-bold text-primary-green mb-1">{m.pricing_trial_devices()}</div>
						<p class="text-neutral-600">{m.pricing_trial_devices_desc()}</p>
					</div>
					<div class="text-center">
						<div class="text-3xl font-bold text-primary-green mb-1">{m.pricing_trial_no_card()}</div>
						<p class="text-neutral-600">{m.pricing_trial_no_card_desc()}</p>
					</div>
				</div>
				<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<Button
						variant="default"
						href="https://portal.edutab.eu/register"
						size="fluid"
						class="bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white shadow-lg"
					>
						{m.pricing_start_trial_btn()}
					</Button>
					<Button variant="outline" onclick={openChatwoot} size="fluid">
						{m.pricing_contact_us()}
					</Button>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- 3. App Marketplace Section -->
<Reveal delay={100}>
	<Section padding="compact">
		<div class="max-w-4xl mx-auto">
			<div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-5">
				<div class="flex flex-col items-center gap-4 mb-6 text-center">
					<div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-primary-coral/20 to-primary-coral/10">
						<svg class="w-6 h-6 text-primary-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect x="4" y="4" width="6" height="6" rx="1"></rect>
							<rect x="14" y="4" width="6" height="6" rx="1"></rect>
							<rect x="4" y="14" width="6" height="6" rx="1"></rect>
							<rect x="14" y="14" width="6" height="6" rx="1"></rect>
						</svg>
					</div>
					<div>
						<h2 class="text-2xl sm:text-3xl font-display font-bold text-neutral-900 mb-2">
							{m.pricing_marketplace_section_title()}
						</h2>
						<p class="text-lg sm:text-xl text-primary-green font-semibold">{m.pricing_marketplace_always_free()}</p>
					</div>
				</div>

				<div class="hidden md:block overflow-x-auto mb-8">
					<table class="w-full">
						<thead>
							<tr class="border-b-2 border-neutral-200">
								<th class="text-left py-3 px-4 font-semibold text-neutral-700">{m.pricing_marketplace_table_what()}</th>
								<th class="text-right py-3 px-4 font-semibold text-neutral-700">{m.pricing_marketplace_table_cost()}</th>
							</tr>
						</thead>
						<tbody>
							{#each marketplaceItems as item}
								<tr class="border-b border-neutral-100 hover:bg-neutral-50 transition-colors last:border-b-0">
									<td class="py-4 px-4 font-medium text-neutral-900">
										{item}
									</td>
									<td class="py-4 px-4 text-right">
										<span class="text-2xl font-bold text-accent-green">€0</span>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>

				<!-- Mobile card layout for App Marketplace -->
				<div class="md:hidden mb-8 space-y-3">
					{#each marketplaceItems as item}
						<div class="bg-neutral-50 rounded-xl border border-neutral-200 p-4 flex items-center justify-between">
							<span class="font-medium text-neutral-900">{item}</span>
							<span class="text-xl font-bold text-accent-green">€0</span>
						</div>
					{/each}
				</div>

				<div class="p-4 bg-primary-green/5 rounded-xl border border-primary-green/20">
					<p class="text-neutral-700 leading-relaxed">
						{m.pricing_marketplace_note()}
					</p>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- 4. EduTab Tablets Pricing Section -->
<Reveal>
	<Section variant="accent" padding="compact">
		<PricingTable
			title={m.pricing_tablets_section_title()}
			subtitle={m.pricing_tablets_section_subtitle()}
			type="tablets"
		/>
	</Section>
</Reveal>

<!-- 5. EduTab Portal (Device Management) Section -->
<Reveal delay={100}>
	<Section padding="compact">
		<PricingTable
			title={m.pricing_portal_section_title()}
			subtitle={m.pricing_portal_section_subtitle()}
			type="portal"
		/>
	</Section>
</Reveal>

<!-- 6. Self-Hosted Option Section -->
<Reveal delay={200}>
	<Section variant="accent" padding="compact">
		<div class="max-w-4xl mx-auto">
			<div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-5">
				<h2 class="text-3xl font-display font-bold text-neutral-900 mb-4">
					{m.pricing_selfhost_section_title()}
				</h2>
				<p class="text-xl text-primary-green font-semibold mb-6">{m.pricing_selfhost_forever_free()}</p>

				<div class="hidden md:block overflow-x-auto mb-8">
					<table class="w-full">
						<thead>
							<tr class="border-b-2 border-neutral-200">
								<th class="text-left py-3 px-4 font-semibold text-neutral-700">{m.pricing_marketplace_table_what()}</th>
								<th class="text-right py-3 px-4 font-semibold text-neutral-700">{m.pricing_marketplace_table_cost()}</th>
							</tr>
						</thead>
						<tbody>
							{#each selfHostedItems as item}
								<tr class="border-b border-neutral-100 hover:bg-neutral-50 transition-colors last:border-b-0">
									<td class="py-4 px-4 font-medium text-neutral-900">{item}</td>
									<td class="py-4 px-4 text-right">
										<span class="text-2xl font-bold text-accent-green">€0</span>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>

				<!-- Mobile card layout for Self-Hosted -->
				<div class="md:hidden mb-8 space-y-3">
					{#each selfHostedItems as item}
						<div class="bg-neutral-50 rounded-xl border border-neutral-200 p-4 flex items-center justify-between">
							<span class="font-medium text-neutral-900">{item}</span>
							<span class="text-xl font-bold text-accent-green">€0</span>
						</div>
					{/each}
				</div>

				<div class="mb-8">
					<h3 class="text-xl font-semibold text-neutral-900 mb-4">{m.pricing_selfhost_you_provide()}</h3>
					<ul class="grid md:grid-cols-2 gap-3 text-neutral-600">
						{#each youProvideItems as item}
							<li class="flex items-center gap-2">
								<Check class="w-5 h-5 text-accent-green flex-shrink-0" />
								{item}
							</li>
						{/each}
					</ul>
				</div>

				<div class="p-4 bg-primary-green/5 rounded-xl border border-primary-green/20 mb-6">
					<h3 class="text-lg font-semibold text-neutral-900 mb-3">{m.pricing_selfhost_best_for()}</h3>
					<ul class="space-y-2 text-neutral-600">
						{#each bestForItems as item}
							<li class="flex items-center gap-2">
								<Check class="w-4 h-4 text-accent-green flex-shrink-0" />
								{item}
							</li>
						{/each}
					</ul>
				</div>

				<Button
					variant="outline"
					href="https://github.com/edutabeu"
					class="w-full sm:w-auto gap-2"
				>
					<Github class="w-4 h-4" />
					{m.pricing_selfhost_docs_btn()}
				</Button>
			</div>
		</div>
	</Section>
</Reveal>

<!-- 7. Billing Made Simple Section -->
<Reveal delay={200}>
	<Section variant="accent" padding="compact">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-8 text-center">
				{m.pricing_billing_title()}
			</h2>

			<div class="grid md:grid-cols-2 gap-5">
				<div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-5">
					<h3 class="text-xl font-semibold text-neutral-900 mb-6">
						{m.pricing_billing_schools_title()}
					</h3>
					<ul class="space-y-3 text-neutral-600">
						{#each billingSchoolsItems as item, i}
							<li class="flex items-start gap-3">
								<Check class="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
								<span><strong>{item.split('—')[0]}</strong>{item.includes('—') ? '—' + item.split('—')[1] : ''}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-5">
					<h3 class="text-xl font-semibold text-neutral-900 mb-6">{m.pricing_billing_payment_title()}</h3>
					<ul class="space-y-3 text-neutral-600">
						{#each paymentMethods as method}
							<li class="flex items-start gap-3">
								<Check class="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
								{method}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- 8. Final CTA Section -->
<Reveal delay={100}>
	<Section>
		<div class="text-center max-w-4xl mx-auto">
		<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6">
			{m.pricing_final_cta_title()}
		</h2>
		<p class="text-lg text-neutral-600 mb-8">
			{m.pricing_final_cta_note()}
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Button
				variant="default"
				href="https://portal.edutab.eu/register"
				size="fluid"
				class="bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white shadow-lg"
			>
				{m.pricing_final_cta_trial()}
			</Button>
			<Button variant="outline" onclick={openChatwoot} size="fluid">
				{m.pricing_contact_us()}
			</Button>
		</div>
		</div>
	</Section>
</Reveal>
