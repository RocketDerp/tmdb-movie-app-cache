<script lang="ts">
	import CardMovie from '$lib/components/CardMovie.svelte';
	// import Skeleton from '$lib/utilities/Skeleton.svelte';
	export let movie_data: MovieResult[];
</script>

<section
	id="movie-list"
	class="bg-skin-base mx-auto flex max-w-7xl flex-wrap justify-evenly pb-11 md:pb-7 xl:mt-2 xl:rounded-2xl"
>
	{#each movie_data as datum}
		<CardMovie {datum} />
	{/each}
</section>
