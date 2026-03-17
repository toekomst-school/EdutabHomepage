<script lang="ts">
	import type { Snippet } from 'svelte';

	type SectionVariant = 'default' | 'accent' | 'dark';
	type SectionPadding = 'compact' | 'normal' | 'spacious';

	interface Props {
		variant?: SectionVariant;
		padding?: SectionPadding;
		id?: string;
		children: Snippet;
	}

	let {
		variant = 'default',
		padding = 'normal',
		id,
		children
	}: Props = $props();

	// Variant background classes
	const variantClasses: Record<SectionVariant, string> = {
		default: 'bg-mintCream',
		accent: 'bg-primary-green/10',
		dark: 'bg-neutral-900'
	};

	// Padding classes
	const paddingClasses: Record<SectionPadding, string> = {
		compact: 'py-12 md:py-16',
		normal: 'py-16 md:py-24',
		spacious: 'py-20 md:py-32'
	};
</script>

<section
	{id}
	class="w-full {variantClasses[variant]} {paddingClasses[padding]}">
	<div class="mx-auto max-w-section-xl px-4 sm:px-6 lg:px-8">
		{@render children()}
	</div>
</section>
