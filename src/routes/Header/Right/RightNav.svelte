<script lang="ts">
	import ToggleDarkMode from './ThemeTab.svelte';
	import Region from './RegionTab.svelte';

	import Search from './SearchTab.svelte';
</script>

<section id="right" class="flex flex-row items-center">
	<ToggleDarkMode />
	<Region />
	<Search />
</section>
