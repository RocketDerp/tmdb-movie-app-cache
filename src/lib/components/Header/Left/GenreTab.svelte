<script lang="ts">
	import Genre from '$lib/components/Header/Left/Genre.svelte';
	import GenreSvg from '$lib/svgs/GenreSvg.svelte';
</script>

<!-- Genre Icon + dropdown -->
<div class="xs:pl-3 pl-1 ">
	<div class="group relative z-50 inline-block">
		<button
			aria-label="Genres"
			class=" text-skin-inverted hover:text-skin-selected neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover inline-flex 
        h-8 min-w-[32px] items-center justify-center rounded-[3px] py-1 px-2 align-middle"
		>
			<span>
				<GenreSvg />
			</span>
			<span class="mx-2 hidden xl:block">Genres</span>
		</button>
		<ul
			class="bg-skin-primary text-skin-base fixed left-0 hidden h-[80%] overflow-y-auto overflow-x-hidden rounded group-hover:block xl:absolute xl:min-h-[85vh]"
		>
			<Genre />
		</ul>
	</div>
</div>
