<script lang="ts">
	import MovieSvg from '$lib/svgs/MovieSvg.svelte';
	import ShowSvg from '$lib/svgs/ShowSvg.svelte';
	import { goto } from '$app/navigation';
	function toggleMovie() {
		goto('/networks/movie');
	}

	function toggleTv() {
		goto('/networks/tv');
	}
</script>

<div class=" flex flex-col p-1">
	<button
		aria-label="Movies"
		on:click|preventDefault={toggleMovie}
		class="min-w-8 text-skin-inverted hover:text-skin-selected neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover m-2 
			inline-flex h-8 items-center justify-center rounded-[3px] py-1 px-2 align-middle"
	>
		<MovieSvg />
		<span class="mx-2">Movies</span>
	</button>

	<button
		aria-label="TV Shows"
		on:click|preventDefault={toggleTv}
		class="min-w-8 text-skin-inverted hover:text-skin-selected neumorph 
			hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover m-2 
			inline-flex h-8 items-center justify-center rounded-[3px] py-1 px-2 align-middle"
	>
		<span>
			<ShowSvg />
		</span>
		<span class="mx-2">Tv</span>
	</button>
</div>
