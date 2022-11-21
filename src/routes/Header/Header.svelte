<script lang="ts">
	import Left from './Left/LeftNav.svelte';
	import Right from './Right/RightNav.svelte';
</script>

<header id="header" class="bg-skin-base text-skin-base shadow-bottom fixed top-0 z-50 h-12 w-full">
	<div class="xs:pl-2 xs:pr-1 mx-auto flex h-12 max-w-7xl items-center justify-between">
		<Left />
		<Right />
	</div>
</header>
