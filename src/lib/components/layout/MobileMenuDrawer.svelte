<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut, cubicInOut } from 'svelte/easing';
	import X from '@lucide/svelte/icons/x';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { page } from '$app/state';
	import { getLocale, locales, localizeHref, deLocalizeHref } from '$lib/paraglide/runtime.js';

	interface NavItem {
		label: string;
		href?: string;
		children?: NavItem[];
	}

	interface Props {
		isOpen: boolean;
		navItems: NavItem[];
		onClose: () => void;
	}

	let { isOpen, navItems, onClose }: Props = $props();

	let currentLocale = $derived(getLocale());

	// Track current navigation level
	// null = main menu, string = parent item label for submenu
	let currentParent = $state<string | null>(null);

	// Get current items to display
	let currentItems = $derived(
		currentParent === null
			? navItems
			: navItems.find(item => item.label === currentParent)?.children || []
	);

	// Get current parent item for back button label
	let parentItem = $derived(navItems.find(item => item.label === currentParent));

	// Custom easing function for acceleration effect
	// Starts slow, accelerates in the middle, decelerates at the end
	function accelEasing(t: number): number {
		// Cubic bezier approximation for smooth acceleration
		return t < 0.5
			? 4 * t * t * t
			: 1 - Math.pow(-2 * t + 2, 3) / 2;
	}

	// Handle escape key to close
	onMount(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				if (currentParent !== null) {
					// Go back to main menu first
					currentParent = null;
				} else {
					onClose();
				}
			}
		};

		document.addEventListener('keydown', handleEscape);

		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	});

	// Prevent body scroll when drawer is open - with delay on close to prevent flicker
	$effect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			// Delay resetting overflow to allow transition to complete
			const timer = setTimeout(() => {
				document.body.style.overflow = '';
			}, 300);
			return () => clearTimeout(timer);
		}

		return () => {
			document.body.style.overflow = '';
		};
	});

	// Reset to main menu when drawer closes
	$effect(() => {
		if (!isOpen) {
			// Small delay to allow close animation to complete
			const timer = setTimeout(() => {
				currentParent = null;
			}, 300);
			return () => clearTimeout(timer);
		}
	});

	function handleLinkClick() {
		onClose();
	}

	function openSubmenu(label: string) {
		currentParent = label;
	}

	function closeSubmenu() {
		currentParent = null;
	}
</script>

{#if isOpen}
	<!-- Drawer -->
	<div
		transition:fly={{ x: 100, duration: 300, easing: cubicOut }}
		class="fixed inset-0 bg-white flex flex-col z-[100] will-change-transform overflow-hidden mobile-menu-drawer"
		role="dialog"
		aria-modal="true"
		aria-labelledby="mobile-menu-title"
	>
			<!-- Header - matches main header height for button alignment -->
			<div class="flex items-center justify-between px-4 sm:px-6 drawer-header border-b border-neutral-100">
				{#if currentParent !== null}
					<!-- Submenu: Back button on left, nothing on right -->
					<button
						onclick={closeSubmenu}
						class="flex items-center gap-1 py-1.5 px-1 -ml-1 text-sm font-medium text-neutral-600 hover:text-primary-coral transition-colors duration-200"
						aria-label={m.aria_back_menu()}
					>
						<ChevronLeft class="w-5 h-5" />
						<span>{m.nav_back()}</span>
					</button>
					<div class="w-10"></div>
				{:else}
					<!-- Main menu: Language switcher on left, X on right -->
					<div class="flex items-center gap-1">
						{#each locales as locale}
							{@const isActive = locale === currentLocale}
							{@const currentPath = deLocalizeHref(page.url.pathname)}
							<a
								href={localizeHref(currentPath, { locale })}
								data-sveltekit-reload
								class="px-2.5 py-1 text-sm font-medium rounded transition-colors duration-200 {isActive
									? 'bg-primary-green text-white'
									: 'text-neutral-600 hover:text-primary-green hover:bg-neutral-100'}"
								aria-current={isActive ? 'true' : undefined}
								onclick={onClose}
							>
								{locale.toUpperCase()}
							</a>
						{/each}
					</div>
					<button
						onclick={onClose}
						class="p-2 rounded-md hover:bg-neutral-100 transition-colors duration-200"
						aria-label={m.aria_close_menu()}
					>
						<X class="w-6 h-6 text-neutral-900" />
					</button>
				{/if}
			</div>

			<!-- Navigation Links - with slide animation -->
			<nav class="flex-1 overflow-hidden relative">
				<!-- Main Menu -->
				{#if currentParent === null}
					<div
						class="absolute inset-0 overflow-y-auto px-4 pb-6 pt-2 menu-panel"
						transition:fly={{ y: 0, duration: 350, easing: cubicInOut }}
					>
						<ul class="space-y-1">
							{#each navItems as item}
								<li>
									{#if item.children && item.children.length > 0}
										<!-- Parent item with children - opens submenu -->
										<button
											type="button"
											onclick={() => openSubmenu(item.label)}
											class="w-full flex items-center justify-between py-0.5 px-4 rounded-lg text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-primary-coral transition-colors duration-200"
										>
											<span>{item.label}</span>
											<ChevronRight class="w-5 h-5 text-neutral-400" />
										</button>
									{:else}
										<!-- Regular nav link -->
										<a
											href={item.href}
											onclick={handleLinkClick}
											class="block py-1.5 px-4 rounded-lg text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-primary-coral transition-colors duration-200"
										>
											{item.label}
										</a>
									{/if}
								</li>
							{/each}
						</ul>
					</div>
				{:else}
					<!-- Submenu - slides in from right -->
					<div
						class="absolute inset-0 overflow-y-auto px-4 pb-6 pt-2 menu-panel"
						transition:fly={{ x: 80, duration: 350, easing: cubicInOut }}
					>
						<!-- Parent label -->
						<div class="mb-2 px-4 pt-2">
							<h2 class="text-lg font-semibold text-neutral-900">{parentItem?.label}</h2>
						</div>
						<ul class="space-y-1">
							{#each currentItems as child}
								<li>
									<a
										href={child.href}
										onclick={handleLinkClick}
										class="block py-1.5 px-4 rounded-lg text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-primary-coral transition-colors duration-200"
									>
										{child.label}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</nav>

			<!-- CTA Section -->
			<div class="py-3 px-4 border-t border-neutral-200 bg-neutral-50 cta-section">
				<Button
					href="https://portal.edutab.eu/register"
					size="fluid"
					class="w-full bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white shadow-lg font-semibold"
					onclick={handleLinkClick}
				>
					{m.nav_start_free_trial()}
				</Button>
			</div>
		</div>
{/if}

<style>
	/* Drawer header - uses fluid header height */
	.drawer-header {
		height: var(--header-height, 74px);
	}

	/* Menu panel with smooth slide animation */
	.menu-panel {
		will-change: transform;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}

	/* Hide on desktop (820px and up) unless it's a short viewport - using rem units */
	@media (min-width: 51.25rem) and (min-height: 28rem) {
		.mobile-menu-drawer {
			display: none !important;
		}
	}

	/* Optimize for iOS Safari rendering */
	.will-change-transform {
		will-change: transform;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	/* Hide CTA section on very short viewports (landscape mobile) - using rem units */
	@media (max-height: 20rem) {
		.cta-section {
			display: none !important;
		}
	}
</style>
