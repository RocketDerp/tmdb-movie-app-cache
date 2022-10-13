<script lang="ts">
	import { goto } from '$app/navigation';
	import ToggleDarkMode from '$lib/components/Header/ToggleDarkMode.svelte';
	import SearchSvg from '$lib/svgs/SearchSvg.svelte';
	import MovieSvg from '$lib/svgs/MovieSvg.svelte';
	import ShowSvg from '$lib/svgs/ShowSvg.svelte';
	import PersonSvg from '$lib/svgs/PersonSvg.svelte';
	import { clickOutside } from '$lib/components/Header/click_outside';

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

<section id="search" class="flex flex-row">
	<ToggleDarkMode />

	<div class="pr-3 ">
		<div class="relative z-50 inline-block">
			<button
				aria-label="Search"
				on:click|preventDefault={showSearch}
				class="min-w-8 text-skin-inverted hover:text-skin-selected neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover flex h-8 items-center justify-center rounded-[3px] py-1 px-2 align-middle"
			>
				<SearchSvg />
				<span class="mx-2 hidden xl:block">Search</span>
			</button>

			<!-- =========================================== -->
			{#if isShowing}
				<div
					class="fixed left-0 w-full rounded"
					use:clickOutside
					on:outclick={() => (isShowing = false)}
				>
					<div class="bg-skin-primary mx-auto mt-2 flex max-w-7xl">
						<form
							class="text-skin-base flex w-full flex-col sm:p-2"
							label="search form"
							on:submit|preventDefault={handleSearch}
						>
							<div class="flex flex-row p-2">
								<p>Search in {selectedMedia.name}</p>
								<div class="fill-selected flex w-8 items-center justify-center ">
									<svelte:component this={selectedMedia.component} />
								</div>
								<input
									label="search"
									class="text-skin-inverted neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover ml-3 flex
                                            w-full
                                            border-2 bg-transparent text-lg outline-none"
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
										class="hover:text-skin-selected neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover group peer mx-2 my-1 flex cursor-pointer
                                    flex-row items-center gap-3 p-1 pl-0 sm:pl-1"
										class:text-skin-base={selectedMedia}
										value={option}
									>
										<span>in</span>
										<svelte:component this={option.component} />
										{option.name}
									</div>
								{/each}
							</div>
						</form>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
