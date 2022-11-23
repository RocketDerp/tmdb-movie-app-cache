<script>
	import { theme } from '$lib/stores/store';
	import { page } from '$app/stores';
	import { toggleTheme } from './toggleTheme';
	import Sun from '$lib/svgs/Sun.svelte';
	import Moon from '$lib/svgs//Moon.svelte';
	import BloodDrop from '$lib/svgs/BloodDrop.svelte';
	let check = $page.data.theme;
	function changeTheme() {
		toggleTheme(theme, $theme);
		check = $theme.mode;
	}
</script>

<section id="Theme" class="xs:pr-3 pr-1">
	<div class="group relative z-50 inline-block">
		<button
			class=" btn morph h-8 min-w-[32px] justify-center align-middle"
			aria-label="Toggle Theme"
			on:click|preventDefault={changeTheme}
		>
			{#if check === 'light'}
				<span class="fill-base stroke-base hover:stroke-selected hover:fill-selected  h-5 w-5 "
					><Sun /></span
				>
			{/if}
			{#if check === 'dark'}
				<span class=" fill-base stroke-base hover:stroke-selected hover:fill-selected h-5  w-5 ">
					<Moon />
				</span>
			{/if}
			{#if check === 'blood'}
				<span class=" fill-base stroke-base hover:stroke-selected hover:fill-selected  h-5 w-5">
					<BloodDrop />
				</span>
			{/if}
		</button>
	</div>
</section>
