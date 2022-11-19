<script lang="ts">
	import NetworkSvg from '$lib/svgs/Network.svelte';
	import Network from './Network.svelte';
	import { slide } from 'svelte/transition';
	let hovering = 0;
</script>

<!-- Networks Icon -->
<div class="xs:pl-3 pl-1">
	<div class="group relative z-50 inline-block">
		<button
			on:mouseover={() => {
				hovering = 1;
			}}
			on:mouseleave={() => {
				hovering = 0;
			}}
			on:focus
			aria-label="Networks"
			class="btn morph btn-group-fill group-hover:neumorphhover dark:group-hover:neumorphdarkhover group h-8 min-w-[32px]
			justify-center py-1 px-2 align-middle  "
		>
			<span class=" fill-base group-hover:fill-selected h-5 w-5"> <NetworkSvg /> </span>
			<span class="mx-2 hidden xl:block">Networks</span>
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
				class="bg-skin-base text-skin-base absolute w-32 overflow-y-auto overflow-x-hidden rounded group-hover:block"
			>
				<Network />
			</ul>
		{/if}
	</div>
</div>
