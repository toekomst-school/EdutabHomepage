<script lang="ts">
	import Check from '@lucide/svelte/icons/check';
	import X from '@lucide/svelte/icons/x';
	import { cn } from '$lib/utils';

	interface Competitor {
		name: string;
		startingPrice: string;
		euHosting: boolean;
		gdprNative: boolean;
		banned: string;
		isEduTab?: boolean;
	}

	let { title = '', subtitle = '' }: { title?: string; subtitle?: string } = $props();

	const competitors: Competitor[] = [
		{
			name: 'EduTab',
			startingPrice: '€1.25/device/mo',
			euHosting: true,
			gdprNative: true,
			banned: 'No',
			isEduTab: true
		},
		{
			name: 'Google Workspace',
			startingPrice: '"Free"',
			euHosting: false,
			gdprNative: false,
			banned: 'Denmark, France'
		},
		{
			name: 'Microsoft Intune',
			startingPrice: '~€5/device/mo',
			euHosting: false,
			gdprNative: false,
			banned: 'Germany'
		},
		{
			name: 'Jamf School',
			startingPrice: '~€3/device/mo',
			euHosting: false,
			gdprNative: false,
			banned: 'No'
		},
		{
			name: 'Relution',
			startingPrice: '~€2/device/mo',
			euHosting: true,
			gdprNative: true,
			banned: 'No'
		}
	];
</script>

<div class="w-full">
	{#if title || subtitle}
		<div class="text-center mb-8">
			{#if title}
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{title}
				</h2>
			{/if}
			{#if subtitle}
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>
			{/if}
		</div>
	{/if}

	<div class="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
		<h3 class="text-2xl font-display font-bold text-neutral-900 mb-2">Compare to Alternatives</h3>
		<p class="text-neutral-600 mb-6">
			See how EduTab stacks up against other device management solutions.
		</p>

		<!-- Desktop Table -->
		<div class="hidden md:block">
			<table class="w-full">
				<thead>
					<tr class="border-b-2 border-neutral-200">
						<th class="text-left py-3 px-4 font-semibold text-neutral-700">Solution</th>
						<th class="text-right py-3 px-4 font-semibold text-neutral-700">Starting Price</th>
						<th class="text-center py-3 px-4 font-semibold text-neutral-700">EU Hosting</th>
						<th class="text-center py-3 px-4 font-semibold text-neutral-700">GDPR Native</th>
						<th class="text-center py-3 px-4 font-semibold text-neutral-700">Banned?</th>
					</tr>
				</thead>
				<tbody>
					{#each competitors as competitor, i}
						<tr
							class="border-b border-neutral-100 transition-colors {competitor.isEduTab
								? 'bg-primary-yellow/5 hover:bg-primary-yellow/10'
								: 'hover:bg-neutral-50'}"
						>
							<td class="py-4 px-4">
								<span
									class="font-semibold {competitor.isEduTab
										? 'text-primary-coral'
										: 'text-neutral-900'}"
								>
									{competitor.name}
								</span>
							</td>
							<td class="py-4 px-4 text-right text-neutral-600">{competitor.startingPrice}</td>
							<td class="py-4 px-4 text-center">
								{#if competitor.euHosting}
									<Check class="w-5 h-5 text-accent-green inline-block" />
								{:else}
									<X class="w-5 h-5 text-accent-pink inline-block" />
								{/if}
							</td>
							<td class="py-4 px-4 text-center">
								{#if competitor.gdprNative}
									<Check class="w-5 h-5 text-accent-green inline-block" />
								{:else}
									<X class="w-5 h-5 text-accent-pink inline-block" />
								{/if}
							</td>
							<td class="py-4 px-4 text-center text-neutral-600">{competitor.banned}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<!-- Mobile Card Layout -->
		<div class="md:hidden space-y-4">
			{#each competitors as competitor, i}
				<div
					class="rounded-xl border-2 transition-colors {competitor.isEduTab
						? 'bg-primary-yellow/5 border-primary-yellow/20'
						: 'bg-neutral-50 border-neutral-200'}"
				>
					<div class="p-4">
						<div class="flex items-center justify-between mb-3">
							<h4
								class="font-bold text-lg {competitor.isEduTab
									? 'text-primary-coral'
									: 'text-neutral-900'}"
							>
								{competitor.name}
							</h4>
							<span class="text-sm text-neutral-600">{competitor.startingPrice}</span>
						</div>
						<div class="space-y-2">
							<div class="flex items-center justify-between">
								<span class="text-sm text-neutral-600">EU Hosting</span>
								{#if competitor.euHosting}
									<Check class="w-5 h-5 text-accent-green inline-block" />
								{:else}
									<X class="w-5 h-5 text-accent-pink inline-block" />
								{/if}
							</div>
							<div class="flex items-center justify-between">
								<span class="text-sm text-neutral-600">GDPR Native</span>
								{#if competitor.gdprNative}
									<Check class="w-5 h-5 text-accent-green inline-block" />
								{:else}
									<X class="w-5 h-5 text-accent-pink inline-block" />
								{/if}
							</div>
							<div class="flex items-center justify-between">
								<span class="text-sm text-neutral-600">Banned in EU</span>
								<span class="text-sm text-neutral-600">{competitor.banned}</span>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<p class="mt-6 text-sm text-neutral-500 italic">
			*Note: Competitor pricing is approximate and may vary.
		</p>
	</div>
</div>
