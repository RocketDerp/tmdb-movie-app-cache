<script lang="ts">
	import Selector from '$lib/components/Header/Selector.svelte';
	import { goto } from '$app/navigation';
	import Home from '$lib/svgs/HomeSvg.svelte';
	import Search from '$lib/components/Header/Search.svelte';

	function toggleHome() {
		goto('/');
	}
</script>

<header class="bg-skin-primary fixed top-0 z-50 h-12 w-full">
	<div class="mx-auto flex h-12 max-w-7xl items-center justify-between pt-1 pl-2 pr-1 ">
		<div class="flex flex-row items-center">
			<button
				on:click|preventDefault={toggleHome}
				aria-label="home"
				class=" text-skin-inverted hover:text-skin-selected neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover inline-flex 
				items-center rounded-[3px] border-none p-[2px]"
				href="/"
			>
				<div class="fill-inverted hover:fill-selected h-8 w-8">
					<Home />
				</div>
			</button>
			<Selector />
		</div>
		<Search />
	</div>
</header>
