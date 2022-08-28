<script>
	import { theme } from '$lib/stores/store';
	import { toggleTheme } from '$lib/stores/theme';
	import Sun from '$lib/svgs/Sun.svelte';
	import Moon from '$lib/svgs//Moon.svelte';
</script>

<div class="flex justify-center w-8 h-8 mr-2 align-middle">
	<button
		class="
		bg-[#e7e7f5] p-[2px] rounded-full p-[2px_4px]					
		neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover"
		aria-label="Toggle Light and Dark mode"
		on:click|preventDefault={() => {
			toggleTheme(theme, $theme);
		}}
	>
		<div
			class="hidden dark:block stroke-inverted fill-inverted hover:fill-selected hover:stroke-selected"
		>
			<Sun />
		</div>
		<div class="dark:hidden fill-inverted hover:fill-selected">
			<Moon />
		</div>
	</button>
</div>

<!-- <style>
	button {
		background: #e7e7f5;
		border: none;
		padding: 2px 4px;
		box-shadow: 1px 1px 2px rgba(163, 177, 198, 0.4), -2px -2px 4px rgba(255, 255, 255, 0.9);
		cursor: pointer;
		border-radius: 9999px;
	}

	button:hover {
		box-shadow: inset 2px 2px 4px rgba(163, 177, 198, 0.9), -2px -2px 4px rgba(255, 255, 255, 0.4);
		filter: brightness(1.05);
	}
</style> -->
