<script lang="ts">
	export let src: string;
	export let alt: string;
	export let klass: string;
	export let srcset: string;
	export let sizes: string;

	import { onMount } from 'svelte';

	let loaded = false;

	let thisImage: HTMLImageElement;

	onMount(() => {
		thisImage.onload = () => {
			loaded = true;
		};
	});
</script>

<img {srcset} {sizes} {src} {alt} class={klass} class:loaded bind:this={thisImage} loading="lazy" />

<style>
	img {
		opacity: 0;
		transition: opacity 1200ms ease-out;
	}
	img.loaded {
		opacity: 1;
	}
</style>
