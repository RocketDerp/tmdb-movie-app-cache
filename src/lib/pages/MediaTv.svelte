<script lang="ts">
	import ProgressBar from '$lib/svgs/ProgressBar.svelte';
	import Modal from '$lib/utilities/Modal.svelte';
	import Cast from '$lib/components/Cast.svelte';
	import Seasons from '$lib/utilities/Seasons.svelte';
	import Watchers from '$lib/components/Watchers.svelte';

	import { browser } from '$app/env';

	export let tv_details: TvAppendType;
	export let tv_id: number;

	let trailer_details: TrailerType[] = tv_details.videos.results;
	let cast_details: CastType[] = tv_details.credits.cast;
	let watchers_details: WatchersType = tv_details['watch/providers'].results;

	let percent = Math.floor(tv_details.vote_average * 10);

	let trailer_key: string;
	let video_site: string;

	const IMAGE_API = 'https://image.tmdb.org/t/p/';

	let modal: { show: () => any };
	function showModal(trailer: string, site: string): void {
		trailer_key = trailer;
		video_site = site;
		modal.show();
	}
	if (browser) {
		window.scrollTo({ top: -1000, behavior: 'smooth' });
	}
</script>

<section
	id="TV Media"
	class="bg-right-top bg-no-repeat bg-contain text-skin-inverted md:mt-2 xl:rounded-2xl"
	style="background-image: url({IMAGE_API}original/{tv_details.backdrop_path})"
>
	<div
		class="bg-gradient-to-r xl:rounded-2xl"
		style="background-image: linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%)"
	>
		<div
			class="grid max-w-7xl md:grid-cols-[20rem_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] px-10 py-8 mx-auto md:rounded-2xl"
		>
			<div class="col-start-1 col-end-2 ">
				<img
					class="w-64 mx-auto overflow-hidden h-96 md:h-120 md:w-80 rounded-2xl"
					src={tv_details.poster_path
						? IMAGE_API + 'w500' + tv_details.poster_path
						: '/default.jpg'}
					alt="movie poster"
				/>
			</div>
			<div class="flex flex-wrap content-start md:col-start-2 md:col-end-5 md:pl-10">
				<div class="flex flex-wrap w-full mt-6 mb-6 md:mt-0">
					<h4 class="w-full md:text-4xl">
						{tv_details.name}
						<span class="ml-1 text-lg md:text-4xl text-skin-inverted">
							{tv_details ? tv_details.first_air_date.substring(0, 4) : ''}
						</span>
					</h4>
					<div class="md:flex">
						<div class="pl-0">
							{'first_air_date' in tv_details ? tv_details.first_air_date : 'No Date Available'}
							<span class="hidden md:px-2 md:inline">&#x2022;</span>
						</div>
						<div>
							{#each tv_details.genres as { id, name }, i}
								<a class="hover:text-skin-selected" href="/genre/tv/{id}">{name}</a>
								{#if i !== tv_details.genres.length - 1}<span class="mx-2">|</span>{/if}
							{/each}
						</div>
					</div>
				</div>
				<div
					class="relative flex flex-wrap justify-center w-full mb-1 md:h-48 md:justify-start md:flex-nowrap md:overflow-y-hidden"
				>
					{#if trailer_details.length > 0}
						{#each trailer_details as trailer}
							<div class="flex-shrink-0 w-56 pl-2 cursor-pointer hover:opacity-80">
								<button on:click={() => showModal(trailer.key, trailer.site)} title={trailer.name}>
									<img src={`https://img.youtube.com/vi/${trailer.key}/0.jpg`} alt="movie poster" />
								</button>
							</div>
						{/each}
					{:else}
						<div class="flex pl-5">
							<p class="flex justify-center ml-4">No Trailer Available</p>
						</div>
					{/if}
				</div>
				<div class="w-full">
					<div class="text-lg italic opacity-70">{tv_details.tagline}</div>

					<div class="flex justify-between items-center">
						<h4 class="w-full font-semibold">Overview</h4>
						{#if tv_details.vote_average}
							<div class="h-12 w-12 rounded-full bg-black">
								<ProgressBar {percent} />
								<div
									class="relative top-0 left-0 -translate-y-12 w-12 h-12 flex justify-center items-center"
								>
									<p class="text-gray-200 text-base">
										{percent}<span class="text-[0.5rem] leading-4 align-top">%</span>
									</p>
								</div>
							</div>
						{/if}
					</div>
					<div class="overview-details">{tv_details.overview}</div>
				</div>
			</div>
		</div>
	</div>
</section>

<Watchers {watchers_details} />

<Cast {cast_details} />

<Modal bind:this={modal} {video_site} {trailer_key} />

{#key tv_details}
	<Seasons {tv_details} {tv_id} />
{/key}