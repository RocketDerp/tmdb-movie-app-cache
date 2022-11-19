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
		class="btn morph btn-fill mt-2 h-8 min-w-[32px] justify-center py-1 px-2 align-middle"
	>
		<span class="  h-5 w-5"> <MovieSvg /> </span>
		<span class="mx-2">Movies</span>
	</button>

	<button
		aria-label="TV Shows"
		on:click|preventDefault={toggleTv}
		class="btn morph btn-fill my-2 h-8 min-w-[32px] justify-center py-1 px-2 align-middle"
	>
		<span class="h-5 w-5"> <ShowSvg /> </span>

		<span class="mx-2">Tv</span>
	</button>
</div>
