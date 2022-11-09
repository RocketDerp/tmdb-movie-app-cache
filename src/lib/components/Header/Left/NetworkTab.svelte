<script lang="ts">
	import NetworkSVG from '$lib/svgs/Network.svelte';
	import Network from '$lib/components/Header/Left/Network.svelte';
</script>

<div class="xs:pl-3 pl-1 ">
	<div class="group relative z-50 inline-block">
		<button
			aria-label="Networks"
			class="text-skin-inverted hover:text-skin-selected neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover inline-flex
        h-8 min-w-[32px] items-center justify-center rounded-[3px] py-1 px-2 align-middle"
		>
			<span>
				<NetworkSVG />
			</span>
			<span class="mx-2 hidden xl:block">Networks</span>
		</button>
		<ul
			class="bg-skin-primary text-skin-base absolute hidden overflow-y-auto overflow-x-hidden rounded group-hover:block"
		>
			<Network />
		</ul>
	</div>
</div>
