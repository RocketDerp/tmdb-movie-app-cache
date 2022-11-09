<script>
	import { theme } from '$lib/stores/store';
	import { toggleTheme } from '$lib/components/Header/Right/toggleTheme';
	import Sun from '$lib/svgs/Sun.svelte';
	import Moon from '$lib/svgs//Moon.svelte';
</script>

<section id="Region" class="xs:pr-3 pr-1">
	<button
		class=" text-skin-inverted hover:text-skin-selected neumorph hover:neumorphhover dark:neumorphdark 
					dark:hover:neumorphhover inline-flex h-8 min-w-[32px] items-center justify-center 
					rounded-[3px] align-middle xl:pl-2"
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
