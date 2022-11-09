<script>
	import { theme } from '$lib/stores/store';
	import { toggleTheme } from '$lib/components/Header/Right/toggleTheme';
	import Sun from '$lib/svgs/Sun.svelte';
	import Moon from '$lib/svgs//Moon.svelte';
</script>

<section id="Region" class="xs:pr-3 pr-1">
	<button
		class="rounded-2
		neumorph hover:neumorphhover dark:neumorphdark					
		dark:hover:neumorphhover min-w-[32px] bg-[#e7e7f5] p-[2px_4px]"
		aria-label="Toggle Light and Dark mode"
		on:click|preventDefault={() => {
			toggleTheme(theme, $theme);
		}}
	>
		<div
			class="stroke-inverted fill-inverted hover:fill-selected hover:stroke-selected hidden dark:block"
		>
			<Sun />
		</div>
		<div class="fill-inverted hover:fill-selected dark:hidden">
			<Moon />
		</div>
	</button>
</section>
