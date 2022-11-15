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

<section id="known-for" class="mx-auto mb-10 mt-4 grid xl:mt-0">
	{#if films}
		<h3 class="mt-2 mb-1 flex justify-center  text-lg font-bold xl:inline-block xl:justify-start">
			Movies
		</h3>
		<div
			class="text-skin-base relative flex flex-wrap justify-center sm:flex-nowrap sm:justify-start sm:overflow-y-hidden"
		>
			{#each films as movie}
				<div
					class="hover:text-skin-selected neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphdarkhover relative m-0.5 mb-2 flex h-60 
					w-[132px]
					flex-shrink-0 justify-center sm:mr-3 sm:rounded-lg"
				>
					<a class="hover:text-skin-selected w-28" href={`/movie/${movie.id}`}>
						<p class="flex items-center justify-center p-1 text-center text-xs">
							{movie.release_date ? movie.release_date.substring(0, 4) : 'Unknown date'}
						</p>
						<ImageLoader
							klass={'object-cover w-28 h-44'}
							src={movie.poster_path ? IMAGE_API + movie.poster_path : '/default.jpg'}
							alt={movie.title}
						/>
						<div class="h-12 w-28 p-[3px]">
							<p class="line-clamp-2 flex items-center justify-center text-center text-xs">
								{movie.title}
							</p>
						</div>
					</a>
				</div>
			{/each}
		</div>
	{/if}
	{#if tv}
		<h3 class="mt-6 mb-1 flex justify-center  text-lg font-bold xl:inline-block xl:justify-start">
			TV
		</h3>
		<div
			class="relative flex flex-wrap justify-center sm:flex-nowrap sm:justify-start sm:overflow-y-hidden"
		>
			{#each tv as show}
				<div
					class="hover:text-skin-selected neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphdarkhover relative m-0.5 mb-2 flex h-60
					w-[132px]
					flex-shrink-0 justify-center sm:mr-3 sm:rounded-lg"
				>
					<a class="w-28 rounded" href={`/tv/${show.id}`}>
						<p class="flex items-center justify-center p-1 text-center text-xs ">
							{show.first_air_date ? show.first_air_date.substring(0, 4) : 'Unknown date'}
						</p>
						<ImageLoader
							klass={'object-cover w-28 h-44 rounded-t'}
							src={show.poster_path ? IMAGE_API + show.poster_path : '/default.jpg'}
							alt={show.name}
						/>
						<div class="h-12 w-28 p-0.5">
							<p class="line-clamp-2 flex items-center justify-center text-center text-xs">
								{show.name}
							</p>
						</div>
					</a>
				</div>
			{/each}
		</div>
	{/if}
</section>
