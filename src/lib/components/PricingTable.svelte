<script lang="ts">
	import Check from '@lucide/svelte/icons/check';
	import * as m from '$lib/paraglide/messages.js';

	type BillingPeriod = 'monthly' | 'annual';
	type PricingType = 'tablets' | 'portal';

	interface TabletOption {
		name: string;
		description: string;
		price: string;
	}

	interface MDMTier {
		devices: string;
		monthlyPrice: number;
		annualPrice: number;
		bestValue?: boolean;
	}

	let { title = '', subtitle = '', type = 'tablets' }: { title?: string; subtitle?: string; type?: PricingType } = $props();

	let billingPeriod = $state<BillingPeriod>('monthly');

	let tabletOptions = $derived<TabletOption[]>([
		{
			name: m.pricing_table_single_tablet(),
			description: m.pricing_table_single_desc(),
			price: '€199'
		},
		{
			name: m.pricing_table_bundle(),
			description: m.pricing_table_bundle_desc(),
			price: '€7,500'
		}
	]);

	let mdmTiers = $derived<MDMTier[]>([
		{ devices: m.pricing_tier_1(), monthlyPrice: 2.00, annualPrice: 20.00 },
		{ devices: m.pricing_tier_2(), monthlyPrice: 1.75, annualPrice: 17.50 },
		{ devices: m.pricing_tier_3(), monthlyPrice: 1.50, annualPrice: 15.00 },
		{ devices: m.pricing_tier_4(), monthlyPrice: 1.25, annualPrice: 12.50, bestValue: true }
	]);

	let includedFeatures = $derived([
		m.pricing_table_all_features(),
		m.pricing_table_unlimited_admins(),
		m.pricing_table_eu_hosting(),
		m.pricing_table_email_chat(),
		m.pricing_table_26_languages(),
		m.pricing_table_updates()
	]);

	function getAnnualDisplayPrice(tier: MDMTier): string {
		return `€${tier.annualPrice.toFixed(2)}`;
	}

	function getMonthlyDisplayPrice(tier: MDMTier): string {
		return `€${tier.monthlyPrice.toFixed(2)}`;
	}
</script>

<div class="w-full">
	{#if title || subtitle}
		<div class="text-center mb-8">
			{#if title}
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{title}
				</h2>
			{/if}
			{#if subtitle}
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>
			{/if}
		</div>
	{/if}

	<!-- Tablets Section -->
	{#if type === 'tablets'}
	<div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-5">
		<div class="flex flex-col items-center gap-4 mb-6 text-center">
			<div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-brand-50 to-brand-100">
				<svg class="w-6 h-6 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
					<line x1="12" x2="12.01" y1="18" y2="18"></line>
				</svg>
			</div>
			<div>
				<h3 class="text-2xl font-display font-bold text-neutral-900">{m.pricing_table_tablets_title()}</h3>
				<p class="text-neutral-600 mt-1">
					{m.pricing_table_tablets_subtitle()}
				</p>
			</div>
		</div>

		<div class="hidden md:block overflow-x-auto">
			<table class="w-full">
				<thead>
					<tr class="border-b-2 border-neutral-200">
						<th class="text-left py-3 px-4 font-semibold text-neutral-700">{m.pricing_table_option()}</th>
						<th class="text-left py-3 px-4 font-semibold text-neutral-700">{m.pricing_table_included()}</th>
						<th class="text-right py-3 px-4 font-semibold text-neutral-700">{m.pricing_table_price()}</th>
					</tr>
				</thead>
				<tbody>
					{#each tabletOptions as option, i}
						<tr class="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
							<td class="py-4 px-4 font-medium text-neutral-900">{option.name}</td>
							<td class="py-4 px-4 text-neutral-600">{option.description}</td>
							<td class="py-4 px-4 text-right">
								<span class="text-2xl font-bold text-neutral-900">{option.price}</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<!-- Mobile card layout for Tablets -->
		<div class="md:hidden space-y-4">
			{#each tabletOptions as option}
				<div class="bg-neutral-50 rounded-xl border border-neutral-200 p-4">
					<h4 class="font-semibold text-neutral-900 mb-1">{option.name}</h4>
					<span class="text-xl font-bold text-neutral-900 block mb-2">{option.price}</span>
					<p class="text-sm text-neutral-600">{option.description}</p>
				</div>
			{/each}
		</div>

		<div class="mt-6 p-4 bg-primary-yellow/5 rounded-xl border border-primary-yellow/20">
			<p class="text-sm text-neutral-600">
				<strong>{m.pricing_table_preinstalled()}</strong> {m.pricing_table_preinstalled_desc()}
			</p>
		</div>
	</div>
	{/if}

	<!-- MDM Section with Toggle -->
	{#if type === 'portal'}
	<div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-5 mb-8">
		<div class="flex flex-col items-center gap-4 mb-6 text-center">
			<div class="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-primary-green/20 to-primary-green/10">
				<svg class="w-6 h-6 text-primary-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<rect width="20" height="14" x="2" y="3" rx="2"></rect>
					<line x1="8" x2="16" y1="21" y2="21"></line>
					<line x1="12" x2="12" y1="17" y2="21"></line>
				</svg>
			</div>
			<div>
				<h3 class="text-2xl font-display font-bold text-neutral-900">{m.pricing_table_portal_title()}</h3>
				<p class="text-neutral-600 mt-1">{m.pricing_table_portal_subtitle()}</p>
			</div>
		</div>

		<!-- Monthly/Annual Toggle -->
		<div class="mb-6 flex justify-center" role="radiogroup" aria-label={m.aria_billing_selection()}>
				<div class="relative inline-flex items-center bg-neutral-100 rounded-xl p-1">
					<button
						class="relative px-4 sm:px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200"
						class:text-neutral-600={billingPeriod === 'annual'}
						class:bg-white={billingPeriod === 'monthly'}
						class:text-neutral-900={billingPeriod === 'monthly'}
						class:shadow-sm={billingPeriod === 'monthly'}
						onclick={() => (billingPeriod = 'monthly')}
						role="radio"
						aria-checked={billingPeriod === 'monthly'}
					>
						{m.pricing_table_monthly()}
					</button>
					<button
						class="relative px-4 sm:px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200"
						class:text-neutral-600={billingPeriod === 'monthly'}
						class:bg-white={billingPeriod === 'annual'}
						class:text-neutral-900={billingPeriod === 'annual'}
						class:shadow-sm={billingPeriod === 'annual'}
						onclick={() => (billingPeriod = 'annual')}
						role="radio"
						aria-checked={billingPeriod === 'annual'}
					>
						{m.pricing_table_annual()}
					</button>
					{#if billingPeriod === 'annual'}
						<div
							class="absolute -top-2 -right-2 bg-primary-coral text-white text-xs font-bold px-2 py-0.5 rounded-full"
						>
							{m.pricing_table_save_17()}
						</div>
					{/if}
				</div>
		</div>

		<p class="text-sm text-neutral-500 mb-6 italic">
			{billingPeriod === 'annual' ? m.pricing_table_annual_note() : m.pricing_table_monthly_note()}
		</p>

		<div class="hidden md:block overflow-x-auto">
			<table class="w-full">
				<thead>
					<tr class="border-b-2 border-neutral-200">
						<th class="text-left py-3 px-4 font-semibold text-neutral-700">{m.pricing_table_devices()}</th>
						<th class="text-right py-3 px-4 font-semibold text-neutral-700">
							{billingPeriod === 'monthly' ? m.pricing_table_monthly_per_device() : m.pricing_table_annual_per_device()}
						</th>
						<th class="text-right py-3 px-4 font-semibold text-neutral-700">{m.pricing_table_annual_savings()}</th>
					</tr>
				</thead>
				<tbody>
					{#each mdmTiers as tier, i}
						<tr
							class="border-b border-neutral-100 transition-colors {tier.bestValue ? 'bg-primary-yellow/5 hover:bg-primary-yellow/10' : 'hover:bg-neutral-50'}"
						>
							<td class="py-4 px-4 font-medium text-neutral-900">
								{tier.devices}
								{#if tier.bestValue}
									<span
										class="ml-2 inline-block px-2 py-0.5 bg-primary-coral text-white text-xs font-semibold rounded-full"
									>
										{m.pricing_table_best_value()}
									</span>
								{/if}
							</td>
							<td class="py-4 px-4 text-right">
								<span class="text-2xl font-bold {tier.bestValue ? 'text-primary-coral' : 'text-neutral-900'}">
									{billingPeriod === 'annual'
										? getAnnualDisplayPrice(tier)
										: getMonthlyDisplayPrice(tier)}
								</span>
							</td>
							<td class="py-4 px-4 text-right">
								<span class="text-accent-green font-semibold">{m.pricing_table_2_months_free()}</span>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<!-- Mobile card layout for MDM Tiers -->
		<div class="md:hidden space-y-4">
			{#each mdmTiers as tier}
				<div class="rounded-xl border-2 transition-colors {tier.bestValue ? 'bg-primary-yellow/5 border-primary-coral/30' : 'bg-neutral-50 border-neutral-200'}">
					<div class="p-4">
						<div class="flex items-center justify-between mb-2">
							<span class="font-semibold text-neutral-900">{tier.devices}</span>
							{#if tier.bestValue}
								<span class="px-2 py-0.5 bg-primary-coral text-white text-xs font-semibold rounded-full">
									{m.pricing_table_best_value()}
								</span>
							{/if}
						</div>
						<div class="text-2xl font-bold mb-1 {tier.bestValue ? 'text-primary-coral' : 'text-neutral-900'}">
							{billingPeriod === 'annual' ? getAnnualDisplayPrice(tier) : getMonthlyDisplayPrice(tier)}
							<span class="text-sm font-normal text-neutral-500">{billingPeriod === 'annual' ? m.pricing_table_per_device_yr() : m.pricing_table_per_device_mo()}</span>
						</div>
						<div class="text-sm text-accent-green font-semibold">
							{m.pricing_table_2_months_annual()}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-6 p-4 bg-primary-yellow/5 rounded-xl border border-primary-yellow/20">
			<p class="text-sm font-medium text-neutral-900 mb-2">{m.pricing_table_included_every_tier()}</p>
			<ul class="grid md:grid-cols-2 gap-2 text-sm text-neutral-600">
				{#each includedFeatures as feature}
					<li class="flex items-center gap-2">
						<Check class="w-4 h-4 text-accent-green flex-shrink-0" />
						{feature}
					</li>
				{/each}
			</ul>
		</div>
	</div>
	{/if}
</div>
