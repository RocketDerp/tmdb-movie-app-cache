<script lang="ts">
	import CardPerson from '$lib/components/CardPerson.svelte';
	export let person_data: PersonResult[];
</script>

<section
	id="person-list"
	class="bg-skin-base mx-auto flex max-w-7xl flex-wrap justify-evenly pb-11 md:pb-7 xl:mt-2 xl:rounded-2xl"
>
	{#each person_data as datum}
		<CardPerson {datum} />
	{/each}
</section>
