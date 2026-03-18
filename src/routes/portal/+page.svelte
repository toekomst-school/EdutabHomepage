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

	let itOverviewFeatures = $derived([
		m.portal_it_overview_1(),
		m.portal_it_overview_2(),
		m.portal_it_overview_3()
	]);

	let itRemoteFeatures = $derived([
		m.portal_it_remote_1(),
		m.portal_it_remote_2()
	]);

	let itEnrollmentFeatures = $derived([
		m.portal_it_enrollment_1(),
		m.portal_it_enrollment_2()
	]);

	let dashboardFeatures = $derived([
		m.portal_features_dashboard_1(),
		m.portal_features_dashboard_2(),
		m.portal_features_dashboard_3(),
		m.portal_features_dashboard_4()
	]);

	let remoteFeatures = $derived([
		m.portal_features_remote_1(),
		m.portal_features_remote_2(),
		m.portal_features_remote_3(),
		m.portal_features_remote_4()
	]);

	let appsFeatures = $derived([
		m.portal_features_apps_1(),
		m.portal_features_apps_2(),
		m.portal_features_apps_3(),
		m.portal_features_apps_4()
	]);

	let configFeatures = $derived([
		m.portal_features_config_1(),
		m.portal_features_config_2(),
		m.portal_features_config_3(),
		m.portal_features_config_4()
	]);

	let groupsFeatures = $derived([
		m.portal_features_groups_1(),
		m.portal_features_groups_2(),
		m.portal_features_groups_3(),
		m.portal_features_groups_4()
	]);

	let securityFeatures = $derived([
		m.portal_features_security_1(),
		m.portal_features_security_2(),
		m.portal_features_security_3(),
		m.portal_features_security_4()
	]);

	let cloudFeatures = $derived([
		m.portal_cloud_feature_1(),
		m.portal_cloud_feature_2(),
		m.portal_cloud_feature_3(),
		m.portal_cloud_feature_4()
	]);

	let selfhostGetFeatures = $derived([
		m.portal_selfhost_get_1(),
		m.portal_selfhost_get_2(),
		m.portal_selfhost_get_3(),
		m.portal_selfhost_get_4()
	]);

	let selfhostProvideFeatures = $derived([
		m.portal_selfhost_provide_1(),
		m.portal_selfhost_provide_2(),
		m.portal_selfhost_provide_3()
	]);

	let opensourceMeans = $derived([
		m.portal_opensource_means_1(),
		m.portal_opensource_means_2(),
		m.portal_opensource_means_3(),
		m.portal_opensource_means_4()
	]);

	let opensourceContrib = $derived([
		m.portal_opensource_contrib_1(),
		m.portal_opensource_contrib_2(),
		m.portal_opensource_contrib_3(),
		m.portal_opensource_contrib_4()
	]);

	let ssoFeatures = $derived([
		m.portal_integration_sso_1(),
		m.portal_integration_sso_2(),
		m.portal_integration_sso_3(),
		m.portal_integration_sso_4()
	]);

	let apiFeatures = $derived([
		m.portal_integration_api_1(),
		m.portal_integration_api_2(),
		m.portal_integration_api_3(),
		m.portal_integration_api_4()
	]);
</script>

<svelte:head>
	<title>{m.portal_page_title()}</title>
	<meta name="description" content={m.portal_page_description()} />
	<meta name="keywords" content={m.portal_page_keywords()} />

	<!-- Open Graph tags -->
	<meta property="og:title" content={m.portal_og_title()} />
	<meta property="og:description" content={m.portal_og_description()} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://edutab.eu/school-mdm-device-management" />
	<meta property="og:image" content="https://edutab.eu/images/og/portal.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://edutab.eu/school-mdm-device-management" />
</svelte:head>

<!-- Hero section -->
<ProductHero
	title={m.portal_hero_title()}
	subtitle={m.portal_hero_subtitle()}
	backgroundImage="/portal.webp"
	backgroundAlt={m.aria_hero_portal()}
	primaryCta={{ label: m.portal_hero_cta_primary(), href: "https://portal.edutab.eu/register" }}
	secondaryCta={{ label: m.portal_hero_cta_secondary(), href: localizeHref("/pricing") }}
	trialInfo={m.portal_hero_trial_info()}
	blur={1}
	overlayIntensity="dark"
/>

<!-- Introduction Section -->
<Reveal>
	<Section variant="default">
		<div class="max-w-4xl mx-auto">
			<h2 class="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
				{m.portal_intro_title()}
			</h2>
			<p class="text-lg text-neutral-700 leading-relaxed mb-4">
				{m.portal_intro_desc()}
			</p>
		</div>
	</Section>
</Reveal>

<!-- Two Kinds of Control Section -->
<Reveal>
	<Section variant="accent" padding="normal">
		<div class="w-full">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.portal_control_title()}
				</h2>
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
					{m.portal_control_subtitle()}
				</p>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<!-- For IT Administrators -->
				<div class="bg-white rounded-2xl p-8 shadow-md border border-neutral-200">
					<div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto bg-gradient-to-br from-primary-green/20 to-primary-green/10">
						<svg class="w-6 h-6 text-primary-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect width="20" height="14" x="2" y="3" rx="2"></rect>
							<line x1="8" x2="16" y1="21" y2="21"></line>
							<line x1="12" x2="12" y1="17" y2="21"></line>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-xl text-neutral-800 mb-4">
						{m.portal_it_title()}
					</h3>
					<p class="text-sm text-neutral-500 mb-4">{m.portal_it_note()}</p>

					<div class="space-y-4">
						<div>
							<h4 class="font-medium text-neutral-800 mb-2">{m.portal_it_overview_title()}</h4>
							<ul class="space-y-1 text-sm text-neutral-600">
								{#each itOverviewFeatures as feature}
									<li class="flex items-center gap-2">
										<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
										{feature}
									</li>
								{/each}
							</ul>
						</div>

						<div>
							<h4 class="font-medium text-neutral-800 mb-2">{m.portal_it_remote_title()}</h4>
							<ul class="space-y-1 text-sm text-neutral-600">
								{#each itRemoteFeatures as feature}
									<li class="flex items-center gap-2">
										<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
										{feature}
									</li>
								{/each}
							</ul>
						</div>

						<div>
							<h4 class="font-medium text-neutral-800 mb-2">{m.portal_it_enrollment_title()}</h4>
							<ul class="space-y-1 text-sm text-neutral-600">
								{#each itEnrollmentFeatures as feature}
									<li class="flex items-center gap-2">
										<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
										{feature}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>

				<!-- For Teachers -->
				<div class="bg-white rounded-2xl p-8 shadow-md border border-neutral-200">
					<div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto bg-gradient-to-br from-primary-coral/20 to-primary-coral/10">
						<svg class="w-6 h-6 text-primary-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
							<circle cx="9" cy="7" r="4"></circle>
							<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-xl text-neutral-800 mb-4">
						{m.portal_teachers_title()}
					</h3>
					<p class="text-sm text-neutral-500 mb-4">{m.portal_teachers_note()}</p>

					<div class="space-y-4">
						<div>
							<h4 class="font-medium text-neutral-800 mb-2">{m.portal_teachers_app_title()}</h4>
							<p class="text-sm text-neutral-600">
								{m.portal_teachers_app_desc()}
							</p>
						</div>

						<div>
							<h4 class="font-medium text-neutral-800 mb-2">{m.portal_teachers_lock_title()}</h4>
							<p class="text-sm text-neutral-600">
								{m.portal_teachers_lock_desc()}
							</p>
						</div>

						<div>
							<h4 class="font-medium text-neutral-800 mb-2">{m.portal_teachers_kiosk_title()}</h4>
							<p class="text-sm text-neutral-600">
								{m.portal_teachers_kiosk_desc()}
							</p>
						</div>

						<div>
							<h4 class="font-medium text-neutral-800 mb-2">{m.portal_teachers_no_it_title()}</h4>
							<p class="text-sm text-neutral-600">
								{m.portal_teachers_no_it_desc()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- Feature Deep Dive Section -->
<Reveal>
	<Section variant="default" padding="normal">
		<div class="w-full">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.portal_features_title()}
				</h2>
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
					{m.portal_features_subtitle()}
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<!-- Device Dashboard -->
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.portal_features_dashboard_title()}
					</h3>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each dashboardFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				<!-- Remote Control -->
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.portal_features_remote_title()}
					</h3>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each remoteFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				<!-- App Management -->
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.portal_features_apps_title()}
					</h3>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each appsFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				<!-- Configuration Profiles -->
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.portal_features_config_title()}
					</h3>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each configFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				<!-- Groups and Targeting -->
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.portal_features_groups_title()}
					</h3>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each groupsFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				<!-- Security Dashboard -->
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.portal_features_security_title()}
					</h3>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each securityFeatures as feature}
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

<!-- GDPR Compliance Section -->
<Reveal>
	<Section variant="accent" padding="normal">
		<div class="w-full max-w-4xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.portal_gdpr_title()}
				</h2>
				<p class="text-lg text-neutral-600">
					{m.portal_gdpr_subtitle()}
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-sm">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.portal_gdpr_eu_title()}
					</h3>
					<p class="text-neutral-600">
						{m.portal_gdpr_eu_desc()}
					</p>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-sm">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.portal_gdpr_minimization_title()}
					</h3>
					<p class="text-neutral-600">
						{m.portal_gdpr_minimization_desc()}
					</p>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-sm">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.portal_gdpr_transparent_title()}
					</h3>
					<p class="text-neutral-600">
						{m.portal_gdpr_transparent_desc()}
					</p>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-sm">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.portal_gdpr_dpa_title()}
					</h3>
					<p class="text-neutral-600">
						{m.portal_gdpr_dpa_desc()}
					</p>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- Deployment Options with Pricing Table -->
<Reveal>
	<Section variant="default" padding="normal">
		<div class="w-full">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.portal_deployment_title()}
				</h2>
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
					{m.portal_deployment_subtitle()}
				</p>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
				<!-- Cloud-Hosted -->
				<div class="bg-white rounded-2xl p-8 shadow-md border border-neutral-200">
					<div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto bg-gradient-to-br from-primary-green/20 to-primary-green/10">
						<svg class="w-6 h-6 text-primary-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect width="20" height="14" x="2" y="3" rx="2"></rect>
							<line x1="8" x2="16" y1="21" y2="21"></line>
							<line x1="12" x2="12" y1="17" y2="21"></line>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-xl text-neutral-800 mb-2">
						{m.portal_cloud_title()}
					</h3>
					<p class="text-sm text-neutral-500 mb-6">{m.portal_cloud_desc()}</p>

					<div class="mb-6">
						<h4 class="font-medium text-neutral-800 mb-3">{m.portal_cloud_pricing()}</h4>
						<table class="w-full text-sm">
							<thead>
								<tr class="border-b border-neutral-200">
									<th class="text-left py-2 text-neutral-600">{m.portal_cloud_devices()}</th>
									<th class="text-right py-2 text-neutral-600">{m.portal_cloud_monthly()}</th>
								</tr>
							</thead>
							<tbody>
								<tr class="border-b border-neutral-100">
									<td class="py-2 text-neutral-700">1-49</td>
									<td class="py-2 text-right font-semibold text-neutral-900">&euro;2.00</td>
								</tr>
								<tr class="border-b border-neutral-100">
									<td class="py-2 text-neutral-700">50-199</td>
									<td class="py-2 text-right font-semibold text-neutral-900">&euro;1.75</td>
								</tr>
								<tr class="border-b border-neutral-100">
									<td class="py-2 text-neutral-700">200-499</td>
									<td class="py-2 text-right font-semibold text-neutral-900">&euro;1.50</td>
								</tr>
								<tr>
									<td class="py-2 text-neutral-700">500+</td>
									<td class="py-2 text-right font-semibold text-neutral-900">&euro;1.25</td>
								</tr>
							</tbody>
						</table>
						<p class="text-xs text-neutral-500 mt-2">{m.portal_cloud_annual_note()}</p>
					</div>

					<ul class="space-y-2 text-sm text-neutral-600 mb-6">
						{#each cloudFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>

					<Button href={localizeHref("/pricing")} variant="default" size="fluid">
						{m.portal_cloud_cta()}
						<ExternalLink class="ml-1 h-4 w-4" />
					</Button>
				</div>

				<!-- Self-Hosted -->
				<div class="bg-primary-green/10 rounded-2xl p-8 border-2 border-primary-green/30">
					<h3 class="font-display font-semibold text-xl text-neutral-800 mb-2">
						{m.portal_selfhost_title()}
					</h3>
					<p class="text-sm text-primary-green font-medium mb-6">{m.portal_selfhost_free()}</p>

					<div class="mb-6">
						<h4 class="font-medium text-neutral-800 mb-3">{m.portal_selfhost_get_title()}</h4>
						<ul class="space-y-2 text-sm text-neutral-600">
							{#each selfhostGetFeatures as feature}
								<li class="flex items-center gap-2">
									<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
									{feature}
								</li>
							{/each}
						</ul>
					</div>

					<div class="mb-6">
						<h4 class="font-medium text-neutral-800 mb-3">{m.portal_selfhost_provide_title()}</h4>
						<ul class="space-y-2 text-sm text-neutral-600">
							{#each selfhostProvideFeatures as feature}
								<li class="flex items-center gap-2">
									<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
									{feature}
								</li>
							{/each}
						</ul>
					</div>

					<Button href="https://github.com/edutab" variant="default" size="fluid">
						{m.portal_selfhost_cta()}
						<ExternalLink class="ml-1 h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- Open Source Section -->
<Reveal>
	<Section variant="accent" padding="normal">
		<div class="w-full max-w-4xl mx-auto">
			<div class="text-center mb-8">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.portal_opensource_title()}
				</h2>
				<p class="text-lg text-neutral-600">
					{m.portal_opensource_desc()}
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-sm">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.portal_opensource_means_title()}
					</h3>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each opensourceMeans as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-sm">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.portal_opensource_contrib_title()}
					</h3>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each opensourceContrib as feature}
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

<!-- Integration Section -->
<Reveal>
	<Section variant="default" padding="normal">
		<div class="w-full max-w-4xl mx-auto">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.portal_integration_title()}
				</h2>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.portal_integration_sso_title()}
					</h3>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each ssoFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.portal_integration_api_title()}
					</h3>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each apiFeatures as feature}
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

<!-- The Complete Ecosystem -->
<Reveal>
	<Section variant="default" padding="normal">
		<div class="w-full max-w-4xl mx-auto">
			<div class="text-center mb-8">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.portal_ecosystem_title()}
				</h2>
				<p class="text-lg text-neutral-600">
					{m.portal_ecosystem_subtitle()}
				</p>
			</div>

			<div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
					<div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto bg-gradient-to-br from-brand-50 to-brand-100">
						<svg class="w-5 h-5 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
							<line x1="12" x2="12.01" y1="18" y2="18"></line>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-2 text-center">
						{m.portal_ecosystem_tablets_title()}
					</h3>
					<p class="text-sm text-neutral-600 mb-4 text-center">{m.portal_ecosystem_tablets_desc()}</p>
					<div class="flex justify-center">
						<Button href={localizeHref("/tablets")} variant="ghost" size="sm" class="text-primary-coral hover:text-primary-coralDark">
							{m.portal_ecosystem_learn_more()}
							<ArrowRight class="ml-1 h-4 w-4" />
						</Button>
					</div>
				</div>

				<div class="bg-primary-green/10 rounded-xl p-6 border border-primary-green/20">
					<div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto bg-gradient-to-br from-primary-green/20 to-primary-green/10">
						<svg class="w-5 h-5 text-primary-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect width="20" height="14" x="2" y="3" rx="2"></rect>
							<line x1="8" x2="16" y1="21" y2="21"></line>
							<line x1="12" x2="12" y1="17" y2="21"></line>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-2 text-center">
						{m.portal_ecosystem_portal_title()}
					</h3>
					<p class="text-sm text-primary-green font-medium mb-4 text-center">{m.portal_ecosystem_portal_current()}</p>
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
						{m.portal_ecosystem_marketplace_title()}
					</h3>
					<p class="text-sm text-neutral-600 mb-4 text-center">{m.portal_ecosystem_marketplace_desc()}</p>
					<div class="flex justify-center">
						<Button href={localizeHref("/app-marketplace")} variant="ghost" size="sm" class="text-primary-coral hover:text-primary-coralDark">
							{m.portal_ecosystem_learn_more()}
							<ArrowRight class="ml-1 h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>

			<div class="text-center mt-8">
				<Button href={localizeHref("/ecosystem")} variant="default" size="fluid">
					{m.portal_ecosystem_cta()}
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
				{m.portal_final_title()}
			</h2>
			<p class="mx-auto mt-6 text-lg leading-relaxed text-neutral-300">
				{m.portal_final_subtitle()}
			</p>

			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
				<Button
					href="https://portal.edutab.eu/register"
					variant="default"
					size="fluid"
					class="group w-full sm:w-auto bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white"
				>
					{m.portal_final_cta_primary()}
					<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
				</Button>

				<Button
					href={localizeHref("/contact")}
					variant="outline"
					size="fluid"
					class="group w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-neutral-900 bg-transparent"
				>
					{m.portal_final_cta_secondary()}
				</Button>
			</div>

			<div class="mt-8 text-sm text-neutral-400">
				<p>{m.portal_final_footer()}</p>
				<p class="mt-1">{m.portal_final_opensource()}</p>
			</div>
		</div>
	</Section>
</Reveal>
