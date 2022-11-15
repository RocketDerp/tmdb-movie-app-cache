<script lang="ts">
	import Genre from '$lib/components/Header/Left/Genre.svelte';
	import GenreSvg from '$lib/svgs/GenreSvg.svelte';
	import { slide } from 'svelte/transition';
	let hovering = 0;
</script>

<!-- Genre Icon + dropdown -->
<div class="xs:pl-3 pl-1 ">
	<div class="group relative z-50 inline-block">
		<button
			on:mouseover={() => {
				hovering = 1;
			}}
			on:mouseleave={() => {
				hovering = 0;
			}}
			on:focus
			aria-label="Genres"
			class="btn morph btn-group-fill inline-flex h-8 min-w-[32px] justify-center py-1 px-2 align-middle"
		>
			<span class="h-5 w-5"> <GenreSvg /> </span>
			<span class="mx-2 hidden xl:block">Genres</span>
		</button>
		{#if hovering}
			<ul
				on:mouseover={() => {
					hovering = 1;
				}}
				on:mouseleave={() => {
					hovering = 0;
				}}
				on:focus
				transition:slide
				class="bg-skin-header text-skin-header fixed left-0 h-[80%] overflow-y-auto overflow-x-hidden rounded group-hover:block xl:absolute xl:min-h-[85vh]"
			>
				<Genre />
			</ul>
		{/if}
	</div>
</div>
