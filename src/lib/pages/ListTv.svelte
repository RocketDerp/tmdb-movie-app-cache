<script lang="ts">
	import CardTv from '$lib/components/CardTv.svelte';
	export let tv_data: ShowResult[];
</script>

<section
	id="tv-list"
	class="bg-skin-tertiary mx-auto flex max-w-7xl flex-wrap justify-evenly xl:mt-2 xl:rounded-2xl"
>
	{#each tv_data as datum}
		<CardTv {datum} />
	{/each}
</section>
