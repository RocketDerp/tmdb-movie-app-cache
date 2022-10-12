<script lang="ts">
	export let episode_details: EpisodesType;
	const IMAGE_API = 'https://image.tmdb.org/t/p/w300';
	import CarouselPerson from '$lib/components/CarouselPerson.svelte';

	let cast: EpisodeCast[] = [];
	$: {
		cast = episode_details.credits.cast;
	}
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
{#if cast.length}
	<section
		id="episode cast"
		class="bg-skin-primary xs:pl-2 mx-auto max-w-7xl pl-0 pt-1 pb-5 sm:mt-2 sm:pl-0 md:pl-5 xl:rounded-2xl"
	>
		<h3
			class="text-skin-base flex justify-center text-2xl font-bold xl:my-5 xl:inline-block xl:justify-start"
		>
			Episode Cast
		</h3>
		<div
			class="relative flex flex-wrap justify-center sm:flex-nowrap sm:justify-start sm:overflow-y-hidden"
		>
			{#each cast as person}
				<CarouselPerson
					profile_path={person?.profile_path || ''}
					id={person.id}
					name={person.name}
					role={person.character}
				/>
			{/each}
		</div>
	</section>
{/if}
{#if episode_details.guest_stars.length}
	<section
		id="guest stars"
		class="bg-skin-primary xs:pl-2 mx-auto max-w-7xl pt-1 pb-5 pl-0 sm:mt-2 md:pl-5 xl:rounded-2xl"
	>
		<h3
			class="text-skin-base flex justify-center text-2xl font-bold xl:my-5 xl:inline-block xl:justify-start"
		>
			Guest Stars
		</h3>
		<div
			class="relative flex flex-wrap justify-center sm:flex-nowrap sm:justify-start sm:overflow-y-hidden"
		>
			{#each episode_details.guest_stars as guest_star}
				<CarouselPerson
					profile_path={guest_star?.profile_path || ''}
					id={guest_star.id}
					name={guest_star.name}
					role={guest_star.character}
				/>
			{/each}
		</div>
	</section>
{/if}

{#if episode_details.crew.length}
	<section
		id="crew"
		class="bg-skin-primary xs:pl-2 mx-auto mb-10 max-w-7xl pt-1 pb-5 pl-0 sm:mt-2 md:pl-5 xl:rounded-2xl"
	>
		<h3
			class="text-skin-base flex justify-center text-2xl font-bold xl:my-5 xl:inline-block xl:justify-start"
		>
			Crew
		</h3>
		<div
			class="relative flex flex-wrap justify-center sm:flex-nowrap sm:justify-start sm:overflow-y-hidden"
		>
			{#each episode_details.crew as crew}
				<CarouselPerson
					profile_path={crew?.profile_path || ''}
					id={crew.id}
					name={crew.name}
					role={crew.job}
				/>
			{/each}
		</div>
	</section>
{/if}
<div class="xl:m-10" />
