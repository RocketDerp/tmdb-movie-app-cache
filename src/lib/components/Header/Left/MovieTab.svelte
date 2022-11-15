<script lang="ts">
	import { goto } from '$app/navigation';
	import MovieSvg from '$lib/svgs/MovieSvg.svelte';
	function toggleMovie() {
		goto('/trending/movie');
	}
</script>

<!-- Movies Icon -->
<div class="xs:pl-3 flex pl-1 ">
	<div class="relative z-50 inline-block">
		<button
			aria-label="Movies"
			on:click|preventDefault={toggleMovie}
			class="btn morph btn-fill h-8 min-w-[32px] justify-center py-1 px-2 align-middle"
		>
			<span class="h-5 w-5"> <MovieSvg /> </span>
			<span class="mx-2 hidden xl:block">Movies</span>
		</button>
	</div>
</div>
