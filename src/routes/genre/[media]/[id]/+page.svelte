<script lang="ts">
	import { page } from '$app/stores';
	import MainSection from '$lib/pages/MainSection.svelte';
	import { selected } from '$lib/stores/store';
	import type { PageData, Errors } from './$types';

	export let data: PageData;
	export let errors: Errors = null;
	if (errors) {
		console.log('ERRORS', errors);
	}

	$: media_type = $page.params.media as unknown as MediaType;
	$: genres = $page.params.id as unknown as number;

	$selected = null;
</script>

{#key $page.url}
	<MainSection media_data={data.media_data} total_pages={data.total_pages} {genres} {media_type} />
{/key}
