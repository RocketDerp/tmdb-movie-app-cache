<script lang="ts">
	import SrcSet from '$lib/srcSets/SrcSet.svelte';
	import ProgressBar from '$lib/svgs/ProgressBar.svelte';
	// const IMAGE_API = 'https://image.tmdb.org/t/p/w300';
	export let datum: MovieResult | AllResult;
	// let image_name = datum.poster_path;
	let percent = Math.floor(datum.vote_average * 10);
</script>

<section id="flip-card" class="group perspective-1000 w-44 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg">
	<div
		id="flip-card-inner"
		class="relative w-full transition-transform-6 preserve-3d group-hover:rotate-y-180"
	>
		<div
			id="flip-card-front"
			class="top-0 right-0 backface-hidden text-skin-base bg-skin-bg xl:rounded-lg"
		>
			{#if datum.poster_path && datum.title}
				<SrcSet image_path={datum.poster_path} image_title={datum.title} />
			{:else}
				<img
					class="oject-cover w-44 h-[264px] xl:w-60 xl:h-90 xl:rounded-t-lg  text-skin-muted "
					src="/default.jpg"
					alt={datum.title}
				/>
			{/if}
			<div class="p-2 xl:ml-4">
				<h6
					class="w-40 overflow-hidden text-sm xl:text-md text-skin-base xl:w-52 whitespace-nowrap overflow-ellipsis"
				>
					{datum.title}
				</h6>
				<h6 class="text-sm">
					{datum.release_date ? datum.release_date.substring(0, 4) : '-'}
				</h6>
			</div>
			<div
				class="absolute origin-top-left h-12 w-12 p-0 rounded-full bg-black left-1 top-56 xl:top-80"
			>
				<ProgressBar {percent} />
				<div class="absolute top-0 left-[1px] w-full h-full flex justify-center items-center">
					<p class="text-gray-200 text-base">
						{percent}<span class="text-[0.5rem] leading-4 align-top">%</span>
					</p>
				</div>
			</div>
		</div>
		<a
			class="absolute top-0 bottom-0 right-0 z-10 w-full h-full p-2 overflow-auto text-sm duration-300 ease-in-out rounded-lg backface-hidden text-skin-base bg-skin-bg text-decoration-none rotate-y-180 movie-back"
			href={`/movie/${datum.id}`}
		>
			<h6 class="mt-1 uppercase rounded xl:text-lg text-skin-base bg-secondary">Overview</h6>
			<p class="mt-1 text-sm">{datum.overview}</p>
		</a>
	</div>
</section>
