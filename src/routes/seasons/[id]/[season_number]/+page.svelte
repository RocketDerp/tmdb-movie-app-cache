<script lang="ts">
	import Season from '$lib/pages/Season.svelte';
	import { page } from '$app/stores';
	import type { PageData, Errors } from './$types';

	export let data: PageData;
	export let errors: Errors;

	if (errors) {
		console.log('ERRORS', errors);
	}

	let { season_details } = data;

	let tv_id = $page.params.id;
</script>

<Season {season_details} {tv_id} />
