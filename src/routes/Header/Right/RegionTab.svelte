<script lang="ts">
	import * as flag from '$lib/svgs/flags//index';
	import { selectRegion } from './selectRegion';
	import { invalidateAll } from '$app/navigation';
	import { region } from '$lib/stores/store';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	let hovering = 0;

	const CountryCode = [
		{ code: 'en-GB', name: 'United Kingdom', component: flag.gb },
		{ code: 'en-US', name: 'USA', component: flag.us },
		{ code: 'en-CA', name: 'Canada', component: flag.ca },
		{ code: 'en-AU', name: 'Australia', component: flag.au },
		{ code: 'fr-FR', name: 'France', component: flag.fr },
		{ code: 'de-DE', name: 'Germany', component: flag.de },
		{ code: 'es-ES', name: 'Spain', component: flag.es },
		{ code: 'sv-SE', name: 'Sweden', component: flag.sw }
	];

	const index = CountryCode.findIndex((object) => {
		return object.code === $page.data.locale;
	});

	let activeCountryindex = Math.abs(index);

	function changeRegion(index: number) {
		activeCountryindex = index;
		selectRegion(CountryCode[index].code, region, $region);
		hovering = 0;
		invalidateAll();
	}
</script>

<section id="Region" class="xs:pr-3 pr-1">
	<div
		on:mouseover={() => {
			hovering = 1;
		}}
		on:mouseleave={() => {
			hovering = 0;
		}}
		on:focus
		class="group relative z-50 inline-block"
	>
		<button
			aria-label="Regions"
			class="btn morph btn-group-fill group-hover:neumorphhover dark:group-hover:neumorphdarkhover h-8 min-w-[32px]
			justify-center align-middle xl:pl-2"
		>
			<div class="flex flex-row items-center justify-center">
				<div class=" w-6">
					<svelte:component this={CountryCode[activeCountryindex].component} />
				</div>
			</div>
			<span class="mx-2 hidden xl:block">Region</span>
		</button>
		{#if hovering}
			<ul
				transition:slide
				class="bg-skin-base text-skin-base absolute right-0 overflow-y-auto overflow-x-hidden rounded group-hover:block xl:-right-10"
			>
				{#each CountryCode as { component, name }, index}
					<button on:click={() => changeRegion(index)} class=" mx-3 mb-1 justify-center py-[4px]">
						<div class="btn morph w-42 flex flex-row pl-2">
							<div class="h-3 w-4">
								<svelte:component this={component} />
							</div>
							<span class="pl-2">{name}</span>
						</div>
					</button>
				{/each}
			</ul>
		{/if}
	</div>
</section>
