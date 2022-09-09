<script lang="ts">
	import ImageLoader from '$lib/Image/ImageLoader.svelte';
	import DummyPerson from '$lib/svgs/DummyPerson.svelte';
	export let id: number;
	export let profile_path = '';
	export let name: string;
	export let role: string;
	const IMAGE_API = 'https://image.tmdb.org/t/p/w200/';
</script>

<div
	class="w-[132px] flex justify-center h-62 flex-shrink-0 sm:rounded-lg mb-2 relative m-0.5 sm:mr-3 
        hover:text-skin-selected pt-2
        neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
>
	<a class="w-28 hover:text-skin-selected" href={`/person/${id}`}>
		<div class="w-28 h-44">
			{#if profile_path}
				<ImageLoader
					klass={'object-cover w-28 h-44'}
					src={IMAGE_API + profile_path}
					alt="profile"
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
				{name}
			</p>
			<p
				class="flex items-center justify-center text-center text-skin-muted line-clamp-1 xl:line-clamp-2"
			>
				{role}
			</p>
		</div>
	</a>
</div>
