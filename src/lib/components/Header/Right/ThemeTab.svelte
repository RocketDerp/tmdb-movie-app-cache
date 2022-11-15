<script>
	import { theme } from '$lib/stores/store';
	import { toggleTheme } from '$lib/components/Header/Right/toggleTheme';
	import Sun from '$lib/svgs/Sun.svelte';
	import Moon from '$lib/svgs//Moon.svelte';
</script>

<section id="Theme" class="xs:pr-3 pr-1">
	<div class="group relative z-50 inline-block">
		<button
			class=" btn morph h-8 min-w-[32px] justify-center align-middle"
			aria-label="Toggle Light and Dark mode"
			on:click|preventDefault={() => {
				toggleTheme(theme, $theme);
			}}
		>
			<span
				class="fill-header stroke-header hover:stroke-selected hover:fill-selected hidden h-5 w-5 dark:block"
			>
				<Sun />
			</span>
			<span class="btn-fill block h-5 w-5 dark:hidden"> <Moon /> </span>
		</button>
	</div>
</section>
