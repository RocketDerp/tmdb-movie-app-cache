<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/store';
	import { region } from '$lib/stores/store';
	import Header from './Header/Header.svelte';
	import Footer from './Footer.svelte';
	import type { LayoutData } from './$types';
	import { tv_genres, movie_genres } from '$lib/stores/store';

	export let data: LayoutData;
	$: data, ($tv_genres = data.tv_genre);
	$: data, ($movie_genres = data.movie_genre);

	// let localTheme: ThemeType;

	onMount(() => {
		// We load theme in the <script> tag in layout.ts load, but then also here onMount to setup stores
		if (!('theme' in localStorage)) {
			theme.useLocalStorage();
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				// localTheme = 'dark';
				theme.set({ ...$theme, mode: 'dark' });
			} else {
				// localTheme = 'light';
				theme.set({ ...$theme, mode: 'light' });
			}
		} else {
			theme.useLocalStorage();
			theme.set({ ...$theme });
		}
		if (!('region' in localStorage)) {
			region.useLocalStorage();
			region.set({ ...$region });
		} else {
			region.useLocalStorage();
		}
	});
</script>

<svelte:head>
	<script lang="ts">
		if (!('theme' in localStorage)) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
				document.cookie = 'theme=dark;path=/;SameSite=lax;expires=Fri, 31 Dec 9999 23:59:59 GMT;';
			} else {
				document.documentElement.classList.add('light');
				document.cookie = 'theme=light;path=/;SameSite=lax;expires=Thu, 30 Dec 9999 23:59:59 GMT;';
			}
		} else {
			if (localStorage.getItem('theme')) {
				let currentMode = JSON.parse(localStorage.getItem('theme'));
				document.documentElement.classList.add(currentMode.mode);
			}
		}
	</script>
	<title>TMDB on Sveltekit</title>
</svelte:head>

<main id="core">
	<div class="bg-skin-bg fixed top-0 -z-50 min-h-screen w-full" />

	<Header />
	<Footer />
	<section class="mx-auto mt-12 max-w-7xl sm:mt-[56px]">
		<slot />
	</section>
</main>
