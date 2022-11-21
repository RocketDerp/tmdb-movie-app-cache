<script lang="ts">
	import TmdbSvg from '$lib/svgs/TmdbSvg.svelte';
</script>

<footer class="bg-skin-base shadow-top fixed bottom-0 z-50 w-full">
	<div class="mx-auto flex max-w-7xl flex-col md:flex-row md:justify-between ">
		<div
			class="mx-auto flex h-6 max-w-7xl flex-row items-center justify-between pl-2 pr-1 md:flex-shrink md:pl-5 lg:pl-7 "
		>
			<div class=" text-skin-inverted flex flex-row items-center text-xs">
				Built by <a
					class=" text-skin-base hover:text-skin-selected pl-1 text-xs"
					href="https:\\athena-designs.com"
					target="_blank"
					rel="external">Wayne Morgan</a
				>
			</div>
		</div>

		<div
			class=" text-skin-inverted flex flex-wrap items-center justify-center text-xs md:flex-grow md:justify-end md:pr-2"
		>
			<p>This product uses the</p>
			<div class="h-[6px] px-2 md:h-[10px]">
				<TmdbSvg />
			</div>
			<p>Api</p>
		</div>
	</div>
</footer>
