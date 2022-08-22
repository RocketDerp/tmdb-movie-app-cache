<script lang="ts">
	import CardMovie from '$lib/components/CardMovie.svelte';
	// import Skeleton from '$lib/utilities/Skeleton.svelte';
	export let movie_data: MovieResult[];
</script>

<section
	id="movie-list"
	class="flex flex-wrap justify-around mx-auto bg-skin-tertiary max-w-7xl xl:mt-2 xl:rounded-2xl"
>
	{#each movie_data as datum}
		<CardMovie {datum} />
	{/each}
</section>
