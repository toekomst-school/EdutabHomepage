<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import type { Snippet } from 'svelte';

	type Direction = 'up' | 'down' | 'left' | 'right' | 'scale';

	interface Props {
		delay?: number;
		direction?: Direction;
		threshold?: number;
		class?: string;
		children: Snippet;
	}

	let {
		delay = 0,
		direction = 'up',
		threshold = 0,
		class: className = '',
		children
	}: Props = $props();

	let container: HTMLElement;
	let isVisible = $state(false);
	let hasRevealed = $state(false);

	// Intersection Observer setup
	let observer: IntersectionObserver | null = null;

	onMount(() => {
		if (!browser) return;

		// Check for reduced motion preference
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (prefersReducedMotion) {
			// Skip animation for users who prefer reduced motion
			isVisible = true;
			hasRevealed = true;
			return;
		}

		// Create Intersection Observer
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasRevealed) {
						// Add delay before showing
						setTimeout(() => {
							isVisible = true;
							hasRevealed = true;
						}, delay);
					}
				});
			},
			{
				threshold,
				rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
			}
		);

		if (container) {
			observer.observe(container);
		}

		return () => {
			if (observer) {
				observer.disconnect();
			}
		};
	});

	// Get initial transform classes based on direction
	function getInitialClasses(): string {
		switch (direction) {
			case 'up':
				return 'opacity-0 translate-y-8';
			case 'down':
				return 'opacity-0 -translate-y-8';
			case 'left':
				return 'opacity-0 translate-x-8';
			case 'right':
				return 'opacity-0 -translate-x-8';
			case 'scale':
				return 'opacity-0 scale-95';
			default:
				return 'opacity-0 translate-y-8';
		}
	}

	// Get visible classes
	function getVisibleClasses(): string {
		return 'opacity-100 translate-y-0 translate-x-0 scale-100';
	}

	// Check if reduced motion is preferred
	const prefersReducedMotion = browser
		? window.matchMedia('(prefers-reduced-motion: reduce)').matches
		: false;

	const shouldAnimate = !prefersReducedMotion;
</script>

<div
	bind:this={container}
	class="transition-all duration-700 ease-out {className} {shouldAnimate && !hasRevealed
		? getInitialClasses()
		: getVisibleClasses()}"
>
	{@render children()}
</div>
