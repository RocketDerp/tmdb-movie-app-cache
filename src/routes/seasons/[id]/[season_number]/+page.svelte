<script lang="ts">
	import Season from '$lib/pages/TvSeason.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import Breadcrumb from '$lib/utilities/Breadcrumb.svelte';

	export let data: PageData;
</script>

<Breadcrumb title={data.season_details.name} />
<Season season_details={data.season_details} tv_id={$page.params.id} />
