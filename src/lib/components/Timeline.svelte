<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import { cn } from '$lib/utils';

	interface TimelineEvent {
		year?: string;
		title: string;
		description: string;
		icon?: string;
	}

	interface Props {
		events: TimelineEvent[];
		variant?: 'default' | 'accent' | 'dark';
		padding?: 'none' | 'compact' | 'normal' | 'spacious';
	}

	let { events, variant = 'default', padding = 'normal' }: Props = $props();

	const paddingClasses = {
		none: 'py-0',
		compact: 'py-8 md:py-12',
		normal: 'py-16 md:py-24',
		spacious: 'py-20 md:py-32'
	};

	const variantClasses = {
		default: 'bg-cream',
		accent: 'bg-primary-yellow/5',
		dark: 'bg-neutral-900 text-white'
	};

	let containerClass = $derived(cn(
		'w-full',
		paddingClasses[padding],
		variantClasses[variant]
	));

	// Parallax state
	let mouseX = $state(0);
	let mouseY = $state(0);
	let containerRef: HTMLElement | null = $state(null);

	// Parallax settings
	const parallaxIntensity = 15; // Max pixel movement
	const smoothing = 0.1;

	// Current animated values
	let animatedX = $state(0);
	let animatedY = $state(0);

	// Handle mouse move for parallax
	function handleMouseMove(event: MouseEvent) {
		if (!containerRef) return;

		const rect = containerRef.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		// Calculate offset from center (-1 to 1)
		mouseX = (event.clientX - centerX) / (rect.width / 2);
		mouseY = (event.clientY - centerY) / (rect.height / 2);
	}

	function handleMouseLeave() {
		mouseX = 0;
		mouseY = 0;
	}

	// Animation loop for smooth parallax
	let animationFrame: number | null = null;

	function animateParallax() {
		// Smooth interpolation
		animatedX += (mouseX - animatedX) * smoothing;
		animatedY += (mouseY - animatedY) * smoothing;

		animationFrame = requestAnimationFrame(animateParallax);
	}

	onMount(() => {
		if (containerRef) {
			containerRef.addEventListener('mousemove', handleMouseMove);
			containerRef.addEventListener('mouseleave', handleMouseLeave);
		}
		animateParallax();
	});

	onDestroy(() => {
		if (containerRef) {
			containerRef.removeEventListener('mousemove', handleMouseMove);
			containerRef.removeEventListener('mouseleave', handleMouseLeave);
		}
		if (animationFrame) {
			cancelAnimationFrame(animationFrame);
		}
	});

	// Calculate parallax transform for each icon based on its index
	// Note: Centering on the line is handled by CSS classes, not here
	function getParallaxStyle(index: number): string {
		// Alternate direction and depth for each icon
		const depthFactor = (index % 2 === 0 ? 1 : -0.7) * (1 + index * 0.1);
		const translateX = animatedX * parallaxIntensity * depthFactor;
		const translateY = animatedY * parallaxIntensity * 0.5 * depthFactor;

		return `transform: translate(${translateX}px, ${translateY}px); transition: transform 0.1s ease-out;`;
	}

	// Calculate parallax for content (moves in opposite direction)
	function getContentParallaxStyle(index: number): string {
		const depthFactor = (index % 2 === 0 ? 0.3 : -0.2);
		const translateX = animatedX * parallaxIntensity * 0.3 * depthFactor;

		return `transform: translateX(${translateX}px); transition: transform 0.1s ease-out;`;
	}

	const iconSvg = (iconName: string) => {
		const icons: Record<string, string> = {
			'graduation-cap': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
			'lightbulb': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2v1"/><path d="M12 7a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5v0a5 5 0 0 1 5-5Z"/></svg>`,
			'settings': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="M1 12h6m6 0h6"/><path d="m4.93 19.07 4.24-4.24"/><path d="m14.83 9.17 4.24-4.24"/></svg>`,
			'rocket': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.48-.56.93-1.23 1.35-2h-5.7l1.35-3Zm10.5-10.5c1.5-1.26 2-5 2-5s-3.74.5-5 2c-.48.56-.93 1.23-1.35 2h5.7l-1.35 3Z"/><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>`,
			'school': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10-5Z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
			'heart': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 1.5-1.5-1-2.74-1.5-4.5-1.5A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
			'users': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
			'sparkles': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1-1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
			'check-circle': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
			'shield': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13a6 6 0 0 1 6-6 4 4 0 0 0 4-4Z"/></svg>`
		};
		return icons[iconName] || icons['check-circle'];
	};
</script>

<section class={containerClass} bind:this={containerRef}>
	<div class="max-w-section-xl mx-auto px-4 md:px-6 lg:px-8">
		<div class="relative">
			<!-- Vertical connecting line (centered on both mobile and desktop) -->
			<div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#4CAF50] transform -translate-x-1/2 z-0 pointer-events-none"></div>

			<!-- Timeline events -->
			<div class="space-y-6 md:space-y-10">
				{#each events as event, index}
					<Reveal delay={index * 100} direction="up">
						<!-- Mobile: centered stacked layout with icon and content on line, Desktop: alternating side layout -->
						<div class="relative flex flex-col items-center md:flex-row md:items-center {index % 2 === 0 ? '' : 'md:flex-row-reverse'}">
							<!-- Node icon with parallax (centered on mobile, alternating on desktop) -->
							<!-- Outer div handles positioning/centering via CSS, inner div handles parallax -->
							<div class="relative md:absolute md:left-1/2 md:-translate-x-1/2 z-10 mb-3 md:mb-0">
								<div
									class="bg-mintCream dark:bg-neutral-900 p-1 rounded-full timeline-icon"
									style={getParallaxStyle(index)}
								>
									<div class="w-16 h-16 rounded-full bg-[#A5D6A7] flex items-center justify-center shadow-lg border-4 border-white dark:border-neutral-800">
										{@html iconSvg(event.icon || 'check-circle')}
									</div>
								</div>
							</div>

							<!-- Content card (centered on line on mobile with bg to cover line, alternating sides on desktop) -->
							<div
								class="w-full md:w-5/12 text-center md:text-left bg-white dark:bg-neutral-800 rounded-xl p-4 md:p-0 md:bg-transparent md:dark:bg-transparent shadow-md md:shadow-none border border-neutral-200 dark:border-neutral-700 md:border-0 z-10 timeline-content"
								style={getContentParallaxStyle(index)}
							>
								{#if event.year}
									<div class="inline-flex items-center px-3 py-1 rounded-full bg-primary-yellow/20 text-primary-coral font-semibold text-sm mb-3">
										{event.year}
                                    </div>
                               	{/if}

                                <h3 class="text-xl md:text-2xl font-display font-bold text-neutral-900 dark:text-white mb-3 {index % 2 === 0 ? 'md:text-right' : ''}">
                                    {event.title}
                                </h3>

                                <p class="text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed {index % 2 === 0 ? 'md:text-right' : ''}">
                                    {event.description}
                                </p>
                            </div>

                           	<!-- Empty space for alternating layout (desktop only) -->
                           	<div class="hidden md:block md:w-5/12"></div>
                        </div>
                    </Reveal>
               	{/each}
            </div>
        </div>
    </div>
</section>
