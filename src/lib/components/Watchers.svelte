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
	console.log('gb', watchers_details.GB);
	console.log('us', watchers_details.US);
	console.log('ca', watchers_details.CA);
	console.log('au', watchers_details.AU);
	console.log('fr', watchers_details.FR);
	console.log('de', watchers_details.DE);
	console.log('es', watchers_details.ES);

	let activeCountryindex = 0;

	$: i_code = CountryCode[activeCountryindex].code as CountryCodeType;
</script>

<section
	id="watchers"
	class="my-2 pt-1 pb-4 mx-auto max-w-7xl xl:mt-5 xl:mb-5 bg-skin-secondary text-skin-base xl:pl-5 xl:rounded-2xl"
>
	{#key activeCountryindex}
		<div>
			<div class="flex justify-between">
				<h3 class="flex justify-center text-2xl text-skin-base font-bold ">Where to watch</h3>
				<div class="flex flex-row items-center">
					<h2 class="text-lg">Data supplied by</h2>
					<img class="ml-2 h-4" src="/JustWatch-logo.webp" alt="Just watch" />
				</div>
				<div class="relative z-50 inline-block group">
					<div class="w-48 ">
						<div class="flex flex-row items-center">
							<div class="w-4 h-3">
								<svelte:component this={CountryCode[activeCountryindex].component} />
							</div>
							<span class="pl-2">{CountryCode[activeCountryindex].name}</span>
						</div>
						<ul
							class="cursor-pointer hidden rounded absolute bg-skin-primary text-skin-base group-hover:block"
						>
							{#each CountryCode as country, index}
								<li on:click={() => (activeCountryindex = index)} class="dropdown-item">
									<div class="flex flex-row items-center">
										<div class="w-4 h-3">
											<svelte:component this={country.component} />
										</div>
										<span class="pl-2">{country.name}</span>
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
				<h2 class="pl-4 text-lg text-skin-base">Buy</h2>
				<div class="mt-2 mb-4 flex flex-row flex-wrap">
					{#each watchers_details[i_code].buy as buy}
						<div class="pb-2 w-28 flex flex-col items-center">
							<img
								class="h-20 mt-1"
								src={`https://image.tmdb.org/t/p/w300${buy.logo_path}`}
								alt={buy.provider_name}
							/>
							<!-- <h2 class="align-center text-xs text-skin-base">{buy.provider_name}</h2> -->
						</div>
					{/each}
				</div>
			{/if}
			{#if watchers_details[i_code].rent}
				<h2 class="pl-4 text-lg text-skin-base ">Rent</h2>
				<div class="mt-2 mb-4 flex flex-row flex-wrap">
					{#each watchers_details[i_code].rent as rent}
						<div class="pb-2 w-28 flex flex-col items-center">
							<img
								class="h-20 mt-1"
								src={`https://image.tmdb.org/t/p/w300${rent.logo_path}`}
								alt={rent.provider_name}
							/>
							<!-- <h2 class="align-center text-xs text-skin-base">{rent.provider_name}</h2> -->
						</div>
					{/each}
				</div>
			{/if}
			{#if watchers_details[i_code].flatrate}
				<h2 class="pl-4 text-lg text-skin-base ">Subscription</h2>
				<div class="mt-2 mb-4 flex flex-row flex-wrap">
					{#each watchers_details[i_code].flatrate as flatrate}
						<div class="pb-2 w-28 flex flex-col items-center">
							<img
								class="h-20 mt-1"
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
</section>
