<script lang="ts">
	import KnownFor from '$lib/components/KnownFor.svelte';
	import DummyPerson from '$lib/svgs/DummyPerson.svelte';

	const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';
	export let person: PersonAppendType;
	let knownFor = person.combined_credits.cast;
</script>

<section id="person" class="md:rounded-2xl mx-auto max-w-7xl md:pb-20 md:mt-5">
	<div class=" grid md:grid-cols-5fr md:grid-rows-auto md:auto-rows-fr">
		<div
			class="md:rounded-2xl bg-skin-primary max-w-[264px] min-w-[264px] w-full md:p-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 mx-auto"
		>
			{#if person.profile_path}
				<img
					class="mt-4 md:mt-0 md:pt-0 w-64 h-96 rounded-2xl mx-auto"
					src={IMAGE_API + person.profile_path}
					alt={person.name}
				/>
			{:else}
				<div class="mt-4 md:pt-0 flex justify-end w-64 h-96 rounded-2xl mx-auto">
					<DummyPerson />
				</div>
			{/if}
			<h4 class="mt-2 w-full text-skin-base text-center mx-auto md:hidden">{person.name}</h4>
			<div class="text-skin-base pl-8 w-full md:p-3">
				<h4 class="md:text-2xl mt-2">Personal Info</h4>
				<h6 class="md:text-lg font-bold mt-4 mb-0.5">Known For</h6>
				<p class="text-skin-muted md:text-base">{person.known_for_department}</p>
				<h6 class="md:text-lg font-bold mt-4 mb-0.5">Gender</h6>
				{#if person.gender === 2}
					<p class="text-skin-muted md:text-base">Male</p>
				{:else if person.gender === 1}
					<p class="text-skin-muted md:text-base">Female</p>
				{:else if person.gender === 3}
					<p class="text-skin-muted md:text-base">Non-Binary</p>
				{/if}
				<h6 class="md:text-lg font-bold mt-4 mb-0.5">Birthdate</h6>
				{#if person.birthday}
					<p class="text-skin-muted md:text-base">{person.birthday}</p>
				{:else}
					<p class="text-skin-muted md:text-base">Unknown</p>
				{/if}
				<h6 class="md:text-lg font-bold mt-4 mb-0.5">Place of Birth</h6>
				{#if person.place_of_birth}
					<p class="text-skin-muted md:text-base">{person.place_of_birth}</p>
				{:else}
					<p class="text-skin-muted md:text-base">Unknown</p>
				{/if}
				{#if person.also_known_as && person.also_known_as.length}
					<h4 class="md:text-lg font-bold mt-4 mb-0.5">Also Known As</h4>
					{#each person.also_known_as as alias}
						<p class="text-skin-muted md:text-base">{alias}</p>
					{/each}
				{/if}
			</div>
		</div>

		<div
			class="bg-skin-primary md:rounded-2xl text-skin-base md:mx-5 md:mb-5
			md:col-start-2 md:col-end-6 md:row-start-1 md:row-end-2"
		>
			<div class="mb-2 md:mb-4 relative md:ml-5 p-3.5 rounded-2xl">
				<h4 class="md:text-2xl hidden md:inline-block">{person.name}</h4>
				<h6 class="md:text-lg font-bold mt-2 mb-0.5">Biography</h6>
				<p class="text-skin-muted md:text-base">{person.biography}</p>
			</div>
		</div>
		<div
			class="bg-skin-primary md:rounded-2xl text-skin-base md:mx-5 
			md:col-start-2 md:col-end-6 md:row-start-2 md:row-end-3"
		>
			<div class="mb-2 md:mb-4 relative md:ml-5 p-3.5 rounded-2xl">
				<h4 class="md:text-2xl">Known For</h4>
				<KnownFor {knownFor} />
			</div>
		</div>
	</div>
</section>
