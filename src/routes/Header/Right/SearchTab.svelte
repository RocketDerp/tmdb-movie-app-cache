<script lang="ts">
	import { goto } from '$app/navigation';
	import { clickOutside } from '../click_outside';
	import MovieSvg from '$lib/svgs/MovieSvg.svelte';
	import ShowSvg from '$lib/svgs/ShowSvg.svelte';
	import PersonSvg from '$lib/svgs/PersonSvg.svelte';
	import SearchSvg from '$lib/svgs/SearchSvg.svelte';

	const mediaOptions = [
		{ id: 'movie', name: 'Movies', component: MovieSvg },
		{ id: 'tv', name: 'Tv', component: ShowSvg },
		{ id: 'person', name: 'People', component: PersonSvg }
	];

	let selectedMedia = mediaOptions[0];

	let searchTerm: string;
	let isShowing = false;

	function showSearch() {
		isShowing = true;
	}

	function handleSearch() {
		if (searchTerm) {
			isShowing = false;
			let searching = searchTerm;
			searchTerm = '';
			goto(`/search/${selectedMedia.id}/${searching}`);
		}
	}
</script>

<section id="Search" class="xs:pr-3 pr-1 ">
	<div class="group relative z-50 inline-block">
		<button
			aria-label="Search"
			on:click|preventDefault={showSearch}
			class="btn morph btn-group-fill group-hover:neumorphhover 
			dark:group-hover:neumorphdarkhover flex h-8 min-w-[32px] justify-center py-1 px-2 align-middle"
		>
			<span class="  h-5 w-5"> <SearchSvg /> </span>
			<span class="mx-2 hidden xl:block">Search</span>
		</button>

		{#if isShowing}
			<div
				class="fixed left-0 w-full rounded"
				use:clickOutside
				on:outclick={() => (isShowing = false)}
			>
				<div class="text-skin-base bg-skin-base mx-auto mt-2 flex max-w-7xl">
					<form
						class="text-skin-base flex w-full flex-col sm:p-2"
						label="search form"
						on:submit|preventDefault={handleSearch}
					>
						<div class="flex flex-row p-2">
							<div class="flex items-center sm:w-[76px]">
								<p>Search in {selectedMedia.name}</p>
							</div>
							<span class="fill-base flex h-8 w-8 items-center justify-center ">
								<svelte:component this={selectedMedia.component} />
							</span>
							<input
								label="search"
								class="text-skin-base neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorhdarkhove ml-3 
                                flex w-full border-2 bg-transparent pl-3 text-lg outline-none"
								type="text"
								placeholder="Search..."
								bind:value={searchTerm}
							/>
						</div>
						<div class="flex xl:flex-row">
							{#each mediaOptions as option}
								<div
									on:keydown
									on:click={() => (selectedMedia = option)}
									class="btn morph btn-fill mx-2 my-1 flex cursor-pointer flex-row gap-3 py-1 pl-1 sm:px-4"
									class:text-skin-base={selectedMedia}
									value={option.id}
								>
									<span>in</span>
									<span class="  h-5 w-5">
										<svelte:component this={option.component} />
									</span>
									{option.name}
								</div>
							{/each}
						</div>
					</form>
				</div>
			</div>
		{/if}
	</div>
</section>
