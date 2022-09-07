<script lang="ts">
	import ImageLoader from '$lib/Image/ImageLoader.svelte';
	import DummyPerson from '$lib/svgs/DummyPerson.svelte';
	export let episode_details: EpisodesType;
	const IMAGE_API = 'https://image.tmdb.org/t/p/w300';
</script>

<section id="episode">
	<div
		class="max-w-7xl mx-auto text-skin-base xl:mt-5 bg-skin-secondary xl:pl-0 pt-1 pb-1 xl:rounded-2xl"
	>
		{#if episode_details.id}
			<h4 class=" pl-4">Episode Information</h4>
			<div class=" bg-skin-primary flex flex-col xl:flex-row m-4 p-2 rounded-lg">
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
	<section id="guest stars">
		<div
			class="max-w-7xl mx-auto text-skin-base xl:mt-5 bg-skin-secondary xl:pl-0 pt-1 pb-1 xl:rounded-2xl"
		>
			<h4 class=" pl-4">Guest Stars</h4>
			<div class=" bg-skin-primary flex flex-col xl:flex-row m-4 p-2 rounded-lg">
				<div
					class="relative flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden"
				>
					{#each episode_details.guest_stars as guest_star}
						<div
							class="w-[132px] flex justify-center h-62 flex-shrink-0 sm:rounded-lg mb-2 relative m-0.5 sm:mr-3 
								hover:text-skin-selected pt-2
								neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
						>
							<a class="w-28 hover:text-skin-selected" href={`/person/${guest_star.id}`}>
								<div class="w-28 h-44">
									{#if guest_star.profile_path}
										<ImageLoader
											klass={'object-cover w-28 h-44'}
											src={IMAGE_API + guest_star.profile_path}
											alt="episode"
										/>
									{:else}
										<div class="flex rounded-t w-28 h-44">
											<DummyPerson />
										</div>
									{/if}
								</div>

								<div class="pt-1">
									<p
										class="flex items-center justify-center font-semibold text-center text-skin-base line-clamp-1 xl:line-clamp-2"
									>
										{guest_star.character}
									</p>
									<p
										class="flex items-center justify-center text-center text-skin-muted line-clamp-1 xl:line-clamp-2"
									>
										{guest_star.name}
									</p>
								</div>
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
{/if}

{#if episode_details.crew.length}
	<section id="crew">
		<div
			class="max-w-7xl mx-auto text-skin-base xl:mt-5 bg-skin-secondary xl:pl-0 pt-1 pb-1 xl:rounded-2xl"
		>
			<h4 class=" pl-4">Crew</h4>
			<div class=" bg-skin-primary flex flex-col xl:flex-row m-4 p-2 rounded-lg">
				<div
					class="relative flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden"
				>
					{#each episode_details.crew as crew}
						<div
							class="w-[132px] flex justify-center h-62 flex-shrink-0 sm:rounded-lg mb-2 relative m-0.5 sm:mr-3 
								hover:text-skin-selected pt-2
								neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
						>
							<a class="w-28 hover:text-skin-selected" href={`/person/${crew.id}`}>
								<div class="w-28 h-44">
									{#if crew.profile_path}
										<ImageLoader
											klass={'object-cover w-28 h-44'}
											src={IMAGE_API + crew.profile_path}
											alt="episode"
										/>
									{:else}
										<div class="flex rounded-t w-28 h-44">
											<DummyPerson />
										</div>
									{/if}
								</div>

								<div class="pt-1">
									<p
										class="flex items-center justify-center font-semibold text-center text-skin-base line-clamp-1 xl:line-clamp-2"
									>
										{crew.name}
									</p>
									<p
										class="flex items-center justify-center text-center text-skin-muted line-clamp-1 xl:line-clamp-2"
									>
										{crew.job}
									</p>
								</div>
							</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
{/if}
<div class="xl:m-10" />
