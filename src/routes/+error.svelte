<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="text-skin-base text-center mb-16 ">
	<h1>{$page.status}: {$page.error?.message}</h1>
	<h2>Oops</h2>

	<a href="/">Return to the home screen</a>
</div>
