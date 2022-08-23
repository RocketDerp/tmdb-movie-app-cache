<script lang="ts">
	import ImageLoader from '$lib/Image/ImageLoader.svelte';

	export let image_path: string;
	export let image_title: string;

	let small_image = `https://image.tmdb.org/t/p/w185${image_path}`;
	let standard_image = `https://image.tmdb.org/t/p/w300${image_path}`;
</script>

<ImageLoader
	klass="object-cover w-44 h-[264px] xl:w-60 xl:h-90 xl:rounded-t-lg  text-skin-muted "
	src={standard_image}
	srcset="{small_image} 185w, {standard_image} 300w"
	sizes="	(max-width:1280px) 185px, 300px"
	alt={image_title}
/>

<!-- to test on chrome resize screen, right click on refresh button, 'Empty cache and hard reload' -->
