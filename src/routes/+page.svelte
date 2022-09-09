<script lang="ts">
	import MainSection from '$lib/pages/MainSection.svelte';
	import { selected } from '$lib/stores/store';
	import type { PageData } from './$types';

	export let data: PageData;
	export let errors = null;

	if (errors) {
		console.log('ERRORS', errors);
	}
	const { media_data, total_pages } = data;

	$selected = null;
</script>

<MainSection {media_data} {total_pages} media_type={'all'} />
