<script lang="ts">
	import CarouselPerson from '$lib/components/CarouselPerson.svelte';
	const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';
	export let season_details: SeasonType;
	export let tv_id: string;
	let cast: SeasonCast[] = [];
	$: {
		cast = season_details.aggregate_credits.cast;
	}
</script>

{#if cast.length}
	<section
		id="people"
		class="my-2 pt-1 mx-auto max-w-7xl xl:mt-5 mb-10 bg-skin-primary xl:pl-5 pb-5 xl:rounded-2xl"
	>
		<h3
			class="flex justify-center text-2xl font-bold text-skin-base xl:inline-block xl:justify-start xl:my-5"
		>
			Season Cast
		</h3>
		<div
			class="relative flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden"
		>
			{#each cast as person}
				<CarouselPerson
					profile_path={person?.profile_path || ''}
					id={person.id}
					name={person.name}
					role={person.roles[0].character}
				/>
			{/each}
		</div>
	</section>
{/if}

<section id="season">
	<div
		class="max-w-7xl mx-auto text-skin-base xl:mt-5 mb-10 bg-skin-primary xl:pl-5 pt-1 pb-1 xl:rounded-2xl"
	>
		{#if season_details.id}
			<h4 class="pb-2">Season Information</h4>
			{#each season_details.episodes as episode}
				<div
					class=" bg-skin-primary flex flex-col xl:flex-row m-4 p-2 rounded-lg
				neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
				>
					<a
						href={`/episode/${tv_id}/${season_details.season_number}/${episode.episode_number}`}
						class="flex flex-col xl:flex-row text-skin-base xl:rounded-lg"
					>
						<div
							class="flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-80 xl:h-44 xl:items-start"
						>
							<img
								class="flex xl:w-[300px] xl:h-[169px] items-start bg-cover"
								src={episode.still_path ? IMAGE_API + episode.still_path : '/default.jpg'}
								alt="season"
							/>
						</div>
						<div class="ml-2 block">
							<h4>{episode.name}</h4>
							<h6>Air Date: {episode.air_date}</h6>
							<h6>Overview:</h6>
							{#if episode.overview}
								<h6 class=" flex-1 pr-8 text-skin-muted mb-4">{episode.overview}</h6>
							{:else}
								<h6 class=" flex-1 pr-8 text-skin-muted mb-4">
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
