<script lang="ts">
	export let episode_details: EpisodesType;
	const IMAGE_API = 'https://image.tmdb.org/t/p/w300';
	import Cast from '$lib/components/Cast.svelte';

	// let cast: CastType[] = [];
	// $: {
	// 	cast = episode_details.credits.cast;
	// }
</script>

<section id="episode">
	<div class="text-skin-base bg-skin-primary mx-auto max-w-7xl pt-1 pb-1 xl:rounded-2xl xl:pl-0">
		{#if episode_details.id}
			<h4 class=" pl-4">Episode Information</h4>
			<div class=" m-4 flex flex-col rounded-lg p-2 xl:flex-row">
				<div class="text-skin-base flex flex-col xl:flex-row xl:rounded-lg">
					<div
						class="mx-auto flex max-h-full max-w-full xl:m-0 xl:h-44 xl:w-80 xl:flex-none xl:items-start"
					>
						<img
							class="flex items-start bg-cover xl:h-[169px] xl:w-[300px]"
							src={episode_details.still_path
								? IMAGE_API + episode_details.still_path
								: '/default.jpg'}
							alt="episode"
						/>
					</div>

					<div class="ml-2 block">
						<h4>
							Season: {episode_details.season_number} Episode: {episode_details.episode_number}
						</h4>
						<h4>Episode Name: {episode_details.name}</h4>
						<h6>Air Date: {episode_details.air_date}</h6>
						<h6>Overview:</h6>
						<h6 class=" text-skin-muted mb-4 flex-1 pr-8">{episode_details.overview}</h6>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
{#if episode_details?.credits?.cast?.length}
	<Cast cast_details={episode_details.credits.cast} title={'Episode Cast'} />
{/if}

{#if episode_details?.guest_stars?.length}
	<Cast cast_details={episode_details.guest_stars} title={'Guest Stars'} />
{/if}

{#if episode_details?.crew?.length}
	<Cast cast_details={episode_details.crew} title={'Crew'} />
{/if}
<div class="xl:m-10" />
