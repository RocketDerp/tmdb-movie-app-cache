<script lang="ts">
	import type { PageData } from './$types';
	const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';
	export let data: PageData;
</script>

<div class="mx-4 mb-12 flex flex-wrap justify-center gap-3 xl:mb-8">
	{#each data.networks as network}
		<a
			href={`/network/${data.media_type}/${network.provider_id}`}
			class="neumorph hover:neumorphhover dark:neumorphdark  dark:hover:neumorphhover flex h-44 w-32 justify-center"
		>
			<div class="flex flex-col items-center pt-2">
				<img class="h-28 w-28" src={IMAGE_API + network.logo_path} alt="network logo" />
				<p class="text-skin-muted p-1 text-center">{network.provider_name}</p>
			</div>
		</a>
	{/each}
</div>
