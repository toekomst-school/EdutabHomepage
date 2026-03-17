<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { localizeHref } from '$lib/paraglide/runtime.js';

	let imageLoaded = $state(false);
</script>

<!-- Full viewport hero section -->
<section class="relative w-full overflow-hidden hero-photo-section">
	<!-- Background image -->
	<div class="absolute inset-0 z-0 bg-neutral-900">
		<img
			src="/classroom.webp"
			alt={m.aria_hero_image()}
			class="w-full h-full object-cover hero-bg-image"
			class:image-loaded={imageLoaded}
			loading="eager"
			fetchpriority="high"
			onload={() => (imageLoaded = true)}
		/>
	</div>

	<!-- Gradient overlay for text readability -->
	<div class="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/45 to-black/65"></div>

	<!-- Decorative gradient accent at bottom -->
	<div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-green/20 to-transparent z-10"></div>

	<!-- Content overlay -->
	<div class="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 hero-content-wrapper">
		<div class="max-w-5xl mx-auto text-center">
			<!-- Main headline with fluid typography -->
			<h1 class="hero-title font-display font-bold text-white leading-tight">
				{m.hero_title_line1()}<br />
				<span class="text-primary-greenLight">{m.hero_title_line2()}</span>
			</h1>

			<!-- CTA buttons with fluid sizing -->
			<div class="hero-buttons flex flex-wrap items-center justify-center">
				<Button
					variant="default"
					size="fluid"
					href={localizeHref('#trial')}
					class="hero-btn bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white shadow-lg"
				>
					{m.hero_cta_primary()}
				</Button>
				<Button
					variant="outline"
					size="fluid"
					href={localizeHref('#learn-more')}
					class="hero-btn border-2 border-white text-white hover:bg-white hover:text-neutral-900 bg-transparent"
				>
					{m.hero_cta_secondary()}
				</Button>
			</div>

			<!-- Trial info -->
			<p class="hero-trial-info text-white/90">
				<strong class="text-primary-coral">{m.hero_trial_info()}</strong>
			</p>
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

<!-- Below-fold content section -->
<section class="relative bg-gradient-to-b from-neutral-900 to-neutral-800 py-16 sm:py-20 lg:py-24">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<p class="text-lg sm:text-xl lg:text-2xl text-neutral-200 leading-relaxed mb-6">
			<strong class="text-primary-greenLight">{m.hero_below_fold_highlight()}</strong> {m.hero_below_fold_tagline()}
		</p>
		<p class="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed">
			{m.hero_below_fold_description()}
		</p>
		<p class="text-base sm:text-lg text-neutral-400 mt-6">
			{m.hero_below_fold_footer()}
		</p>
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
		transition: opacity 0.3s ease-in-out;
	}

	.hero-bg-image.image-loaded {
		opacity: 1;
	}

	/* Fluid typography for hero title - capped at 1023px viewport */
	.hero-title {
		--capped-viewport: min(100vw, 63.9375rem);
		font-size: clamp(1.5rem, 4 * var(--capped-viewport) / 100 + 0.5rem, 4.5rem);
		margin-bottom: clamp(2rem, 5 * var(--capped-viewport) / 100, 4rem);
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	/* Fluid button container - capped at 1023px viewport */
	.hero-buttons {
		--capped-viewport: min(100vw, 63.9375rem);
		margin-top: clamp(2rem, 5 * var(--capped-viewport) / 100, 4rem);
		gap: clamp(0.25rem, 1 * var(--capped-viewport) / 100, 0.75rem);
	}

	/* Fluid button sizing is now handled globally by .btn-fluid class in app.css */

	/* Fluid trial info text - capped at 1023px viewport */
	.hero-trial-info {
		--capped-viewport: min(100vw, 63.9375rem);
		font-size: clamp(0.875rem, 1.2 * var(--capped-viewport) / 100, 1rem);
		margin-top: clamp(2rem, 5 * var(--capped-viewport) / 100, 4rem);
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

		.hero-title {
			margin-bottom: 0.5rem;
		}

		.hero-buttons {
			margin-top: 0.25rem;
			gap: 0.5rem;
			flex-wrap: nowrap;
		}

		.hero-trial-info {
			display: none;
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

	/* Note: Font size capping is handled by --capped-viewport variable above,
	   no media query overrides needed */
</style>
