<script lang="ts">
	import { cn } from '$lib/utils';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';

	export interface AccordionItemData {
		title: string;
		content: string;
		id?: string;
	}

	let {
		items,
		multiple = false,
		class: className
	}: {
		items: AccordionItemData[];
		multiple?: boolean;
		class?: string;
	} = $props();

	let openItems = $state<string[]>([]);

	function toggleItem(value: string) {
		if (multiple) {
			// Allow multiple items open
			openItems = openItems.includes(value)
				? openItems.filter((v) => v !== value)
				: [...openItems, value];
		} else {
			// Only one item open at a time
			openItems = openItems.includes(value) ? [] : [value];
		}
	}

	function handleKeydown(event: KeyboardEvent, value: string) {
		const currentIndex = items.findIndex((item) => item.id === value);

		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();
				const nextIndex = (currentIndex + 1) % items.length;
				if (nextIndex !== currentIndex) {
					focusTrigger(items[nextIndex].id!);
				}
				break;
			case 'ArrowUp':
				event.preventDefault();
				const prevIndex = (currentIndex - 1 + items.length) % items.length;
				focusTrigger(items[prevIndex].id!);
				break;
			case 'Home':
				event.preventDefault();
				focusTrigger(items[0].id!);
				break;
			case 'End':
				event.preventDefault();
				focusTrigger(items[items.length - 1].id!);
				break;
		}
	}

	function focusTrigger(id: string) {
		const trigger = document.querySelector(`[data-accordion-trigger="${id}"]`) as HTMLElement;
		trigger?.focus();
	}

	// Action for keyboard navigation and ARIA attributes
	function accordionTrigger(node: HTMLElement, value: string) {
		node.setAttribute('data-accordion-trigger', value);
		node.setAttribute('role', 'button');
		node.setAttribute('tabindex', '0');

		const handleTriggerKeydown = (e: KeyboardEvent) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				toggleItem(value);
			} else {
				handleKeydown(e, value);
			}
		};

		node.addEventListener('keydown', handleTriggerKeydown);

		return {
			destroy() {
				node.removeEventListener('keydown', handleTriggerKeydown);
			}
		};
	}
</script>

<div class={cn('w-full', className)}>
	<div class="border-0">
		{#each items as item, i}
			{@const value = item.id || `item-${i}`}
			{@const isOpen = openItems.includes(value)}
			<div
				class="border-b border-neutral-200 last:border-0"
			>
				<button
					id="accordion-trigger-{value}"
					use:accordionTrigger={value}
					class="group flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left bg-transparent border-0 cursor-pointer text-base text-neutral-900"
					onclick={() => toggleItem(value)}
					aria-expanded={isOpen}
					aria-controls="accordion-content-{value}"
				>
					<span class="pr-4">{item.title}</span>
					<ChevronDown
						class={cn(
							'shrink-0 transition-transform duration-200 size-5 text-neutral-500',
							isOpen && 'rotate-180'
						)}
						aria-hidden="true"
					/>
				</button>
				<div
					id="accordion-content-{value}"
					role="region"
					aria-labelledby="accordion-trigger-{value}"
					class="overflow-hidden transition-all duration-300 ease-in-out"
					style:max-height={isOpen ? '1000px' : '0px'}
				>
					<div class="pb-4 pt-0 text-neutral-600 leading-relaxed">
						{@html item.content}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
