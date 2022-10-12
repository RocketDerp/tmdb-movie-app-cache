<script lang="ts">
	import * as flag from '$lib/svgs/flags//index';

	export let watchers_details: WatchersType;

	const CountryCode = [
		{ code: 'GB', name: 'United Kingdom', component: flag.gb },
		{ code: 'US', name: 'USA', component: flag.us },
		{ code: 'CA', name: 'Canada', component: flag.ca },
		{ code: 'AU', name: 'Australia', component: flag.au },
		{ code: 'FR', name: 'France', component: flag.fr },
		{ code: 'DE', name: 'Germany', component: flag.de },
		{ code: 'ES', name: 'Spain', component: flag.es }
	];

	let activeCountryindex = 0;

	$: i_code = CountryCode[activeCountryindex].code as CountryCodeType;
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

				<div class="flex-end group relative z-50 mt-2 mr-8 flex justify-end xl:mt-0">
					<!-- dropdown -->
					<div
						class="text-skin-inverted hover:text-skin-selected neumorph 
						group-hover:neumorphhover dark:neumorphdark dark:group-hover:neumorphhover w-44 "
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
									class="mx-3 justify-center pt-[7px]"
								>
									<div
										class="w-38 neumorph hover:neumorphhover dark:neumorphdark 
										dark:hover:neumorphhover flex flex-row items-center
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
		{#if watchers_details[i_code]}
			{#if watchers_details[i_code].buy}
				<h2 class="text-skin-base text-lg">Buy</h2>
				<div class="mt-1 mb-4 flex w-full flex-row flex-wrap rounded-2xl bg-black py-4">
					{#each watchers_details[i_code].buy as buy}
						<div class="flex w-28 flex-col items-center pb-2">
							<img
								class="mt-1 h-20"
								src={`https://image.tmdb.org/t/p/w300${buy.logo_path}`}
								alt={buy.provider_name}
							/>
							<!-- <h2 class="align-center text-xs text-skin-base">{buy.provider_name}</h2> -->
						</div>
					{/each}
				</div>
			{/if}
			{#if watchers_details[i_code].rent}
				<h2 class="text-skin-base text-lg ">Rent</h2>
				<div class="mt-1 mb-4 flex w-full flex-row flex-wrap rounded-2xl bg-black py-4">
					{#each watchers_details[i_code].rent as rent}
						<div class="flex w-28 flex-col items-center pb-2">
							<img
								class="mt-1 h-20"
								src={`https://image.tmdb.org/t/p/w300${rent.logo_path}`}
								alt={rent.provider_name}
							/>
							<!-- <h2 class="align-center text-xs text-skin-base">{rent.provider_name}</h2> -->
						</div>
					{/each}
				</div>
			{/if}
			{#if watchers_details[i_code].flatrate}
				<h2 class="text-skin-base text-lg ">Subscription</h2>
				<div class="mt-1 mb-4 flex w-full flex-row flex-wrap rounded-2xl bg-black py-4">
					{#each watchers_details[i_code].flatrate as flatrate}
						<div class="flex w-28 flex-col items-center pb-2">
							<img
								class="mt-1 h-20"
								src={`https://image.tmdb.org/t/p/w300${flatrate.logo_path}`}
								alt={flatrate.provider_name}
							/>
							<!-- <h2 class="align-center text-xs text-skin-base">{flatrate.provider_name}</h2> -->
						</div>
					{/each}
				</div>
			{/if}
		{/if}
	{/key}
	<div class="flex flex-row items-center">
		<h2 class="ml-2 text-sm xl:ml-0 xl:text-lg">Data supplied by</h2>
		<img class="ml-2 h-3 xl:h-4" src="/JustWatch-logo.webp" alt="Just watch" />
	</div>
</section>
