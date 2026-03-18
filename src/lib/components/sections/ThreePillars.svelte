<script lang="ts">
	import { cn } from '$lib/utils';
	import Section from './Section.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import type { Snippet } from 'svelte';
	import * as m from '$lib/paraglide/messages.js';

	interface Pillar {
		icon: string;
		title: string;
		subtitle: string;
		description: string;
	}

	// Use $derived so pillars update when locale changes
	let pillars = $derived<Pillar[]>([
		{
			icon: 'tablet',
			title: m.three_pillars_tablets_title(),
			subtitle: m.three_pillars_tablets_subtitle(),
			description: m.three_pillars_tablets_description()
		},
		{
			icon: 'apps',
			title: m.three_pillars_marketplace_title(),
			subtitle: m.three_pillars_marketplace_subtitle(),
			description: m.three_pillars_marketplace_description()
		},
		{
			icon: 'monitor',
			title: m.three_pillars_portal_title(),
			subtitle: m.three_pillars_portal_subtitle(),
			description: m.three_pillars_portal_description()
		}
	]);

    let hoveredIndex = $state<number | null>(null);

    function handleMouseEnter(index: number) {
        hoveredIndex = index;
    }

    function handleMouseLeave() {
        hoveredIndex = null;
    }

    // SVG icon components with gradient container wrapper using brand colors
    const TabletIcon = () => {
        return `<div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-brand-50 to-brand-100">
            <svg class="w-6 h-6 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                <line x1="12" x2="12.01" y1="18" y2="18"></line>
            </svg>
        </div>`;
    };

    const AppsIcon = () => {
        return `<div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-primary-coral/20 to-primary-coral/10">
            <svg class="w-6 h-6 text-primary-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                <rect x="14" y="14" width="6" height="6" rx="1"></rect>
            </svg>
        </div>`;
    };

    const MonitorIcon = () => {
        return `<div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-primary-green/20 to-primary-green/10">
            <svg class="w-6 h-6 text-primary-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                <line x1="8" x2="16" y1="21" y2="21"></line>
                <line x1="12" x2="12" y1="17" y2="21"></line>
            </svg>
        </div>`;
    };

    function getIconSvg(iconType: string): string {
        switch (iconType) {
            case 'tablet':
                return TabletIcon();
            case 'apps':
                return AppsIcon();
            case 'monitor':
                return MonitorIcon();
            default:
                return TabletIcon();
        }
    }
</script>

<Section variant="default" padding="normal">
    <div class="w-full">
        <!-- Header with reveal animation -->
        <Reveal>
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
                    {m.three_pillars_title()}
                </h2>
                <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
                    {m.three_pillars_subtitle()}
                </p>
            </div>
        </Reveal>

        <!-- Cards with staggered reveal animations -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each pillars as pillar, index}
                <Reveal delay={100 + index * 150}>
                    <div
                        class="pillar-card group relative bg-white rounded-2xl p-6 shadow-md border border-neutral-200 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-102 hover:brightness-105 {hoveredIndex === index
                            ? 'shadow-xl -translate-y-1 scale-102 border-primary-green/50'
                            : ''}"
                        onmouseenter={() => handleMouseEnter(index)}
                        onmouseleave={handleMouseLeave}
                        role="article"
                        aria-label="{pillar.title}"
                    >
                        <!-- Icon Container -->
                        <div class="icon-wrapper">
                            {@html getIconSvg(pillar.icon)}
                        </div>

                        <!-- Title -->
                        <h4 class="font-display font-semibold text-neutral-800 mb-1">
                            {pillar.title}
                        </h4>

                        <!-- Subtitle -->
                        <p class="text-sm font-medium text-primary-green mb-2">
                            {pillar.subtitle}
                        </p>

                        <!-- Description -->
                        <p class="text-neutral-600 leading-relaxed">
                            {pillar.description}
                        </p>

                        <!-- Decorative corner accent -->
                        <div class="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                            <div class="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-primary-green/20 to-primary-coral/20 transform rotate-45 translate-x-4 -translate-y-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-200"></div>
                        </div>
                    </div>
                </Reveal>
            {/each}
        </div>
    </div>
</Section>

<style>
	/* Small viewport adjustments (320px - 389px) */
	@media (max-width: 389px) {
		:global(.pillar-card) {
			padding: 1.25rem;
		}
	}
</style>
