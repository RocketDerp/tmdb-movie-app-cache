<script lang="ts">
	import MovieMedia from '$lib/pages/MediaMovie.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<MovieMedia movie_details={data.movie_details} />
