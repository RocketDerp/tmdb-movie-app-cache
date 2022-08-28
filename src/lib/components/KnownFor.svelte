<script lang="ts">
	import ImageLoader from '$lib/Image/ImageLoader.svelte';

	export let knownFor: KnownForType[];

	let films: KnownForType[];
	let tv: KnownForType[];

	const IMAGE_API = 'https://image.tmdb.org/t/p/w300';
	films = knownFor.filter(isMovie);
	tv = knownFor.filter(isTv);

	films.sort((a, b) => (a.release_date > b.release_date ? -1 : 1));
	tv.sort((a, b) => (a.first_air_date > b.first_air_date ? -1 : 1));

	function isMovie(x: { media_type: string }) {
		return x.media_type === 'movie';
	}
	function isTv(x: { media_type: string }) {
		return x.media_type === 'tv';
	}
</script>

<section id="known-for" class="grid mx-auto mb-10 mt-4 xl:mt-0">
	{#if films}
		<h3 class="flex xl:inline-block justify-center xl:justify-start  mt-2 mb-1 text-lg font-bold">
			Movies
		</h3>
		<div
			class="text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"
		>
			{#each films as movie}
				<div
					class="w-[132px] flex justify-center h-60 flex-shrink-0 sm:rounded-lg mb-2 relative m-0.5 sm:mr-3 
					hover:text-skin-selected
					neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
				>
					<a class="w-28 hover:text-skin-selected" href={`/movie/${movie.id}`}>
						<p class="text-xs text-center p-1 flex justify-center items-center">
							{movie.release_date ? movie.release_date.substring(0, 4) : 'Unknown date'}
						</p>
						<ImageLoader
							klass={'object-cover w-28 h-44'}
							src={movie.poster_path ? IMAGE_API + movie.poster_path : '/default.jpg'}
							alt={movie.title}
						/>
						<div class="w-28 h-12 p-[3px]">
							<p class="text-xs text-center flex justify-center items-center line-clamp-2">
								{movie.title}
							</p>
						</div>
					</a>
				</div>
			{/each}
		</div>
	{/if}
	{#if tv}
		<h3 class="flex xl:inline-block justify-center xl:justify-start  mt-6 mb-1 text-lg font-bold">
			TV
		</h3>
		<div
			class="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"
		>
			{#each tv as show}
				<div
					class="w-[132px] flex justify-center h-60 flex-shrink-0 sm:rounded-lg mb-2 relative m-0.5 sm:mr-3
					hover:text-skin-selected
					neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
				>
					<a class="rounded w-28" href={`/tv/${show.id}`}>
						<p class="text-xs p-1 text-center flex justify-center items-center ">
							{show.first_air_date ? show.first_air_date.substring(0, 4) : 'Unknown date'}
						</p>
						<ImageLoader
							klass={'object-cover w-28 h-44 rounded-t'}
							src={show.poster_path ? IMAGE_API + show.poster_path : '/default.jpg'}
							alt={show.name}
						/>
						<div class="w-28 h-12 p-0.5">
							<p class="text-xs text-center flex justify-center items-center line-clamp-2">
								{show.name}
							</p>
						</div>
					</a>
				</div>
			{/each}
		</div>
	{/if}
</section>
