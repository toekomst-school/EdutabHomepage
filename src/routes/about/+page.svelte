<script lang="ts">
	import ProductHero from '$lib/components/sections/ProductHero.svelte';
	import Section from '$lib/components/sections/Section.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import User from '@lucide/svelte/icons/user';
	import Mail from '@lucide/svelte/icons/mail';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Github from '@lucide/svelte/icons/github';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Heart from '@lucide/svelte/icons/heart';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';

	// Timeline events from Meester Chip's story
	let timelineEvents = $derived([
		{
			title: m.about_timeline_1_title(),
			description: m.about_timeline_1_desc(),
			icon: 'school'
		},
		{
			title: m.about_timeline_2_title(),
			description: m.about_timeline_2_desc(),
			icon: 'lightbulb'
		},
		{
			title: m.about_timeline_3_title(),
			description: m.about_timeline_3_desc(),
			icon: 'settings'
		},
		{
			title: m.about_timeline_4_title(),
			description: m.about_timeline_4_desc(),
			icon: 'rocket'
		},
		{
			title: m.about_timeline_5_title(),
			description: m.about_timeline_5_desc(),
			icon: 'shield'
		},
		{
			title: m.about_timeline_6_title(),
			description: m.about_timeline_6_desc(),
			icon: 'heart'
		}
	]);

	// Values for mission section
	let values = $derived([
		{
			title: m.about_value_1_title(),
			description: m.about_value_1_desc()
		},
		{
			title: m.about_value_2_title(),
			description: m.about_value_2_desc()
		},
		{
			title: m.about_value_3_title(),
			description: m.about_value_3_desc()
		},
		{
			title: m.about_value_4_title(),
			description: m.about_value_4_desc()
		}
	]);

	// Ecosystem pillars for the About page
	let ecosystemPillars = $derived([
		{
			icon: 'tablet',
			title: m.about_ecosystem_tablet_title(),
			description: m.about_ecosystem_tablet_desc()
		},
		{
			icon: 'apps',
			title: m.about_ecosystem_marketplace_title(),
			description: m.about_ecosystem_marketplace_desc()
		},
		{
			icon: 'monitor',
			title: m.about_ecosystem_portal_title(),
			description: m.about_ecosystem_portal_desc()
		}
	]);
</script>

<svelte:head>
	<title>{m.about_page_title()}</title>
	<meta name="description" content={m.about_page_description()} />
	<meta name="keywords" content={m.about_meta_keywords()} />
	<meta property="og:title" content={m.about_og_title()} />
	<meta property="og:description" content={m.about_og_description()} />
	<meta property="og:image" content="/images/og/about.jpg" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://edutab.eu/about" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={m.about_og_title()} />
	<meta name="twitter:description" content={m.about_og_description()} />
	<meta name="twitter:image" content="/images/og/about.jpg" />
	<link rel="canonical" href="https://edutab.eu/about" />
</svelte:head>

<!-- Hero Section -->
<ProductHero
	title={m.about_hero_title()}
	subtitle={m.about_hero_subtitle()}
	backgroundImage="/about.webp"
	backgroundAlt={m.aria_hero_about()}
	primaryCta={{ label: m.about_hero_cta_primary(), href: "#story" }}
	secondaryCta={{ label: m.about_hero_cta_secondary(), href: "#contact" }}
	trialInfo={m.about_hero_trial_info()}
	blur={1}
	overlayIntensity="heavy"
/>

<!-- Timeline Section: Meester Chip's Story -->
<Reveal delay={100}>
	<div id="story" class="w-full py-8 md:py-12 bg-mintCream">
		<div class="max-w-section-xl mx-auto px-4 md:px-6 lg:px-8">
			<div class="text-center mb-8">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.about_story_title()}
				</h2>
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
					{m.about_story_subtitle()}
				</p>
			</div>
			<Timeline events={timelineEvents} variant="default" padding="none" />
		</div>
	</div>
</Reveal>

<!-- Mission Section -->
<Section variant="default" padding="compact">
	<Reveal delay={200}>
		<div class="text-center mb-6">
			<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-3">
				{m.about_mission_title()}
			</h2>
			<p class="text-xl text-primary-green font-semibold max-w-2xl mx-auto mb-4">
				{m.about_mission_statement()}
			</p>
			<p class="text-lg text-neutral-600 max-w-3xl mx-auto">
				{m.about_mission_desc()}
			</p>
		</div>

		<!-- Values Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-stretch">
			{#each values as value, index}
				<Reveal delay={200 + index * 50}>
					<div class="bg-white rounded-2xl p-6 shadow-md border border-neutral-200 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
						<div class="flex items-center gap-3 mb-4">
							<Heart class="w-6 h-6 text-primary-green flex-shrink-0" />
							<h3 class="text-xl font-display font-semibold text-neutral-900">
								{value.title}
							</h3>
						</div>
						<p class="text-neutral-600 leading-relaxed flex-grow">
							{value.description}
						</p>
					</div>
				</Reveal>
			{/each}
		</div>
	</Reveal>
</Section>

<!-- Three Pillars Section -->
<Section variant="accent" padding="compact">
	<Reveal delay={300}>
		<div class="text-center mb-8">
			<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-3">
				{m.about_ecosystem_title()}
			</h2>
			<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
				{m.about_ecosystem_subtitle()}
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
			{#each ecosystemPillars as pillar, index}
				<Reveal delay={300 + index * 100}>
					<div class="bg-white rounded-2xl p-8 shadow-md border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
						<div class="mb-6 flex justify-center">
							{#if pillar.icon === 'tablet'}
								<div class="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100">
									{@html '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-brand-500"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><line x1="12" x2="12.01" y1="18" y2="18"></line></svg>'}
								</div>
							{:else if pillar.icon === 'apps'}
								<div class="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary-coral/20 to-primary-coral/10">
									{@html '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-primary-coral"><rect x="4" y="4" width="6" height="6" rx="1"></rect><rect x="14" y="4" width="6" height="6" rx="1"></rect><rect x="4" y="14" width="6" height="6" rx="1"></rect><rect x="14" y="14" width="6" height="6" rx="1"></rect></svg>'}
								</div>
							{:else}
								<div class="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-primary-green/20 to-primary-green/10">
									{@html '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-primary-green"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>'}
								</div>
							{/if}
						</div>
						<h3 class="text-xl font-display font-semibold text-neutral-900 mb-4 text-center">
							{pillar.title}
						</h3>
						<p class="text-neutral-600 leading-relaxed flex-grow text-center">
							{pillar.description}
						</p>
					</div>
				</Reveal>
			{/each}
		</div>
	</Reveal>
</Section>

<!-- Team Section (Placeholder) -->
<Section variant="default" padding="compact">
	<Reveal delay={400}>
		<div class="text-center mb-8">
			<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-3">
				{m.about_team_title()}
			</h2>
			<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
				{m.about_team_subtitle()}
			</p>
		</div>

		<!-- Team Placeholder Cards -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
			{#each [1, 2, 3] as index}
				<Reveal delay={400 + index * 100}>
					<div class="bg-white rounded-2xl p-8 shadow-md border border-neutral-200 flex flex-col items-center text-center">
						<div class="w-32 h-32 rounded-full bg-gradient-to-br from-primary-green/20 to-primary-greenLight/20 mb-6 flex items-center justify-center">
							<User class="size-16 text-neutral-400" />
						</div>
						<h3 class="text-xl font-display font-semibold text-neutral-900 mb-2">
							{m.about_team_member()} {index}
						</h3>
						<p class="text-primary-green font-medium mb-4">
							{m.about_team_role()}
						</p>
						<p class="text-neutral-600 text-sm">
							{m.about_team_bio()}
						</p>
					</div>
				</Reveal>
			{/each}
		</div>

		<!-- Growing Team CTA -->
		<div class="mt-8 text-center">
			<p class="text-lg text-neutral-700 mb-4">
				{m.about_team_growing()}
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<Button href="https://github.com/edutab" size="fluid" class="bg-primary-green hover:bg-primary-greenDark text-white hover:text-white shadow-lg font-semibold rounded-xl gap-2">
					<Github class="size-5" />
					<span>{m.about_team_github()}</span>
				</Button>
				<Button href="#contact" size="fluid" class="bg-primary-green hover:bg-primary-greenDark text-white hover:text-white shadow-lg font-semibold rounded-xl gap-2">
					<span>{m.about_team_join()}</span>
					<ArrowRight class="size-5" />
				</Button>
			</div>
		</div>
	</Reveal>
</Section>

<!-- Netherlands Location Section -->
<Section variant="accent" padding="compact">
	<Reveal delay={500}>
		<div class="max-w-3xl mx-auto">
			<div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-neutral-200">
				<div class="flex items-center gap-3 mb-4">
					<MapPin class="size-8 text-primary-green" />
					<div>
						<h2 class="text-2xl md:text-3xl font-display font-bold text-neutral-900">
							{m.about_location_title()}
						</h2>
						<p class="text-neutral-600">{m.about_location_subtitle()}</p>
					</div>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<h3 class="font-semibold text-neutral-900 mb-3">{m.about_location_why()}</h3>
						<ul class="space-y-2">
							<li class="flex items-start gap-2">
								<div class="w-1.5 h-1.5 rounded-full bg-primary-green mt-2 shrink-0"></div>
								<span class="text-neutral-700">{m.about_location_1()}</span>
							</li>
							<li class="flex items-start gap-2">
								<div class="w-1.5 h-1.5 rounded-full bg-primary-green mt-2 shrink-0"></div>
								<span class="text-neutral-700">{m.about_location_2()}</span>
							</li>
							<li class="flex items-start gap-2">
								<div class="w-1.5 h-1.5 rounded-full bg-primary-green mt-2 shrink-0"></div>
								<span class="text-neutral-700">{m.about_location_3()}</span>
							</li>
							<li class="flex items-start gap-2">
								<div class="w-1.5 h-1.5 rounded-full bg-primary-green mt-2 shrink-0"></div>
								<span class="text-neutral-700">{m.about_location_4()}</span>
							</li>
						</ul>
					</div>

					<div>
						<h3 class="font-semibold text-neutral-900 mb-3">{m.about_contact_title()}</h3>
						<div class="space-y-4">
							<div class="flex items-center gap-3">
								<Mail class="size-5 text-neutral-500" />
								<div>
									<p class="text-sm text-neutral-500">{m.about_contact_email()}</p>
									<a href="mailto:info@edutab.eu" class="text-neutral-900 hover:text-primary-green transition-colors">
										info@edutab.eu
									</a>
								</div>
							</div>
							<div class="p-4 bg-primary-green/10 rounded-lg border border-primary-green/20">
								<p class="text-sm text-neutral-600 mb-1">EduTab / Toekomst.school</p>
								<p class="text-neutral-900 font-medium">Netherlands</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Reveal>
</Section>

<!-- Contact Form Section -->
<Section variant="default" padding="compact" id="contact">
	<Reveal delay={600}>
		<div class="max-w-2xl mx-auto">
			<div class="text-center mb-8">
				<div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-green to-primary-greenLight mb-4">
					<Mail class="size-8 text-white" />
				</div>
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-3">
					{m.about_get_in_touch_title()}
				</h2>
				<p class="text-lg text-neutral-600">
					{m.about_get_in_touch_subtitle()}
				</p>
			</div>

			<div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-neutral-200">
				<ContactForm />
			</div>
		</div>
	</Reveal>
</Section>

<!-- Final CTA -->
<Section variant="accent" padding="compact">
	<Reveal delay={700}>
		<div class="text-center max-w-3xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-3">
				{m.about_final_cta_title()}
			</h2>
			<p class="text-xl text-neutral-700 mb-6">
				{m.about_final_cta_subtitle()}
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<Button href={'https://portal.edutab.eu/register'} size="fluid" class="bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white shadow-lg font-semibold rounded-xl gap-2">
					<span>{m.about_final_cta_primary()}</span>
					<ArrowRight class="size-5" />
				</Button>
				<Button href={localizeHref('/pricing')} variant="outline" size="fluid">
					{m.about_final_cta_secondary()}
				</Button>
			</div>
			<p class="mt-4 text-sm text-neutral-500">
				{m.about_final_cta_footer()}<br />
				{m.about_final_cta_meaning()}
			</p>
		</div>
	</Reveal>
</Section>
