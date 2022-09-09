<script lang="ts">
	import CarouselPerson from './CarouselPerson.svelte';
	export let cast_details: CastType[] = [];
</script>

{#if cast_details.length}
	<section
		id="people"
		class="my-2 pt-1 mx-auto max-w-7xl xl:mt-5 mb-10 bg-skin-primary xl:pl-5 pb-5 xl:rounded-2xl"
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
				<CarouselPerson
					profile_path={person?.profile_path || ''}
					id={person.id}
					name={person.name}
					role={person.character}
				/>
			{/each}
		</div>
	</section>
{/if}
