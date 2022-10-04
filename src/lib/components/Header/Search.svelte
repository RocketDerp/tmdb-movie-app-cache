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
				class="flex justify-center min-w-8 h-8 align-middle inline-flex items-center rounded text-skin-inverted hover:text-skin-selected py-1 px-2 rounded-[3px]
			            neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
			>
				<SearchSvg />
				<span class="hidden mx-2 xl:block">Search</span>
			</button>

			<!-- =========================================== -->
			{#if isShowing}
				<div
					class="w-full fixed left-0 rounded"
					use:clickOutside
					on:outclick={() => (isShowing = false)}
				>
					<div class="mt-2 flex max-w-7xl mx-auto bg-skin-primary">
						<form
							class="text-skin-base w-full flex flex-col p-2"
							label="search form"
							on:submit|preventDefault={handleSearch}
						>
							<div class="flex flex-row p-2">
								<div
									class="fill-selected w-8 flex items-center justify-center
                                            neumorph dark:neumorphdark "
								>
									<svelte:component this={selectedMedia.component} />
								</div>
								<input
									label="search"
									class="text-skin-inverted flex ml-3 w-full text-lg bg-transparent border-2
                                            outline-none
                                            neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
									type="text"
									placeholder="Search..."
									bind:value={searchTerm}
								/>
							</div>

							{#each mediaOptions as option}
								<div
									on:click={() => (selectedMedia = option)}
									class="group mx-2 my-1 p-1 w-32 cursor-pointer items-center flex flex-row gap-3 peer hover:text-skin-selected
                                    neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
									class:text-skin-base={selectedMedia}
									value={option}
								>
									<span> in</span>
									<svelte:component this={option.component} />
									{option.name}
								</div>
							{/each}
						</form>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
