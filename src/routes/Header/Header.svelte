<script lang="ts">
	import Left from './Left/LeftNav.svelte';
	import Right from './Right/RightNav.svelte';
</script>

<header
	id="header"
	class="bg-skin-base text-skin-base fixed top-0 z-50 h-12 w-full
	shadow-[0_3px_6px_-2px_#bbb] dark:shadow-[0_3px_6px_-2px_rgb(21_5_5)]"
>
	<div class="xs:pl-2 xs:pr-1 mx-auto flex h-12 max-w-7xl items-center justify-between">
		<Left />
		<Right />
	</div>
</header>
