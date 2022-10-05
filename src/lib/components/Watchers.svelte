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
</script>

<section
	id="watchers"
	class="my-2 pt-1 pb-4 mx-auto max-w-7xl xl:mt-5 xl:mb-5 bg-skin-primary text-skin-base xl:px-5 xl:rounded-2xl"
>
	{#key activeCountryindex}
		<div>
			<div class="xl:flex w-full flex-col xl:justify-between">
				<h3 class="text-xl flex justify-center xl:text-2xl text-skin-base font-bold ">
					Where to watch
				</h3>

				<div class="flex flex-end justify-end mt-2 xl:mt-0 z-50 mr-8 relative inline-block group">
					<!-- dropdown -->
					<div
						class="text-skin-inverted hover:text-skin-selected w-44 
						neumorph group-hover:neumorphhover dark:neumorphdark dark:group-hover:neumorphhover "
					>
						<!-- dropdown button  -->
						<div class="flex flex-row items-center justify-center">
							<div class="w-4 h-3">
								<svelte:component this={CountryCode[activeCountryindex].component} />
							</div>
							<span class="pl-2 ">{CountryCode[activeCountryindex].name}</span>
						</div>

						<!-- dropdown content  -->
						<ul
							class="fixed left-0 cursor-pointer hidden rounded bg-skin-primary absolute text-skin-base group-hover:block"
						>
							{#each CountryCode as { component, name }, index}
								<li
									on:click={() => (activeCountryindex = index)}
									class="justify-center pt-[7px] mx-3"
								>
									<div
										class="w-38 flex flex-row items-center 
										neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover
									"
									>
										<div class="w-4 h-3">
											<svelte:component this={component} />
										</div>
										<span class="pl-2 hover:text-skin-selected text-skin-inverted">{name}</span>
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
				<h2 class="text-lg text-skin-base">Buy</h2>
				<div class="mt-1 mb-4 flex py-4 rounded-2xl flex-row flex-wrap w-full bg-black">
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
				<h2 class="text-lg text-skin-base ">Rent</h2>
				<div class="mt-1 mb-4 flex py-4 rounded-2xl flex-row flex-wrap w-full bg-black">
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
				<h2 class="text-lg text-skin-base ">Subscription</h2>
				<div class="mt-1 mb-4 flex py-4 rounded-2xl flex-row flex-wrap w-full bg-black">
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
	<div class="flex flex-row items-center">
		<h2 class="ml-2 xl:ml-0 text-sm xl:text-lg">Data supplied by</h2>
		<img class="ml-2 h-3 xl:h-4" src="/JustWatch-logo.webp" alt="Just watch" />
	</div>
</section>
