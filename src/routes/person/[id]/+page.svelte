<script lang="ts">
	import Person from '$lib/pages/MediaPerson.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	
	let { person, knownFor } = data;
</script>

<Person {person} {knownFor} />
