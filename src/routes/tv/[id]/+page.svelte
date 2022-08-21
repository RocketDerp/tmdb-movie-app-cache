<script lang="ts">
	import TvMedia from '$lib/pages/MediaTv.svelte';
	import { page } from '$app/stores';
	import type { PageData, Errors } from './$types';

	export let data: PageData;
	export let errors: Errors;
	if (errors) {
		console.log('ERRORS', errors);
	}

	let { tv_details } = data;
	let tv_id = $page.params.id as unknown as number;
</script>

<TvMedia {tv_details} {tv_id} />
