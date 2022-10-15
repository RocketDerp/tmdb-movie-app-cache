<script lang="ts">
	import SrcSet from '$lib/srcSets/SrcSet.svelte';
	import ProgressBar from '$lib/svgs/ProgressBar.svelte';
	export let datum: MovieResult | AllResult;
	let percent = Math.floor(datum.vote_average * 10);
</script>

<section id="flip-card" class="perspective-1000 group my-0.5 w-44 xl:my-2 xl:w-60 xl:rounded-lg">
	<div
		id="flip-card-inner"
		class="transition-transform-6 preserve-3d group-hover:rotate-y-180 relative w-full"
	>
		<div
			id="flip-card-front"
			class="backface-hidden text-skin-base bg-skin-bg top-0 right-0 xl:rounded-lg"
		>
			<div class="xl:h-90 h-[264px]">
				{#if datum.poster_path && datum.title}
					<SrcSet image_path={datum.poster_path} image_title={datum.title} />
				{:else}
					<img
						class="oject-cover xl:h-90 text-skin-muted h-[264px] w-44 xl:w-60  xl:rounded-t-lg "
						src="/default.jpg"
						alt={datum.title}
						loading="lazy"
					/>
				{/if}
			</div>
			<div class="p-2 xl:ml-4">
				<h6
					class="xl:text-md text-skin-base w-40 overflow-hidden overflow-ellipsis whitespace-nowrap text-sm xl:w-52"
				>
					{datum.title}
				</h6>
				<h6 class="text-sm">
					{datum.release_date ? datum.release_date.substring(0, 4) : '-'}
				</h6>
			</div>
			<div
				class="absolute left-1 top-56 h-12 w-12 origin-top-left rounded-full bg-black p-0 xl:top-80"
			>
				<ProgressBar {percent} />
				<div class="absolute top-0 left-[1px] flex h-full w-full items-center justify-center">
					<p class="text-base text-gray-200">
						{percent}<span class="align-top text-[0.5rem] leading-4">%</span>
					</p>
				</div>
			</div>
		</div>
		<a
			class="backface-hidden text-skin-base bg-skin-bg text-decoration-none rotate-y-180 movie-back absolute top-0 bottom-0 right-0 z-10 h-full w-full overflow-auto rounded-lg p-2 text-sm duration-300 ease-in-out"
			href={`/movie/${datum.id}`}
		>
			<h6 class="text-skin-base bg-secondary mt-1 rounded uppercase xl:text-lg">Overview</h6>
			<p class="mt-1 text-sm">{datum.overview}</p>
		</a>
	</div>
</section>
