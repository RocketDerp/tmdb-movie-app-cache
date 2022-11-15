<script lang="ts">
	import { goto } from '$app/navigation';
	import { tv_genres, movie_genres, selected } from '$lib/stores/store';
	import MovieSvg from '$lib/svgs/MovieSvg.svelte';
	import ShowSvg from '$lib/svgs/ShowSvg.svelte';
</script>

<div class="text-skin-header bg-skin-header h-full w-full">
	<div class="bg-skin-header flex flex-row p-1 ">
		<!-- Movie Genre List  -->
		<div class="bg-skin-header m-1 flex flex-col  p-3">
			<h6 class="text-skin-header flex flex-row">
				<span class="fill-header mr-2 h-6 w-6">
					<MovieSvg />
				</span>Movies
			</h6>

			<ul class="flex flex-col justify-center text-sm ">
				{#each $movie_genres as genre}
					<li class="flex">
						<button
							aria-label={genre.name}
							class="btn morph m-0.5 mb-2 block w-full whitespace-nowrap py-1 px-3"
							on:click|preventDefault={() => {
								$selected = genre.id;
								goto(`/genre/movie/${genre.id}`);
							}}
						>
							{genre.name}
						</button>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Movie Tv List  -->
		<div class="bg-skin-header m-1 flex flex-col  p-3">
			<h6 class="text-skin-header flex flex-row uppercase">
				<span class="fill-header mr-2 h-6 w-6">
					<ShowSvg />
				</span>Tv
			</h6>
			<ul class="flex flex-col justify-center text-sm">
				{#key tv_genres}
					{#each $tv_genres as genre}
						<li class="flex">
							<button
								class="btn morph m-0.5 mb-2 block w-full whitespace-nowrap px-3 py-1"
								class:bg-selected={$selected === genre.id}
								on:click|preventDefault={() => {
									$selected = genre.id;
									goto(`/genre/tv/${genre.id}`);
								}}
							>
								{genre.name}
							</button>
						</li>
					{/each}
				{/key}
			</ul>
		</div>
	</div>
</div>
