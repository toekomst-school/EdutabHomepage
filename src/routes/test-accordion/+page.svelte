<script lang="ts">
	import Accordion, { type AccordionItemData } from '$lib/components/Accordion.svelte';
	import Section from '$lib/components/sections/Section.svelte';

	const testItems: AccordionItemData[] = [
		{
			id: 'item-1',
			title: 'What is EduTab?',
			content: '<p>EduTab is a complete education platform designed for European schools. It includes tablets, an app marketplace, and a powerful device management portal.</p>'
		},
		{
			id: 'item-2',
			title: 'How much does it cost?',
			content: '<p>EduTab tablets start at €199 for a single device or €7,500 for a classroom bundle of 25 tablets. The MDM service starts at €2.00 per device per month with volume discounts available.</p>'
		},
		{
			id: 'item-3',
			title: 'Is my data secure?',
			content: '<p>Yes! EduTab is built with GDPR compliance from the ground up. All data is hosted on EU servers, and we never transfer student data outside the European Union.</p>'
		},
		{
			id: 'item-4',
			title: 'Can I try before I buy?',
			content: '<p>Absolutely! We offer a 30-day free trial that includes up to 25 devices. No credit card required to start your trial.</p>'
		}
	];
</script>

<Section>
	<div class="mx-auto max-w-3xl">
		<h1 class="mb-8 text-4xl font-bold text-neutral-900">Accordion Test</h1>

		<div class="mb-12">
			<h2 class="mb-4 text-2xl font-semibold">Single Item Mode (Default)</h2>
			<Accordion items={testItems} />
		</div>

		<div class="mb-12">
			<h2 class="mb-4 text-2xl font-semibold">Multiple Items Mode</h2>
			<Accordion items={testItems} multiple={true} />
		</div>

		<div class="rounded-lg bg-neutral-100 p-6">
			<h2 class="mb-4 text-xl font-semibold">Keyboard Navigation Test</h2>
			<ul class="space-y-2 text-sm">
				<li><kbd class="rounded bg-white px-2 py-1">Tab</kbd> - Focus accordion items</li>
				<li><kbd class="rounded bg-white px-2 py-1">Enter</kbd> or <kbd class="rounded bg-white px-2 py-1">Space</kbd> - Toggle focused item</li>
				<li><kbd class="rounded bg-white px-2 py-1">Arrow Down</kbd> - Move to next item</li>
				<li><kbd class="rounded bg-white px-2 py-1">Arrow Up</kbd> - Move to previous item</li>
				<li><kbd class="rounded bg-white px-2 py-1">Home</kbd> - Move to first item</li>
				<li><kbd class="rounded bg-white px-2 py-1">End</kbd> - Move to last item</li>
			</ul>
		</div>
	</div>
</Section>
