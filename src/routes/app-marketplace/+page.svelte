<script lang="ts">
	import ProductHero from '$lib/components/sections/ProductHero.svelte';
	import Section from '$lib/components/sections/Section.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { Button } from '$lib/components/ui/button';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Check from '@lucide/svelte/icons/check';
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import X from '@lucide/svelte/icons/x';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';

	let privacyIssues = $derived([
		m.marketplace_privacy_1(),
		m.marketplace_privacy_2(),
		m.marketplace_privacy_3(),
		m.marketplace_privacy_4()
	]);

	let contentIssues = $derived([
		m.marketplace_content_1(),
		m.marketplace_content_2(),
		m.marketplace_content_3(),
		m.marketplace_content_4()
	]);

	let accountIssues = $derived([
		m.marketplace_account_1(),
		m.marketplace_account_2(),
		m.marketplace_account_3()
	]);

	let controlIssues = $derived([
		m.marketplace_control_1(),
		m.marketplace_control_2(),
		m.marketplace_control_3()
	]);

	let studentsSteps = $derived([
		m.marketplace_students_step1(),
		m.marketplace_students_step2(),
		m.marketplace_students_step3(),
		m.marketplace_students_step4()
	]);

	let itControlFeatures = $derived([
		m.marketplace_it_control_1(),
		m.marketplace_it_control_2(),
		m.marketplace_it_control_3()
	]);

	let itDeployFeatures = $derived([
		m.marketplace_it_deploy_1(),
		m.marketplace_it_deploy_2(),
		m.marketplace_it_deploy_3()
	]);

	let itVersionFeatures = $derived([
		m.marketplace_it_version_1(),
		m.marketplace_it_version_2()
	]);

	let teachersControlFeatures = $derived([
		m.marketplace_teachers_control_1(),
		m.marketplace_teachers_control_2(),
		m.marketplace_teachers_control_3()
	]);

	let teachersContentFeatures = $derived([
		m.marketplace_teachers_content_1(),
		m.marketplace_teachers_content_2(),
		m.marketplace_teachers_content_3()
	]);

	let fdroidProvides = $derived([
		m.marketplace_fdroid_provides_1(),
		m.marketplace_fdroid_provides_2(),
		m.marketplace_fdroid_provides_3(),
		m.marketplace_fdroid_provides_4()
	]);

	let edutabAdds = $derived([
		m.marketplace_edutab_adds_1(),
		m.marketplace_edutab_adds_2(),
		m.marketplace_edutab_adds_3(),
		m.marketplace_edutab_adds_4()
	]);

	let privateUseCases = $derived([
		m.marketplace_private_case_1(),
		m.marketplace_private_case_2(),
		m.marketplace_private_case_3(),
		m.marketplace_private_case_4(),
		m.marketplace_private_case_5()
	]);

	let privateSteps = $derived([
		m.marketplace_private_step1(),
		m.marketplace_private_step2(),
		m.marketplace_private_step3(),
		m.marketplace_private_step4()
	]);

	let autoScanFeatures = $derived([
		m.marketplace_scanning_auto_1(),
		m.marketplace_scanning_auto_2(),
		m.marketplace_scanning_auto_3()
	]);

	let manualScanFeatures = $derived([
		m.marketplace_scanning_manual_1(),
		m.marketplace_scanning_manual_2()
	]);

	let ongoingScanFeatures = $derived([
		m.marketplace_scanning_ongoing_1(),
		m.marketplace_scanning_ongoing_2()
	]);

	let noTrackingFeatures = $derived([
		m.marketplace_notracking_1(),
		m.marketplace_notracking_2(),
		m.marketplace_notracking_3(),
		m.marketplace_notracking_4()
	]);

	let euDataFeatures = $derived([
		m.marketplace_eu_1(),
		m.marketplace_eu_2(),
		m.marketplace_eu_3(),
		m.marketplace_eu_4()
	]);

	let freeFeatures = $derived([
		m.marketplace_free_1(),
		m.marketplace_free_2(),
		m.marketplace_free_3(),
		m.marketplace_free_4(),
		m.marketplace_free_5(),
		m.marketplace_free_6()
	]);

	let androidSteps = $derived([
		m.marketplace_on_android_step1(),
		m.marketplace_on_android_step2(),
		m.marketplace_on_android_step3(),
		m.marketplace_on_android_step4()
	]);
</script>

<svelte:head>
	<title>{m.marketplace_page_title()}</title>
	<meta name="description" content={m.marketplace_page_description()} />
	<meta name="keywords" content={m.marketplace_page_keywords()} />

	<!-- Open Graph tags -->
	<meta property="og:title" content={m.marketplace_og_title()} />
	<meta property="og:description" content={m.marketplace_og_description()} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://edutab.eu/app-store-education" />
	<meta property="og:image" content="https://edutab.eu/images/og/app-store.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://edutab.eu/app-store-education" />
</svelte:head>

<!-- Hero section -->
<ProductHero
	title={m.marketplace_hero_title()}
	subtitle={m.marketplace_hero_subtitle()}
	backgroundImage="/AppMarketplace.webp"
	backgroundAlt={m.aria_hero_marketplace()}
	primaryCta={{ label: m.marketplace_hero_cta_primary(), href: "#browse" }}
	secondaryCta={{ label: m.marketplace_hero_cta_secondary(), href: "#signup" }}
	trialInfo={m.marketplace_hero_trial_info()}
	blur={1}
	overlayIntensity="heavy"
/>

<!-- Introduction Section -->
<Reveal>
	<Section variant="default">
		<div class="max-w-4xl mx-auto">
			<h2 class="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
				{m.marketplace_intro_title()}
			</h2>
			<p class="text-lg text-neutral-700 leading-relaxed mb-4">
				{m.marketplace_intro_desc1()}
			</p>
			<p class="text-lg text-neutral-700 leading-relaxed">
				{m.marketplace_intro_desc2()}
			</p>
		</div>
	</Section>
</Reveal>

<!-- Why Schools Need a Different Marketplace Section -->
<Reveal>
	<Section variant="accent" padding="normal">
		<div class="w-full">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.marketplace_why_title()}
				</h2>
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
					{m.marketplace_why_subtitle()}
				</p>
			</div>

			<!-- The Traditional Software Problem -->
			<div class="max-w-4xl mx-auto mb-12">
				<h3 class="font-display font-semibold text-xl text-neutral-800 mb-6 text-center">
					{m.marketplace_problem_title()}
				</h3>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="bg-white rounded-xl p-6 shadow-sm border border-red-100">
						<h4 class="font-medium text-neutral-800 mb-3 flex items-center gap-2">
							<X class="h-5 w-5 text-red-500 flex-shrink-0" />
							{m.marketplace_privacy_title()}
						</h4>
						<ul class="space-y-2 text-sm text-neutral-600">
							{#each privacyIssues as issue}
								<li>{issue}</li>
							{/each}
						</ul>
					</div>

					<div class="bg-white rounded-xl p-6 shadow-sm border border-red-100">
						<h4 class="font-medium text-neutral-800 mb-3 flex items-center gap-2">
							<X class="h-5 w-5 text-red-500 flex-shrink-0" />
							{m.marketplace_content_title()}
						</h4>
						<ul class="space-y-2 text-sm text-neutral-600">
							{#each contentIssues as issue}
								<li>{issue}</li>
							{/each}
						</ul>
					</div>

					<div class="bg-white rounded-xl p-6 shadow-sm border border-red-100">
						<h4 class="font-medium text-neutral-800 mb-3 flex items-center gap-2">
							<X class="h-5 w-5 text-red-500 flex-shrink-0" />
							{m.marketplace_account_title()}
						</h4>
						<ul class="space-y-2 text-sm text-neutral-600">
							{#each accountIssues as issue}
								<li>{issue}</li>
							{/each}
						</ul>
					</div>

					<div class="bg-white rounded-xl p-6 shadow-sm border border-red-100">
						<h4 class="font-medium text-neutral-800 mb-3 flex items-center gap-2">
							<X class="h-5 w-5 text-red-500 flex-shrink-0" />
							{m.marketplace_control_title()}
						</h4>
						<ul class="space-y-2 text-sm text-neutral-600">
							{#each controlIssues as issue}
								<li>{issue}</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>

			<!-- Comparison Table -->
			<div class="max-w-4xl mx-auto">
				<h3 class="font-display font-semibold text-xl text-neutral-800 mb-6 text-center">
					{m.marketplace_diff_title()}
				</h3>

				<div class="bg-white rounded-xl shadow-md overflow-hidden max-w-2xl mx-auto">
					<table class="w-full text-sm">
						<thead>
							<tr class="bg-neutral-100">
								<th class="text-left py-3 px-4 font-medium text-neutral-700">{m.marketplace_diff_feature()}</th>
								<th class="text-left py-3 px-4 font-medium text-neutral-700">{m.marketplace_diff_edutab()}</th>
							</tr>
						</thead>
						<tbody>
							<tr class="border-t border-neutral-200">
								<td class="py-3 px-4 text-neutral-700 font-medium">{m.marketplace_diff_account()}</td>
								<td class="py-3 px-4 text-primary-green font-medium">{m.marketplace_diff_account_value()}</td>
							</tr>
							<tr class="border-t border-neutral-200 bg-neutral-50">
								<td class="py-3 px-4 text-neutral-700 font-medium">{m.marketplace_diff_data()}</td>
								<td class="py-3 px-4 text-primary-green font-medium">{m.marketplace_diff_data_value()}</td>
							</tr>
							<tr class="border-t border-neutral-200">
								<td class="py-3 px-4 text-neutral-700 font-medium">{m.marketplace_diff_ads()}</td>
								<td class="py-3 px-4 text-primary-green font-medium">{m.marketplace_diff_ads_value()}</td>
							</tr>
							<tr class="border-t border-neutral-200 bg-neutral-50">
								<td class="py-3 px-4 text-neutral-700 font-medium">{m.marketplace_diff_content()}</td>
								<td class="py-3 px-4 text-primary-green font-medium">{m.marketplace_diff_content_value()}</td>
							</tr>
							<tr class="border-t border-neutral-200">
								<td class="py-3 px-4 text-neutral-700 font-medium">{m.marketplace_diff_school()}</td>
								<td class="py-3 px-4 text-primary-green font-medium">{m.marketplace_diff_school_value()}</td>
							</tr>
							<tr class="border-t border-neutral-200 bg-neutral-50">
								<td class="py-3 px-4 text-neutral-700 font-medium">{m.marketplace_diff_gdpr()}</td>
								<td class="py-3 px-4 text-primary-green font-medium">{m.marketplace_diff_gdpr_value()}</td>
							</tr>
							<tr class="border-t border-neutral-200">
								<td class="py-3 px-4 text-neutral-700 font-medium">{m.marketplace_diff_cost()}</td>
								<td class="py-3 px-4 text-primary-green font-medium">{m.marketplace_diff_cost_value()}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- What's in the EduTab App Marketplace Section -->
<Reveal>
	<Section variant="default" padding="normal">
		<div class="w-full">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.marketplace_whats_title()}
				</h2>
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
					{m.marketplace_whats_subtitle()}
				</p>
			</div>

			<!-- App Quality Standards -->
			<div class="max-w-4xl mx-auto mb-12">
				<h3 class="font-display font-semibold text-xl text-neutral-800 mb-6 text-center">
					{m.marketplace_every_app()}
				</h3>

				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 text-center">
						<div class="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-brand-50 to-brand-100">
							<Check class="h-6 w-6 text-brand-500" />
						</div>
						<h4 class="font-medium text-neutral-800 mb-2">{m.marketplace_reviewed_title()}</h4>
						<p class="text-sm text-neutral-600">{m.marketplace_reviewed_desc()}</p>
					</div>

					<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 text-center">
						<div class="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-brand-50 to-brand-100">
							<Check class="h-6 w-6 text-brand-500" />
						</div>
						<h4 class="font-medium text-neutral-800 mb-2">{m.marketplace_scanned_title()}</h4>
						<p class="text-sm text-neutral-600">{m.marketplace_scanned_desc()}</p>
					</div>

					<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 text-center">
						<div class="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-brand-50 to-brand-100">
							<Check class="h-6 w-6 text-brand-500" />
						</div>
						<h4 class="font-medium text-neutral-800 mb-2">{m.marketplace_adfree_title()}</h4>
						<p class="text-sm text-neutral-600">{m.marketplace_adfree_desc()}</p>
					</div>

					<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100 text-center">
						<div class="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-brand-50 to-brand-100">
							<Check class="h-6 w-6 text-brand-500" />
						</div>
						<h4 class="font-medium text-neutral-800 mb-2">{m.marketplace_privacy_check_title()}</h4>
						<p class="text-sm text-neutral-600">{m.marketplace_privacy_check_desc()}</p>
					</div>
				</div>
			</div>

			<!-- Categories -->
			<div class="max-w-4xl mx-auto">
				<h3 class="font-display font-semibold text-xl text-neutral-800 mb-6 text-center">
					{m.marketplace_categories()}
				</h3>

				<div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
					<div class="bg-white rounded-lg p-4 shadow-sm border border-neutral-100 text-center">
						<span class="text-2xl mb-2 block">&#128290;</span>
						<h4 class="font-medium text-neutral-800">{m.marketplace_cat_math()}</h4>
						<p class="text-xs text-neutral-500 hidden sm:block">{m.marketplace_cat_math_desc()}</p>
					</div>

					<div class="bg-white rounded-lg p-4 shadow-sm border border-neutral-100 text-center">
						<span class="text-2xl mb-2 block">&#127760;</span>
						<h4 class="font-medium text-neutral-800">{m.marketplace_cat_lang()}</h4>
						<p class="text-xs text-neutral-500 hidden sm:block">{m.marketplace_cat_lang_desc()}</p>
					</div>

					<div class="bg-white rounded-lg p-4 shadow-sm border border-neutral-100 text-center">
						<span class="text-2xl mb-2 block">&#128300;</span>
						<h4 class="font-medium text-neutral-800">{m.marketplace_cat_science()}</h4>
						<p class="text-xs text-neutral-500 hidden sm:block">{m.marketplace_cat_science_desc()}</p>
					</div>

					<div class="bg-white rounded-lg p-4 shadow-sm border border-neutral-100 text-center">
						<span class="text-2xl mb-2 block">&#128214;</span>
						<h4 class="font-medium text-neutral-800">{m.marketplace_cat_writing()}</h4>
						<p class="text-xs text-neutral-500 hidden sm:block">{m.marketplace_cat_writing_desc()}</p>
					</div>

					<div class="bg-white rounded-lg p-4 shadow-sm border border-neutral-100 text-center">
						<span class="text-2xl mb-2 block">&#127912;</span>
						<h4 class="font-medium text-neutral-800">{m.marketplace_cat_art()}</h4>
						<p class="text-xs text-neutral-500 hidden sm:block">{m.marketplace_cat_art_desc()}</p>
					</div>

					<div class="bg-white rounded-lg p-4 shadow-sm border border-neutral-100 text-center">
						<span class="text-2xl mb-2 block">&#128197;</span>
						<h4 class="font-medium text-neutral-800">{m.marketplace_cat_productivity()}</h4>
						<p class="text-xs text-neutral-500 hidden sm:block">{m.marketplace_cat_productivity_desc()}</p>
					</div>

					<div class="bg-white rounded-lg p-4 shadow-sm border border-neutral-100 text-center">
						<span class="text-2xl mb-2 block">&#128218;</span>
						<h4 class="font-medium text-neutral-800">{m.marketplace_cat_reference()}</h4>
						<p class="text-xs text-neutral-500 hidden sm:block">{m.marketplace_cat_reference_desc()}</p>
					</div>

					<div class="bg-white rounded-lg p-4 shadow-sm border border-neutral-100 text-center">
						<span class="text-2xl mb-2 block">&#128187;</span>
						<h4 class="font-medium text-neutral-800">{m.marketplace_cat_programming()}</h4>
						<p class="text-xs text-neutral-500 hidden sm:block">{m.marketplace_cat_programming_desc()}</p>
					</div>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- How It Works Section -->
<Reveal>
	<Section variant="accent" padding="normal">
		<div class="w-full">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.marketplace_how_title()}
				</h2>
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
					{m.marketplace_how_subtitle()}
				</p>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
				<!-- For Students -->
				<div class="bg-white rounded-2xl p-8 shadow-md border border-neutral-200">
					<div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto bg-gradient-to-br from-primary-coral/20 to-primary-coral/10">
						<svg class="w-6 h-6 text-primary-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
							<circle cx="12" cy="7" r="4"></circle>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-xl text-neutral-800 mb-4 text-center">
						{m.marketplace_students_title()}
					</h3>

					<div class="space-y-4 mb-6">
						{#each studentsSteps as step, i}
							<div class="flex items-start gap-3">
								<span class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-coral/10 text-primary-coral text-sm font-medium flex items-center justify-center">{i + 1}</span>
								<p class="text-sm text-neutral-600">{step}</p>
							</div>
						{/each}
					</div>

					<p class="text-sm text-primary-green font-medium">
						{m.marketplace_students_note()}
					</p>
				</div>

				<!-- For IT Administrators -->
				<div class="bg-white rounded-2xl p-8 shadow-md border border-neutral-200">
					<div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto bg-gradient-to-br from-brand-50 to-brand-100">
						<svg class="w-6 h-6 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<rect width="20" height="14" x="2" y="3" rx="2"></rect>
							<line x1="8" x2="16" y1="21" y2="21"></line>
							<line x1="12" x2="12" y1="17" y2="21"></line>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-xl text-neutral-800 mb-4 text-center">
						{m.marketplace_it_title()}
					</h3>

					<div class="space-y-4">
						<div>
							<h4 class="font-medium text-neutral-800 mb-2">{m.marketplace_it_control_title()}</h4>
							<ul class="space-y-1 text-sm text-neutral-600">
								{#each itControlFeatures as feature}
									<li class="flex items-center gap-2">
										<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
										{feature}
									</li>
								{/each}
							</ul>
						</div>

						<div>
							<h4 class="font-medium text-neutral-800 mb-2">{m.marketplace_it_deploy_title()}</h4>
							<ul class="space-y-1 text-sm text-neutral-600">
								{#each itDeployFeatures as feature}
									<li class="flex items-center gap-2">
										<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
										{feature}
									</li>
								{/each}
							</ul>
						</div>

						<div>
							<h4 class="font-medium text-neutral-800 mb-2">{m.marketplace_it_version_title()}</h4>
							<ul class="space-y-1 text-sm text-neutral-600">
								{#each itVersionFeatures as feature}
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
					<div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto bg-gradient-to-br from-primary-green/20 to-primary-green/10">
						<svg class="w-6 h-6 text-primary-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
							<circle cx="9" cy="7" r="4"></circle>
							<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-xl text-neutral-800 mb-4">
						{m.marketplace_teachers_title()}
					</h3>

					<div class="space-y-4">
						<div>
							<h4 class="font-medium text-neutral-800 mb-2">{m.marketplace_teachers_control_title()}</h4>
							<p class="text-sm text-neutral-600 mb-3">
								{m.marketplace_teachers_control_desc()}
							</p>
							<ul class="space-y-1 text-sm text-neutral-600">
								{#each teachersControlFeatures as feature}
									<li class="flex items-center gap-2">
										<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
										{feature}
									</li>
								{/each}
							</ul>
						</div>

						<div>
							<h4 class="font-medium text-neutral-800 mb-2">{m.marketplace_teachers_content_title()}</h4>
							<ul class="space-y-1 text-sm text-neutral-600">
								{#each teachersContentFeatures as feature}
									<li class="flex items-center gap-2">
										<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
										{feature}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- Built on F-Droid Section -->
<Reveal>
	<Section variant="default" padding="normal">
		<div class="w-full max-w-4xl mx-auto">
			<div class="text-center mb-8">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.marketplace_fdroid_title()}
				</h2>
				<p class="text-lg text-neutral-600">
					{m.marketplace_fdroid_subtitle()}
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.marketplace_fdroid_provides_title()}
					</h3>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each fdroidProvides as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-3">
						{m.marketplace_edutab_adds_title()}
					</h3>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each edutabAdds as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-coral flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- Private App Uploads Section -->
<Reveal>
	<Section variant="accent" padding="normal">
		<div class="w-full max-w-4xl mx-auto">
			<div class="text-center mb-8">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.marketplace_private_title()}
				</h2>
				<p class="text-lg text-neutral-600">
					{m.marketplace_private_subtitle()}
				</p>
			</div>

			<div class="bg-white rounded-xl p-8 shadow-sm">
				<h3 class="font-display font-semibold text-lg text-neutral-800 mb-4">
					{m.marketplace_private_usecases()}
				</h3>

				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
					{#each privateUseCases as useCase}
						<div class="flex items-center gap-2 text-sm text-neutral-600">
							<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
							{useCase}
						</div>
					{/each}
				</div>

				<h4 class="font-medium text-neutral-800 mb-3">{m.marketplace_private_how()}</h4>
				<ol class="space-y-2 text-sm text-neutral-600 mb-6">
					{#each privateSteps as step, i}
						<li class="flex items-start gap-2">
							<span class="font-medium text-primary-green">{i + 1}.</span>
							{step}
						</li>
					{/each}
				</ol>

				<p class="text-xs text-neutral-500">
					{m.marketplace_private_requirements()}
				</p>
			</div>
		</div>
	</Section>
</Reveal>

<!-- Security and Privacy Section -->
<Reveal>
	<Section variant="default" padding="normal">
		<div class="w-full">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.marketplace_security_title()}
				</h2>
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
					{m.marketplace_security_subtitle()}
				</p>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
				<!-- App Scanning -->
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-4">
						{m.marketplace_scanning_title()}
					</h3>

					<div class="space-y-4">
						<div>
							<h4 class="font-medium text-neutral-800 mb-2">{m.marketplace_scanning_auto_title()}</h4>
							<ul class="space-y-1 text-sm text-neutral-600">
								{#each autoScanFeatures as feature}
									<li class="flex items-center gap-2">
										<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
										{feature}
									</li>
								{/each}
							</ul>
						</div>

						<div>
							<h4 class="font-medium text-neutral-800 mb-2">{m.marketplace_scanning_manual_title()}</h4>
							<ul class="space-y-1 text-sm text-neutral-600">
								{#each manualScanFeatures as feature}
									<li class="flex items-center gap-2">
										<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
										{feature}
									</li>
								{/each}
							</ul>
						</div>

						<div>
							<h4 class="font-medium text-neutral-800 mb-2">{m.marketplace_scanning_ongoing_title()}</h4>
							<ul class="space-y-1 text-sm text-neutral-600">
								{#each ongoingScanFeatures as feature}
									<li class="flex items-center gap-2">
										<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
										{feature}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>

				<!-- No Tracking -->
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-4">
						{m.marketplace_notracking_title()}
					</h3>
					<p class="text-sm text-neutral-600 mb-4">
						{m.marketplace_notracking_desc()}
					</p>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each noTrackingFeatures as feature}
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</li>
						{/each}
					</ul>
				</div>

				<!-- EU Data Handling -->
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-4">
						{m.marketplace_eu_title()}
					</h3>
					<p class="text-sm text-neutral-600 mb-4">
						{m.marketplace_eu_desc()}
					</p>
					<ul class="space-y-2 text-sm text-neutral-600">
						{#each euDataFeatures as feature}
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

<!-- Getting Started Section -->
<Reveal>
	<Section variant="accent" padding="normal">
		<div class="w-full">
			<div class="text-center mb-12">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.marketplace_started_title()}
				</h2>
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
					{m.marketplace_started_subtitle()}
				</p>
			</div>

			<!-- Free for All Schools -->
			<div class="max-w-3xl mx-auto mb-12">
				<div class="bg-primary-green/10 rounded-2xl p-4 border-2 border-primary-green/30">
					<h3 class="font-display font-semibold text-xl text-neutral-800 mb-4 text-center">
						{m.marketplace_free_title()}
					</h3>

					<div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
						{#each freeFeatures as feature}
							<div class="flex items-center gap-2 text-sm text-neutral-700">
								<Check class="h-4 w-4 text-primary-green flex-shrink-0" />
								{feature}
							</div>
						{/each}
					</div>

					<p class="text-sm text-neutral-600 text-center">
						<strong class="text-neutral-800">{m.marketplace_free_why()}</strong> {m.marketplace_free_why_desc()}
					</p>
				</div>
			</div>

			<!-- Access Options -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-4">
						{m.marketplace_on_tablets_title()}
					</h3>
					<p class="text-neutral-600 mb-4">
						{m.marketplace_on_tablets_desc()}
					</p>
					<Button href={localizeHref("/tablets")} variant="default" size="fluid" class="bg-primary-green hover:bg-primary-greenDark text-white hover:text-white">
						{m.marketplace_on_tablets_cta()}
						<ArrowRight class="ml-1 h-4 w-4" />
					</Button>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-4">
						{m.marketplace_on_android_title()}
					</h3>
					<ol class="space-y-2 text-sm text-neutral-600 mb-4">
						{#each androidSteps as step, i}
							<li class="flex items-start gap-2">
								<span class="font-medium text-primary-green">{i + 1}.</span>
								{step}
							</li>
						{/each}
					</ol>
					<Button href="#signup" variant="default" size="fluid" class="bg-primary-green hover:bg-primary-greenDark text-white hover:text-white">
						{m.marketplace_on_android_cta()}
					</Button>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- The Complete Ecosystem -->
<Reveal>
	<Section variant="accent" padding="normal">
		<div class="w-full max-w-4xl mx-auto">
			<div class="text-center mb-8">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.marketplace_ecosystem_title()}
				</h2>
				<p class="text-lg text-neutral-600">
					{m.marketplace_ecosystem_subtitle()}
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
						{m.marketplace_ecosystem_tablets_title()}
					</h3>
					<p class="text-sm text-neutral-600 mb-4 text-center">{m.marketplace_ecosystem_tablets_desc()}</p>
					<div class="flex justify-center">
						<Button href={localizeHref("/tablets")} variant="ghost" size="sm" class="text-primary-coral hover:text-primary-coralDark">
							{m.marketplace_ecosystem_learn_more()}
							<ArrowRight class="ml-1 h-4 w-4" />
						</Button>
					</div>
				</div>

				<div class="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
					<div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto bg-gradient-to-br from-primary-green/20 to-primary-green/10">
						<svg class="w-5 h-5 text-primary-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect width="20" height="14" x="2" y="3" rx="2"></rect>
							<line x1="8" x2="16" y1="21" y2="21"></line>
							<line x1="12" x2="12" y1="17" y2="21"></line>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-2 text-center">
						{m.marketplace_ecosystem_portal_title()}
					</h3>
					<p class="text-sm text-neutral-600 mb-4 text-center">{m.marketplace_ecosystem_portal_desc()}</p>
					<div class="flex justify-center">
						<Button href={localizeHref("/portal")} variant="ghost" size="sm" class="text-primary-coral hover:text-primary-coralDark">
							{m.marketplace_ecosystem_learn_more()}
							<ArrowRight class="ml-1 h-4 w-4" />
						</Button>
					</div>
				</div>

				<div class="bg-primary-green/10 rounded-xl p-6 border border-primary-green/20">
					<div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto bg-gradient-to-br from-primary-coral/20 to-primary-coral/10">
						<svg class="w-5 h-5 text-primary-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<rect x="4" y="4" width="6" height="6" rx="1"></rect>
							<rect x="14" y="4" width="6" height="6" rx="1"></rect>
							<rect x="4" y="14" width="6" height="6" rx="1"></rect>
							<rect x="14" y="14" width="6" height="6" rx="1"></rect>
						</svg>
					</div>
					<h3 class="font-display font-semibold text-lg text-neutral-800 mb-2 text-center">
						{m.marketplace_ecosystem_marketplace_title()}
					</h3>
					<p class="text-sm text-primary-green font-medium mb-4 text-center">{m.marketplace_ecosystem_marketplace_current()}</p>
				</div>
			</div>

			<div class="text-center mt-8">
				<Button href={localizeHref("/ecosystem")} variant="default" size="fluid" class="bg-primary-green hover:bg-primary-greenDark text-white hover:text-white">
					{m.marketplace_ecosystem_cta()}
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
				{m.marketplace_final_title()}
			</h2>
			<p class="mx-auto mt-6 text-lg leading-relaxed text-neutral-300">
				{m.marketplace_final_subtitle()}
			</p>

			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
				<Button
					href="#signup"
					variant="default"
					size="fluid"
					class="group w-full sm:w-auto bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white"
				>
					{m.marketplace_final_cta_primary()}
					<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
				</Button>

				<Button
					href={localizeHref("/portal")}
					variant="ghost"
					size="fluid"
					class="group w-full sm:w-auto text-white hover:bg-white/10 hover:text-white"
				>
					{m.marketplace_final_cta_secondary()}
					<ArrowRight class="ml-1 h-4 w-4" />
				</Button>
			</div>

			<div class="mt-8 text-sm text-neutral-400">
				<p>{m.marketplace_final_footer()}</p>
				<p class="mt-1">{m.marketplace_final_opensource()}</p>
			</div>
		</div>
	</Section>
</Reveal>
