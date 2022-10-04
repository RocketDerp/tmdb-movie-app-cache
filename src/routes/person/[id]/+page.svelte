<script lang="ts">
	import Person from '$lib/pages/MediaPerson.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	let { person } = data;
</script>

<Person {person} />
