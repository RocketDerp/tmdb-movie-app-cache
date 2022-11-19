<script lang="ts">
	export let tv_details: TvType;
	export let tv_id: number;
	const IMAGE_API = 'https://www.themoviedb.org/t/p/original';
</script>

<section id="Seasons">
	<div
		class="text-skin-base bg-skin-primary mx-auto mb-6 max-w-7xl pt-1 pb-1 xl:mt-5 xl:mb-10 xl:rounded-2xl xl:pl-5"
	>
		<h4 class="pb-2">Season Information</h4>
		{#each tv_details.seasons as episode}
			<div class=" bg-skin-primary morph m-4 flex flex-col rounded-lg p-2 xl:flex-row">
				<a
					href={`/seasons/${tv_id}/${episode.season_number}`}
					class="text-skin-base flex flex-col xl:flex-row xl:rounded-lg"
				>
					<div
						class="mx-auto flex max-h-full max-w-full xl:m-0 xl:h-60 xl:w-40 xl:flex-none xl:items-start"
					>
						<img
							class="xl: flex h-60 items-start xl:w-40"
							src={episode.poster_path ? IMAGE_API + episode.poster_path : '/default.jpg'}
							alt="episode"
						/>
					</div>
					<div class=" ml-2 block justify-self-center xl:justify-start">
						<h4>{episode.name}</h4>
						<h6>Air Date: {episode.air_date}</h6>
						<h6>Overview:</h6>
						<h6 class=" text-skin-muted mb-4 flex-1 pr-8">{episode.overview}</h6>
					</div>
				</a>
			</div>
		{/each}
	</div>

	<!-- <pre>{JSON.stringify(tv_details, null, 2)}</pre> -->
	<!--   
 
    {#each Object.entries(tv_details) as [key, value]}
        {#if typeof {key}==='object'}
             {#each Object.entries[key] as [key1, value1]}
            <h1>OBJECT IN OBJECT</h1>
            <h4>{key}</h4>
            <p>{value}</p>
            {/each}

        {:else}
            <h4>{key}</h4>
            <p>{value}</p>
            {/if}
    {/each}
    <p>First Air Date {tv_details.first_air_date}</p>
    <p>Last Air Date {tv_details.last_air_date}</p>
    <p>Status {tv_details.status}</p> -->
</section>
