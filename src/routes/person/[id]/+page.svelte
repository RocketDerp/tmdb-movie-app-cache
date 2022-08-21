<script lang="ts">
	import Person from '$lib/pages/Person.svelte';

	import type { PageData, Errors } from './$types';

	export let data: PageData;
	export let errors: Errors;

	if (errors) {
		console.log('ERRORS', errors);
	}

	let { person, knownFor } = data;
</script>

<Person {person} {knownFor} />
