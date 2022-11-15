<script lang="ts">
	import * as flag from '$lib/svgs/flags//index';
	import { page } from '$app/stores';
	import { fly, fade, slide } from 'svelte/transition';

	export let watchers_details: WatchersType;
	export let media: string;

	const CountryCode = [
		{ code: 'en-GB', country: 'GB', name: 'United Kingdom', component: flag.gb },
		{ code: 'en-US', country: 'US', name: 'USA', component: flag.us },
		{ code: 'en-CA', country: 'CA', name: 'Canada', component: flag.ca },
		{ code: 'en-AU', country: 'AU', name: 'Australia', component: flag.au },
		{ code: 'fr-FR', country: 'FR', name: 'France', component: flag.fr },
		{ code: 'de-DE', country: 'DE', name: 'Germany', component: flag.de },
		{ code: 'es-ES', country: 'ES', name: 'Spain', component: flag.es },
		{ code: 'sv-SE', country: 'SE', name: 'Sweden', component: flag.sw }
	];

	const index = CountryCode.findIndex((object) => {
		return object.code === $page.data.locale;
	});

	let activeCountryindex = index;

	$: i_code = CountryCode[activeCountryindex].country as CountryCodeType;
	// 20:30:01 [vite-plugin-svelte] C:/Github/tmdb-movie-app/src/lib/pages/MediaMovie.svelte:79:7 A11y: visible,
	// non-interactive elements with an on:click event must be accompanied by an on:keydown, on:keyup, or on:keypress event.
</script>

<section
	id="watchers"
	class="bg-skin-primary text-skin-base my-2 mx-auto max-w-7xl pt-1 pb-4 xl:mt-5 xl:mb-5 xl:rounded-2xl xl:px-5"
>
	{#key activeCountryindex}
		<div>
			<div class="w-full flex-col xl:flex xl:justify-between">
				<h3 class="text-skin-base flex justify-center text-xl font-bold xl:text-2xl ">
					Where to watch
				</h3>
				<div class="flex justify-end">
					<div class="group relative z-10 mt-2 mr-8 xl:mt-0">
						<!-- dropdown -->
						<div
							class="text-skin-inverted hover:text-skin-selected neumorph 
							group-hover:neumorphhover dark:neumorphdark dark:group-hover:neumorphdarkhover w-44"
						>
							<!-- dropdown button  -->
							<div class="flex flex-row items-center justify-center">
								<div class="h-3 w-4">
									<svelte:component this={CountryCode[activeCountryindex].component} />
								</div>
								<span class="pl-2 ">{CountryCode[activeCountryindex].name}</span>
							</div>

							<!-- dropdown content  -->
							<ul
								class="bg-skin-primary text-skin-base absolute left-0 hidden cursor-pointer rounded group-hover:block"
							>
								{#each CountryCode as { component, name }, index}
									<li
										on:keydown
										on:click={() => (activeCountryindex = index)}
										class=" justify-center pt-[7px]"
									>
										<div
											class=" neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphdarkhover flex 
										w-44 flex-row items-center pl-3
									"
										>
											<div class="h-3 w-4">
												<svelte:component this={component} />
											</div>
											<span class="hover:text-skin-selected text-skin-inverted pl-2">{name}</span>
										</div>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		{#if !watchers_details[i_code]?.buy && !watchers_details[i_code]?.rent && !watchers_details[i_code]?.flatrate && !watchers_details[i_code]?.free}
			<div class="flex justify-center pb-8">
				<h2>Not Currently Available</h2>
			</div>
		{:else if watchers_details[i_code]}
			{#if watchers_details[i_code].free}
				<h2 class="text-skin-base pl-2 text-lg">FreeView</h2>
				<div class="mb-4 flex w-full flex-row flex-wrap py-2">
					{#each watchers_details[i_code].free as free}
						<div
							class="neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphdarkhover ml-2 flex w-24 flex-col items-center pb-2"
						>
							<a href={`/network/${media}/${free.provider_id}`}>
								<img
									class="mt-1 h-20"
									src={`https://image.tmdb.org/t/p/w300${free.logo_path}`}
									alt={free.provider_name}
								/>
							</a>
							<!-- <h2 class="align-center text-xs text-skin-base">{buy.provider_name}</h2> -->
						</div>
					{/each}
				</div>
			{/if}
			{#if watchers_details[i_code].buy}
				<h2 class="text-skin-base pl-2 text-lg">Buy</h2>
				<div class="mb-4 flex w-full flex-row flex-wrap py-2">
					{#each watchers_details[i_code].buy as buy}
						<div
							class="neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphdarkhover ml-2 flex w-24 flex-col items-center pb-2"
						>
							<a href={`/network/${media}/${buy.provider_id}`}>
								<img
									class="mt-1 h-20"
									src={`https://image.tmdb.org/t/p/w300${buy.logo_path}`}
									alt={buy.provider_name}
								/>
							</a>
							<!-- <h2 class="align-center text-xs text-skin-base">{buy.provider_name}</h2> -->
						</div>
					{/each}
				</div>
			{/if}
			{#if watchers_details[i_code].rent}
				<h2 class="text-skin-base pl-2 text-lg ">Rent</h2>
				<div class="mb-4 flex w-full flex-row flex-wrap py-2">
					{#each watchers_details[i_code].rent as rent}
						<div
							class="neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphdarkhover ml-2 flex w-24 flex-col items-center pb-2"
						>
							<a href={`/network/${media}/${rent.provider_id}`}>
								<img
									class="mt-1 h-20"
									src={`https://image.tmdb.org/t/p/w300${rent.logo_path}`}
									alt={rent.provider_name}
								/>
							</a>
							<!-- <h2 class="align-center text-xs text-skin-base">{rent.provider_name}</h2> -->
						</div>
					{/each}
				</div>
			{/if}
			{#if watchers_details[i_code].flatrate}
				<h2 class="text-skin-base pl-2 text-lg ">Subscription</h2>
				<div class="mb-4 flex w-full flex-row flex-wrap py-2">
					{#each watchers_details[i_code].flatrate as flatrate}
						<div
							class="neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphdarkhover ml-2 flex w-24 flex-col items-center pb-2"
						>
							<a href={`/network/${media}/${flatrate.provider_id}`}>
								<img
									class="mt-1 h-20"
									src={`https://image.tmdb.org/t/p/w300${flatrate.logo_path}`}
									alt={flatrate.provider_name}
								/>
							</a>
							<!-- <h2 class="align-center text-xs text-skin-base">{flatrate.provider_name}</h2> -->
						</div>
					{/each}
				</div>
			{/if}
		{/if}
	{/key}
	<div class="flex flex-row items-center">
		<h2 class="ml-2 text-sm xl:ml-0 xl:text-lg">Data supplied by</h2>
		<img
			class="dark:bg-skin-primary ml-2 h-4 bg-slate-600"
			src="/JustWatch-logo.webp"
			alt="Just watch"
		/>
	</div>
</section>
