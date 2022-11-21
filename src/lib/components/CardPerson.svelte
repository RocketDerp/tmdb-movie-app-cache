<script lang="ts">
	import ImageLoader from '$lib/Image/ImageLoader.svelte';
	import DummyPerson from '$lib/svgs/DummyPerson.svelte';
	import { goto } from '$app/navigation';

	export let datum: PersonResult;
	const IMAGE_API = 'https://image.tmdb.org/t/p/w500';
</script>

<section id="person-card">
	<button
		id="card"
		on:click|preventDefault={() => goto(`/person/${datum.id}`)}
		class="after:neumorph after:hover:neumorphhover bg-skin-base relative my-0.5 w-44 xl:my-2 xl:h-[416px] xl:w-60 after:xl:rounded-lg"
	>
		<div class=" text-skin-base xl:rounded-lg">
			<div class="xl:h-90 h-[264px]">
				{#if datum.profile_path === null}
					<div class="xl:h-90 flex h-[264px] w-44 xl:w-60 xl:rounded-t-lg">
						<DummyPerson />
					</div>
				{:else}
					<ImageLoader
						klass="oject-cover w-44 h-[264px] xl:w-60 xl:h-90 xl:rounded-t-lg"
						src={IMAGE_API + datum.profile_path}
						alt={datum.name}
					/>
				{/if}
			</div>
			<div class=" flex h-12 w-44 content-center p-2 xl:w-60">
				<h6
					class="text-skin-base flex w-40 items-center justify-center overflow-hidden overflow-ellipsis whitespace-nowrap text-sm xl:w-52 xl:text-lg"
				>
					{datum.name}
				</h6>
			</div>
		</div>
	</button>
</section>

<style>
	#card::after {
		content: '';
		display: block;
		height: 100%;
		position: absolute;
		top: 0;
		width: 100%;
	}
</style>
