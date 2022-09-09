<script lang="ts">
	import MovieMedia from '$lib/pages/MediaMovie.svelte';
	import type { PageData, Errors } from './$types';

	export let data: PageData;
	export let errors: Errors = null;

	if (errors) {
		console.log('ERRORS', errors);
	}
	let { movie_details } = data;
</script>

<MovieMedia {movie_details} />
