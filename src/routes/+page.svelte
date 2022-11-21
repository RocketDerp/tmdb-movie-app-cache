<script lang="ts">
	import MainSection from '$lib/pages/MainSection.svelte';
	import { page } from '$app/stores';
	import { selected } from '$lib/stores/store';
	import type { PageData } from './$types';

	export let data: PageData;

	$selected = null;
</script>

{#key $page.url}
	<MainSection media_data={data.media_data} total_pages={data.total_pages} media_type={'all'} />
{/key}
