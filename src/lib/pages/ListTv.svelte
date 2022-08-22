<script lang="ts">
	import CardTv from '$lib/components/CardTv.svelte';
	export let tv_data: ShowResult[];
</script>

<section
	id="tv-list"
	class="flex flex-wrap justify-around mx-auto bg-skin-tertiary max-w-7xl xl:mt-2 xl:rounded-2xl"
>
	{#each tv_data as datum}
		<CardTv {datum} />
	{/each}
</section>
