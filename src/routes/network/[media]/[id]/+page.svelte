<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import MainSection from '$lib/pages/MainSection.svelte';
	export let data: PageData;

	$: network = $page.params.id as unknown as MediaType;
	$: media_type = $page.params.media as unknown as MediaType;
</script>

{#key $page.url}
	{#if data.media_data[0]?.id}
		<MainSection
			media_data={data.media_data}
			total_pages={data.total_pages}
			{media_type}
			{network}
		/>
	{:else}
		<div class=" mt-48 flex justify-center">
			<h2>No data available for this network in this region</h2>
		</div>
		<div class="mt-1 flex justify-center">
			<h2 class="flex">Please make a different selection</h2>
		</div>
	{/if}
{/key}
