<script lang="ts">
	import HomeTab from './HomeTab.svelte';
	import MovieTab from './MovieTab.svelte';
	import TvTab from './TvTab.svelte';
	import PersonTab from './PersonTab.svelte';
	import GenreTab from './GenreTab.svelte';
	import NetworkTab from './NetworkTab.svelte';
</script>

<section id="left" class="flex flex-row items-center">
	<HomeTab />
	<MovieTab />
	<TvTab />
	<PersonTab />
	<GenreTab />
	<NetworkTab />
</section>
