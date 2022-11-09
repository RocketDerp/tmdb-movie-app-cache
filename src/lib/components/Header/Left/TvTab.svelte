<script lang="ts">
	import { goto } from '$app/navigation';
	import ShowSvg from '$lib/svgs/ShowSvg.svelte';

	function toggleTv() {
		goto('/trending/tv');
	}
</script>

<!-- TV Icon -->
<div class="xs:pl-3 pl-1 ">
	<div class="group relative z-50 inline-block">
		<button
			aria-label="TV Shows"
			on:click|preventDefault={toggleTv}
			class="text-skin-inverted hover:text-skin-selected neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover inline-flex 
        h-8 min-w-[32px] items-center justify-center rounded-[3px] py-1 px-2 align-middle"
		>
			<span>
				<ShowSvg />
			</span>
			<span class="mx-2 hidden xl:block">Tv</span>
		</button>
	</div>
</div>
