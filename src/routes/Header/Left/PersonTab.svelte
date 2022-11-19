<script lang="ts">
	import { goto } from '$app/navigation';
	import PersonSvg from '$lib/svgs/PersonSvg.svelte';

	function togglePerson() {
		goto('/trending/person');
	}
</script>

<!-- Person Icon -->
<div class="xs:pl-3 flex pl-1 ">
	<div class="group relative z-50 inline-block">
		<button
			aria-label="People"
			on:click|preventDefault={togglePerson}
			class="btn morph btn-fill h-8 min-w-[32px] justify-center py-1 px-2 align-middle"
		>
			<span class=" btn-group-fill h-5 w-5"> <PersonSvg /> </span>
			<span class="mx-2 hidden xl:block">People</span>
		</button>
	</div>
</div>
