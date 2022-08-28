<script lang="ts">
	import { goto } from '$app/navigation';
	import ToggleDarkMode from '$lib/components/Header/ToggleDarkMode.svelte';
	import MovieSvg from '$lib/svgs/MovieSvg.svelte';
	import ShowSvg from '$lib/svgs/ShowSvg.svelte';
	import PersonSvg from '$lib/svgs/PersonSvg.svelte';

	const mediaOptions = [
		{ id: 'movie', name: 'Movies', component: MovieSvg },
		{ id: 'tv', name: 'Tv', component: ShowSvg },
		{ id: 'person', name: 'People', component: PersonSvg }
	];

	let selectedMedia = mediaOptions[0];

	let searchTerm: string;

	function handleSearch() {
		if (searchTerm) {
			let searching = searchTerm;
			searchTerm = '';
			goto(`/search/${selectedMedia.id}/${searching}`);
		}
	}
</script>

<section id="search" class="flex flex-row">
	<ToggleDarkMode />
	<form
		class="text-skin-base flex justify-end items-center pr-0.5"
		label="search form"
		on:submit|preventDefault={handleSearch}
	>
		<div
			class="group cursor-pointer w-8 h-8 pt-[6px] pl-3 text-sm border-2 border-r-0 rounded-l-full outline-none border-slate-300
			text-skin-inverted hover:text-skin-selected
				bg-[#e7e7f5] p-[2px] border-none						
				shadow-[1px_1px_2px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.9)]
				hover:shadow-[inset_2px_2px_4px_rgba(163,177,198,0.9),-2px_-2px_4px_rgba(255,255,255,0.4)] hover:brightness-105
				dark:bg-[#515151]
				dark:shadow-[2px_2px_4px_#101114,-2px_-2px_6px_#24252a]
				dark:hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.9),-2px_-2px_4px_rgba(0,0,0,1.0)]
				dark:hover:bg-[#4d4d4d]"
		>
			<svelte:component this={selectedMedia.component} />
			<div
				class="hidden  group-hover:flex flex-col gap-2 w-28 p-2 pl-[18px] -ml-2 border-slate-300 bg-skin-primary text-skin-base"
			>
				{#each mediaOptions as option}
					<div
						on:click={() => (selectedMedia = option)}
						class="relative flex flex-row gap-3 -left-2 peer text-skin-inverted group-hover:text-skin-selected"
						value={option}
					>
						<svelte:component this={option.component} />
						{option.name}
					</div>
				{/each}
			</div>
		</div>
		<input
			label="search"
			class="p-[2px] w-24 h-8 px-2 text-lg bg-transparent border-2 text-white border-l-0 rounded-r-full 
			outline-none lg:w-48 placeholder-text-skin-inverted::placeholder border-slate-300 
				bg-[#e7e7f5] border-none						
				shadow-[1px_1px_2px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.9)]
				hover:shadow-[inset_2px_2px_4px_rgba(163,177,198,0.9),-2px_-2px_4px_rgba(255,255,255,0.4)] hover:brightness-105
				dark:bg-[#515151]
				dark:shadow-[2px_2px_4px_#101114,-2px_-2px_6px_#24252a]
				dark:hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.9),-2px_-2px_4px_rgba(0,0,0,1.0)]
				dark:hover:bg-[#4d4d4d]"
			type="text"
			placeholder="Search..."
			bind:value={searchTerm}
		/>
	</form>
</section>
