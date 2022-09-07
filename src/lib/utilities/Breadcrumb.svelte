<script lang="ts">
	import { page } from '$app/stores';
	import Home from '$lib/svgs/HomeSvg.svelte';
	export let title: string;

	console.log($page.params.season_number);
</script>

<section id="breadcrumb" class="flex xl:mt-16  xl:rounded-2xl w-full h-12 bg-skin-primary">
	<div class="flex flex-col md:flex-row text-skin-base text-2xl items-center ml-4">
		<a
			aria-label="home"
			class="h-8 w-8 p-1 fill-inverted hover:fill-selected
			neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
			href={`/tv/${$page.params.id}`}
		>
			<Home />
		</a>
		{#if $page.params.episode_number}
			<div class="flex flex-row">
				<p class="text-sm md:text-xl mx-2 opacity-2">Season</p>
				<p class="text-sm md:text-xl mr-2">{$page.params.season_number}</p>
				<a
					aria-label="home"
					class="text-sm md:text-xl mx-2 opacity-2 text-skin-inverted hover:text-skin-selected
					neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
					href={`/seasons/${$page.params.id}/${$page.params.season_number}`}
					>Season {$page.params.season_number} >
				</a>
			</div>
			<div class="flex flex-row">
				<p class="text-sm md:text-xl mr-2 opacity-2">Episode</p>
				<p class="text-sm md:text-xl mr-2">{$page.params.episode_number}</p>
				<p class="text-sm md:text-xl mr-2">> {title}</p>
			</div>
		{:else}
			<div class="flex flex-row">
				<p class="text-sm md:text-xl mx-2 opacity-2">Season</p>
				<p class="text-sm md:text-xl mr-2">{$page.params.season_number}</p>
				<p class="text-sm md:text-xl mr-2">> {title}</p>
			</div>
		{/if}
	</div>
</section>
