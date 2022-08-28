<script lang="ts">
	import ImageLoader from '$lib/Image/ImageLoader.svelte';
	import DummyPerson from '$lib/svgs/DummyPerson.svelte';

	export let cast_details: CastType[] = [];

	const IMAGE_API = 'https://image.tmdb.org/t/p/w200/';
</script>

{#if cast_details.length}
	<section
		id="people"
		class="my-2 pt-1 mx-auto max-w-7xl xl:mt-5 mb-10 bg-skin-primary xl:pl-5 xl:rounded-2xl"
	>
		<h3
			class="flex justify-center text-2xl font-bold text-skin-base xl:inline-block xl:justify-start xl:my-5"
		>
			Top Billed Cast
		</h3>
		<div
			class="relative flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden"
		>
			{#each cast_details as person}
				<div
					class="w-[132px] flex justify-center h-62 flex-shrink-0 sm:rounded-lg mb-2 relative m-0.5 sm:mr-3 
							hover:text-skin-selected pt-2
							neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
				>
					<a class="w-28 hover:text-skin-selected" href={`/person/${person.id}`}>
						<div class="w-28 h-44">
							{#if person.profile_path}
								<ImageLoader
									klass={'object-cover w-28 h-44'}
									src={IMAGE_API + person.profile_path}
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
								{person.character}
							</p>
							<p
								class="flex items-center justify-center text-center text-skin-muted line-clamp-1 xl:line-clamp-2"
							>
								{person.name}
							</p>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</section>
{/if}
