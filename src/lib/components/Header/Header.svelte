<script lang="ts">
	import Left from '$lib/components/Header/Left/LeftNav.svelte';
	import Right from '$lib/components/Header/Right/RightNav.svelte';
</script>

<header id="header" class="bg-skin-primary fixed top-0 z-50 h-12 w-full">
	<div class="xs:pl-2 xs:pr-1 mx-auto flex h-12 max-w-7xl items-center justify-between pt-1 ">
		<Left />
		<Right />
	</div>
</header>
