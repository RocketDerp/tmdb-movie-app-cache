<script lang="ts">
	import MainSection from '$lib/pages/MainSection.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;

	$: media_type = $page.params.media as unknown as MediaType;
	$: searching = $page.params.query as unknown as string;
</script>

{#key $page.url}
	<MainSection
		media_data={data.media_data}
		total_pages={data.total_pages}
		{searching}
		{media_type}
	/>
{/key}
