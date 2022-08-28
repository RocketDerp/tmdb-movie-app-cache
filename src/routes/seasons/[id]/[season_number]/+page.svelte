<script lang="ts">
	import Season from '$lib/pages/TvSeason.svelte';
	import { page } from '$app/stores';
	import type { PageData, Errors } from './$types';
	import Breadcrumb from '$lib/utilities/Breadcrumb.svelte';

	export let data: PageData;
	export let errors: Errors;

	if (errors) {
		console.log('ERRORS', errors);
	}

	let { season_details } = data;
	let tv_id = $page.params.id;
</script>

<Breadcrumb title={season_details.name} />
<Season {season_details} {tv_id} />
