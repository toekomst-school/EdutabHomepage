<script lang="ts">
	import ProductHero from '$lib/components/sections/ProductHero.svelte';
	import Section from '$lib/components/sections/Section.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { Button } from '$lib/components/ui/button';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Check from '@lucide/svelte/icons/check';
	import X from '@lucide/svelte/icons/x';
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';
	import { openChatwoot } from '$lib/utils/chatwoot';

	interface Vendor {
		name: string;
		tablets: boolean;
		appStore: boolean;
		mdm: boolean;
		euNative: boolean;
		featured?: boolean;
	}

	const vendors: Vendor[] = [
		{ name: 'EduTab', tablets: true, appStore: true, mdm: true, euNative: true, featured: true },
		{ name: 'Jamf', tablets: false, appStore: false, mdm: true, euNative: false },
		{ name: 'Google', tablets: true, appStore: true, mdm: true, euNative: false },
		{ name: 'Microsoft', tablets: false, appStore: false, mdm: true, euNative: false }
	];

	let enrollmentSteps = $derived([
		m.ecosystem_enrollment_1(),
		m.ecosystem_enrollment_2(),
		m.ecosystem_enrollment_3(),
		m.ecosystem_enrollment_4()
	]);

	let deploymentFeatures = $derived([
		m.ecosystem_deployment_1(),
		m.ecosystem_deployment_2(),
		m.ecosystem_deployment_3(),
		m.ecosystem_deployment_4()
	]);

	let visibilityFeatures = $derived([
		m.ecosystem_visibility_1(),
		m.ecosystem_visibility_2(),
		m.ecosystem_visibility_3(),
		m.ecosystem_visibility_4()
	]);

	let updateFeatures = $derived([
		m.ecosystem_updates_1(),
		m.ecosystem_updates_2(),
		m.ecosystem_updates_3(),
		m.ecosystem_updates_4()
	]);

	let itAdminFeatures = $derived([
		m.ecosystem_it_admin_1(),
		m.ecosystem_it_admin_2(),
		m.ecosystem_it_admin_3()
	]);

	let teacherFeatures = $derived([
		m.ecosystem_teachers_1(),
		m.ecosystem_teachers_2(),
		m.ecosystem_teachers_3()
	]);

	let schoolAdminFeatures = $derived([
		m.ecosystem_school_admin_1(),
		m.ecosystem_school_admin_2(),
		m.ecosystem_school_admin_3()
	]);

	let parentFeatures = $derived([
		m.ecosystem_parents_1(),
		m.ecosystem_parents_2(),
		m.ecosystem_parents_3()
	]);

	let tabletFeatures = $derived([
		m.ecosystem_tablets_feature_1(),
		m.ecosystem_tablets_feature_2(),
		m.ecosystem_tablets_feature_3()
	]);

	let marketplaceFeatures = $derived([
		m.ecosystem_marketplace_feature_1(),
		m.ecosystem_marketplace_feature_2(),
		m.ecosystem_marketplace_feature_3()
	]);

	let portalFeatures = $derived([
		m.ecosystem_portal_feature_1(),
		m.ecosystem_portal_feature_2(),
		m.ecosystem_portal_feature_3()
	]);

	let marketplaceOnlyFeatures = $derived([
		m.ecosystem_option_marketplace_1(),
		m.ecosystem_option_marketplace_2(),
		m.ecosystem_option_marketplace_3()
	]);

	let portalOnlyFeatures = $derived([
		m.ecosystem_option_portal_1(),
		m.ecosystem_option_portal_2(),
		m.ecosystem_option_portal_3()
	]);

	let tabletsPortalFeatures = $derived([
		m.ecosystem_option_tablets_portal_1(),
		m.ecosystem_option_tablets_portal_2(),
		m.ecosystem_option_tablets_portal_3()
	]);

	let completeEcosystemItems = $derived([
		m.three_pillars_tablets_title(),
		m.three_pillars_marketplace_title(),
		m.three_pillars_portal_title()
	]);
</script>

<svelte:head>
	<title>{m.ecosystem_page_title()}</title>
	<meta name="description" content={m.ecosystem_page_description()} />
	<meta name="keywords" content={m.ecosystem_meta_keywords()} />

	<!-- Open Graph tags -->
	<meta property="og:title" content={m.ecosystem_og_title()} />
	<meta property="og:description" content={m.ecosystem_og_description()} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://edutab.eu/ecosystem" />
	<meta property="og:image" content="/images/og/ecosystem.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://edutab.eu/edutab-ecosystem-overview" />
</svelte:head>

<!-- Hero Section -->
<ProductHero
	title={m.ecosystem_hero_title()}
	subtitle={m.ecosystem_hero_subtitle()}
	backgroundImage="/ecosystem.webp"
	backgroundAlt={m.aria_hero_ecosystem()}
	primaryCta={{ label: m.ecosystem_hero_cta_primary(), href: "https://portal.edutab.eu/register" }}
	secondaryCta={{ label: m.ecosystem_hero_cta_secondary(), href: localizeHref("/pricing") }}
	trialInfo={m.ecosystem_hero_trial_info()}
	blur={1}
	overlayIntensity="heavy"
/>

<!-- Introduction Section -->
<Section variant="default" padding="normal">
	<Reveal>
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="font-display text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
				{m.ecosystem_why_title()}
			</h2>
			<p class="mx-auto mt-6 text-lg leading-relaxed text-neutral-700">
				{m.ecosystem_why_desc1()}
			</p>
			<p class="mx-auto mt-4 text-lg leading-relaxed text-neutral-700 font-medium">
				{m.ecosystem_why_desc2()}
			</p>
		</div>
	</Reveal>
</Section>

<!-- Three Pillars Section -->
<Section variant="accent" padding="normal">
	<div class="w-full">
		<Reveal>
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.ecosystem_pillars_title()}
				</h2>
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
					{m.ecosystem_pillars_subtitle()}
				</p>
			</div>
		</Reveal>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- EduTab Tablets -->
			<Reveal delay={100}>
				<div class="bg-white rounded-2xl p-8 shadow-md border border-neutral-200 flex flex-col h-full">
					<div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto bg-gradient-to-br from-brand-50 to-brand-100">
						<svg class="w-6 h-6 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
							<line x1="12" x2="12.01" y1="18" y2="18"></line>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-xl text-neutral-800 mb-2 text-center">
						{m.three_pillars_tablets_title()}
					</h3>
					<p class="text-neutral-600 leading-relaxed mb-4 text-center">
						{m.ecosystem_tablets_desc()}
					</p>
					<ul class="space-y-2 text-sm text-neutral-600 mb-6 flex-grow">
						{#each tabletFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
					<div class="flex justify-center mt-auto">
						<Button href={localizeHref("/tablets")} variant="ghost" size="sm" class="text-primary-coral hover:text-primary-coralDark">
							{m.ecosystem_tablets_link()}
							<ArrowRight class="ml-1 h-4 w-4" />
						</Button>
					</div>
				</div>
			</Reveal>

			<!-- EduTab App Marketplace -->
			<Reveal delay={250}>
				<div class="bg-white rounded-2xl p-8 shadow-md border border-neutral-200 flex flex-col h-full">
					<div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto bg-gradient-to-br from-primary-coral/20 to-primary-coral/10">
						<svg class="w-6 h-6 text-primary-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<rect x="4" y="4" width="6" height="6" rx="1"></rect>
							<rect x="14" y="4" width="6" height="6" rx="1"></rect>
							<rect x="4" y="14" width="6" height="6" rx="1"></rect>
							<rect x="14" y="14" width="6" height="6" rx="1"></rect>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-xl text-neutral-800 mb-2 text-center">
						{m.three_pillars_marketplace_title()}
					</h3>
					<p class="text-neutral-600 leading-relaxed mb-4 text-center">
						{m.ecosystem_marketplace_desc()}
					</p>
					<ul class="space-y-2 text-sm text-neutral-600 mb-6 flex-grow">
						{#each marketplaceFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
					<div class="flex justify-center mt-auto">
						<Button href={localizeHref("/app-marketplace")} variant="ghost" size="sm" class="text-primary-coral hover:text-primary-coralDark">
							{m.ecosystem_marketplace_link()}
							<ArrowRight class="ml-1 h-4 w-4" />
						</Button>
					</div>
				</div>
			</Reveal>

			<!-- EduTab Portal -->
			<Reveal delay={400}>
				<div class="bg-white rounded-2xl p-8 shadow-md border border-neutral-200 flex flex-col h-full">
					<div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto bg-gradient-to-br from-primary-green/20 to-primary-green/10">
						<svg class="w-6 h-6 text-primary-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<rect width="20" height="14" x="2" y="3" rx="2"></rect>
							<line x1="8" x2="16" y1="21" y2="21"></line>
							<line x1="12" x2="12" y1="17" y2="21"></line>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-xl text-neutral-800 mb-2 text-center">
						{m.three_pillars_portal_title()}
					</h3>
					<p class="text-neutral-600 leading-relaxed mb-4 text-center">
						{m.ecosystem_portal_desc()}
					</p>
					<ul class="space-y-2 text-sm text-neutral-600 mb-6 flex-grow">
						{#each portalFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
					<div class="flex justify-center mt-auto">
						<Button href={localizeHref("/portal")} variant="ghost" size="sm" class="text-primary-coral hover:text-primary-coralDark">
							{m.ecosystem_portal_link()}
							<ArrowRight class="ml-1 h-4 w-4" />
						</Button>
					</div>
				</div>
			</Reveal>
		</div>
	</div>
</Section>

<!-- How Integration Makes Everything Better -->
<Section variant="default" padding="normal">
	<div class="w-full">
		<Reveal>
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.ecosystem_integration_title()}
				</h2>
			</div>
		</Reveal>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<!-- Seamless Enrollment -->
			<Reveal delay={100}>
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 h-full">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.ecosystem_enrollment_title()}
					</h3>
					<ol class="space-y-2 text-neutral-600 mb-4">
						{#each enrollmentSteps as step, i}
							<li class="flex items-start gap-3">
								<span class="flex h-6 w-6 items-center justify-center rounded-full {i === enrollmentSteps.length - 1 ? 'bg-primary-green text-white' : 'bg-primary-green/10 text-primary-green'} text-sm font-medium flex-shrink-0">{i + 1}</span>
								<span class={i === enrollmentSteps.length - 1 ? 'font-medium' : ''}>{step}</span>
							</li>
						{/each}
					</ol>
					<p class="text-sm text-neutral-500">
						{m.ecosystem_enrollment_note()}
					</p>
				</div>
			</Reveal>

			<!-- Unified App Deployment -->
			<Reveal delay={200}>
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 h-full">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.ecosystem_deployment_title()}
					</h3>
					<ul class="space-y-2 text-neutral-600">
						{#each deploymentFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			</Reveal>

			<!-- Complete Visibility -->
			<Reveal delay={300}>
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 h-full">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.ecosystem_visibility_title()}
					</h3>
					<p class="text-neutral-600 mb-3">{m.ecosystem_visibility_desc()}</p>
					<ul class="space-y-2 text-neutral-600">
						{#each visibilityFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			</Reveal>

			<!-- Consistent Updates -->
			<Reveal delay={400}>
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 h-full">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.ecosystem_updates_title()}
					</h3>
					<p class="text-neutral-600 mb-3">{m.ecosystem_updates_desc()}</p>
					<ul class="space-y-2 text-neutral-600">
						{#each updateFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			</Reveal>
		</div>
	</div>
</Section>

<!-- What This Means for Different Roles -->
<Section variant="accent" padding="normal">
	<div class="w-full">
		<Reveal>
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.ecosystem_roles_title()}
				</h2>
			</div>
		</Reveal>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			<Reveal delay={100}>
				<div class="bg-white rounded-xl p-6 shadow-sm h-full">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.ecosystem_it_admin_title()}
					</h3>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each itAdminFeatures as feature}
							<li class="flex items-start gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0 mt-0.5" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			</Reveal>

			<Reveal delay={200}>
				<div class="bg-white rounded-xl p-6 shadow-sm h-full">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.ecosystem_teachers_title()}
					</h3>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each teacherFeatures as feature}
							<li class="flex items-start gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0 mt-0.5" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			</Reveal>

			<Reveal delay={300}>
				<div class="bg-white rounded-xl p-6 shadow-sm h-full">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.ecosystem_school_admin_title()}
					</h3>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each schoolAdminFeatures as feature}
							<li class="flex items-start gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0 mt-0.5" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			</Reveal>

			<Reveal delay={400}>
				<div class="bg-white rounded-xl p-6 shadow-sm h-full">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.ecosystem_parents_title()}
					</h3>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each parentFeatures as feature}
							<li class="flex items-start gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0 mt-0.5" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			</Reveal>
		</div>
	</div>
</Section>

<!-- The Only Complete European Solution - Comparison Table -->
<Section variant="default" padding="normal">
	<div class="w-full">
		<Reveal>
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.ecosystem_comparison_title()}
				</h2>
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
					{m.ecosystem_comparison_subtitle()}
				</p>
			</div>
		</Reveal>

		<Reveal delay={150}>
			<div class="hidden md:block overflow-x-auto">
				<table class="w-full border-collapse bg-white rounded-xl shadow-sm overflow-hidden">
					<thead>
						<tr class="bg-neutral-50 border-b border-neutral-200">
							<th class="px-6 py-4 text-left font-display font-semibold text-neutral-800">{m.ecosystem_vendor()}</th>
							<th class="px-6 py-4 text-center font-display font-semibold text-neutral-800">{m.ecosystem_tablets()}</th>
							<th class="px-6 py-4 text-center font-display font-semibold text-neutral-800">{m.ecosystem_app_store()}</th>
							<th class="px-6 py-4 text-center font-display font-semibold text-neutral-800">{m.ecosystem_mdm()}</th>
							<th class="px-6 py-4 text-center font-display font-semibold text-neutral-800">{m.ecosystem_eu_native()}</th>
						</tr>
					</thead>
					<tbody>
						<tr class="border-b border-neutral-100 bg-primary-green/5">
							<td class="px-6 py-4 font-semibold text-neutral-900">EduTab</td>
							<td class="px-6 py-4 text-center"><Check class="h-5 w-5 text-primary-green mx-auto" /></td>
							<td class="px-6 py-4 text-center"><Check class="h-5 w-5 text-primary-green mx-auto" /></td>
							<td class="px-6 py-4 text-center"><Check class="h-5 w-5 text-primary-green mx-auto" /></td>
							<td class="px-6 py-4 text-center"><Check class="h-5 w-5 text-primary-green mx-auto" /></td>
						</tr>
						<tr class="border-b border-neutral-100">
							<td class="px-6 py-4 text-neutral-700">Jamf</td>
							<td class="px-6 py-4 text-center text-neutral-400">&mdash;</td>
							<td class="px-6 py-4 text-center text-neutral-400">&mdash;</td>
							<td class="px-6 py-4 text-center"><Check class="h-5 w-5 text-primary-green mx-auto" /></td>
							<td class="px-6 py-4 text-center text-neutral-400">&mdash;</td>
						</tr>
						<tr class="border-b border-neutral-100">
							<td class="px-6 py-4 text-neutral-700">Google</td>
							<td class="px-6 py-4 text-center"><Check class="h-5 w-5 text-primary-green mx-auto" /></td>
							<td class="px-6 py-4 text-center"><Check class="h-5 w-5 text-primary-green mx-auto" /></td>
							<td class="px-6 py-4 text-center"><Check class="h-5 w-5 text-primary-green mx-auto" /></td>
							<td class="px-6 py-4 text-center text-neutral-400">&mdash;</td>
						</tr>
						<tr class="border-b border-neutral-100">
							<td class="px-6 py-4 text-neutral-700">Microsoft</td>
							<td class="px-6 py-4 text-center text-neutral-400">&mdash;</td>
							<td class="px-6 py-4 text-center text-neutral-400">&mdash;</td>
							<td class="px-6 py-4 text-center"><Check class="h-5 w-5 text-primary-green mx-auto" /></td>
							<td class="px-6 py-4 text-center text-neutral-400">&mdash;</td>
						</tr>
					</tbody>
				</table>
			</div>

			<!-- Mobile card layout -->
			<div class="md:hidden space-y-4">
				{#each vendors as vendor (vendor.name)}
					<div class="rounded-xl p-5 {vendor.featured
						? 'bg-primary-green/5 border-2 border-primary-green'
						: 'bg-white border border-neutral-200'}">
						<div class="flex items-center gap-2 mb-4">
							<span class="font-semibold text-neutral-900">{vendor.name}</span>
							{#if vendor.featured}
								<span class="text-xs bg-primary-green text-white px-2 py-0.5 rounded-full">{m.ecosystem_complete_solution()}</span>
							{/if}
						</div>
						<div class="grid grid-cols-2 gap-3">
							<div class="flex items-center gap-2">
								{#if vendor.tablets}
									<Check class="h-4 w-4 text-primary-green flex-shrink-0" aria-hidden="true" />
								{:else}
									<X class="h-4 w-4 text-neutral-300 flex-shrink-0" aria-hidden="true" />
								{/if}
								<span class="text-sm text-neutral-600">{m.ecosystem_tablets()}</span>
							</div>
							<div class="flex items-center gap-2">
								{#if vendor.appStore}
									<Check class="h-4 w-4 text-primary-green flex-shrink-0" aria-hidden="true" />
								{:else}
									<X class="h-4 w-4 text-neutral-300 flex-shrink-0" aria-hidden="true" />
								{/if}
								<span class="text-sm text-neutral-600">{m.ecosystem_app_store()}</span>
							</div>
							<div class="flex items-center gap-2">
								{#if vendor.mdm}
									<Check class="h-4 w-4 text-primary-green flex-shrink-0" aria-hidden="true" />
								{:else}
									<X class="h-4 w-4 text-neutral-300 flex-shrink-0" aria-hidden="true" />
								{/if}
								<span class="text-sm text-neutral-600">{m.ecosystem_mdm()}</span>
							</div>
							<div class="flex items-center gap-2">
								{#if vendor.euNative}
									<Check class="h-4 w-4 text-primary-green flex-shrink-0" aria-hidden="true" />
								{:else}
									<X class="h-4 w-4 text-neutral-300 flex-shrink-0" aria-hidden="true" />
								{/if}
								<span class="text-sm text-neutral-600">{m.ecosystem_eu_native()}</span>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<p class="text-center mt-6 text-neutral-600">
				{m.ecosystem_comparison_note()}
			</p>
		</Reveal>
	</div>
</Section>

<!-- Flexible Adoption -->
<Section variant="accent" padding="normal">
	<div class="w-full">
		<Reveal>
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.ecosystem_flexible_title()}
				</h2>
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
					{m.ecosystem_flexible_subtitle()}
				</p>
			</div>
		</Reveal>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
			<Reveal delay={100}>
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 h-full">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-2">
						{m.ecosystem_option_marketplace_title()}
					</h3>
					<p class="text-sm text-primary-green font-medium mb-3">{m.ecosystem_option_marketplace_price()}</p>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each marketplaceOnlyFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			</Reveal>

			<Reveal delay={200}>
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 h-full">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-2">
						{m.ecosystem_option_portal_title()}
					</h3>
					<p class="text-sm text-neutral-500 mb-3">{m.ecosystem_option_portal_note()}</p>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each portalOnlyFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			</Reveal>

			<Reveal delay={300}>
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 h-full">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-2">
						{m.ecosystem_option_tablets_portal_title()}
					</h3>
					<p class="text-sm text-neutral-500 mb-3">{m.ecosystem_option_tablets_portal_note()}</p>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each tabletsPortalFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			</Reveal>

			<Reveal delay={400}>
				<div class="bg-white rounded-xl p-6 shadow-sm border-2 border-primary-green h-full">
					<div class="flex items-center gap-2 mb-2">
						<h3 class="font-display font-semibold text-lg text-neutral-800">
							{m.ecosystem_option_complete_title()}
						</h3>
						<span class="text-xs bg-primary-green text-white px-2 py-0.5 rounded-full">{m.ecosystem_option_recommended()}</span>
					</div>
					<p class="text-sm text-neutral-500 mb-3">{m.ecosystem_option_complete_note()}</p>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each completeEcosystemItems as item}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{item}
							</li>
						{/each}
					</ul>
				</div>
			</Reveal>
		</div>
	</div>
</Section>

<!-- Pricing Overview -->
<Section variant="default" padding="normal">
	<div class="w-full">
		<Reveal>
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.ecosystem_pricing_title()}
				</h2>
			</div>
		</Reveal>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
			<!-- Tablets Pricing -->
			<Reveal delay={100}>
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 h-full">
					<div class="flex flex-col items-center mb-4">
						<div class="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100 mb-3">
							<svg class="w-5 h-5 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
								<line x1="12" x2="12.01" y1="18" y2="18"></line>
							</svg>
						</div>
						<h3 class="font-display font-semibold text-lg text-neutral-800 text-center">
							{m.three_pillars_tablets_title()}
						</h3>
					</div>
					<div class="space-y-3">
						<div class="flex justify-between items-center pb-2 border-b border-neutral-100">
							<span class="text-sm text-neutral-600">{m.ecosystem_pricing_single()}</span>
							<span class="font-semibold text-neutral-900">&euro;199</span>
						</div>
						<div class="flex justify-between items-center pb-2 border-b border-neutral-100">
							<span class="text-sm text-neutral-600">{m.ecosystem_pricing_bundle()}</span>
							<span class="font-semibold text-neutral-900">&euro;7,500</span>
						</div>
					</div>
				</div>
			</Reveal>

			<!-- Portal Pricing -->
			<Reveal delay={200}>
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 h-full">
					<div class="flex flex-col items-center mb-4">
						<div class="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary-green/20 to-primary-green/10 mb-3">
							<svg class="w-5 h-5 text-primary-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<rect width="20" height="14" x="2" y="3" rx="2"></rect>
								<line x1="8" x2="16" y1="21" y2="21"></line>
								<line x1="12" x2="12" y1="17" y2="21"></line>
							</svg>
						</div>
						<h3 class="font-display font-semibold text-lg text-neutral-800 text-center">
							{m.ecosystem_pricing_portal_cloud()}
						</h3>
					</div>
					<div class="space-y-3">
						<div class="flex justify-between items-center pb-2 border-b border-neutral-100">
							<span class="text-sm text-neutral-600">{m.pricing_tier_1()}</span>
							<span class="font-semibold text-neutral-900">&euro;2.00/mo</span>
						</div>
						<div class="flex justify-between items-center pb-2 border-b border-neutral-100">
							<span class="text-sm text-neutral-600">{m.pricing_tier_2()}</span>
							<span class="font-semibold text-neutral-900">&euro;1.75/mo</span>
						</div>
						<div class="flex justify-between items-center pb-2 border-b border-neutral-100">
							<span class="text-sm text-neutral-600">{m.pricing_tier_3()}</span>
							<span class="font-semibold text-neutral-900">&euro;1.50/mo</span>
						</div>
						<div class="flex justify-between items-center pb-2 border-b border-neutral-100">
							<span class="text-sm text-neutral-600">{m.pricing_tier_4()}</span>
							<span class="font-semibold text-neutral-900">&euro;1.25/mo</span>
						</div>
						<p class="text-xs text-neutral-500">{m.ecosystem_pricing_selfhosted()}</p>
					</div>
				</div>
			</Reveal>

			<!-- App Marketplace Pricing -->
			<Reveal delay={300}>
				<div class="bg-primary-green/10 rounded-xl p-6 border border-primary-green/20 h-full">
					<div class="flex flex-col items-center mb-4">
						<div class="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary-coral/20 to-primary-coral/10 mb-3">
							<svg class="w-5 h-5 text-primary-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<rect x="4" y="4" width="6" height="6" rx="1"></rect>
								<rect x="14" y="4" width="6" height="6" rx="1"></rect>
								<rect x="4" y="14" width="6" height="6" rx="1"></rect>
								<rect x="14" y="14" width="6" height="6" rx="1"></rect>
							</svg>
						</div>
						<h3 class="font-display font-semibold text-lg text-neutral-800 text-center">
							{m.three_pillars_marketplace_title()}
						</h3>
					</div>
					<div class="text-center py-4">
						<p class="text-3xl font-bold text-primary-green">{m.ecosystem_option_marketplace_price()}</p>
						<p class="text-sm text-neutral-600 mt-2">{m.ecosystem_pricing_always_free()}</p>
					</div>
				</div>
			</Reveal>
		</div>

		<Reveal delay={400}>
			<div class="text-center mt-8">
				<Button href={localizeHref("/pricing")} variant="default" size="fluid">
					{m.ecosystem_view_pricing()}
					<ExternalLink class="ml-2 h-4 w-4" />
				</Button>
			</div>
		</Reveal>
	</div>
</Section>

<!-- Final CTA Section -->
<Section variant="dark" padding="spacious">
	<div class="mx-auto max-w-3xl text-center">
		<Reveal>
			<h2 class="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
				{m.ecosystem_final_title()}
			</h2>
			<p class="mx-auto mt-6 text-lg leading-relaxed text-neutral-300">
				{m.ecosystem_final_subtitle()}
			</p>
		</Reveal>

		<Reveal delay={150}>
			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
				<Button
					href="https://portal.edutab.eu/register"
					variant="default"
					size="fluid"
					class="group w-full sm:w-auto bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white"
				>
					{m.ecosystem_hero_cta_primary()}
					<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
				</Button>

				<Button
					onclick={openChatwoot}
					variant="outline"
					size="fluid"
					class="group w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-neutral-900 bg-transparent"
				>
					{m.pricing_contact_us()}
				</Button>
			</div>
		</Reveal>

		<Reveal delay={300}>
			<p class="mt-8 text-sm text-neutral-400">
				{m.ecosystem_final_footer()}<br />
				{m.ecosystem_final_tagline()}
			</p>
		</Reveal>
	</div>
</Section>
