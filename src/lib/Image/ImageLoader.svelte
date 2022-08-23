<script lang="ts">
	export let src: string;
	export let alt: string;
	export let klass: string;
	export let srcset: string = '';
	export let sizes: string = '';

	import { onMount } from 'svelte';
	import IntersectionObserver from '$lib/Image/IntersectionObserver.svelte';
	import Image from '$lib/Image/Image.svelte';

	let nativeLoading = false;

	// Determine whether to bypass our intersecting check
	onMount(() => {
		if ('loading' in HTMLImageElement.prototype) {
			nativeLoading = true;
		}
	});
</script>

<IntersectionObserver once={true} let:intersecting>
	{#if intersecting || nativeLoading}
		<Image {klass} {alt} {src} {srcset} {sizes} />
	{/if}
</IntersectionObserver>
