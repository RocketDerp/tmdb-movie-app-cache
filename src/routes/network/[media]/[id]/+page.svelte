<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import MainSection from '$lib/pages/MainSection.svelte';

	export let data: PageData;

	$: network = $page.params.id as unknown as MediaType;
	$: media_type = $page.params.media as unknown as MediaType;
</script>

{#key $page.url}
	<MainSection media_data={data.media_data} total_pages={data.total_pages} {media_type} {network} />
{/key}
