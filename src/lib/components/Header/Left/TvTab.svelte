<script lang="ts">
	import { goto } from '$app/navigation';
	import ShowSvg from '$lib/svgs/ShowSvg.svelte';

	function toggleTv() {
		goto('/trending/tv');
	}
</script>

<!-- TV Icon -->
<div class="xs:pl-3 flex pl-1 ">
	<div class="relative z-50 inline-block">
		<button
			aria-label="Tv Shows"
			on:click|preventDefault={toggleTv}
			class="btn morph btn-fill h-8 min-w-[32px] justify-center py-1 px-2 align-middle"
		>
			<span class="h-5 w-5"> <ShowSvg /> </span>
			<span class="mx-2 hidden xl:block">TV</span>
		</button>
	</div>
</div>
