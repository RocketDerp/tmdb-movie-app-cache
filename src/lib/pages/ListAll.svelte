<script lang="ts">
	import CardMovie from '$lib/components/CardMovie.svelte';
	import CardTv from '$lib/components/CardTv.svelte';
	export let all_data: AllResult[];
</script>

<section
	id="tv-list"
	class="flex flex-wrap justify-around mx-auto bg-skin-tertiary max-w-7xl xl:mt-2 xl:rounded-2xl"
>
	{#each all_data as datum}
		{#if datum.media_type === 'tv'}
			<CardTv {datum} />
		{:else if datum.media_type === 'movie'}
			<CardMovie {datum} />
		{/if}
	{/each}
</section>
