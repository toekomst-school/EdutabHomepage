<script lang="ts">
	import Section from '$lib/components/sections/Section.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { AccordionItemData } from '$lib/components/Accordion.svelte';
	import Mail from '@lucide/svelte/icons/mail';
	import HelpCircle from '@lucide/svelte/icons/help-circle';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';
	import { openChatwoot } from '$lib/utils/chatwoot';

	let imageLoaded = $state(false);

	let categories = $derived<Array<{ id: string; title: string; items: AccordionItemData[] }>>([
		{
			id: 'getting-started',
			title: m.faq_cat_getting_started(),
			items: [
				{
					id: 'what-is-edutab',
					title: m.faq_gs_what_is_title(),
					content: `<p>${m.faq_gs_what_is_intro()}</p>
					<ol class="list-decimal ml-5 mt-3 space-y-2">
						<li><strong>${m.faq_gs_what_is_tablets()}</strong> - ${m.faq_gs_what_is_tablets_desc()}</li>
						<li><strong>${m.faq_gs_what_is_marketplace()}</strong> - ${m.faq_gs_what_is_marketplace_desc()}</li>
						<li><strong>${m.faq_gs_what_is_portal()}</strong> - ${m.faq_gs_what_is_portal_desc()}</li>
					</ol>
					<p class="mt-3">${m.faq_gs_what_is_outro()}</p>`
				},
				{
					id: 'how-to-get-started',
					title: m.faq_gs_how_start_title(),
					content: `<ol class="list-decimal ml-5 space-y-2">
						<li>${m.faq_gs_how_start_step1()}</li>
						<li>${m.faq_gs_how_start_step2()}</li>
						<li>${m.faq_gs_how_start_step3()}</li>
						<li>${m.faq_gs_how_start_step4()}</li>
						<li>${m.faq_gs_how_start_step5()}</li>
					</ol>`
				},
				{
					id: 'need-to-buy-tablets',
					title: m.faq_gs_need_buy_title(),
					content: `<p>${m.faq_gs_need_buy_p1()}</p>
					<p class="mt-3">${m.faq_gs_need_buy_p2()}</p>`
				},
				{
					id: 'whats-included-trial',
					title: m.faq_gs_trial_title(),
					content: `<p>${m.faq_gs_trial_content()}</p>`
				}
			]
		},
		{
			id: 'gdpr-privacy',
			title: m.faq_cat_gdpr_privacy(),
			items: [
				{
					id: 'gdpr-compliant',
					title: m.faq_gdpr_compliant_title(),
					content: `<p>${m.faq_gdpr_compliant_intro()}</p>
					<ul class="list-disc ml-5 mt-3 space-y-1">
						<li><strong>${m.faq_gdpr_compliant_eu_hosting()}</strong>: ${m.faq_gdpr_compliant_eu_hosting_desc()}</li>
						<li><strong>${m.faq_gdpr_compliant_no_transfers()}</strong>: ${m.faq_gdpr_compliant_no_transfers_desc()}</li>
						<li><strong>${m.faq_gdpr_compliant_minimization()}</strong>: ${m.faq_gdpr_compliant_minimization_desc()}</li>
						<li><strong>${m.faq_gdpr_compliant_transparency()}</strong>: ${m.faq_gdpr_compliant_transparency_desc()}</li>
						<li><strong>${m.faq_gdpr_compliant_dpa()}</strong>: ${m.faq_gdpr_compliant_dpa_desc()}</li>
						<li><strong>${m.faq_gdpr_compliant_audit()}</strong>: ${m.faq_gdpr_compliant_audit_desc()}</li>
					</ul>`
				},
				{
					id: 'data-stored-location',
					title: m.faq_gdpr_where_stored_title(),
					content: `<p>${m.faq_gdpr_where_stored_content()}</p>`
				},
				{
					id: 'sell-student-data',
					title: m.faq_gdpr_sell_data_title(),
					content: `<p>${m.faq_gdpr_sell_data_content()}</p>`
				},
				{
					id: 'students-under-16',
					title: m.faq_gdpr_under_16_title(),
					content: `<p>${m.faq_gdpr_under_16_content()}</p>`
				},
				{
					id: 'dpa-available',
					title: m.faq_gdpr_dpa_title(),
					content: `<p>${m.faq_gdpr_dpa_content()}</p>`
				}
			]
		},
		{
			id: 'features',
			title: m.faq_cat_features(),
			items: [
				{
					id: 'it-admin-can-do',
					title: m.faq_features_it_admin_title(),
					content: `<ul class="list-disc ml-5 space-y-1">
						<li>${m.faq_features_it_admin_1()}</li>
						<li>${m.faq_features_it_admin_2()}</li>
						<li>${m.faq_features_it_admin_3()}</li>
						<li>${m.faq_features_it_admin_4()}</li>
						<li>${m.faq_features_it_admin_5()}</li>
						<li>${m.faq_features_it_admin_6()}</li>
						<li>${m.faq_features_it_admin_7()}</li>
						<li>${m.faq_features_it_admin_8()}</li>
					</ul>`
				},
				{
					id: 'teachers-can-do',
					title: m.faq_features_teachers_title(),
					content: `<p>${m.faq_features_teachers_intro()}</p>
					<ul class="list-disc ml-5 mt-3 space-y-1">
						<li>${m.faq_features_teachers_1()}</li>
						<li>${m.faq_features_teachers_2()}</li>
						<li>${m.faq_features_teachers_3()}</li>
						<li>${m.faq_features_teachers_4()}</li>
						<li>${m.faq_features_teachers_5()}</li>
						<li>${m.faq_features_teachers_6()}</li>
					</ul>`
				},
				{
					id: 'zero-touch-enrollment',
					title: m.faq_features_zero_touch_title(),
					content: `<p>${m.faq_features_zero_touch_content()}</p>`
				},
				{
					id: 'offline-support',
					title: m.faq_features_offline_title(),
					content: `<p>${m.faq_features_offline_content()}</p>`
				},
				{
					id: 'location-tracking',
					title: m.faq_features_location_title(),
					content: `<p>${m.faq_features_location_content()}</p>`
				}
			]
		},
		{
			id: 'marketplace',
			title: m.faq_cat_marketplace(),
			items: [
				{
					id: 'what-is-marketplace',
					title: m.faq_mp_what_is_title(),
					content: `<p>${m.faq_mp_what_is_intro()}</p>
					<ul class="list-disc ml-5 mt-3 space-y-1">
						<li>${m.faq_mp_what_is_1()}</li>
						<li>${m.faq_mp_what_is_2()}</li>
						<li>${m.faq_mp_what_is_3()}</li>
						<li>${m.faq_mp_what_is_4()}</li>
					</ul>`
				},
				{
					id: 'marketplace-free',
					title: m.faq_mp_free_title(),
					content: `<p>${m.faq_mp_free_content()}</p>`
				},
				{
					id: 'upload-own-apps',
					title: m.faq_mp_upload_title(),
					content: `<p>${m.faq_mp_upload_content()}</p>`
				},
				{
					id: 'request-apps',
					title: m.faq_mp_request_title(),
					content: `<p>${m.faq_mp_request_content()}</p>`
				},
				{
					id: 'apps-safe',
					title: m.faq_mp_safe_title(),
					content: `<p>${m.faq_mp_safe_content()}</p>`
				}
			]
		},
		{
			id: 'pricing',
			title: m.faq_cat_pricing(),
			items: [
				{
					id: 'how-much-cost',
					title: m.faq_pricing_cost_title(),
					content: `<p><strong>${m.faq_pricing_cost_tablets()}</strong>: ${m.faq_pricing_cost_tablets_desc()}</p>
					<p class="mt-3"><strong>${m.faq_pricing_cost_portal()}</strong>:</p>
					<ul class="list-disc ml-5 mt-1 space-y-1">
						<li>${m.faq_pricing_cost_tier1()}</li>
						<li>${m.faq_pricing_cost_tier2()}</li>
						<li>${m.faq_pricing_cost_tier3()}</li>
						<li>${m.faq_pricing_cost_tier4()}</li>
					</ul>
					<p class="mt-3"><strong>${m.faq_pricing_cost_self_hosted()}</strong>: ${m.faq_pricing_cost_self_hosted_desc()}</p>
					<p class="mt-3"><strong>${m.faq_pricing_cost_marketplace()}</strong>: ${m.faq_pricing_cost_marketplace_desc()}</p>`
				},
				{
					id: 'minimum-devices',
					title: m.faq_pricing_minimum_title(),
					content: `<p>${m.faq_pricing_minimum_content()}</p>`
				},
				{
					id: 'annual-discount',
					title: m.faq_pricing_annual_title(),
					content: `<p>${m.faq_pricing_annual_content()}</p>`
				},
				{
					id: 'cancel-anytime',
					title: m.faq_pricing_cancel_title(),
					content: `<p>${m.faq_pricing_cancel_content()}</p>`
				},
				{
					id: 'purchase-orders',
					title: m.faq_pricing_po_title(),
					content: `<p>${m.faq_pricing_po_content()}</p>`
				},
				{
					id: 'after-trial',
					title: m.faq_pricing_after_trial_title(),
					content: `<p>${m.faq_pricing_after_trial_content()}</p>`
				}
			]
		},
		{
			id: 'technical',
			title: m.faq_cat_technical(),
			items: [
				{
					id: 'android-version',
					title: m.faq_tech_android_title(),
					content: `<p>${m.faq_tech_android_content()}</p>`
				},
				{
					id: 'compatible-tablets',
					title: m.faq_tech_compatible_title(),
					content: `<p>${m.faq_tech_compatible_intro()}</p>
					<ul class="list-disc ml-5 mt-3 space-y-1">
						<li>${m.faq_tech_compatible_1()}</li>
						<li>${m.faq_tech_compatible_2()}</li>
						<li>${m.faq_tech_compatible_3()}</li>
					</ul>
					<p class="mt-3">${m.faq_tech_compatible_outro()} <button onclick="window.$chatwoot && window.$chatwoot.toggle('open')" class="text-primary-green underline hover:no-underline cursor-pointer bg-transparent border-none p-0 font-inherit">${m.faq_tech_compatible_contact()}</button> ${m.faq_tech_compatible_outro2()}</p>`
				},
				{
					id: 'other-devices',
					title: m.faq_tech_other_title(),
					content: `<p>${m.faq_tech_other_content()}</p>`
				},
				{
					id: 'integrations',
					title: m.faq_tech_integrations_title(),
					content: `<p>${m.faq_tech_integrations_intro()}</p>
					<ul class="list-disc ml-5 mt-3 space-y-1">
						<li>${m.faq_tech_integrations_1()}</li>
						<li>${m.faq_tech_integrations_2()}</li>
						<li>${m.faq_tech_integrations_3()}</li>
						<li>${m.faq_tech_integrations_4()}</li>
					</ul>
					<p class="mt-3">${m.faq_tech_integrations_outro()}</p>`
				},
				{
					id: 'self-hosting-requirements',
					title: m.faq_tech_selfhost_title(),
					content: `<p>${m.faq_tech_selfhost_intro()}</p>
					<ul class="list-disc ml-5 mt-3 space-y-1">
						<li>${m.faq_tech_selfhost_1()}</li>
						<li>${m.faq_tech_selfhost_2()}</li>
						<li>${m.faq_tech_selfhost_3()}</li>
						<li>${m.faq_tech_selfhost_4()}</li>
					</ul>
					<p class="mt-3">${m.faq_tech_selfhost_outro()} <a href="https://github.com/edutabeu" class="text-primary-green underline hover:no-underline" target="_blank" rel="noopener noreferrer">${m.faq_tech_selfhost_github()}</a>.</p>`
				}
			]
		},
		{
			id: 'migration',
			title: m.faq_cat_migration(),
			items: [
				{
					id: 'switching-from-google',
					title: m.faq_migration_google_title(),
					content: `<p>${m.faq_migration_google_intro()}</p>
					<ul class="list-disc ml-5 mt-3 space-y-1">
						<li>${m.faq_migration_google_1()}</li>
						<li>${m.faq_migration_google_2()}</li>
						<li>${m.faq_migration_google_3()}</li>
					</ul>`
				},
				{
					id: 'switching-mdm',
					title: m.faq_migration_mdm_title(),
					content: `<p>${m.faq_migration_mdm_intro()}</p>
					<ol class="list-decimal ml-5 mt-3 space-y-2">
						<li>${m.faq_migration_mdm_1()}</li>
						<li>${m.faq_migration_mdm_2()}</li>
						<li>${m.faq_migration_mdm_3()}</li>
					</ol>
					<p class="mt-3">${m.faq_migration_mdm_outro()}</p>`
				},
				{
					id: 'alongside-mdm',
					title: m.faq_migration_alongside_title(),
					content: `<p>${m.faq_migration_alongside_content()}</p>`
				}
			]
		},
		{
			id: 'support',
			title: m.faq_cat_support(),
			items: [
				{
					id: 'support-included',
					title: m.faq_support_included_title(),
					content: `<p>${m.faq_support_included_intro()}</p>
					<ul class="list-disc ml-5 mt-3 space-y-1">
						<li>${m.faq_support_included_1()}</li>
						<li>${m.faq_support_included_2()}</li>
						<li>${m.faq_support_included_3()}</li>
						<li>${m.faq_support_included_4()}</li>
					</ul>`
				},
				{
					id: 'teacher-training',
					title: m.faq_support_teacher_title(),
					content: `<p>${m.faq_support_teacher_content()}</p>`
				},
				{
					id: 'onsite-training',
					title: m.faq_support_onsite_title(),
					content: `<p>${m.faq_support_onsite_intro()} <button onclick="window.$chatwoot && window.$chatwoot.toggle('open')" class="text-primary-green underline hover:no-underline cursor-pointer bg-transparent border-none p-0 font-inherit">${m.faq_support_onsite_contact()}</button> ${m.faq_support_onsite_outro()}</p>`
				},
				{
					id: 'self-hosted-support',
					title: m.faq_support_selfhost_title(),
					content: `<p>${m.faq_support_selfhost_intro()}</p>
					<ul class="list-disc ml-5 mt-3 space-y-1">
						<li>${m.faq_support_selfhost_1()}</li>
						<li>${m.faq_support_selfhost_2()}</li>
						<li>${m.faq_support_selfhost_3()}</li>
					</ul>`
				}
			]
		},
		{
			id: 'security',
			title: m.faq_cat_security(),
			items: [
				{
					id: 'how-secure',
					title: m.faq_security_how_title(),
					content: `<p>${m.faq_security_how_intro()}</p>
					<ul class="list-disc ml-5 mt-3 space-y-1">
						<li>${m.faq_security_how_1()}</li>
						<li>${m.faq_security_how_2()}</li>
						<li>${m.faq_security_how_3()}</li>
						<li>${m.faq_security_how_4()}</li>
						<li>${m.faq_security_how_5()}</li>
						<li>${m.faq_security_how_6()}</li>
					</ul>`
				},
				{
					id: 'remote-wipe',
					title: m.faq_security_wipe_title(),
					content: `<p>${m.faq_security_wipe_content()}</p>`
				},
				{
					id: 'certifications',
					title: m.faq_security_certs_title(),
					content: `<p>${m.faq_security_certs_intro()}</p>
					<ul class="list-disc ml-5 mt-3 space-y-1">
						<li>${m.faq_security_certs_1()}</li>
						<li>${m.faq_security_certs_2()}</li>
						<li>${m.faq_security_certs_3()}</li>
					</ul>`
				}
			]
		}
	]);
</script>

<svelte:head>
	<title>{m.faq_meta_title()}</title>
	<meta name="description" content={m.faq_meta_description()} />
	<meta name="keywords" content={m.faq_meta_keywords()} />

	<!-- Open Graph tags -->
	<meta property="og:title" content={m.faq_og_title()} />
	<meta property="og:description" content={m.faq_og_description()} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://edutab.eu/faq" />
	<meta property="og:image" content="https://edutab.eu/images/og/faq.jpg" />

	<!-- Twitter Card tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={m.faq_og_title()} />
	<meta name="twitter:description" content={m.faq_og_description()} />
	<meta name="twitter:image" content="https://edutab.eu/images/og/faq.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://edutab.eu/faq" />
</svelte:head>

<!-- Hero Section with Photo Background -->
<section class="relative w-full overflow-hidden faq-hero-section">
	<!-- Background image -->
	<div class="absolute inset-0 z-0 bg-neutral-900">
		<img
			src="/faq.webp"
			alt={m.faq_hero_title()}
			class="w-full h-full object-cover faq-hero-bg-image"
			class:image-loaded={imageLoaded}
			loading="eager"
			fetchpriority="high"
			onload={() => (imageLoaded = true)}
		/>
	</div>

	<!-- Gradient overlay for text readability -->
	<div class="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

	<!-- Decorative gradient accent at bottom -->
	<div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-green/20 to-transparent z-10"></div>

	<!-- Content overlay -->
	<div class="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 faq-hero-content-wrapper">
		<div class="max-w-5xl mx-auto text-center">
			<!-- Icon badge -->
			<div class="faq-hero-badge inline-flex items-center gap-2 justify-center p-3 rounded-2xl bg-gradient-to-br from-primary-green to-primary-greenLight mb-6">
				<HelpCircle class="w-8 h-8 text-white" />
			</div>

			<!-- Main headline with fluid typography -->
			<h1 class="faq-hero-title font-display font-bold text-white leading-tight">
				{m.faq_hero_title()}
			</h1>

			<!-- Subtitle -->
			<p class="faq-hero-subtitle text-primary-greenLight font-semibold">
				{m.faq_hero_subtitle()}
			</p>

			<!-- Contact link -->
			<p class="faq-hero-contact text-white/90">
				{m.faq_hero_contact_prefix()}{' '}
				<button onclick={openChatwoot} class="text-primary-coral underline hover:no-underline font-medium transition-colors duration-200 cursor-pointer bg-transparent border-none p-0">
					{m.faq_hero_contact_link()}
				</button>
			</p>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="faq-scroll-indicator">
		<svg
			class="w-8 h-8 text-white/70"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			/>
		</svg>
	</div>
</section>

<!-- Category Navigation -->
<Section variant="accent" padding="compact">
	<div class="max-w-6xl mx-auto">
		<h2 class="text-lg font-semibold text-neutral-700 mb-4">{m.faq_nav_title()}</h2>
		<nav aria-label={m.aria_faq_categories()} class="flex flex-wrap gap-3">
			{#each categories as category}
				<a
					href="#{category.id}"
					class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-neutral-50 border border-neutral-200 hover:border-primary-green transition-all duration-200 text-sm font-medium text-neutral-700 hover:text-primary-green no-underline"
				>
					{category.title}
				</a>
			{/each}
		</nav>
	</div>
</Section>

<!-- FAQ Categories -->
{#each categories as category, index}
	<Reveal delay={index * 50}>
		<Section id={category.id} padding={category.id === categories[0].id ? 'normal' : 'compact'} variant={index % 2 === 0 ? 'default' : 'accent'}>
			<div class="max-w-4xl mx-auto">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-2">
					{category.title}
				</h2>
				<div class="w-16 h-1 bg-gradient-to-r from-primary-green to-primary-greenLight rounded-full mb-8"></div>
				<Accordion items={category.items} multiple={false} />
			</div>
		</Section>
	</Reveal>
{/each}

<!-- Contact CTA Section -->
<Reveal>
	<Section variant="accent">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
				{m.faq_cta_title()}
			</h2>
			<p class="text-xl text-neutral-600 mb-8">{m.faq_cta_subtitle()}</p>
			<div class="grid md:grid-cols-3 gap-6 mb-8">
				<div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 flex flex-col">
					<div class="flex flex-col items-center gap-3 flex-grow">
						<Mail class="w-10 h-10 text-primary-green" />
						<h3 class="text-xl font-semibold text-neutral-900">{m.faq_cta_contact_title()}</h3>
						<p class="text-neutral-600 text-sm text-center">{m.faq_cta_contact_desc()}</p>
					</div>
					<Button onclick={openChatwoot} size="fluid" class="mt-4 bg-primary-green hover:bg-primary-greenDark text-white hover:text-white shadow-lg font-semibold">
						{m.faq_cta_contact_btn()}
					</Button>
				</div>
				<div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 flex flex-col">
					<div class="flex flex-col items-center gap-3 flex-grow">
						<HelpCircle class="w-10 h-10 text-primary-green" />
						<h3 class="text-xl font-semibold text-neutral-900">{m.faq_cta_trial_title()}</h3>
						<p class="text-neutral-600 text-sm text-center">{m.faq_cta_trial_desc()}</p>
					</div>
					<Button href="https://portal.edutab.eu/register" size="fluid" class="mt-4 bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white shadow-lg font-semibold">
						{m.faq_cta_trial_btn()}
					</Button>
				</div>
				<div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 flex flex-col">
					<div class="flex flex-col items-center gap-3 flex-grow">
						<BookOpen class="w-10 h-10 text-primary-green" />
						<h3 class="text-xl font-semibold text-neutral-900">{m.faq_cta_docs_title()}</h3>
						<p class="text-neutral-600 text-sm text-center">{m.faq_cta_docs_desc()}</p>
					</div>
					<Button href={localizeHref('/docs')} size="fluid" class="mt-4 bg-primary-green hover:bg-primary-greenDark text-white hover:text-white shadow-lg font-semibold">
						{m.faq_cta_docs_btn()}
					</Button>
				</div>
			</div>
		</div>
	</Section>
</Reveal>

<!-- Footer Note -->
<Section padding="compact">
	<div class="text-center text-neutral-500 text-sm">
		{m.faq_footer_note()}
	</div>
</Section>

<style>
	/* Hero section with fluid viewport height - matches homepage hero */
	.faq-hero-section {
		/* Fallback cascade: 100vh -> 100svh -> 100dvh */
		height: 100vh;
		height: 100svh;
		height: 100dvh;
		min-height: 31.25rem; /* 500px - minimum usable height */
	}

	/* Background image fade-in */
	.faq-hero-bg-image {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	.faq-hero-bg-image.image-loaded {
		opacity: 1;
	}

	/* Fluid typography for hero badge */
	.faq-hero-badge {
		--capped-viewport: min(100vw, 63.9375rem);
		padding: clamp(0.5rem, 1.5 * var(--capped-viewport) / 100, 0.875rem);
		border-radius: clamp(0.75rem, 2 * var(--capped-viewport) / 100, 1rem);
	}

	.faq-hero-badge :global(svg) {
		width: clamp(1.5rem, 2.5 * var(--capped-viewport) / 100, 2.5rem);
		height: clamp(1.5rem, 2.5 * var(--capped-viewport) / 100, 2.5rem);
	}

	/* Fluid typography for hero title - capped at 1023px viewport */
	.faq-hero-title {
		--capped-viewport: min(100vw, 63.9375rem);
		font-size: clamp(1.75rem, 4.5 * var(--capped-viewport) / 100 + 0.5rem, 4rem);
		margin-bottom: clamp(1rem, 3 * var(--capped-viewport) / 100, 2rem);
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	/* Fluid subtitle - capped at 1023px viewport */
	.faq-hero-subtitle {
		--capped-viewport: min(100vw, 63.9375rem);
		font-size: clamp(1rem, 1.8 * var(--capped-viewport) / 100, 1.5rem);
		margin-bottom: clamp(0.75rem, 2 * var(--capped-viewport) / 100, 1.5rem);
	}

	/* Fluid contact text - capped at 1023px viewport */
	.faq-hero-contact {
		--capped-viewport: min(100vw, 63.9375rem);
		font-size: clamp(0.875rem, 1.2 * var(--capped-viewport) / 100, 1.125rem);
	}

	/* Scroll indicator positioning */
	.faq-scroll-indicator {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: max(1rem, env(safe-area-inset-bottom, 0px));
		z-index: 20;
		animation: bounce 2s infinite;
	}

	@keyframes bounce {
		0%, 100% {
			transform: translateY(0) translateX(-50%);
		}
		50% {
			transform: translateY(-10px) translateX(-50%);
		}
	}

	/* Short viewport adjustments (landscape mobile) */
	@media (max-height: 28.125rem) { /* 450px */
		.faq-hero-section {
			min-height: 17.5rem; /* 280px */
		}

		.faq-hero-badge {
			padding: 0.5rem;
			margin-bottom: 0.5rem;
		}

		.faq-hero-badge :global(svg) {
			width: 1.5rem;
			height: 1.5rem;
		}

		.faq-hero-title {
			margin-bottom: 0.5rem;
		}

		.faq-hero-subtitle {
			margin-bottom: 0.5rem;
		}

		.faq-hero-contact {
			font-size: 0.875rem;
		}

		.faq-scroll-indicator {
			display: none;
		}
	}

	/* Extra short viewports */
	@media (max-height: 20rem) { /* 320px */
		.faq-hero-section {
			min-height: 16.25rem; /* 260px */
		}

		.faq-hero-content-wrapper {
			padding-top: 1.5rem;
		}

		.faq-hero-badge {
			display: none;
		}

		.faq-hero-subtitle {
			display: none;
		}
	}
</style>
