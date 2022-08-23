<script lang="ts">
	import ImageLoader from '$lib/Image/ImageLoader.svelte';
	import DummyPerson from '$lib/svgs/DummyPerson.svelte';

	export let datum: PersonResult;

	const IMAGE_API = 'https://image.tmdb.org/t/p/w500';
</script>

<section id="person-card" class="w-44 xl:h-[416px] xl:w-60 my-0.5 xl:my-2 bg-skin-bg xl:rounded-lg">
	<a href={`/person/${datum.id}`} class="top-0 right-0 text-skin-base xl:rounded-lg">
		<div class="h-[264px] xl:h-90">
			{#if datum.profile_path === null}
				<div class="w-44 h-[264px] xl:w-60 xl:h-90 xl:rounded-t-lg flex">
					<DummyPerson />
				</div>
			{:else}
				<ImageLoader
					klass="oject-cover w-44 h-[264px] xl:w-60 xl:h-90 xl:rounded-t-lg"
					src={IMAGE_API + datum.profile_path}
					alt={datum.name}
				/>
			{/if}
		</div>
		<div class="p-2 h-12 w-44 xl:w-60 bg-skin-bg flex content-center">
			<h6
				class="w-40 overflow-hidden text-sm xl:text-lg flex items-center justify-center text-textDark xl:w-52 whitespace-nowrap overflow-ellipsis"
			>
				{datum.name}
			</h6>
		</div>
	</a>
</section>
