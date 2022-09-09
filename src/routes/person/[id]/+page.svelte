<script lang="ts">
	import Person from '$lib/pages/MediaPerson.svelte';

	import type { PageData, Errors } from './$types';

	export let data: PageData;
	export let errors: Errors = null;

	if (errors) {
		console.log('ERRORS', errors);
	}

	let { person, knownFor } = data;
</script>

<Person {person} {knownFor} />
