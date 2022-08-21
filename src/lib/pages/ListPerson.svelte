<script lang="ts">
	import PersonCard from '$lib/components/PersonCard.svelte';
	export let person_data: PersonResult[];
</script>

<section
	id="person-list"
	class="flex flex-wrap justify-around mx-auto bg-skin-tertiary max-w-7xl xl:mt-2 xl:rounded-2xl"
>
	{#each person_data as datum}
		<PersonCard {datum} />
	{/each}
</section>
