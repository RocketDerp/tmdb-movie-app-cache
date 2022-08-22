<script lang="ts">
	import Episode from '$lib/pages/TvEpisode.svelte';
	import Breadcrumb from '$lib/utilities/Breadcrumb.svelte';
	import type { PageData, Errors } from './$types';

	export let data: PageData;
	export let errors: Errors;
	if (errors) {
		console.log('ERRORS', errors);
	}
	let { episode_details } = data;
</script>

<Breadcrumb title={episode_details.name} />

<Episode {episode_details} />
