<script lang="ts">
	import ProductHero from '$lib/components/sections/ProductHero.svelte';
	import Section from '$lib/components/sections/Section.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { Button } from '$lib/components/ui/button';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Check from '@lucide/svelte/icons/check';
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';
	import { openChatwoot } from '$lib/utils/chatwoot';

	let specsIncluded = $derived([
		m.tablets_specs_included_tablet(),
		m.tablets_specs_included_cover(),
		m.tablets_specs_included_cable(),
		m.tablets_specs_included_adapter(),
		m.tablets_specs_included_guide()
	]);

	let bundleFeatures = $derived([
		m.tablets_pricing_bundle_feature1(),
		m.tablets_pricing_bundle_feature2(),
		m.tablets_pricing_bundle_feature3(),
		m.tablets_pricing_bundle_feature4()
	]);

	let networkRequirements = $derived([
		m.tablets_infrastructure_network_enrollment(),
		m.tablets_infrastructure_network_apps(),
		m.tablets_infrastructure_network_mdm()
	]);

	let teacherControls = $derived([
		m.tablets_teachers_control_1(),
		m.tablets_teachers_control_2(),
		m.tablets_teachers_control_3(),
		m.tablets_teachers_control_4(),
		m.tablets_teachers_control_5()
	]);

	let fleetFeatures = $derived([
		m.tablets_it_fleet_1(),
		m.tablets_it_fleet_2(),
		m.tablets_it_fleet_3(),
		m.tablets_it_fleet_4(),
		m.tablets_it_fleet_5()
	]);

	let warrantyFeatures = $derived([
		m.tablets_it_warranty_1(),
		m.tablets_it_warranty_2(),
		m.tablets_it_warranty_3()
	]);

	let byodSteps = $derived([
		m.tablets_byod_step1(),
		m.tablets_byod_step2(),
		m.tablets_byod_step3(),
		m.tablets_byod_step4(),
		m.tablets_byod_step5()
	]);

	let byodAdvantages = $derived([
		m.tablets_byod_advantage_1(),
		m.tablets_byod_advantage_2(),
		m.tablets_byod_advantage_3()
	]);
</script>

<svelte:head>
	<title>{m.tablets_page_title()}</title>
	<meta name="description" content={m.tablets_page_description()} />
	<meta name="keywords" content={m.tablets_page_keywords()} />

	<!-- Open Graph tags -->
	<meta property="og:title" content={m.tablets_og_title()} />
	<meta property="og:description" content={m.tablets_og_description()} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://edutab.eu/school-tablets-europe" />
	<meta property="og:image" content="/images/og/tablets.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://edutab.eu/school-tablets-europe" />
</svelte:head>

<!-- Hero Section -->
<ProductHero
	title={m.tablets_hero_title()}
	subtitle={m.tablets_hero_subtitle()}
	backgroundImage="/tablets.webp"
	backgroundAlt={m.aria_hero_tablets()}
	primaryCta={{ label: m.tablets_hero_cta_primary(), href: "https://portal.edutab.eu/register" }}
	secondaryCta={{ label: m.tablets_hero_cta_secondary(), href: localizeHref("/pricing") }}
	trialInfo={m.tablets_hero_trial_info()}
	blur={1}
	overlayIntensity="heavy"
/>

<!-- Introduction Section -->
<Reveal>
	<Section variant="default" padding="normal">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="font-display text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
				{m.tablets_intro_title()}
			</h2>
			<p class="mx-auto mt-6 text-lg leading-relaxed text-neutral-700">
				{m.tablets_intro_desc()}
			</p>
		</div>
	</Section>
</Reveal>

<!-- What Makes EduTab Tablets Different -->
<Reveal>
	<Section variant="accent" padding="normal">
		<div class="w-full">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.tablets_different_title()}
				</h2>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
				<!-- Pre-Installed and Ready -->
				<div class="bg-white rounded-2xl p-8 shadow-md border border-neutral-200">
					<h3 class="font-display font-semibold text-xl text-neutral-800 mb-4">
						{m.tablets_preinstalled_title()}
					</h3>
					<p class="text-neutral-600 mb-4">{m.tablets_preinstalled_desc()}</p>
					<ul class="space-y-3 text-neutral-600">
						<li class="flex items-start gap-3">
							<Check class="h-5 w-5 text-primary-green flex-shrink-0 mt-0.5" />
							<div>
								<span class="font-medium text-neutral-800">{m.tablets_preinstalled_mdm_title()}</span>
								<p class="text-sm text-neutral-500">{m.tablets_preinstalled_mdm_desc()}</p>
							</div>
						</li>
						<li class="flex items-start gap-3">
							<Check class="h-5 w-5 text-primary-green flex-shrink-0 mt-0.5" />
							<div>
								<span class="font-medium text-neutral-800">{m.tablets_preinstalled_marketplace_title()}</span>
								<p class="text-sm text-neutral-500">{m.tablets_preinstalled_marketplace_desc()}</p>
							</div>
						</li>
						<li class="flex items-start gap-3">
							<Check class="h-5 w-5 text-primary-green flex-shrink-0 mt-0.5" />
							<div>
								<span class="font-medium text-neutral-800">{m.tablets_preinstalled_android_title()}</span>
								<p class="text-sm text-neutral-500">{m.tablets_preinstalled_android_desc()}</p>
							</div>
						</li>
					</ul>
				</div>

				<!-- Under 5 Minutes to Ready -->
				<div class="bg-white rounded-2xl p-8 shadow-md border border-neutral-200">
					<h3 class="font-display font-semibold text-xl text-neutral-800 mb-4">
						{m.tablets_5min_title()}
					</h3>
					<p class="text-neutral-600 mb-4">{m.tablets_5min_desc()}</p>
					<ol class="space-y-3 text-neutral-600 mb-6">
						<li class="flex items-start gap-3">
							<span class="flex h-7 w-7 items-center justify-center rounded-full bg-primary-green/10 text-sm font-medium text-primary-green flex-shrink-0">1</span>
							<span>{m.tablets_5min_step1()}</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="flex h-7 w-7 items-center justify-center rounded-full bg-primary-green/10 text-sm font-medium text-primary-green flex-shrink-0">2</span>
							<span>{m.tablets_5min_step2()}</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="flex h-7 w-7 items-center justify-center rounded-full bg-primary-green/10 text-sm font-medium text-primary-green flex-shrink-0">3</span>
							<span>{m.tablets_5min_step3()}</span>
						</li>
					</ol>
					<div class="bg-primary-green/10 rounded-lg p-4">
						<p class="font-medium text-primary-green">
							{m.tablets_5min_total()}
						</p>
						<p class="text-sm text-neutral-600 mt-1">
							{m.tablets_5min_savings()}
						</p>
					</div>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- Specifications Section -->
<Reveal>
	<Section variant="default" padding="normal">
		<div class="w-full">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.tablets_specs_title()}
				</h2>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
				<!-- Hardware Specs -->
				<div class="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
					<div class="bg-primary-green/10 px-6 py-3 border-b border-neutral-200">
						<h3 class="font-display font-semibold text-lg text-neutral-800">{m.tablets_specs_hardware()}</h3>
					</div>
					<div class="p-6">
						<dl class="space-y-3 text-sm">
							<div class="flex justify-between">
								<dt class="text-neutral-600">{m.tablets_specs_display()}</dt>
								<dd class="text-neutral-900 font-medium">{m.tablets_specs_display_value()}</dd>
							</div>
							<div class="flex justify-between">
								<dt class="text-neutral-600">{m.tablets_specs_processor()}</dt>
								<dd class="text-neutral-900 font-medium">{m.tablets_specs_processor_value()}</dd>
							</div>
							<div class="flex justify-between">
								<dt class="text-neutral-600">{m.tablets_specs_memory()}</dt>
								<dd class="text-neutral-900 font-medium">{m.tablets_specs_memory_value()}</dd>
							</div>
							<div class="flex justify-between">
								<dt class="text-neutral-600">{m.tablets_specs_storage()}</dt>
								<dd class="text-neutral-900 font-medium">{m.tablets_specs_storage_value()}</dd>
							</div>
							<div class="flex justify-between">
								<dt class="text-neutral-600">{m.tablets_specs_battery()}</dt>
								<dd class="text-neutral-900 font-medium">{m.tablets_specs_battery_value()}</dd>
							</div>
							<div class="flex justify-between">
								<dt class="text-neutral-600">{m.tablets_specs_connectivity()}</dt>
								<dd class="text-neutral-900 font-medium">{m.tablets_specs_connectivity_value()}</dd>
							</div>
							<div class="flex justify-between">
								<dt class="text-neutral-600">{m.tablets_specs_camera()}</dt>
								<dd class="text-neutral-900 font-medium">{m.tablets_specs_camera_value()}</dd>
							</div>
							<div class="flex justify-between">
								<dt class="text-neutral-600">{m.tablets_specs_ports()}</dt>
								<dd class="text-neutral-900 font-medium">{m.tablets_specs_ports_value()}</dd>
							</div>
						</dl>
					</div>
				</div>

				<!-- Software Specs -->
				<div class="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
					<div class="bg-primary-coral/10 px-6 py-3 border-b border-neutral-200">
						<h3 class="font-display font-semibold text-lg text-neutral-800">{m.tablets_specs_software()}</h3>
					</div>
					<div class="p-6">
						<dl class="space-y-3 text-sm">
							<div class="flex justify-between">
								<dt class="text-neutral-600">{m.tablets_specs_os()}</dt>
								<dd class="text-neutral-900 font-medium">{m.tablets_specs_os_value()}</dd>
							</div>
							<div class="flex justify-between">
								<dt class="text-neutral-600">{m.tablets_specs_mdm()}</dt>
								<dd class="text-neutral-900 font-medium">{m.tablets_specs_mdm_value()}</dd>
							</div>
							<div class="flex justify-between">
								<dt class="text-neutral-600">{m.tablets_specs_appstore()}</dt>
								<dd class="text-neutral-900 font-medium text-right">{m.tablets_specs_appstore_value()}</dd>
							</div>
							<div class="flex justify-between">
								<dt class="text-neutral-600">{m.tablets_specs_updates()}</dt>
								<dd class="text-neutral-900 font-medium">{m.tablets_specs_updates_value()}</dd>
							</div>
						</dl>
					</div>
				</div>

				<!-- Included Items -->
				<div class="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
					<div class="bg-neutral-100 px-6 py-3 border-b border-neutral-200">
						<h3 class="font-display font-semibold text-lg text-neutral-800">{m.tablets_specs_included()}</h3>
					</div>
					<div class="p-6">
						<ul class="space-y-3 text-sm text-neutral-600">
							{#each specsIncluded as item}
								<li class="flex items-center gap-2">
									<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
									{item}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- Pricing Options -->
<Reveal>
	<Section variant="accent" padding="normal">
		<div class="w-full">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.tablets_pricing_title()}
				</h2>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
				<!-- Individual Tablets -->
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-2">
						{m.tablets_pricing_individual_title()}
					</h3>
					<p class="text-3xl font-bold text-neutral-900 mb-2">{m.tablets_pricing_individual_price()}</p>
					<p class="text-sm text-neutral-500 mb-4">{m.tablets_pricing_individual_desc()}</p>
					<p class="text-sm text-neutral-600 bg-neutral-50 rounded-lg p-3">
						<strong>{m.tablets_pricing_individual_ideal()}</strong> {m.tablets_pricing_individual_ideal_desc()}
					</p>
				</div>

				<!-- Classroom Bundle -->
				<div class="bg-white rounded-xl p-6 shadow-sm border-2 border-primary-green">
					<div class="flex items-center gap-2 mb-2">
						<h3 class="font-display font-semibold text-lg text-neutral-800">
							{m.tablets_pricing_bundle_title()}
						</h3>
						<span class="text-xs bg-primary-green text-white px-2 py-0.5 rounded-full">{m.tablets_pricing_best_value()}</span>
					</div>
					<p class="text-3xl font-bold text-neutral-900 mb-2">{m.tablets_pricing_bundle_price()}</p>
					<p class="text-sm text-neutral-500 mb-4">{m.tablets_pricing_bundle_desc()}</p>
					<ul class="space-y-2 text-sm text-neutral-600 mb-4">
						{#each bundleFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
					<p class="text-sm text-neutral-600 bg-neutral-50 rounded-lg p-3">
						<strong>{m.tablets_pricing_bundle_ideal()}</strong> {m.tablets_pricing_bundle_ideal_desc()}
					</p>
				</div>

				<!-- Volume Pricing -->
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-2">
						{m.tablets_pricing_volume_title()}
					</h3>
					<p class="text-xl font-bold text-neutral-900 mb-2">{m.tablets_pricing_volume_price()}</p>
					<p class="text-sm text-neutral-500 mb-4">{m.tablets_pricing_volume_desc()}</p>
					<Button onclick={openChatwoot} variant="default" size="fluid" class="w-full">
						{m.tablets_pricing_volume_btn()}
						<ExternalLink class="ml-2 h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- Works With Your Existing Infrastructure -->
<Reveal>
	<Section variant="default" padding="normal">
		<div class="w-full max-w-3xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.tablets_infrastructure_title()}
				</h2>
			</div>

			<div class="space-y-6">
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.tablets_infrastructure_wifi_title()}
					</h3>
					<p class="text-neutral-600">
						{m.tablets_infrastructure_wifi_desc()}
					</p>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.tablets_infrastructure_mdm_title()}
					</h3>
					<p class="text-neutral-600">
						{m.tablets_infrastructure_mdm_desc()}
					</p>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.tablets_infrastructure_network_title()}
					</h3>
					<p class="text-neutral-600 mb-3">{m.tablets_infrastructure_network_desc()}</p>
					<ul class="space-y-2 text-neutral-600">
						{#each networkRequirements as req}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{req}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- For Teachers Section -->
<Reveal>
	<Section variant="accent" padding="normal">
		<div class="w-full">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.tablets_teachers_title()}
				</h2>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
				<!-- Designed for Classroom Use -->
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-4">
						{m.tablets_teachers_classroom_title()}
					</h3>
					<ul class="space-y-3 text-neutral-600">
						<li class="flex items-start gap-2">
							<Check class="h-4 w-4 text-primary-green flex-shrink-0 mt-1" />
							<div>
								<span class="font-medium text-neutral-800">{m.tablets_teachers_durability_title()}</span>
								<p class="text-sm">{m.tablets_teachers_durability_desc()}</p>
							</div>
						</li>
						<li class="flex items-start gap-2">
							<Check class="h-4 w-4 text-primary-green flex-shrink-0 mt-1" />
							<div>
								<span class="font-medium text-neutral-800">{m.tablets_teachers_battery_title()}</span>
								<p class="text-sm">{m.tablets_teachers_battery_desc()}</p>
							</div>
						</li>
						<li class="flex items-start gap-2">
							<Check class="h-4 w-4 text-primary-green flex-shrink-0 mt-1" />
							<div>
								<span class="font-medium text-neutral-800">{m.tablets_teachers_boot_title()}</span>
								<p class="text-sm">{m.tablets_teachers_boot_desc()}</p>
							</div>
						</li>
						<li class="flex items-start gap-2">
							<Check class="h-4 w-4 text-primary-green flex-shrink-0 mt-1" />
							<div>
								<span class="font-medium text-neutral-800">{m.tablets_teachers_consistent_title()}</span>
								<p class="text-sm">{m.tablets_teachers_consistent_desc()}</p>
							</div>
						</li>
					</ul>
				</div>

				<!-- Classroom Control -->
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-4">
						{m.tablets_teachers_control_title()}
					</h3>
					<p class="text-neutral-600 mb-4">{m.tablets_teachers_control_desc()}</p>
					<ul class="space-y-2 text-neutral-600">
						{#each teacherControls as control}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{control}
							</li>
						{/each}
					</ul>
					<div class="flex justify-center mt-4">
						<Button href={localizeHref("/portal")} variant="ghost" size="sm" class="text-primary-coral hover:text-primary-coralDark">
							{m.tablets_teachers_portal_link()}
							<ArrowRight class="ml-1 h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- For IT Administrators Section -->
<Reveal>
	<Section variant="default" padding="normal">
		<div class="w-full max-w-4xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.tablets_it_title()}
				</h2>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<!-- Zero-Touch Deployment -->
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-4">
						{m.tablets_it_zero_touch_title()}
					</h3>
					<ol class="space-y-2 text-sm text-neutral-600">
						<li class="flex items-start gap-2">
							<span class="flex h-5 w-5 items-center justify-center rounded-full bg-primary-green/10 text-xs font-medium text-primary-green flex-shrink-0">1</span>
							{m.tablets_it_zero_touch_step1()}
						</li>
						<li class="flex items-start gap-2">
							<span class="flex h-5 w-5 items-center justify-center rounded-full bg-primary-green/10 text-xs font-medium text-primary-green flex-shrink-0">2</span>
							{m.tablets_it_zero_touch_step2()}
						</li>
						<li class="flex items-start gap-2">
							<span class="flex h-5 w-5 items-center justify-center rounded-full bg-primary-green/10 text-xs font-medium text-primary-green flex-shrink-0">3</span>
							{m.tablets_it_zero_touch_step3()}
						</li>
						<li class="flex items-start gap-2">
							<span class="flex h-5 w-5 items-center justify-center rounded-full bg-primary-green text-xs font-medium text-white flex-shrink-0">4</span>
							{m.tablets_it_zero_touch_step4()}
						</li>
					</ol>
					<p class="text-xs text-neutral-500 mt-4">
						{m.tablets_it_zero_touch_note()}
					</p>
				</div>

				<!-- Fleet Management -->
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-4">
						{m.tablets_it_fleet_title()}
					</h3>
					<p class="text-sm text-neutral-600 mb-3">
						{m.tablets_it_fleet_desc()}
					</p>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each fleetFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				<!-- Warranty and Support -->
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-4">
						{m.tablets_it_warranty_title()}
					</h3>
					<ul class="space-y-3 text-neutral-600">
						{#each warrantyFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- BYOD Option Section -->
<Reveal>
	<Section variant="accent" padding="normal">
		<div class="w-full max-w-3xl mx-auto">
			<div class="text-center mb-8">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.tablets_byod_title()}
				</h2>
				<p class="text-lg text-neutral-600">
					{m.tablets_byod_subtitle()}
				</p>
			</div>

			<div class="bg-white rounded-xl p-8 shadow-sm border border-neutral-200">
				<p class="text-neutral-600 mb-6">
					{m.tablets_byod_desc()}
				</p>

				<ol class="space-y-3 text-neutral-600 mb-6">
					{#each byodSteps as step, i}
						<li class="flex items-start gap-3">
							<span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary-green/10 text-sm font-medium text-primary-green flex-shrink-0">{i + 1}</span>
							<span>{step}</span>
						</li>
					{/each}
				</ol>

				<div class="bg-neutral-50 rounded-lg p-4 mb-6">
					<p class="font-medium text-neutral-800 mb-2">{m.tablets_byod_advantages_title()}</p>
					<ul class="space-y-1 text-sm text-neutral-600">
						{#each byodAdvantages as advantage}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{advantage}
							</li>
						{/each}
					</ul>
				</div>

				<p class="text-neutral-600 font-medium">
					{m.tablets_byod_note()}
				</p>
			</div>
		</div>
	</Section>
</Reveal>

<!-- The Complete Ecosystem -->
<Reveal>
	<Section variant="default" padding="normal">
		<div class="w-full max-w-4xl mx-auto">
			<div class="text-center mb-8">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.tablets_ecosystem_title()}
				</h2>
				<p class="text-lg text-neutral-600">
					{m.tablets_ecosystem_subtitle()}
				</p>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
				<div class="bg-primary-green/10 rounded-xl p-6 border border-primary-green/20">
					<div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto bg-gradient-to-br from-primary-green/20 to-primary-green/10">
						<svg class="w-5 h-5 text-primary-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
							<line x1="12" x2="12.01" y1="18" y2="18"></line>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-2 text-center">
						{m.tablets_ecosystem_tablets_title()}
					</h3>
					<p class="text-sm text-primary-green font-medium mb-4 text-center">{m.tablets_ecosystem_tablets_current()}</p>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
					<div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto bg-gradient-to-br from-brand-50 to-brand-100">
						<svg class="w-5 h-5 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect width="20" height="14" x="2" y="3" rx="2"></rect>
							<line x1="8" x2="16" y1="21" y2="21"></line>
							<line x1="12" x2="12" y1="17" y2="21"></line>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-2 text-center">
						{m.tablets_ecosystem_portal_title()}
					</h3>
					<p class="text-sm text-neutral-600 mb-4 text-center">{m.tablets_ecosystem_portal_desc()}</p>
					<div class="flex justify-center">
						<Button href={localizeHref("/portal")} variant="ghost" size="sm" class="text-primary-coral hover:text-primary-coralDark">
							{m.tablets_ecosystem_learn_more()}
							<ArrowRight class="ml-1 h-4 w-4" />
						</Button>
					</div>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
					<div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto bg-gradient-to-br from-primary-coral/20 to-primary-coral/10">
						<svg class="w-5 h-5 text-primary-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect x="4" y="4" width="6" height="6" rx="1"></rect>
							<rect x="14" y="4" width="6" height="6" rx="1"></rect>
							<rect x="4" y="14" width="6" height="6" rx="1"></rect>
							<rect x="14" y="14" width="6" height="6" rx="1"></rect>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-2 text-center">
						{m.tablets_ecosystem_marketplace_title()}
					</h3>
					<p class="text-sm text-neutral-600 mb-4 text-center">{m.tablets_ecosystem_marketplace_desc()}</p>
					<div class="flex justify-center">
						<Button href={localizeHref("/app-marketplace")} variant="ghost" size="sm" class="text-primary-coral hover:text-primary-coralDark">
							{m.tablets_ecosystem_learn_more()}
							<ArrowRight class="ml-1 h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>

			<div class="text-center mt-8">
				<Button href={localizeHref("/ecosystem")} variant="default" size="fluid">
					{m.tablets_ecosystem_cta()}
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
			</div>
		</div>
	</Section>
</Reveal>

<!-- Final CTA Section -->
<Reveal>
	<Section variant="dark" padding="spacious">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
				{m.tablets_final_title()}
			</h2>
			<p class="mx-auto mt-6 text-lg leading-relaxed text-neutral-300">
				{m.tablets_final_subtitle()}
			</p>

			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
				<Button
					href="https://portal.edutab.eu/register"
					variant="default"
					size="fluid"
					class="group w-full sm:w-auto bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white"
				>
					{m.tablets_final_cta_primary()}
					<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
				</Button>

				<Button
					onclick={openChatwoot}
					variant="outline"
					size="fluid"
					class="group w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-neutral-900 bg-transparent"
				>
					{m.tablets_final_cta_secondary()}
				</Button>
			</div>

			<div class="mt-8 pt-8 border-t border-white/10">
				<p class="text-sm text-neutral-400">
					{m.tablets_final_existing()} <Button href={localizeHref("/portal")} variant="link" class="text-primary-coral p-0 h-auto">{m.tablets_final_existing_link()}</Button> {m.tablets_final_existing_suffix()}
				</p>
			</div>

			<p class="mt-6 text-sm text-neutral-400">
				{m.tablets_final_footer()}
			</p>
		</div>
	</Section>
</Reveal>
