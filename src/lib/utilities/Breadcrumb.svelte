<script lang="ts">
	import { page } from '$app/stores';
	import Home from '$lib/svgs/HomeSvg.svelte';
	export let title: string;
</script>

<nav
	id="breadcrumb"
	class=" text-skin-base bg-skin-primary fill-inverted mt-4 flex min-h-[52px] items-center sm:mb-2 xl:rounded-2xl"
>
	<a
		class="breadcrumbs__item hover:fill-selected before: bg-skin-primary after:bg-skin-primary  ml-1 pl-0 sm:ml-4"
		aria-label="home"
		href={`/tv/${$page.params.id}`}
	>
		<div
			class="neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover h-8 w-8 p-1"
		>
			<Home />
		</div>
	</a>
	{#if $page.params.episode_number}
		<div
			class=" text-skin-inverted hover:text-skin-selected breadcrumbs__item before:bg-skin-primary after:bg-skin-primary whitespace-nowrap "
		>
			<a
				aria-label="home"
				href={`/seasons/${$page.params.id}/${$page.params.season_number}`}
				class="neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover px-2 py-1"
			>
				<span>Season {$page.params.season_number}></span>
			</a>
		</div>
		<div
			class="text-skin-inverted  breadcrumbs__item before: bg-skin-primary after:bg-skin-primary"
		>
			<span>Episode {$page.params.episode_number} {title}</span>
		</div>
	{:else}
		<div
			class="text-skin-inverted  breadcrumbs__item before: bg-skin-primary after:bg-skin-primary"
		>
			<span>Season {$page.params.season_number} {title}</span>
		</div>
	{/if}
</nav>

<style>
	.breadcrumbs__item {
		padding-top: 0.75em;
		padding-right: 0.75em;
		padding-bottom: 0.75em;
		padding-left: 1.25em;
		position: relative;
		text-decoration: none;
	}
	.breadcrumbs__item:first-child {
		padding-left: 0px;
	}

	.breadcrumbs__item:after,
	.breadcrumbs__item:before {
		bottom: 0;
		clip-path: polygon(50% 50%, -50% -50%, 0 100%);
		content: '';
		left: 100%;
		position: absolute;
		top: 0;
		width: 1em;
		z-index: 1;
	}

	.breadcrumbs__item:before {
		background: red;
		margin-left: 1px;
	}
</style>
