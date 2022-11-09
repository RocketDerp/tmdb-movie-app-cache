<script lang="ts">
	import { goto } from '$app/navigation';
	import { tv_genres, movie_genres, selected } from '$lib/stores/store';
</script>

<div class="text-skin-inverted neumorph dark:neumorphdark h-full w-full">
	<div class="flex flex-row p-1 ">
		<div class="neumorph dark:neumorphdark m-1 flex flex-col  p-3">
			<h6 class="text-skin-base flex flex-row">
				<span class="mr-2">
					<svg
						class="fill-inverted h-6 w-6"
						aria-hidden="true"
						role="img"
						style="vertical-align: -0.125em;"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 24 24"
					>
						<path
							d="M18 11c0-.959-.68-1.761-1.581-1.954C16.779 8.445 17 7.75 17 7c0-2.206-1.794-4-4-4-1.517 0-2.821.857-3.5 2.104C8.821 3.857 7.517 3 6 3 3.794 3 2 4.794 2 7c0 .902.312 1.727.817 2.396A1.994 1.994 0 0 0 2 11v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-2.638l4 2v-7l-4 2V11zm-5-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM6 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM4 19v-8h12l.002 8H4z"
						/>
					</svg>
				</span>Movies
			</h6>
			<div class="justify-center py-0.5" />
			<ul class="flex flex-col justify-center text-sm ">
				{#each $movie_genres as genre}
					<li class="flex">
						<button
							aria-label={genre.name}
							class="hover:bg-skin-primary text-skin-inverted hover:text-skin-selected neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover m-0.5 
							block w-full whitespace-nowrap p-1"
							on:click|preventDefault={() => {
								$selected = genre.id;
								goto(`/genre/movie/${genre.id}`);
							}}
						>
							{genre.name}
						</button>
					</li>
				{/each}
			</ul>
		</div>
		<div class="neumorph dark:neumorphdark m-1 flex flex-col  p-3">
			<h6 class="text-skin-base flex flex-row uppercase">
				<span class="mr-2">
					<svg
						class="fill-inverted h-6 w-6"
						aria-hidden="true"
						role="img"
						style="vertical-align: -0.125em;"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 24 24"
					>
						<path
							d="M21 17H3V5h18m0-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
						/>
					</svg>
				</span>Tv
			</h6>
			<p class="text-skin-inverted justify-center py-0.5" />
			<ul class="flex flex-col justify-center text-sm">
				{#key tv_genres}
					{#each $tv_genres as genre}
						<li class="flex">
							<button
								class="text-skin-inverted hover:text-skin-selected neumorph hover:neumorphhover dark:neumorphdark dark:hover:neumorphhover m-0.5 block
							w-full whitespace-nowrap px-3 py-1"
								class:bg-selected={$selected === genre.id}
								on:click|preventDefault={() => {
									$selected = genre.id;
									goto(`/genre/tv/${genre.id}`);
								}}
							>
								{genre.name}
							</button>
						</li>
					{/each}
				{/key}
			</ul>
		</div>
	</div>
</div>
