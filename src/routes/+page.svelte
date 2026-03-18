<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import ThreePillars from '$lib/components/sections/ThreePillars.svelte';
	import AudienceSegments from '$lib/components/sections/AudienceSegments.svelte';
	import MetricsComparison from '$lib/components/sections/MetricsComparison.svelte';
	import PricingPreview from '$lib/components/sections/PricingPreview.svelte';
	import GettingStarted from '$lib/components/sections/GettingStarted.svelte';
	import Differentiators from '$lib/components/sections/Differentiators.svelte';
	import Testimonials from '$lib/components/sections/Testimonials.svelte';
	import FinalCTA from '$lib/components/sections/FinalCTA.svelte';
	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>{m.page_home_title()}</title>
	<meta name="description" content={m.page_home_description()} />

	<!-- Open Graph tags -->
	<meta property="og:title" content={m.page_home_title()} />
	<meta property="og:description" content={m.page_home_og_description()} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://edutab.eu" />
	<meta property="og:image" content="https://edutab.eu/og-image.jpg" />

	<!-- Twitter Card tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={m.page_home_title()} />
	<meta name="twitter:description" content={m.page_home_og_description()} />
	<meta name="twitter:image" content="https://edutab.eu/twitter-image.jpg" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://edutab.eu" />
</svelte:head>

<!-- Hero section (no reveal - immediate display) -->
<Hero />

<!-- Three Pillars section -->
<ThreePillars />

<!-- Audience Segments section -->
<AudienceSegments />

<!-- Metrics Comparison section -->
<MetricsComparison />

<!-- Pricing Preview section -->
<PricingPreview />

<!-- Getting Started section -->
<GettingStarted />

<!-- What Makes Us Different section -->
<Differentiators />

<!-- Testimonials section -->
<Testimonials />

<!-- Final CTA section -->
<FinalCTA />
