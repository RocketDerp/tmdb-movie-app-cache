<script lang="ts">
	import * as flag from '$lib/svgs/flags//index';
	import { selectRegion } from '$lib/components/Header/Right/selectRegion';
	import { invalidateAll } from '$app/navigation';
	import { region } from '$lib/stores/store';
	import { page } from '$app/stores';

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

	let activeCountryindex = index;

	function changeRegion(index: number) {
		activeCountryindex = index;
		selectRegion(CountryCode[index].code, region, $region);
		invalidateAll();
	}
</script>

<section id="Region" class="xs:pr-3 pr-1">
	{#key activeCountryindex}
		<div class="group relative z-50 inline-block">
			<button
				aria-label="Regions"
				class=" text-skin-inverted hover:text-skin-selected neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover inline-flex 
				h-8 min-w-[32px] items-center justify-center rounded-[3px] align-middle xl:pl-2"
			>
				<div class="flex flex-row items-center justify-center">
					<div class=" w-6">
						<svelte:component this={CountryCode[activeCountryindex].component} />
					</div>
				</div>
				<span class="mx-2 hidden xl:block">Region</span>
			</button>

			<ul
				class="bg-skin-primary text-skin-base absolute right-0 hidden overflow-y-auto overflow-x-hidden rounded group-hover:block"
			>
				{#each CountryCode as { component, name }, index}
					<button on:click={() => changeRegion(index)} class=" mx-3 justify-center pt-[7px]">
						<div
							class="w-42 neumorph hover:neumorphhover dark:neumorphdark 
                            dark:hover:neumorphhover flex flex-row items-center
                        "
						>
							<div class="h-3 w-4">
								<svelte:component this={component} />
							</div>
							<span class="hover:text-skin-selected text-skin-inverted pl-2">{name}</span>
						</div>
					</button>
				{/each}
			</ul>
		</div>
	{/key}
</section>
