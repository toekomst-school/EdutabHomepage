<script lang="ts">
	import Section from '$lib/components/sections/Section.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Code from '@lucide/svelte/icons/code';
	import Eye from '@lucide/svelte/icons/eye';
	import Shield from '@lucide/svelte/icons/shield';
	import GitPullRequestCreate from '@lucide/svelte/icons/git-pull-request-create';
	import Github from '@lucide/svelte/icons/github';
	import AlertCircle from '@lucide/svelte/icons/alert-circle';
	import CheckCircle2 from '@lucide/svelte/icons/check-circle-2';
	import BookOpen from '@lucide/svelte/icons/book-open';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';

	let imageLoaded = $state(false);
</script>

<svelte:head>
	<title>{m.os_meta_title()}</title>
	<meta name="description" content={m.os_meta_description()} />
	<meta name="keywords" content={m.os_meta_keywords()} />

	<!-- Open Graph -->
	<meta property="og:title" content={m.os_og_title()} />
	<meta property="og:description" content={m.os_og_description()} />
	<meta property="og:image" content="/images/og/open-source.jpg" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://edutab.eu/open-source-education-technology" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={m.os_og_title()} />
	<meta name="twitter:description" content={m.os_og_description()} />
	<meta name="twitter:image" content="/images/og/open-source.jpg" />

	<!-- Canonical -->
	<link rel="canonical" href="https://edutab.eu/open-source-education-technology" />
</svelte:head>

<!-- Full viewport hero section with photo background -->
<section class="relative w-full overflow-hidden hero-photo-section">
	<!-- Background image -->
	<div class="absolute inset-0 z-0 bg-neutral-900">
		<img
			src="/open.webp"
			alt={m.os_og_title()}
			class="w-full h-full object-cover hero-bg-image"
			class:image-loaded={imageLoaded}
			loading="eager"
			fetchpriority="high"
			onload={() => (imageLoaded = true)}
		/>
	</div>

	<!-- Gradient overlay for text readability -->
	<div class="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

	<!-- Decorative gradient accent at bottom -->
	<div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-green/25 to-transparent z-10"></div>

	<!-- Content overlay -->
	<div class="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 hero-content-wrapper">
		<div class="max-w-5xl mx-auto text-center">
			<!-- Icon badge -->
			<div class="hero-icon-badge inline-flex items-center justify-center mb-6">
				<Code class="w-7 h-7 text-white" />
			</div>

			<!-- Main headline with fluid typography -->
			<h1 class="hero-title font-display font-bold text-white leading-tight">
				{m.os_hero_title_line1()}<br />
				<span class="text-primary-greenLight">{m.os_hero_title_line2()}</span>
			</h1>

			<!-- Subheadline with fluid typography -->
			<p class="hero-subtitle text-white/90">
				{m.os_hero_subtitle()}
			</p>

			<!-- CTA buttons with fluid sizing -->
			<div class="hero-buttons flex flex-wrap items-center justify-center">
				<Button
					variant="default"
					size="fluid"
					href="https://portal.edutab.eu/register"
					class="hero-btn bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white shadow-lg"
				>
					{m.os_hero_cta_trial()}
				</Button>
				<Button
					variant="outline"
					size="fluid"
					href="https://github.com/edutab"
					target="_blank"
					rel="noopener noreferrer"
					class="hero-btn border-2 border-white text-white hover:bg-white hover:text-neutral-900 bg-transparent"
				>
					<Github class="w-5 h-5 mr-2" />
					{m.os_hero_cta_github()}
				</Button>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="hero-scroll-indicator">
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

<style>
	/* Hero section with fluid viewport height */
	.hero-photo-section {
		/* Fallback cascade: 100vh -> 100svh -> 100dvh */
		height: 100vh;
		height: 100svh;
		height: 100dvh;
		min-height: 31.25rem; /* 500px - minimum usable height */
	}

	/* Background image fade-in */
	.hero-bg-image {
		opacity: 0;
		filter: blur(0);
		transition: opacity 0.3s ease-in-out;
	}

	.hero-bg-image.image-loaded {
		opacity: 1;
	}


	/* Fluid icon badge - capped at 1023px viewport */
	.hero-icon-badge {
		--capped-viewport: min(100vw, 63.9375rem);
		width: clamp(3rem, 8 * var(--capped-viewport) / 100, 5rem);
		height: clamp(3rem, 8 * var(--capped-viewport) / 100, 5rem);
		border-radius: clamp(0.75rem, 2 * var(--capped-viewport) / 100, 1.25rem);
		background: linear-gradient(135deg, #10b981, #34d399);
		box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4);
	}

	/* Fluid typography for hero title - capped at 1023px viewport */
	.hero-title {
		--capped-viewport: min(100vw, 63.9375rem);
		font-size: clamp(1.75rem, 5 * var(--capped-viewport) / 100 + 0.5rem, 5rem);
		margin-bottom: clamp(1rem, 3 * var(--capped-viewport) / 100, 2rem);
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	/* Fluid subtitle - capped at 1023px viewport */
	.hero-subtitle {
		--capped-viewport: min(100vw, 63.9375rem);
		font-size: clamp(0.875rem, 1.5 * var(--capped-viewport) / 100, 1.375rem);
		line-height: 1.6;
		max-width: clamp(20rem, 60 * var(--capped-viewport) / 100, 48rem);
		margin-left: auto;
		margin-right: auto;
		margin-bottom: clamp(1.5rem, 4 * var(--capped-viewport) / 100, 3rem);
	}

	/* Fluid button container - capped at 1023px viewport */
	.hero-buttons {
		--capped-viewport: min(100vw, 63.9375rem);
		gap: clamp(0.25rem, 1 * var(--capped-viewport) / 100, 0.75rem);
	}

	/* Scroll indicator positioning */
	.hero-scroll-indicator {
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
		.hero-photo-section {
			min-height: 17.5rem; /* 280px */
		}

		.hero-icon-badge {
			display: none;
		}

		.hero-title {
			margin-bottom: 0.5rem;
		}

		.hero-subtitle {
			display: none;
		}

		.hero-buttons {
			margin-top: 0.5rem;
			gap: 0.5rem;
			flex-wrap: nowrap;
		}

		.hero-scroll-indicator {
			display: none;
		}
	}

	/* Extra short viewports */
	@media (max-height: 20rem) { /* 320px */
		.hero-photo-section {
			min-height: 16.25rem; /* 260px */
		}

		.hero-content-wrapper {
			padding-top: 1.5rem;
		}

		.hero-btn {
			min-height: 2.5rem; /* Maintain 40px touch target */
		}
	}
</style>

<!-- Why Open Source Matters Section -->
<Section variant="accent" padding="normal">
	<div class="max-w-6xl mx-auto">
		<Reveal delay={0}>
			<h2 class="text-3xl md:text-4xl font-bold font-display text-neutral-900 mb-6 text-center">
				{m.os_why_title()}
			</h2>
		</Reveal>

		<Reveal delay={100}>
			<p class="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-6">
				{m.os_why_subtitle()}
			</p>
		</Reveal>

		<!-- The Black Box Problem -->
		<div class="grid md:grid-cols-2 gap-8 mb-8">
			<Reveal delay={200}>
				<div class="bg-white rounded-2xl shadow-lg p-2 md:p-4 border-l-4 border-accent-green">
					<div class="flex flex-col md:flex-row items-center md:items-center gap-3 mb-6">
						<div class="w-12 h-12 rounded-full bg-accent-green/10 flex items-center justify-center flex-shrink-0">
							<CheckCircle2 class="w-6 h-6 text-accent-green" />
						</div>
						<h3 class="text-2xl font-bold font-display text-neutral-900 text-center md:text-left">
							{m.os_solution_title()}
						</h3>
					</div>
					<p class="text-neutral-600 mb-4 leading-relaxed">
						{m.os_solution_p1()}
					</p>
					<p class="text-neutral-600 mb-6 leading-relaxed">
						{m.os_solution_p2()}
					</p>
					<div class="bg-accent-green/5 rounded-xl p-4 border border-accent-green/20">
						<p class="text-neutral-700 font-medium flex items-center gap-2">
							<Eye class="w-5 h-5 text-accent-green flex-shrink-0" />
							{m.os_solution_motto()}
						</p>
					</div>
				</div>
			</Reveal>

			<Reveal delay={300}>
				<div class="bg-white rounded-2xl shadow-lg p-2 md:p-4 border-l-4 border-accent-red">
					<div class="flex flex-col md:flex-row items-center md:items-center gap-3 mb-6">
						<div class="w-12 h-12 rounded-full bg-accent-red/10 flex items-center justify-center flex-shrink-0">
							<AlertCircle class="w-6 h-6 text-accent-red" />
						</div>
						<h3 class="text-2xl font-bold font-display text-neutral-900 text-center md:text-left">
							{m.os_blackbox_title()}
						</h3>
					</div>
					<p class="text-neutral-600 mb-4 leading-relaxed">
						{m.os_blackbox_intro()}
					</p>
					<ul class="space-y-3">
						<li class="flex items-start gap-3">
							<span class="text-accent-red flex-shrink-0 mt-1">✗</span>
							<span class="text-neutral-700">{m.os_blackbox_1()}</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-accent-red flex-shrink-0 mt-1">✗</span>
							<span class="text-neutral-700">{m.os_blackbox_2()}</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-accent-red flex-shrink-0 mt-1">✗</span>
							<span class="text-neutral-700">{m.os_blackbox_3()}</span>
						</li>
						<li class="flex items-start gap-3">
							<span class="text-accent-red flex-shrink-0 mt-1">✗</span>
							<span class="text-neutral-700">{m.os_blackbox_4()}</span>
						</li>
					</ul>
					<p class="text-neutral-500 mt-6 italic">
						{m.os_blackbox_outro()}
					</p>
				</div>
			</Reveal>
		</div>
	</div>
</Section>

<!-- Tech Stack / Open Source Foundations -->
<Section variant="default" padding="normal">
	<div class="max-w-6xl mx-auto">
		<Reveal delay={0}>
			<h2 class="text-3xl md:text-4xl font-bold font-display text-neutral-900 mb-6 text-center">
				{m.os_foundations_title()}
			</h2>
		</Reveal>

		<Reveal delay={100}>
			<p class="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
				{m.os_foundations_subtitle()}
			</p>
		</Reveal>

		<Reveal delay={200}>
			<TechStack />
		</Reveal>

		<!-- What this means for you -->
		<div class="grid md:grid-cols-3 gap-6 mt-12">
			<Reveal delay={300}>
				<div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
					<div class="w-12 h-12 rounded-lg bg-primary-green/10 flex items-center justify-center mb-4">
						<Shield class="w-6 h-6 text-primary-green" />
					</div>
					<h3 class="text-lg font-bold font-display text-neutral-900 mb-2">
						{m.os_security_title()}
					</h3>
					<p class="text-neutral-600 text-sm leading-relaxed flex-grow">
						{m.os_security_desc()}
					</p>
				</div>
			</Reveal>

			<Reveal delay={400}>
				<div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
					<div class="w-12 h-12 rounded-lg bg-primary-green/10 flex items-center justify-center mb-4">
						<GitPullRequestCreate class="w-6 h-6 text-primary-green" />
					</div>
					<h3 class="text-lg font-bold font-display text-neutral-900 mb-2">
						{m.os_lockin_title()}
					</h3>
					<p class="text-neutral-600 text-sm leading-relaxed flex-grow">
						{m.os_lockin_desc()}
					</p>
				</div>
			</Reveal>

			<Reveal delay={500}>
				<div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
					<div class="w-12 h-12 rounded-lg bg-primary-green/10 flex items-center justify-center mb-4">
						<Code class="w-6 h-6 text-primary-green" />
					</div>
					<h3 class="text-lg font-bold font-display text-neutral-900 mb-2">
						{m.os_improvement_title()}
					</h3>
					<p class="text-neutral-600 text-sm leading-relaxed flex-grow">
						{m.os_improvement_desc()}
					</p>
				</div>
			</Reveal>
		</div>
	</div>
</Section>

<!-- Our Contributions -->
<Section variant="accent" padding="normal">
	<div class="max-w-6xl mx-auto">
		<Reveal delay={0}>
			<h2 class="text-3xl md:text-4xl font-bold font-display text-neutral-900 mb-6 text-center">
				{m.os_contributions_title()}
			</h2>
		</Reveal>

		<Reveal delay={100}>
			<p class="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
				{m.os_contributions_subtitle()}
			</p>
		</Reveal>

		<div class="grid md:grid-cols-2 gap-8 mb-12 overflow-hidden">
			<Reveal delay={200} class="min-w-0">
				<div class="bg-white rounded-2xl shadow-lg p-2 md:p-4">
					<h3 class="text-xl font-bold font-display text-neutral-900 mb-6 flex flex-col md:flex-row items-center md:items-center gap-3">
						<GitPullRequestCreate class="w-6 h-6 text-primary-green" />
						{m.os_improvements_title()}
					</h3>
					<ul class="space-y-4">
						<li class="flex items-start gap-3">
							<CheckCircle2 class="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
							<span class="text-neutral-700"><strong>{m.os_improvements_1_label()}</strong> {m.os_improvements_1_desc()}</span>
						</li>
						<li class="flex items-start gap-3">
							<CheckCircle2 class="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
							<span class="text-neutral-700"><strong>{m.os_improvements_2_label()}</strong> {m.os_improvements_2_desc()}</span>
						</li>
						<li class="flex items-start gap-3">
							<CheckCircle2 class="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
							<span class="text-neutral-700"><strong>{m.os_improvements_3_label()}</strong> {m.os_improvements_3_desc()}</span>
						</li>
						<li class="flex items-start gap-3">
							<CheckCircle2 class="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
							<span class="text-neutral-700"><strong>{m.os_improvements_4_label()}</strong> {m.os_improvements_4_desc()}</span>
						</li>
					</ul>
				</div>
			</Reveal>

			<Reveal delay={300} class="min-w-0">
				<div class="bg-gradient-to-br from-primary-green/5 to-primary-greenLight/5 rounded-2xl p-2 md:p-4 border-2 border-primary-green/20">
					<h3 class="text-xl font-bold font-display text-neutral-900 mb-4">
						{m.os_repos_title()}
					</h3>
					<p class="text-neutral-600 mb-6">
						{m.os_repos_desc()}
					</p>
					<Button
						href="https://github.com/edutab"
						target="_blank"
						rel="noopener noreferrer"
						variant="default"
						size="fluid"
						class="w-full md:w-auto"
					>
						<Github class="w-5 h-5 mr-2" />
						{m.os_repos_cta()}
					</Button>
					<p class="text-sm text-neutral-500 mt-4">
						{m.os_repos_footer()}
					</p>
				</div>
			</Reveal>
		</div>
	</div>
</Section>

<!-- Trust Equation -->
<Section variant="default" padding="normal">
	<div class="max-w-6xl mx-auto">
		<Reveal delay={0}>
			<h2 class="text-3xl md:text-4xl font-bold font-display text-neutral-900 mb-12 text-center">
				{m.os_trust_title()}
			</h2>
		</Reveal>

		<div class="grid md:grid-cols-2 gap-8">
			<Reveal delay={100}>
				<div class="bg-neutral-50 rounded-2xl p-2 md:p-4 border-2 border-neutral-200">
					<div class="flex items-center gap-3 mb-6">
						<div class="w-10 h-10 rounded-full bg-accent-red/10 flex items-center justify-center">
							<AlertCircle class="w-5 h-5 text-accent-red" />
						</div>
						<h3 class="text-xl font-bold font-display text-neutral-900">
							{m.os_trust_proprietary_title()}
						</h3>
					</div>
					<ol class="space-y-4">
						<li class="flex items-start gap-4">
							<span class="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 font-bold text-sm">1</span>
							<p class="text-neutral-700 pt-1">{m.os_trust_proprietary_1()}</p>
						</li>
						<li class="flex items-start gap-4">
							<span class="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 font-bold text-sm">2</span>
							<p class="text-neutral-700 pt-1">{m.os_trust_proprietary_2()}</p>
						</li>
						<li class="flex items-start gap-4">
							<span class="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 font-bold text-sm">3</span>
							<p class="text-neutral-700 pt-1">{m.os_trust_proprietary_3()}</p>
						</li>
					</ol>
				</div>
			</Reveal>

			<Reveal delay={200}>
				<div class="bg-accent-green/5 rounded-2xl p-2 md:p-4 border-2 border-accent-green/30">
					<div class="flex items-center gap-3 mb-6">
						<div class="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center">
							<CheckCircle2 class="w-5 h-5 text-accent-green" />
						</div>
						<h3 class="text-xl font-bold font-display text-neutral-900">
							{m.os_trust_opensource_title()}
						</h3>
					</div>
					<ol class="space-y-4">
						<li class="flex items-start gap-4">
							<span class="flex-shrink-0 w-8 h-8 rounded-full bg-accent-green text-white flex items-center justify-center font-bold text-sm">1</span>
							<p class="text-neutral-700 pt-1">{m.os_trust_opensource_1()}</p>
						</li>
						<li class="flex items-start gap-4">
							<span class="flex-shrink-0 w-8 h-8 rounded-full bg-accent-green text-white flex items-center justify-center font-bold text-sm">2</span>
							<p class="text-neutral-700 pt-1">{m.os_trust_opensource_2()}</p>
						</li>
						<li class="flex items-start gap-4">
							<span class="flex-shrink-0 w-8 h-8 rounded-full bg-accent-green text-white flex items-center justify-center font-bold text-sm">3</span>
							<p class="text-neutral-700 pt-1">{m.os_trust_opensource_3()}</p>
						</li>
					</ol>
				</div>
			</Reveal>
		</div>

		<Reveal delay={300}>
			<div class="mt-12 text-center">
				<p class="text-xl text-neutral-700 font-medium max-w-3xl mx-auto">
					{m.os_trust_question()}
				</p>
			</div>
		</Reveal>
	</div>
</Section>

<!-- Common Questions -->
<Section variant="accent" padding="normal">
	<div class="max-w-4xl mx-auto">
		<Reveal delay={0}>
			<h2 class="text-3xl md:text-4xl font-bold font-display text-neutral-900 mb-12 text-center">
				{m.os_questions_title()}
			</h2>
		</Reveal>

		<div class="space-y-8">
			<Reveal delay={100}>
				<div class="bg-white rounded-xl p-6 shadow-md">
					<h3 class="text-lg font-bold font-display text-neutral-900 mb-3">
						{m.os_q1_title()}
					</h3>
					<p class="text-neutral-600 leading-relaxed">
						{m.os_q1_answer()}
					</p>
				</div>
			</Reveal>

			<Reveal delay={200}>
				<div class="bg-white rounded-xl p-6 shadow-md">
					<h3 class="text-lg font-bold font-display text-neutral-900 mb-3">
						{m.os_q2_title()}
					</h3>
					<p class="text-neutral-600 leading-relaxed">
						{m.os_q2_answer()}
					</p>
				</div>
			</Reveal>

			<Reveal delay={300}>
				<div class="bg-white rounded-xl p-6 shadow-md">
					<h3 class="text-lg font-bold font-display text-neutral-900 mb-3">
						{m.os_q3_title()}
					</h3>
					<p class="text-neutral-600 leading-relaxed">
						{m.os_q3_answer_p1()} <strong>{m.os_q3_answer_selfhost()}</strong> {m.os_q3_answer_p2()} <strong>{m.os_q3_answer_cloud()}</strong> {m.os_q3_answer_p3()}
					</p>
				</div>
			</Reveal>

			<Reveal delay={400}>
				<div class="bg-white rounded-xl p-6 shadow-md">
					<h3 class="text-lg font-bold font-display text-neutral-900 mb-3">
						{m.os_q4_title()}
					</h3>
					<p class="text-neutral-600 leading-relaxed">
						{m.os_q4_answer()}
					</p>
				</div>
			</Reveal>
		</div>
	</div>
</Section>

<!-- Transparency in Everything -->
<Section variant="default" padding="normal">
	<div class="max-w-4xl mx-auto">
		<Reveal delay={0}>
			<h2 class="text-3xl md:text-4xl font-bold font-display text-neutral-900 mb-6 text-center">
				{m.os_transparency_title()}
			</h2>
		</Reveal>

		<Reveal delay={100}>
			<p class="text-lg text-neutral-600 text-center max-w-3xl mx-auto mb-12">
				{m.os_transparency_subtitle()}
			</p>
		</Reveal>

		<div class="grid md:grid-cols-2 gap-6">
			<Reveal delay={200}>
				<div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
					<div class="w-12 h-12 rounded-lg bg-primary-green/10 flex items-center justify-center mb-4">
						<Eye class="w-6 h-6 text-primary-green" />
					</div>
					<h3 class="text-lg font-bold font-display text-neutral-900 mb-2">
						{m.os_transparent_pricing_title()}
					</h3>
					<p class="text-neutral-600 text-sm leading-relaxed mb-4">
						{m.os_transparent_pricing_desc()}
					</p>
					<Button href={localizeHref('/pricing')} variant="default" size="fluid" class="bg-primary-green hover:bg-primary-greenDark text-white hover:text-white">
						{m.os_transparent_pricing_btn()}
					</Button>
				</div>
			</Reveal>

			<Reveal delay={300}>
				<div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
					<div class="w-12 h-12 rounded-lg bg-primary-green/10 flex items-center justify-center mb-4">
						<Shield class="w-6 h-6 text-primary-green" />
					</div>
					<h3 class="text-lg font-bold font-display text-neutral-900 mb-2">
						{m.os_transparent_data_title()}
					</h3>
					<p class="text-neutral-600 text-sm leading-relaxed">
						{m.os_transparent_data_desc()}
					</p>
				</div>
			</Reveal>

			<Reveal delay={400}>
				<div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
					<div class="w-12 h-12 rounded-lg bg-primary-green/10 flex items-center justify-center mb-4">
						<BookOpen class="w-6 h-6 text-primary-green" />
					</div>
					<h3 class="text-lg font-bold font-display text-neutral-900 mb-2">
						{m.os_transparent_docs_title()}
					</h3>
					<p class="text-neutral-600 text-sm leading-relaxed">
						{m.os_transparent_docs_desc()}
					</p>
				</div>
			</Reveal>

			<Reveal delay={500}>
				<div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
					<div class="w-12 h-12 rounded-lg bg-primary-green/10 flex items-center justify-center mb-4">
						<Github class="w-6 h-6 text-primary-green" />
					</div>
					<h3 class="text-lg font-bold font-display text-neutral-900 mb-2">
						{m.os_transparent_roadmap_title()}
					</h3>
					<p class="text-neutral-600 text-sm leading-relaxed">
						{m.os_transparent_roadmap_desc()}
					</p>
				</div>
			</Reveal>
		</div>
	</div>
</Section>

<!-- Final CTA -->
<Section variant="accent" padding="spacious">
	<div class="max-w-4xl mx-auto text-center">
		<Reveal delay={0}>
			<h2 class="text-3xl md:text-4xl font-bold font-display text-neutral-900 mb-6">
				{m.os_final_title()}
			</h2>
		</Reveal>

		<Reveal delay={100}>
			<p class="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto">
				{m.os_final_subtitle()}
			</p>
		</Reveal>

		<div class="grid md:grid-cols-3 gap-6">
			<Reveal delay={200}>
				<div class="bg-white rounded-2xl p-2 md:p-4 shadow-lg hover:shadow-xl transition-shadow">
					<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-green to-primary-greenLight flex items-center justify-center mx-auto mb-4">
						<Eye class="w-7 h-7 text-white" />
					</div>
					<h3 class="text-xl font-bold font-display text-neutral-900 mb-3">
						{m.os_final_try_title()}
					</h3>
					<p class="text-neutral-600 text-sm mb-6">
						{m.os_final_try_desc()}
					</p>
					<Button href="https://portal.edutab.eu/register" size="fluid" class="w-full bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white shadow-lg font-semibold">
						{m.os_final_try_btn()}
					</Button>
				</div>
			</Reveal>

			<Reveal delay={300}>
				<div class="bg-white rounded-2xl p-2 md:p-4 shadow-lg hover:shadow-xl transition-shadow">
					<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-green to-primary-greenLight flex items-center justify-center mx-auto mb-4">
						<Github class="w-7 h-7 text-white" />
					</div>
					<h3 class="text-xl font-bold font-display text-neutral-900 mb-3">
						{m.os_final_explore_title()}
					</h3>
					<p class="text-neutral-600 text-sm mb-6">
						{m.os_final_explore_desc()}
					</p>
					<Button
						href="https://github.com/edutab"
						target="_blank"
						rel="noopener noreferrer"
						size="fluid"
						class="w-full bg-primary-green hover:bg-primary-greenDark text-white hover:text-white shadow-lg font-semibold"
					>
						<Github class="w-4 h-4 mr-2" />
						{m.os_final_explore_btn()}
					</Button>
				</div>
			</Reveal>

			<Reveal delay={400}>
				<div class="bg-white rounded-2xl p-2 md:p-4 shadow-lg hover:shadow-xl transition-shadow">
					<div class="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-green to-primary-greenLight flex items-center justify-center mx-auto mb-4">
						<Code class="w-7 h-7 text-white" />
					</div>
					<h3 class="text-xl font-bold font-display text-neutral-900 mb-3">
						{m.os_final_selfhost_title()}
					</h3>
					<p class="text-neutral-600 text-sm mb-6">
						{m.os_final_selfhost_desc()}
					</p>
					<Button
						href="https://github.com/edutab"
						target="_blank"
						rel="noopener noreferrer"
						size="fluid"
						class="w-full bg-primary-green hover:bg-primary-greenDark text-white hover:text-white shadow-lg font-semibold"
					>
						<BookOpen class="w-4 h-4 mr-2" />
						{m.os_final_selfhost_btn()}
					</Button>
				</div>
			</Reveal>
		</div>

		<Reveal delay={500}>
			<p class="mt-12 text-neutral-500 text-sm">
				{m.os_final_footer()}
			</p>
		</Reveal>
	</div>
</Section>
