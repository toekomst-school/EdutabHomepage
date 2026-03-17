<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	interface CtaButton {
		label: string;
		href: string;
	}

	interface Props {
		title: string;
		subtitle?: string;
		backgroundImage: string;
		backgroundAlt?: string;
		primaryCta?: CtaButton;
		secondaryCta?: CtaButton;
		trialInfo?: string;
		/** Blur intensity for background image (0-8, default: 0) */
		blur?: number;
		/** Overlay darkness intensity (0-100, default: 40 for top, 30 for middle, 50 for bottom) */
		overlayIntensity?: 'light' | 'medium' | 'dark' | 'heavy';
	}

	let {
		title,
		subtitle,
		backgroundImage,
		backgroundAlt = 'Product hero image',
		primaryCta,
		secondaryCta,
		trialInfo,
		blur = 0,
		overlayIntensity = 'medium'
	}: Props = $props();

	let imageLoaded = $state(false);

	// Map overlay intensity to actual opacity values
	const overlayClasses: Record<string, string> = {
		light: 'from-black/30 via-black/20 to-black/40',
		medium: 'from-black/40 via-black/30 to-black/50',
		dark: 'from-black/55 via-black/45 to-black/65',
		heavy: 'from-black/75 via-black/65 to-black/85'
	};
</script>

<!-- Full viewport hero section -->
<section class="relative w-full overflow-hidden hero-photo-section">
	<!-- Background image with optional blur -->
	<div class="absolute inset-0 z-0 bg-neutral-900">
		<img
			src={backgroundImage}
			alt={backgroundAlt}
			class="w-full h-full object-cover hero-bg-image"
			class:image-loaded={imageLoaded}
			style="filter: blur({blur}px); transform: scale({1 + blur * 0.02})"
			loading="eager"
			fetchpriority="high"
			onload={() => (imageLoaded = true)}
		/>
	</div>

	<!-- Gradient overlay for text readability (configurable intensity) -->
	<div class="absolute inset-0 z-10 bg-gradient-to-b {overlayClasses[overlayIntensity]}"></div>

	<!-- Decorative gradient accent at bottom -->
	<div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-green/20 to-transparent z-10"></div>

	<!-- Content overlay -->
	<div class="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 hero-content-wrapper">
		<div class="max-w-5xl mx-auto text-center">
			<!-- Main headline with fluid typography -->
			<h1 class="hero-title font-display font-bold text-white leading-tight">
				{#if subtitle}
					{@html title}<br />
					<span class="text-primary-greenLight">{subtitle}</span>
				{:else}
					{@html title}
				{/if}
			</h1>

			<!-- CTA buttons with fluid sizing -->
			{#if primaryCta || secondaryCta}
				<div class="hero-buttons flex flex-wrap items-center justify-center">
					{#if primaryCta}
						<Button
							variant="default"
							size="fluid"
							href={primaryCta.href}
							class="hero-btn bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white shadow-lg"
						>
							{primaryCta.label}
						</Button>
					{/if}
					{#if secondaryCta}
						<Button
							variant="outline"
							size="fluid"
							href={secondaryCta.href}
							class="hero-btn border-2 border-white text-white hover:bg-white hover:text-neutral-900 bg-transparent"
						>
							{secondaryCta.label}
						</Button>
					{/if}
				</div>
			{/if}

			<!-- Trial info -->
			{#if trialInfo}
				<p class="hero-trial-info text-white/90">
					<strong class="text-primary-coral">{trialInfo}</strong>
				</p>
			{/if}
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

	/* Background image with blur support and fade-in */
	.hero-bg-image {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		/* Scale up slightly when blurred to avoid soft edges */
		transform-origin: center;
		/* Ensure smooth edges on blur */
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
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
