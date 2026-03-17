<script lang="ts">
	import Github from '@lucide/svelte/icons/github';
	import { cn } from '$lib/utils';

	export let className = '';

	interface TechItem {
		name: string;
		description: string;
		githubUrl: string;
		icon: typeof Github;
	}

	const techItems: TechItem[] = [
		{
			name: 'Headwind MDM',
			description: 'EduTab Portal is built on Headwind MDM, a mature open-source mobile device management platform. Proven technology with security transparency and continuous community improvement.',
			githubUrl: 'https://github.com/h-mdm/hmdm-server',
			icon: Github
		},
		{
			name: 'F-Droid',
			description: 'The EduTab App Marketplace is built on F-Droid, a trusted open-source Android app distribution platform. No Big Tech dependency, transparent build process, and security-focused app reviews.',
			githubUrl: 'https://gitlab.com/fdroid/fdroidserver',
			icon: Github
		}
	];
</script>

<div class={cn('grid grid-cols-1 md:grid-cols-2 gap-8', className)}>
	{#each techItems as item, index}
		<a
			href={item.githubUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="group bg-white rounded-2xl shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-102 hover:brightness-105 p-2 md:p-4 border-2 border-transparent hover:border-primary-yellow/50"
		>
			<div class="flex flex-col md:flex-row md:items-start gap-4">
				<div class="flex-shrink-0 mx-auto md:mx-0">
					<div
						class="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-coralLight to-primary-coral flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-200"
					>
						<svelte:component this={item.icon} class="w-7 h-7" />
					</div>
				</div>
				<div class="flex-grow text-center md:text-left">
					<h3 class="text-xl font-bold font-display text-neutral-900 mb-2 group-hover:text-primary-coral transition-all duration-200">
						{item.name}
					</h3>
					<p class="text-base text-neutral-600 leading-relaxed">
						{item.description}
					</p>
					<div class="mt-4 inline-flex items-center gap-2 text-primary-coral font-semibold group-hover:gap-3 transition-all duration-200">
						<span>View on GitHub</span>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="group-hover:translate-x-1 transition-transform duration-200"
						>
							<path
								d="M6 3L11 8L6 13"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>
			</div>
		</a>
	{/each}
</div>
