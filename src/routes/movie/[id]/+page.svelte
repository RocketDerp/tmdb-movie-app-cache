<script lang="ts">
	import MovieMedia from '$lib/pages/MediaMovie.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	
	let { movie_details } = data;
</script>

<MovieMedia {movie_details} />
