<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import Menu from '@lucide/svelte/icons/menu';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import Globe from '@lucide/svelte/icons/globe';
	import Button from '$lib/components/ui/button/button.svelte';
	import MobileMenuDrawer from './MobileMenuDrawer.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { getLocale, locales, localizeHref, deLocalizeHref } from '$lib/paraglide/runtime.js';
	import type { Locale } from '$lib/paraglide/runtime.js';

	interface NavItem {
		label: string;
		href?: string;
		children?: NavItem[];
	}

	// Create reactive navItems that update when locale changes
	// Using localizeHref to ensure all links include the correct locale prefix
	let navItems = $derived<NavItem[]>([
		{
			label: m.nav_products(),
			children: [
				{ label: m.nav_ecosystem(), href: localizeHref('/ecosystem') },
				{ label: m.nav_tablets(), href: localizeHref('/tablets') },
				{ label: m.nav_portal(), href: localizeHref('/portal') },
				{ label: m.nav_app_marketplace(), href: localizeHref('/app-marketplace') },
				{ label: m.nav_faq(), href: localizeHref('/faq') }
			]
		},
		{ label: m.nav_pricing(), href: localizeHref('/pricing') },
		{ label: m.nav_about(), href: localizeHref('/about') },
		{ label: m.nav_open_source(), href: localizeHref('/open-source') }
	]);

	let currentLocale = $derived(getLocale());

	let isScrolled = $state(false);
	let mobileMenuOpen = $state(false);
	let dropdownOpen = $state(false);
	let dropdownTriggerRef: HTMLButtonElement | undefined = $state();
	let dropdownItemRefs: HTMLAnchorElement[] = [];
	let focusIndex = -1;

	onMount(() => {
		const handleScroll = () => {
			// Use viewport height as threshold (when hero is scrolled past)
			isScrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial check

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function openDropdown() {
		dropdownOpen = true;
		focusIndex = -1;
	}

	function closeDropdown() {
		dropdownOpen = false;
		focusIndex = -1;
	}

	function toggleDropdown() {
		if (dropdownOpen) {
			closeDropdown();
		} else {
			openDropdown();
		}
	}

	function focusItem(index: number) {
		focusIndex = index;
		if (dropdownItemRefs[index]) {
			dropdownItemRefs[index].focus();
		}
	}

	function handleTriggerKeydown(event: KeyboardEvent) {
		switch (event.key) {
			case 'Enter':
			case ' ':
				event.preventDefault();
				toggleDropdown();
				if (!dropdownOpen) {
					// Just opened, focus first item
					setTimeout(() => focusItem(0), 0);
				}
				break;
			case 'ArrowDown':
				event.preventDefault();
				openDropdown();
				setTimeout(() => focusItem(0), 0);
				break;
			case 'ArrowUp':
				event.preventDefault();
				openDropdown();
				// Focus last item
				const productsItem = navItems.find(item => item.children && item.children.length > 0);
				if (productsItem?.children) {
					setTimeout(() => focusItem(productsItem.children!.length - 1), 0);
				}
				break;
			case 'Escape':
				if (dropdownOpen) {
					event.preventDefault();
					closeDropdown();
					dropdownTriggerRef?.focus();
				}
				break;
		}
	}

	function handleMenuKeydown(event: KeyboardEvent, itemCount: number) {
		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();
				focusItem((focusIndex + 1) % itemCount);
				break;
			case 'ArrowUp':
				event.preventDefault();
				focusItem((focusIndex - 1 + itemCount) % itemCount);
				break;
			case 'Escape':
				event.preventDefault();
				closeDropdown();
				dropdownTriggerRef?.focus();
				break;
			case 'Tab':
				// Close dropdown on Tab
				closeDropdown();
				break;
			case 'Home':
				event.preventDefault();
				focusItem(0);
				break;
			case 'End':
				event.preventDefault();
				focusItem(itemCount - 1);
				break;
		}
	}

	function handleDropdownMouseEnter() {
		dropdownOpen = true;
	}

	function handleDropdownMouseLeave() {
		dropdownOpen = false;
	}
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled
		? 'bg-white/95 backdrop-blur-md shadow-sm'
		: 'bg-transparent'}"
>
	<div class="mx-auto max-w-section-xl px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-[74px] md:h-[90px]">
			<!-- Logo -->
			<a href={localizeHref('/')} class="flex items-center gap-2">
				<!-- 4-Square Green Grid Logo -->
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					class="w-8 h-8"
				>
					<rect x="3" y="3" width="12" height="12" rx="3" fill="#4CAF50"/>
					<rect x="17" y="3" width="12" height="12" rx="3" fill="#66BB6A"/>
					<rect x="3" y="17" width="12" height="12" rx="3" fill="#81C784"/>
					<rect x="17" y="17" width="12" height="12" rx="3" fill="#A5D6A7"/>
				</svg>
				<span
					class="font-display font-bold text-2xl transition-colors duration-300 {isScrolled
						? 'text-neutral-900'
						: 'text-white'}"
				>
					EduTab
				</span>
			</a>

			<!-- Desktop Navigation -->
			<nav class="desktop-nav hidden min-[1024px]:flex items-center gap-8">
				{#each navItems as item}
					{#if item.children && item.children.length > 0}
						<!-- Dropdown nav item -->
						<div
							class="relative"
							role="presentation"
							onmouseenter={handleDropdownMouseEnter}
							onmouseleave={handleDropdownMouseLeave}
						>
							<button
								bind:this={dropdownTriggerRef}
								type="button"
								class="flex items-center gap-1 text-sm font-medium transition-colors duration-300 {isScrolled
									? 'text-neutral-700 hover:text-primary-coral'
									: 'text-white/90 hover:text-white'}"
								aria-expanded={dropdownOpen}
								aria-haspopup="true"
								onkeydown={handleTriggerKeydown}
								onclick={toggleDropdown}
							>
								{item.label}
								<ChevronDown class="w-4 h-4 transition-transform duration-200 {dropdownOpen ? 'rotate-180' : ''}" />
							</button>
							<!-- Dropdown panel -->
							{#if dropdownOpen}
								<div
									class="absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200"
									role="menu"
									tabindex="-1"
									onkeydown={(e) => handleMenuKeydown(e, item.children!.length)}
								>
									<div class="bg-white rounded-lg shadow-lg py-2 min-w-[180px]">
										{#each item.children as child, index}
											<a
												bind:this={dropdownItemRefs[index]}
												href={child.href}
												role="menuitem"
												tabindex="-1"
												class="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-green/10 hover:text-primary-green focus:bg-primary-green/10 focus:text-primary-green focus:outline-none transition-colors"
											>
												{child.label}
											</a>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					{:else}
						<!-- Regular nav link -->
						<a
							href={item.href}
							class="text-sm font-medium transition-colors duration-300 relative group {isScrolled
								? 'text-neutral-700 hover:text-primary-coral'
								: 'text-white/90 hover:text-white'}"
						>
							{item.label}
							<span
								class="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-primary-green transition-all duration-200 group-hover:w-full"
							></span>
						</a>
					{/if}
				{/each}
			</nav>

			<!-- Language Switcher & Desktop CTA -->
			<div class="desktop-cta hidden min-[1024px]:flex items-center gap-4">
				<!-- Language Switcher -->
				<div class="flex items-center gap-1">
					{#each locales as locale}
						{@const isActive = locale === currentLocale}
						{@const currentPath = deLocalizeHref(page.url.pathname)}
						<a
							href={localizeHref(currentPath, { locale })}
							data-sveltekit-reload
							class="px-2 py-1 text-sm font-medium rounded transition-colors duration-200 {isActive
								? (isScrolled ? 'bg-primary-green text-white' : 'bg-white/20 text-white')
								: (isScrolled ? 'text-neutral-600 hover:text-primary-green' : 'text-white/70 hover:text-white')}"
							aria-current={isActive ? 'true' : undefined}
						>
							{locale.toUpperCase()}
						</a>
					{/each}
				</div>

				<Button href="https://portal.edutab.eu/register" variant="default" size="fluid" class="font-medium bg-primary-coral hover:bg-primary-coralDark text-white hover:text-white">
					{m.nav_start_free_trial()}
				</Button>
			</div>

			<!-- Mobile Menu Button -->
			<button
				onclick={toggleMobileMenu}
				class="mobile-menu-btn max-[1023px]:flex min-[1024px]:hidden p-1.5"
				aria-label={m.aria_toggle_menu()}
				aria-expanded={mobileMenuOpen}
			>
				<Menu class="w-6 h-6 transition-colors duration-300 {isScrolled ? 'text-neutral-900' : 'text-white'}" />
			</button>
		</div>
	</div>

</header>

<!-- Mobile Menu Drawer - rendered outside header to avoid backdrop-filter stacking context issues -->
<MobileMenuDrawer isOpen={mobileMenuOpen} navItems={navItems} onClose={closeMobileMenu} />

<style>
	/* Force hamburger menu on short viewports (landscape mobile) */
	@media (max-height: 450px) {
		/* Hide desktop nav and CTA */
		.desktop-nav,
		.desktop-cta {
			display: none !important;
		}

		/* Show mobile menu button */
		.mobile-menu-btn {
			display: block !important;
		}
	}
</style>
