<script lang="ts">
	import CardMovie from '$lib/components/CardMovie.svelte';
	import CardTv from '$lib/components/CardTv.svelte';
	export let all_data: AllResult[];
</script>

<section
	id="tv-list"
	class="bg-skin-tertiary mx-auto flex max-w-7xl flex-wrap justify-evenly pb-11 md:pb-7 xl:mt-2 xl:rounded-2xl"
>
	{#each all_data as datum}
		{#if datum.media_type === 'tv'}
			<CardTv {datum} />
		{:else if datum.media_type === 'movie'}
			<CardMovie {datum} />
		{/if}
	{/each}
</section>
