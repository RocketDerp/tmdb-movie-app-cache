<script lang="ts">
	import ImageLoader from '$lib/Image/ImageLoader.svelte';
	import DummyPerson from '$lib/svgs/DummyPerson.svelte';
	export let person: CastType;
	const IMAGE_API = 'https://image.tmdb.org/t/p/w200/';
</script>

<div
	class="h-62 hover:text-skin-selected morph relative m-0.5 mb-2 flex 
        w-[132px] flex-shrink-0
        justify-center pt-2 sm:mr-3 sm:rounded-lg"
>
	<a class="hover:text-skin-selected w-28" href={`/person/${person.id}`}>
		<div class="h-44 w-28">
			{#if person?.profile_path}
				<ImageLoader
					klass={'object-cover w-28 h-44'}
					src={IMAGE_API + person.profile_path}
					alt="profile"
				/>
			{:else}
				<div class="flex h-44 w-28 rounded-t">
					<DummyPerson />
				</div>
			{/if}
		</div>
		<div class="pt-1">
			<p
				class="text-skin-base line-clamp-1 xl:line-clamp-2 flex items-center justify-center text-center font-semibold"
			>
				{person.name}
			</p>
			{#if person?.character}
				<p class="text-skin-muted xl:line-clamp-2 flex items-center justify-center text-center">
					{person.character}
				</p>
			{:else if person?.job}
				<p class="text-skin-muted  flex items-center justify-center text-center">
					{person.job}
				</p>
			{/if}
		</div>
	</a>
</div>
