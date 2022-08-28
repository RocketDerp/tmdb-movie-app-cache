<script lang="ts">
	import { goto } from '$app/navigation';
	import Genre from '$lib/components/Header/Genre.svelte';
	import MovieSvg from '$lib/svgs/MovieSvg.svelte';
	import ShowSvg from '$lib/svgs/ShowSvg.svelte';
	import PersonSvg from '$lib/svgs/PersonSvg.svelte';
	import GenreSvg from '$lib/svgs/GenreSvg.svelte';
	function toggleMovie() {
		goto('/trending/movie');
	}

	function toggleTv() {
		goto('/trending/tv');
	}

	function togglePerson() {
		goto('/trending/person');
	}
</script>

<!-- Movie Icon -->
<div class="pl-3 ">
	<div class="relative z-50 inline-block group">
		<button
			aria-label="Movies"
			on:click|preventDefault={toggleMovie}
			class="inline-flex items-center rounded text-skin-inverted hover:text-skin-selected py-1 px-2 rounded-[3px]
			neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
		>
			<MovieSvg />
			<span class="hidden mx-2 xl:block">Movies</span>
		</button>
	</div>
</div>

<!-- TV Icon -->
<div class="pl-3 ">
	<div class="relative z-50 inline-block group">
		<button
			aria-label="TV Shows"
			on:click|preventDefault={toggleTv}
			class="inline-flex items-center rounded text-skin-inverted hover:text-skin-selected py-1 px-2 rounded-[3px]
			neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
		>
			<span>
				<ShowSvg />
			</span>
			<span class="hidden mx-2 xl:block">Tv</span>
		</button>
	</div>
</div>

<!-- Person icon  -->
<div class="pl-3 ">
	<div class="relative z-50 inline-block group">
		<button
			aria-label="People"
			on:click|preventDefault={togglePerson}
			class="inline-flex items-center rounded text-skin-inverted hover:text-skin-selected py-1 px-2 rounded-[3px]
			neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
		>
			<span class="w-5 h-5">
				<PersonSvg />
			</span>
			<span class="hidden mx-2 xl:block">People</span>
		</button>
	</div>
</div>

<!-- Genre Icon + dropdown -->
<div class="pl-3 ">
	<div class="relative z-50 inline-block group">
		<button
			aria-label="Genres"
			class="inline-flex items-center rounded text-skin-inverted hover:text-skin-selected py-1 px-2 rounded-[3px]
			neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
		>
			<span>
				<GenreSvg />
			</span>
			<span class="hidden mx-2 xl:block">Genres</span>
		</button>
		<ul
			class="fixed left-0 hidden rounded xl:absolute bg-skin-primary text-skin-base group-hover:block"
		>
			<Genre />
		</ul>
	</div>
</div>

<!-- <style>
	button {
		background: #e7e7f5;
		border: none;
		padding: 2px 8px;
		box-shadow: 1px 1px 2px rgba(163, 177, 198, 0.5), -2px -2px 5px rgba(255, 255, 255, 0.6);
		cursor: pointer;
		border-radius: 3px;
	}

	button:hover {
		box-shadow: inset 2px 2px 5px rgba(163, 177, 198, 0.7), -2px -2px 5px rgba(255, 255, 255, 0.4);
		filter: brightness(1.05);
	}
</style> -->
