<script lang="ts">
	import MainSection from '$lib/pages/MainSection.svelte';
	import { page } from '$app/stores';
	import type { PageData, Errors } from './$types';

	export let data: PageData;
	export let errors: Errors;

	if (errors) {
		console.log('ERRORS', errors);
	}

	let { media_data, total_pages } = data;
	$: media_type = $page.params.media as unknown as MediaType;
	$: searching = $page.params.id as unknown as string;
</script>

{#key data}
	<MainSection {media_data} {total_pages} {searching} {media_type} />
{/key}
