<script lang="ts">
	import Section from './Section.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Check from '@lucide/svelte/icons/check';
	import X from '@lucide/svelte/icons/x';
	import { cn } from '$lib/utils';
	import * as m from '$lib/paraglide/messages.js';

	interface MetricRow {
		metric: string;
		edutab: string;
		alternative: string;
		edutabPositive: boolean;
	}

	let metrics = $derived<MetricRow[]>([
		{
			metric: m.metrics_row_setup_time(),
			edutab: m.metrics_row_setup_edutab(),
			alternative: m.metrics_row_setup_alt(),
			edutabPositive: true
		},
		{
			metric: m.metrics_row_gdpr(),
			edutab: m.metrics_row_gdpr_edutab(),
			alternative: m.metrics_row_gdpr_alt(),
			edutabPositive: true
		},
		{
			metric: m.metrics_row_waiting(),
			edutab: m.metrics_row_waiting_edutab(),
			alternative: m.metrics_row_waiting_alt(),
			edutabPositive: true
		},
		{
			metric: m.metrics_row_data(),
			edutab: m.metrics_row_data_edutab(),
			alternative: m.metrics_row_data_alt(),
			edutabPositive: true
		}
	]);
</script>

<Section variant="default" padding="normal">
	<div class="w-full">
		<Reveal>
			<div class="text-center mb-12 -mt-18">
				<h2 class="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
					{m.metrics_title()}
				</h2>
				<p class="text-lg text-neutral-600 max-w-2xl mx-auto">
					{m.metrics_subtitle()}
				</p>
			</div>
		</Reveal>

		<!-- Desktop table view -->
		<Reveal delay={150}>
		<div class="hidden md:block overflow-hidden rounded-2xl shadow-lg border border-neutral-200">
			<table class="w-full bg-white">
				<thead>
					<tr class="border-b border-neutral-200">
						<th class="py-4 px-6 text-left text-sm font-semibold text-neutral-600 uppercase tracking-wide">
							{m.metrics_column_metric()}
						</th>
						<th class="py-4 px-6 text-center text-sm font-semibold bg-primary-green/10 text-neutral-900 border-l border-neutral-200 uppercase tracking-wide w-1/3">
							{m.metrics_column_edutab()}
						</th>
						<th class="py-4 px-6 text-center text-sm font-semibold text-neutral-600 uppercase tracking-wide w-1/3">
							{m.metrics_column_alternative()}
						</th>
					</tr>
				</thead>
				<tbody>
					{#each metrics as row, index}
						<tr class="border-b border-neutral-100 last:border-b-0 {index % 2 === 0
							? 'bg-white'
							: 'bg-neutral-50/50'}">
							<td class="py-4 px-6 text-sm font-medium text-neutral-900">
								{row.metric}
							</td>
							<td class="py-4 px-6 text-center bg-primary-green/5 border-l border-r border-primary-green/10">
								<div class="flex items-center justify-center gap-2">
									{#if row.edutabPositive}
										<Check class="w-5 h-5 text-accent-green flex-shrink-0" />
									{/if}
									<span class="font-semibold text-neutral-900">{row.edutab}</span>
								</div>
							</td>
							<td class="py-4 px-6 text-center text-neutral-600">
								<div class="flex items-center justify-center gap-2">
									<X class="w-5 h-5 text-accent-pink flex-shrink-0" />
									<span>{row.alternative}</span>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		</Reveal>

		<!-- Mobile stacked view -->
		<Reveal delay={150}>
		<div class="md:hidden space-y-6">
			{#each metrics as row}
				<div class="bg-white rounded-xl shadow-md border border-neutral-200 overflow-hidden">
					<div class="bg-neutral-50 px-5 py-3 border-b border-neutral-200">
						<h3 class="font-display font-semibold text-neutral-900 text-sm uppercase tracking-wide">
							{row.metric}
						</h3>
					</div>
					<div class="divide-y divide-neutral-100">
						<div class="bg-primary-green/5 px-5 py-4 flex items-center gap-3">
							<div class="flex-shrink-0">
								<span class="inline-block px-2 py-1 bg-primary-green/20 text-neutral-900 text-xs font-semibold rounded-md">
									EduTab
								</span>
							</div>
							<div class="flex items-center gap-2 flex-1">
								{#if row.edutabPositive}
									<Check class="w-5 h-5 text-accent-green flex-shrink-0" />
								{/if}
								<span class="font-semibold text-neutral-900">{row.edutab}</span>
							</div>
						</div>
						<div class="px-5 py-4 flex items-center gap-3">
							<div class="flex-shrink-0">
								<span class="inline-block px-2 py-1 bg-neutral-100 text-neutral-600 text-xs font-semibold rounded-md alternative-pill">
									{m.metrics_alt_label()}
								</span>
							</div>
							<div class="flex items-center gap-2 flex-1 alt-content">
								<X class="w-5 h-5 text-accent-pink flex-shrink-0" />
								<span class="text-neutral-600">{row.alternative}</span>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
		</Reveal>
	</div>
</Section>

<style>
	/* Reduce padding on 320-389px viewport */
	@media (max-width: 389px) {
		.md\:hidden > div > div:first-child {
			padding-left: 0.75rem;
			padding-right: 0.75rem;
		}
		.md\:hidden > div > div:last-child > div {
			padding-left: 0.75rem;
			padding-right: 0.75rem;
		}
		.alternative-pill {
			padding-left: 0.375rem;
			padding-right: 0.375rem;
			padding-top: 0.25rem;
			padding-bottom: 0.25rem;
		}
		.alt-content {
			margin-left: -0.5rem;
		}
	}
</style>
