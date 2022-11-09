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
		class=" text-skin-inverted hover:text-skin-selected neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover 
				inline-flex items-center rounded-[3px] border-none p-[2px]"
		href="/"
	>
		<div class="fill-inverted hover:fill-selected h-8 w-8">
			<Home />
		</div>
	</button>
</div>
