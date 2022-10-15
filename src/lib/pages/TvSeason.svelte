<script lang="ts">
	import Cast from '$lib/components/Cast.svelte';
	const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';
	export let season_details: SeasonType;
	export let tv_id: string;
	let cast: CastType[] = [];
	$: {
		cast = season_details.aggregate_credits.cast;
	}
</script>

<section id="season">
	<div
		class="text-skin-base bg-skin-primary mx-auto mb-2 max-w-7xl pt-1 pb-1 xl:mt-5 xl:rounded-2xl xl:pl-5"
	>
		{#if season_details.id}
			<h4 class="pb-2">Season Information</h4>
			{#each season_details.episodes as episode}
				<div
					class=" bg-skin-primary neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover m-4 flex
				flex-col rounded-lg p-2 xl:flex-row"
				>
					<a
						href={`/epi-sode/${tv_id}/${season_details.season_number}/${episode.episode_number}`}
						class="text-skin-base flex flex-col xl:flex-row xl:rounded-lg"
					>
						<div
							class="mx-auto flex max-h-full max-w-full xl:m-0 xl:h-44 xl:w-80 xl:flex-none xl:items-start"
						>
							<img
								class="flex items-start bg-cover xl:h-[169px] xl:w-[300px]"
								src={episode.still_path ? IMAGE_API + episode.still_path : '/default.jpg'}
								alt="season"
							/>
						</div>
						<div class="ml-2 block">
							<h4>{episode.name}</h4>
							<h6>Air Date: {episode.air_date}</h6>
							<h6>Overview:</h6>
							{#if episode.overview}
								<h6 class=" text-skin-muted mb-4 flex-1 pr-8">{episode.overview}</h6>
							{:else}
								<h6 class=" text-skin-muted mb-4 flex-1 pr-8">
									No information currently available
								</h6>
							{/if}
						</div>
					</a>
				</div>
			{/each}
		{/if}
	</div>
</section>

{#if season_details?.aggregate_credits?.cast?.length}
	<Cast cast_details={season_details.aggregate_credits.cast} title={'Season Cast'} />
{/if}

{#if season_details?.aggregate_credits?.guest_stars?.length}
	<Cast cast_details={season_details.aggregate_credits.guest_stars} title={'Season Crew'} />
{/if}

{#if season_details?.aggregate_credits?.crew?.length}
	<Cast cast_details={season_details.aggregate_credits.crew} title={'Season Crew'} />
{/if}

<div class="mb-8 xl:mb-8" />
