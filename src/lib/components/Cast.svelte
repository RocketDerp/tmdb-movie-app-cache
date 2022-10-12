<script lang="ts">
	import CarouselPerson from './CarouselPerson.svelte';
	export let cast_details: CastType[] = [];
	export let title: string;
</script>

{#if cast_details?.length}
	<section
		id="people"
		class="bg-skin-primary xs:pl-2 mx-auto max-w-7xl pl-0 pt-1 pb-5 sm:mt-2 sm:pl-0 md:pl-5 xl:rounded-2xl"
	>
		<h3
			class="text-skin-base flex justify-center text-2xl font-bold xl:my-5 xl:inline-block xl:justify-start"
		>
			{title}
		</h3>
		<div
			class="relative flex flex-wrap justify-center sm:flex-nowrap sm:justify-start sm:overflow-y-hidden"
		>
			{#each cast_details as person}
				<CarouselPerson {person} />
			{/each}
		</div>
	</section>
{/if}
