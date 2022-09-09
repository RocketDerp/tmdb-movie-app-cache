<script lang="ts">
	import TvMedia from '$lib/pages/MediaTv.svelte';
	import { page } from '$app/stores';
	import type { PageData, Errors } from './$types';

	export let data: PageData;
	export let errors: Errors = null;
	if (errors) {
		console.log('ERRORS', errors);
	}
	$: tv_id = $page.params.id as unknown as number;
</script>

<TvMedia tv_details={data.tv_details} {tv_id} />
