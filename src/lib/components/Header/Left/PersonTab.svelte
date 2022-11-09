<script lang="ts">
	import { goto } from '$app/navigation';
	import PersonSvg from '$lib/svgs/PersonSvg.svelte';

	function togglePerson() {
		goto('/trending/person');
	}
</script>

<!-- Person icon  -->
<div class="xs:pl-3 pl-1 ">
	<div class="group relative z-50 inline-block">
		<button
			aria-label="People"
			on:click|preventDefault={togglePerson}
			class="text-skin-inverted hover:text-skin-selected neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover inline-flex 
        h-8 min-w-[32px] items-center justify-center rounded-[3px] py-1 px-2 align-middle"
		>
			<span class="h-5 w-5">
				<PersonSvg />
			</span>
			<span class="mx-2 hidden xl:block">People</span>
		</button>
	</div>
</div>
