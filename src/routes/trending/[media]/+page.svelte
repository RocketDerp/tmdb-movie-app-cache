<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { selected } from '$lib/stores/store';
	import MainSection from '$lib/pages/MainSection.svelte';

	export let data: PageData;
	
	$: media_type = $page.params.media as unknown as MediaType;
	

	$selected = null;
</script>

{#key $page.url}
	<MainSection media_data={data.media_data} total_pages={data.total_pages} {media_type} />
{/key}
