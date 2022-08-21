<script lang="ts">
	import TvCard from '$lib/components/TvCard.svelte';
	import MovieCard from '$lib/components/MovieCard.svelte';

	export let all_data: AllResult[];
</script>

<section
	id="tv-list"
	class="flex flex-wrap justify-around mx-auto bg-skin-tertiary max-w-7xl xl:mt-2 xl:rounded-2xl"
>
	{#each all_data as datum}
		{#if datum.media_type === 'tv'}
			<TvCard {datum} />
		{:else if datum.media_type === 'movie'}
			<MovieCard {datum} />
		{/if}
	{/each}
</section>
