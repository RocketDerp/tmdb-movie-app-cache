<script lang="ts">
	import MainSection from '$lib/pages/MainSection.svelte';
	import { page } from '$app/stores';
	import type { PageData, Errors } from './$types';

	export let data: PageData;
	export let errors: Errors;

	if (errors) {
		console.log('ERRORS', errors);
	}

	$: media_type = $page.params.media as unknown as MediaType;
	$: searching = $page.params.id as unknown as string;
</script>

{#key $page.url}
	<MainSection
		media_data={data.media_data}
		total_pages={data.total_pages}
		{searching}
		{media_type}
	/>
{/key}
