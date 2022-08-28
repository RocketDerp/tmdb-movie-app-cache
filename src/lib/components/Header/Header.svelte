<script lang="ts">
	import Search from '$lib/components/Header/Search.svelte';
	import Selector from '$lib/components/Header/Selector.svelte';
	import { goto } from '$app/navigation';
	import Home from '$lib/svgs/HomeSvg.svelte';

	function toggleHome() {
		goto('/');
	}
</script>

<header class="fixed top-0 z-50 w-full h-12 bg-skin-primary">
	<div class="flex items-center pt-1 justify-between h-12 pl-2 pr-1 mx-auto max-w-7xl pl-2 ">
		<div class="flex flex-row items-center">
			<button
				on:click|preventDefault={toggleHome}
				aria-label="home"
				class=" inline-flex items-center rounded text-skin-inverted hover:text-skin-selected p-[2px] rounded-[3px] border-none 
				neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
				href="/"
			>
				<div class="w-8 h-8 fill-inverted hover:fill-selected">
					<Home />
				</div>
			</button>
			<Selector />
		</div>

		<Search />
	</div>
</header>