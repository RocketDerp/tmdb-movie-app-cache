<script lang="ts">
	import { goto } from '$app/navigation';
	import Home from '$lib/svgs/HomeSvg.svelte';

	function toggleHome() {
		goto('/');
	}
</script>

<!-- Home Icon -->
<div id="HomeTab" class="flex flex-row items-center">
	<button
		on:click|preventDefault={toggleHome}
		aria-label="home"
		class=" btn morph btn-fill h-9 w-9 p-1"
		href="/"
	>
		<Home />
	</button>
</div>
