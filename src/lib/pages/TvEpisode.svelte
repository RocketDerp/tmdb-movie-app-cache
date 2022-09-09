<script lang="ts">
	export let episode_details: EpisodesType;
	const IMAGE_API = 'https://image.tmdb.org/t/p/w300';
	import CarouselPerson from '$lib/components/CarouselPerson.svelte';
</script>

<section id="episode">
	<div
		class="max-w-7xl mx-auto text-skin-base xl:mt-5 bg-skin-primary xl:pl-0 pt-1 pb-1 xl:rounded-2xl"
	>
		{#if episode_details.id}
			<h4 class=" pl-4">Episode Information</h4>
			<div class=" flex flex-col xl:flex-row m-4 p-2 rounded-lg">
				<div class="flex flex-col xl:flex-row text-skin-base xl:rounded-lg">
					<div
						class="flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-80 xl:h-44 xl:items-start"
					>
						<img
							class="flex xl:w-[300px] xl:h-[169px] items-start bg-cover"
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
						<h6 class=" flex-1 pr-8 text-skin-muted mb-4">{episode_details.overview}</h6>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

{#if episode_details.guest_stars.length}
	<section
		id="guest stars"
		class="my-2 pt-1 mx-auto max-w-7xl xl:mt-5 bg-skin-primary xl:pl-5 pb-5 xl:rounded-2xl"
	>
		<h3
			class="flex justify-center text-2xl font-bold text-skin-base xl:inline-block xl:justify-start xl:my-5"
		>
			Guest Stars
		</h3>
		<div
			class="relative flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden"
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
		class="my-2 pt-1 mx-auto max-w-7xl xl:mt-5 mb-10 bg-skin-primary xl:pl-5 pb-5 xl:rounded-2xl"
	>
		<h3
			class="flex justify-center text-2xl font-bold text-skin-base xl:inline-block xl:justify-start xl:my-5"
		>
			Crew
		</h3>
		<div
			class="relative flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden"
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
