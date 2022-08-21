<script lang="ts">
	import Episode from '$lib/pages/Episode.svelte';
	import type { PageData, Errors } from './$types';

	export let data: PageData;
	export let errors: Errors;
	if (errors) {
		console.log('ERRORS', errors);
	}
	let { episode_details } = data;
</script>

<Episode {episode_details} />
