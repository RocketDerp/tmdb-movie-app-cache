<script lang="ts">
	import MovieList from '$lib/pages/ListMovie.svelte';
	import AllList from './ListAll.svelte';
	import TvList from '$lib/pages/ListTv.svelte';
	import PersonList from '$lib/pages/ListPerson.svelte';
	import InfiniteScroll from '$lib/utilities/InfiniteScroll.svelte';

	export let media_data: AllResult[] | MovieResult[] | ShowResult[] | PersonResult[];
	export let total_pages = 1;
	export let genres: number | undefined = undefined;
	export let searching: string | undefined = undefined;
	export let media_type: MediaType;
	export let network: string | undefined = undefined;

	let movie_data: MovieResult[] = [];
	let tv_data: ShowResult[] = [];
	let person_data: PersonResult[] = [];
	let all_data: AllResult[] = [];
	if (media_type === 'movie') {
		movie_data = media_data as MovieResult[];
	}

	if (media_type === 'tv') {
		tv_data = media_data as ShowResult[];
	}

	if (media_type === 'person') {
		person_data = media_data as PersonResult[];
	}

	if (media_type === 'all') {
		all_data = media_data as AllResult[];
	}

	let current_page = 1;

	async function moreData() {
		let res: Response;
		if (searching) {
			res = await fetch(`../../api/postSearch/${media_type}/${searching}/${current_page}`);
		} else if (network) {
			res = await fetch(`../../api/postNetwork/${media_type}/${network}/${current_page}`);
		} else if (genres === undefined) {
			res = await fetch(`../api/postShow/${media_type}/${current_page}`);
		} else {
			res = await fetch(`../../api/postShowGenre/${media_type}/${genres}/${current_page}`);
		}

		const res_results = await res.json();

		if (media_type === 'movie') {
			movie_data = [...movie_data, ...res_results];
		}

		if (media_type === 'tv') {
			tv_data = [...tv_data, ...res_results];
		}

		if (media_type === 'person') {
			person_data = [...person_data, ...res_results];
		}

		if (media_type === 'all') {
			all_data = [...all_data, ...res_results];
		}
	}

	function loadMorePages() {
		current_page++;
		moreData();
	}
</script>

<section id="main" class="h-full">
	<!-- <PageTitle /> -->

	{#if media_type === 'all'}
		<AllList {all_data} />
	{:else if media_type === 'person'}
		<PersonList {person_data} />
	{:else if media_type === 'movie'}
		<MovieList {movie_data} />
	{:else if media_type === 'tv'}
		<TvList {tv_data} />
	{/if}

	{#if current_page < total_pages}
		<InfiniteScroll on:loadMore={() => loadMorePages()} />
	{/if}
</section>
