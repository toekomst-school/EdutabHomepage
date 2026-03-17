<script lang="ts">
	import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/ui/tabs';
	import Section from '$lib/components/sections/Section.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Monitor from '@lucide/svelte/icons/monitor';
	import Users from '@lucide/svelte/icons/users';
	import Shield from '@lucide/svelte/icons/shield';
	import * as m from '$lib/paraglide/messages.js';

	interface TabContent {
		title: string;
		icon: typeof Monitor;
		description: string;
		features: string[];
	}

	let itAdminContent = $derived<TabContent>({
		title: m.audience_it_title(),
		icon: Monitor,
		description: m.audience_it_description(),
		features: [
			m.audience_it_feature_1(),
			m.audience_it_feature_2(),
			m.audience_it_feature_3(),
			m.audience_it_feature_4(),
			m.audience_it_feature_5()
		]
	});

	let teacherContent = $derived<TabContent>({
		title: m.audience_teachers_title(),
		icon: Users,
		description: m.audience_teachers_description(),
		features: [
			m.audience_teachers_feature_1(),
			m.audience_teachers_feature_2(),
			m.audience_teachers_feature_3(),
			m.audience_teachers_feature_4()
		]
	});

	let schoolBoardContent = $derived<TabContent>({
		title: m.audience_school_boards_title(),
		icon: Shield,
		description: m.audience_school_boards_description(),
		features: [
			m.audience_school_boards_feature_1(),
			m.audience_school_boards_feature_2(),
			m.audience_school_boards_feature_3(),
			m.audience_school_boards_feature_4()
		]
	});

	let activeTab = $state<'it' | 'teachers' | 'school-boards'>('it');
</script>

<Section variant="default" padding="normal">
	<Reveal>
		<div class="text-center mb-12 -mt-18">
			<h2 class="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
				{m.audience_title()}
			</h2>
			<p class="text-xl text-neutral-600 max-w-3xl mx-auto">
				{m.audience_subtitle()}
			</p>
		</div>
	</Reveal>

	<!-- Mobile: Stacked cards (visible below md breakpoint) -->
	<Reveal delay={100}>
	<div class="md:hidden space-y-6">
		<!-- IT Administrators Card -->
		<div class="bg-white rounded-2xl shadow-lg p-6 border border-neutral-100">
			<div class="flex flex-col items-center text-center gap-4 mb-6">
				<div class="p-3 bg-gradient-to-br from-primary-green to-primary-greenLight rounded-xl shrink-0">
					<Monitor class="w-8 h-8 text-white" />
				</div>
				<div>
					<h3 class="text-2xl font-bold text-neutral-900 mb-3">
						{itAdminContent.title}
					</h3>
					<p class="text-lg text-neutral-600 leading-relaxed">
						{itAdminContent.description}
					</p>
				</div>
			</div>
			<ul class="space-y-3 mt-8">
				{#each itAdminContent.features as feature}
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 rounded-full bg-primary-green flex items-center justify-center shrink-0 mt-0.5">
							<svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<span class="text-neutral-700">{feature}</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Teachers Card -->
		<div class="bg-white rounded-2xl shadow-lg p-6 border border-neutral-100">
			<div class="flex flex-col items-center text-center gap-4 mb-6">
				<div class="p-3 bg-gradient-to-br from-primary-green to-primary-greenLight rounded-xl shrink-0">
					<Users class="w-8 h-8 text-white" />
				</div>
				<div>
					<h3 class="text-2xl font-bold text-neutral-900 mb-3">
						{teacherContent.title}
					</h3>
					<p class="text-lg text-neutral-600 leading-relaxed">
						{teacherContent.description}
					</p>
				</div>
			</div>
			<ul class="space-y-3 mt-8">
				{#each teacherContent.features as feature}
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 rounded-full bg-primary-green flex items-center justify-center shrink-0 mt-0.5">
							<svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<span class="text-neutral-700">{feature}</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- School Boards Card -->
		<div class="bg-white rounded-2xl shadow-lg p-6 border border-neutral-100">
			<div class="flex flex-col items-center text-center gap-4 mb-6">
				<div class="p-3 bg-gradient-to-br from-primary-green to-primary-greenLight rounded-xl shrink-0">
					<Shield class="w-8 h-8 text-white" />
				</div>
				<div>
					<h3 class="text-2xl font-bold text-neutral-900 mb-3">
						{schoolBoardContent.title}
					</h3>
					<p class="text-lg text-neutral-600 leading-relaxed">
						{schoolBoardContent.description}
					</p>
				</div>
			</div>
			<ul class="space-y-3 mt-8">
				{#each schoolBoardContent.features as feature}
					<li class="flex items-start gap-3">
						<div class="w-6 h-6 rounded-full bg-primary-green flex items-center justify-center shrink-0 mt-0.5">
							<svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<span class="text-neutral-700">{feature}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	</Reveal>

	<!-- Desktop: Tabs (visible at md breakpoint and above) -->
	<Reveal delay={100}>
	<Tabs bind:value={activeTab} class="w-full hidden md:block">
		<TabsList class="grid w-full grid-cols-3 gap-2 bg-transparent h-auto p-0">
			<TabsTrigger
				value="it"
				class="data-[state=active]:bg-primary-green/10 data-[state=active]:text-neutral-900 data-[state=active]:border-b-2 data-[state=active]:border-primary-green border-b-2 border-transparent rounded-t-lg px-6 py-4 text-base font-medium text-neutral-700 transition-all duration-200 hover:bg-primary-green/5"
			>
				<Monitor class="w-5 h-5 mr-2" />
				{m.audience_tab_it()}
			</TabsTrigger>
			<TabsTrigger
				value="teachers"
				class="data-[state=active]:bg-primary-green/10 data-[state=active]:text-neutral-900 data-[state=active]:border-b-2 data-[state=active]:border-primary-green border-b-2 border-transparent rounded-t-lg px-6 py-4 text-base font-medium text-neutral-700 transition-all duration-200 hover:bg-primary-green/5"
			>
				<Users class="w-5 h-5 mr-2" />
				{m.audience_tab_teachers()}
			</TabsTrigger>
			<TabsTrigger
				value="school-boards"
				class="data-[state=active]:bg-primary-green/10 data-[state=active]:text-neutral-900 data-[state=active]:border-b-2 data-[state=active]:border-primary-green border-b-2 border-transparent rounded-t-lg px-6 py-4 text-base font-medium text-neutral-700 transition-all duration-200 hover:bg-primary-green/5"
			>
				<Shield class="w-5 h-5 mr-2" />
				{m.audience_tab_school_boards()}
			</TabsTrigger>
		</TabsList>

		<TabsContent value="it" class="mt-6 animate-fade-up">
			<div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-neutral-100">
				<div class="flex flex-row items-start text-left gap-4 mb-6">
					<div class="p-3 bg-gradient-to-br from-primary-green to-primary-greenLight rounded-xl shrink-0">
						<Monitor class="w-8 h-8 text-white" />
					</div>
					<div>
						<h3 class="text-2xl font-bold text-neutral-900 mb-3">
							{itAdminContent.title}
						</h3>
						<p class="text-lg text-neutral-600 leading-relaxed">
							{itAdminContent.description}
						</p>
					</div>
				</div>
				<ul class="grid md:grid-cols-2 gap-3 mt-8">
					{#each itAdminContent.features as feature}
						<li class="flex items-start gap-3">
							<div class="w-6 h-6 rounded-full bg-primary-green flex items-center justify-center shrink-0 mt-0.5">
								<svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<span class="text-neutral-700">{feature}</span>
						</li>
					{/each}
				</ul>
			</div>
		</TabsContent>

		<TabsContent value="teachers" class="mt-6 animate-fade-up">
			<div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-neutral-100">
				<div class="flex flex-row items-start text-left gap-4 mb-6">
					<div class="p-3 bg-gradient-to-br from-primary-green to-primary-greenLight rounded-xl shrink-0">
						<Users class="w-8 h-8 text-white" />
					</div>
					<div>
						<h3 class="text-2xl font-bold text-neutral-900 mb-3">
							{teacherContent.title}
						</h3>
						<p class="text-lg text-neutral-600 leading-relaxed">
							{teacherContent.description}
						</p>
					</div>
				</div>
				<ul class="grid md:grid-cols-2 gap-3 mt-8">
					{#each teacherContent.features as feature}
						<li class="flex items-start gap-3">
							<div class="w-6 h-6 rounded-full bg-primary-green flex items-center justify-center shrink-0 mt-0.5">
								<svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<span class="text-neutral-700">{feature}</span>
						</li>
					{/each}
				</ul>
			</div>
		</TabsContent>

		<TabsContent value="school-boards" class="mt-6 animate-fade-up">
			<div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-neutral-100">
				<div class="flex flex-row items-start text-left gap-4 mb-6">
					<div class="p-3 bg-gradient-to-br from-primary-green to-primary-greenLight rounded-xl shrink-0">
						<Shield class="w-8 h-8 text-white" />
					</div>
					<div>
						<h3 class="text-2xl font-bold text-neutral-900 mb-3">
							{schoolBoardContent.title}
						</h3>
						<p class="text-lg text-neutral-600 leading-relaxed">
							{schoolBoardContent.description}
						</p>
					</div>
				</div>
				<ul class="grid md:grid-cols-2 gap-3 mt-8">
					{#each schoolBoardContent.features as feature}
						<li class="flex items-start gap-3">
							<div class="w-6 h-6 rounded-full bg-primary-green flex items-center justify-center shrink-0 mt-0.5">
								<svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<span class="text-neutral-700">{feature}</span>
						</li>
					{/each}
				</ul>
			</div>
		</TabsContent>
	</Tabs>
	</Reveal>
</Section>
