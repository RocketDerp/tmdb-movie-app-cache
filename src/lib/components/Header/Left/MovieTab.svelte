<script lang="ts">
	import { goto } from '$app/navigation';
	import MovieSvg from '$lib/svgs/MovieSvg.svelte';
	function toggleMovie() {
		goto('/trending/movie');
	}
</script>

<!-- Movies Icon -->
<div class="xs:pl-3 flex pl-1 ">
	<div class="group relative z-50 inline-block">
		<button
			aria-label="Movies"
			on:click|preventDefault={toggleMovie}
			class="text-skin-inverted hover:text-skin-selected neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover inline-flex 
        h-8 min-w-[32px] items-center justify-center rounded-[3px] py-1 px-2 align-middle"
		>
			<MovieSvg />
			<span class="mx-2 hidden xl:block">Movies</span>
		</button>
	</div>
</div>
