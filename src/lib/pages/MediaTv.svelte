<script lang="ts">
	import ProgressBar from '$lib/svgs/ProgressBar.svelte';
	import Modal from '$lib/utilities/Modal.svelte';
	import Cast from '$lib/components/Cast.svelte';
	import Seasons from '$lib/utilities/Seasons.svelte';
	import Watchers from '$lib/components/Watchers.svelte';

	import { browser } from '$app/environment';

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
	class="bg-contain bg-right-top bg-no-repeat text-white md:mt-2 xl:rounded-2xl"
	style="background-image: url({IMAGE_API}original/{tv_details.backdrop_path})"
>
	<div
		class="bg-gradient-to-r xl:rounded-2xl"
		style="background-image: linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%)"
	>
		<div
			class="mx-auto grid max-w-7xl px-10 py-8 md:grid-cols-[20rem_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] md:rounded-2xl"
		>
			<div class="col-start-1 col-end-2 ">
				<img
					class="md:h-120 mx-auto h-96 w-64 overflow-hidden rounded-2xl md:w-80"
					src={tv_details.poster_path
						? IMAGE_API + 'w500' + tv_details.poster_path
						: '/default.jpg'}
					alt="movie poster"
				/>
			</div>
			<div class="flex flex-wrap content-start md:col-start-2 md:col-end-5 md:pl-10">
				<div class="mt-6 mb-6 flex w-full flex-wrap md:mt-0">
					<h4 class="w-full md:text-4xl">
						{tv_details.name}
						<span class="ml-1 text-lg text-white md:text-4xl">
							{tv_details ? tv_details.first_air_date.substring(0, 4) : ''}
						</span>
					</h4>
					<div class="md:flex">
						<div class="pl-0">
							{'first_air_date' in tv_details ? tv_details.first_air_date : 'No Date Available'}
							<span class="hidden md:inline md:px-2">&#x2022;</span>
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
					class="relative mb-1 flex w-full flex-wrap justify-center md:h-48 md:flex-nowrap md:justify-start md:overflow-y-hidden"
				>
					{#if trailer_details.length > 0}
						{#each trailer_details as trailer}
							<div class="w-56 flex-shrink-0 cursor-pointer pl-2 hover:opacity-80">
								<button on:click={() => showModal(trailer.key, trailer.site)} title={trailer.name}>
									<img src={`https://img.youtube.com/vi/${trailer.key}/0.jpg`} alt="movie poster" />
								</button>
							</div>
						{/each}
					{:else}
						<div class="flex pl-5">
							<p class="ml-4 flex justify-center">No Trailer Available</p>
						</div>
					{/if}
				</div>
				<div class="w-full">
					<div class="text-lg italic opacity-70">{tv_details.tagline}</div>

					<div class="flex items-center justify-between">
						<h4 class="w-full font-semibold">Overview</h4>
						{#if tv_details.vote_average}
							<div class="h-12 w-12 rounded-full bg-black">
								<ProgressBar {percent} />
								<div
									class="relative top-0 left-0 flex h-12 w-12 -translate-y-12 items-center justify-center"
								>
									<p class="text-base text-gray-200">
										{percent}<span class="align-top text-[0.5rem] leading-4">%</span>
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

<Watchers {watchers_details} media="tv" />

<Cast {cast_details} title={'Top Billed Cast'} />

<Modal bind:this={modal} {video_site} {trailer_key} />

{#key tv_details}
	<Seasons {tv_details} {tv_id} />
{/key}

<Cast cast_details={tv_details.credits.crew} title={'Crew'} />

<div class="mb-10" />
