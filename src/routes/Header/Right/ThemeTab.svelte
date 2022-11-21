<script>
	import { theme } from '$lib/stores/store';
	import { toggleTheme } from './toggleTheme';
	import Sun from '$lib/svgs/Sun.svelte';
	import Moon from '$lib/svgs//Moon.svelte';
	import BloodDrop from '$lib/svgs/BloodDrop.svelte';
</script>

<section id="Theme" class="xs:pr-3 pr-1">
	<div class="group relative z-50 inline-block">
		<button
			class=" btn morph group h-8 min-w-[32px] justify-center align-middle"
			aria-label="Toggle Theme"
			on:click|preventDefault={() => {
				toggleTheme(theme, $theme);
			}}
		>
			{#if $theme.mode === 'light'}
				<span
					class="group-hover:stroke-selected group-hover:fill-selected block h-5 w-5 fill-[#d52b1e] stroke-[#d52b1e]"
				>
					<Sun />
				</span>
			{:else if $theme.mode === 'dark'}
				<span class="btn-fill group-hover:stroke-selected group-hover:fill-selected h-5 w-5">
					<Moon />
				</span>
			{:else if $theme.mode === 'blood'}
				<span class="h-5 w-5 group-hover:stroke-[#e22]"> <BloodDrop /> </span>
			{/if}
		</button>
	</div>
</section>
